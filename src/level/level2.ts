import { Level } from './level'
import { World } from '../world'
import svgString from '../svg/level2.svg?raw'
import { Ticker } from 'pixi.js'
import { combine, dirFromTo, dot, getDistance, getRandomDir, mean, mul, normalize } from '../math'
import { Agent } from '../entity/circleBody/agent/agent'
import { roundVector } from '../simulation/actionVectors'
import { Monster } from '../entity/circleBody/agent/monster'
import { Rover } from '../entity/circleBody/agent/rover'
import { Player } from '../entity/circleBody/agent/player'

export class Level2 extends Level {
  monster1: Monster
  monster2: Monster
  rover1: Rover

  constructor(world: World) {
    super(world, 2, svgString)
    const monster1 = this.monsters.find(m => m.id === 'monster-1')
    if (monster1 == null) throw new Error('monster-1 not found')
    this.monster1 = monster1
    const monster2 = this.monsters.find(m => m.id === 'monster-2')
    if (monster2 == null) throw new Error('monster-2 not found')
    this.monster2 = monster2
    const rover1 = this.rovers.find(r => r.id === 'rover-1')
    if (rover1 == null) throw new Error('rover-1 not found')
    this.rover1 = rover1
  }

  update(time: Ticker): void {
    super.update(time)
    this.wander(this.monster1, time)
    this.chase(this.monster2, this.player)
  }

  chase(agent: Agent, target: Player): void {
    if (agent.destroyed) return
    agent.targetVelocity = [0, 0]
    if (this.segmentCast([agent.position, target.position]).length === 0) {
      agent.targetVelocity = mul(50, dirFromTo(agent.position, target.position))
    } else {
      for (const point of target.history) {
        if (this.segmentCast([agent.position, point]).length === 0) {
          agent.targetVelocity = mul(50, dirFromTo(agent.position, point))
          break
        }
      }
    }
    this.move(agent)
  }

  wander(agent: Agent, time: Ticker): void {
    if (agent.destroyed) return
    this.avoidWalls(agent)
    if (2000 * Math.random() < time.deltaMS) this.updateTargetPoint(agent)
    const arrived = getDistance(agent.position, agent.targetPoint) < 2 * agent.radius
    if (arrived) this.updateTargetPoint(agent)
    agent.targetVelocity = mul(10, dirFromTo(agent.position, agent.targetPoint))
    this.move(agent)
  }

  updateTargetPoint(agent: Agent) {
    const randomDir = getRandomDir()
    const rayFactors = this.rayCast(agent.position, randomDir)
    const rayFactor = Math.min(1000, ...rayFactors) * (1 - Math.random() ** 3)
    agent.targetPoint = combine(1, agent.position, rayFactor, randomDir)
  }

  avoidWalls(agent: Agent) {
    if (agent.collisions.length > 0) {
      const normals = agent.collisions.map(c => c.normal)
      const xMean = mean(normals.map(v => v[0]))
      const yMean = mean(normals.map(v => v[1]))
      const normalMean = normalize([xMean, yMean])
      const randomDir = getRandomDir()
      const awayDir = dot(randomDir, normalMean) > 0 ? randomDir : mul(-1, randomDir)
      const rayfactors = this.rayCast(agent.position, awayDir)
      const rayFactor = Math.random() * Math.min(1000, ...rayfactors)
      agent.targetPoint = combine(1, agent.position, rayFactor, awayDir)
    }
  }

  move(agent: Agent) {
    const targetAction = dirFromTo(agent.velocity, agent.targetVelocity)
    agent.action = roundVector(targetAction)
  }
}
