import { Level } from './level'
import { World } from '../world'
import svgString from '../svg/level1.svg?raw'
import { Ticker } from 'pixi.js'
import { combine, dirFromTo, dot, getDistance, getRandomDir, mean, mul, normalize } from '../math'
import { Agent } from '../entity/circleBody/agent/agent'
import { roundVector } from '../physics/actionVectors'

export class Level1 extends Level {
  activeAgents: Agent[]

  constructor(world: World) {
    super(world, 1, svgString)
    this.activeAgents = [...this.rovers, ...this.monsters]
    this.activeAgents.forEach(rover => {
      rover.targetVelocity = mul(30, getRandomDir())
    })
  }

  update(time: Ticker): void {
    super.update(time)
    this.activeAgents.forEach(agent => {
      this.think(agent, time)
      this.move(agent)
    })
  }

  think(agent: Agent, time: Ticker): void {
    if (agent.destroyed) return
    this.avoidWalls(agent)
    if (2000 * Math.random() < time.deltaMS) this.updateTargetPoint(agent)
    const arrived = getDistance(agent.position, agent.targetPoint) < 2 * agent.radius
    if (arrived) this.updateTargetPoint(agent)
    agent.targetVelocity = mul(20, dirFromTo(agent.position, agent.targetPoint))
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

  // updateTargetVelocity(agent: Agent, time: Ticker): void {
  //   const player = this.player
  //   const targetAgentSpeed = 20
  //   if (agent.destroyed) return
  //   if (agent.collisions.length > 0) {
  //     const normals = agent.collisions.map(c => c.normal)
  //     const xMean = mean(normals.map(v => v[0]))
  //     const yMean = mean(normals.map(v => v[1]))
  //     const normalMean = normalize([xMean, yMean])
  //     const randomVelocity = mul(targetAgentSpeed, getRandomDir())
  //     const vDot = dot(randomVelocity, normalMean)
  //     agent.targetVelocity = vDot > 0 ? randomVelocity : mul(-1, agent.targetVelocity)
  //     agent.targetVelocity = mul(targetAgentSpeed, normalMean)
  //     return
  //   }
  //   if (2000 * Math.random() < time.deltaMS) {
  //     agent.targetVelocity = mul(targetAgentSpeed, getRandomDir())
  //     return
  //   }
  //   const distance = getDistance(agent.position, player.position)
  //   if (distance < 400 && player.actionTimer < 10) {
  //     const segment = [agent.position, player.position]
  //     const visible = this.segmentCast(segment).length === 0
  //     if (visible) {
  //       const targetDir = dirFromTo(agent.position, player.position)
  //       const movingToPlayer = dot(targetDir, agent.targetVelocity) > 0
  //       if (distance < 15) {
  //         if (movingToPlayer) agent.targetVelocity = mul(targetAgentSpeed, getRandomDir())
  //         return
  //       }
  //       if (distance > 25) {
  //         if (!movingToPlayer) agent.targetVelocity = mul(targetAgentSpeed, getRandomDir())
  //         return
  //       }
  //     }
  //     if (!visible) {
  //       for (const point of player.history) {
  //         const segment = [agent.position, point]
  //         const visible = this.segmentCast(segment).length === 0
  //         if (visible) {
  //           const targetDir = dirFromTo(agent.position, point)
  //           agent.targetVelocity = mul(targetAgentSpeed, targetDir)
  //           return
  //         }
  //       }
  //     }
  //   }
  // }

  move(agent: Agent) {
    const targetAction = dirFromTo(agent.velocity, agent.targetVelocity)
    agent.action = roundVector(targetAction)
  }
}
