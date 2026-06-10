import { World } from '../world'
import svgString from '../svg/level2.svg?raw'
import { Ticker } from 'pixi.js'
import { clamp, combine, dirFromTo, dot, find, getDistance, mean, mul, normalize, getRandomDir } from '../math'
import { Agent } from '../entity/circleBody/agent/agent'
import { roundDir } from '../physics/actionVectors'
import { Player } from '../entity/circleBody/agent/player'
import { Level } from './level'

export class Level2 extends Level {
  chasers0: Agent[] = []
  chasers1: Agent[] = []
  chasers2: Agent[] = []
  wanderers: Agent[] = []

  constructor(world: World) {
    super(world, 2, svgString)
    this.wanderers.push(find(this.monsters, m => m.id == 'monster-1'))
    this.chasers0.push(find(this.monsters, m => m.id == 'monster-2'))
    this.chasers1.push(find(this.monsters, m => m.id == 'monster-3'))
    this.chasers0.push(find(this.monsters, m => m.id == 'monster-4'))
    this.chasers2.push(find(this.monsters, m => m.id == 'monster-5'))
    this.chasers2.push(find(this.monsters, m => m.id == 'monster-6'))
    this.chasers0.push(find(this.monsters, m => m.id == 'monster-7'))
    this.wanderers.push(find(this.rovers, m => m.id == 'rover-1'))
  }

  update(time: Ticker): void {
    super.update(time)
    const evaders: Agent[] = []
    this.chasers0.forEach(agent => this.chase(agent, this.player, 500, 0))
    this.chasers1.forEach(agent => this.chase(agent, this.player, 20, 1))
    this.chasers2.forEach(agent => {
      if (this.player.blade != null) {
        const clear = this.segmentCast([agent.position, this.player.blade.position]).length == 0
        if (clear) {
          evaders.push(agent)
          return
        }
      }
      const distance = getDistance(agent.position, this.player.position)
      const speed = clamp(12, 15, 0.25 * distance)
      this.chase(agent, this.player, speed, 1)
    })
    this.wanderers.forEach(agent => {
      const distance = getDistance(agent.position, this.player.position)
      if (distance > 100 || this.player.blade == null) this.wander(agent, time)
      else evaders.push(agent)
    })
    this.world.evadeBladeBrain.act(evaders, this.player)
  }

  chase(agent: Agent, target: Player, speed = 50, caution = 0): void {
    if (agent.destroyed) return
    agent.targetVelocity = [0, 0]
    if (this.segmentCast([agent.position, target.position]).length === 0) {
      agent.targetVelocity = combine(caution, target.velocity, speed, dirFromTo(agent.position, target.position))
    } else {
      for (const point of target.history) {
        if (this.segmentCast([agent.position, point]).length === 0) {
          agent.targetVelocity = mul(speed, dirFromTo(agent.position, point))
          break
        }
      }
    }
    this.move(agent)
  }

  wander(agent: Agent, time: Ticker): void {
    if (agent.destroyed) return
    this.avoidWalls(agent)
    this.avoidBlades(agent)
    if (5000 * Math.random() < time.deltaMS) this.updateTargetPoint(agent)
    const arrived = getDistance(agent.position, agent.targetPoint) < 2 * agent.radius
    if (arrived) this.updateTargetPoint(agent)
    agent.targetVelocity = mul(30, dirFromTo(agent.position, agent.targetPoint))
    this.move(agent)
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

  avoidBlades(agent: Agent): void {
    this.blades.forEach(blade => {
      if (blade.align === agent.align) return
      const distance = getDistance(agent.position, blade.position)
      if (distance > 100) return
      const blocked = this.segmentCast([agent.position, blade.position]).length > 0
      if (blocked) return
      const dir = getRandomDir()
      const away = dirFromTo(blade.position, agent.position)
      const fleeDir = dot(dir, away) > 0 ? dir : mul(-1, dir)
      const fleePoint = combine(1, agent.position, 100, fleeDir)
      agent.targetPoint = this.segmentCastPoint([agent.position, fleePoint])
    })
  }

  updateTargetPoint(agent: Agent) {
    const randomDir = getRandomDir()
    const rayFactors = this.rayCast(agent.position, randomDir)
    const rayFactor = Math.min(1000, ...rayFactors) * (1 - Math.random() ** 1)
    agent.targetPoint = combine(1, agent.position, rayFactor, randomDir)
  }

  move(agent: Agent) {
    const targetAction = dirFromTo(agent.velocity, agent.targetVelocity)
    agent.action = roundDir(targetAction)
  }
}
