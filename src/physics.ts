import type { Orb } from './entity/orb'
import type { Level } from './level/level'
import { clampVec, combine, dot, mul, sub } from './math'
import { maxSpeed, timeStep } from './parameters'

export function step(level: Level): void {
  level.entities.forEach(entity => entity.preStep())
  for (const agent of level.agents) {
    if (agent.is_hit()) return
  }
  level.orbs.forEach(orb => {
    orb.velocity = mul(1 - orb.drag * timeStep, orb.velocity)
    orb.velocity = combine(1, orb.velocity, timeStep / orb.mass, orb.force)
    orb.velocity = clampVec(orb.velocity, maxSpeed)
    orb.position = combine(1, orb.position, timeStep, orb.velocity)
  })
  collideOrbs(level.agents)
  collideOrbs(level.blades)
}

export function collideOrbs(orbs: Orb[]): void {
  orbs.forEach(entity0 => {
    orbs.forEach(entity1 => {
      if (entity0.index >= entity1.index) return
      const minDist = entity0.radius + entity1.radius
      const vector = sub(entity1.position, entity0.position)
      const squaredDist = dot(vector, vector)
      if (squaredDist >= minDist * minDist) return
      const dist = Math.sqrt(squaredDist)
      const overlap = minDist - dist
      const normal = mul(1 / dist, vector)
      const relativeVelocity = sub(entity0.velocity, entity1.velocity)
      const impactSpeed = Math.max(0, dot(relativeVelocity, normal))
      const massFactor = 1 / (1 / entity0.mass + 1 / entity1.mass)
      const impulse = mul(impactSpeed * massFactor, normal)
      const shift = mul(0.5 * overlap, normal)
      entity0.position = combine(1, entity0.position, -1, shift)
      entity1.position = combine(1, entity1.position, +1, shift)
      entity0.velocity = combine(1, entity0.velocity, -1, impulse)
      entity1.velocity = combine(1, entity1.velocity, +1, impulse)
    })
  })
}
