import type { Level } from "./level";
import { clampVec, combine, getMagnitude, mul, project } from "./math";
import { arenaRadius, timeStep } from "./parameters";

export function step(level: Level) {
  level.entities.forEach(entity => entity.preStep())
  level.entities.forEach(entity => {
    entity.velocity = mul(1-entity.drag*timeStep,entity.velocity)
    entity.velocity = combine(1,entity.velocity,timeStep/entity.mass,entity.force)
    entity.position = combine(1,entity.position,timeStep,entity.velocity)
  })
  level.entities.forEach(entity => {
    const dist = getMagnitude(entity.position)
    const maxDist = arenaRadius - entity.radius
    if (dist < maxDist) return
    entity.position = clampVec(entity.position,maxDist)
    const impact = project(entity.velocity, entity.position)
    entity.velocity = combine(1, entity.velocity, -2, impact)
  })
}

// export function collideAgents(level: Level): void {
//   level.entities.forEach(entity0 => {
//     level.entities.forEach(entity1 => {

//     })
//   })
// }