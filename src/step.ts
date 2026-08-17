import type { Entity } from "./entity/entity";
import type { Level } from "./level";
import { clampVec, combine, dot, getMagnitude, mul, project, sub } from "./math";
import { arenaRadius, timeStep } from "./parameters";

export function step(level: Level) {
  level.entities.forEach(entity => entity.preStep())
  level.entities.forEach(entity => {
    entity.velocity = mul(1-entity.drag*timeStep,entity.velocity)
    entity.velocity = combine(1,entity.velocity,timeStep/entity.mass,entity.force)
    entity.position = combine(1,entity.position,timeStep,entity.velocity)
  })
  collideEntities(level.entities)
  level.entities.forEach(entity => {
    const dist = getMagnitude(entity.position)
    const maxDist = arenaRadius - entity.radius
    if (dist < maxDist) return
    entity.position = clampVec(entity.position,maxDist)
    const impact = project(entity.velocity, entity.position)
    entity.velocity = combine(1, entity.velocity, -2, impact)
  })
}

export function collideEntities(entities: Entity[]): void {
  entities.forEach(entity0 => {
    entities.forEach(entity1 => {
      if(entity0.index >= entity1.index) return
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