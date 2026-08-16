import type { Level } from "./level";
import { clampVec, getMagnitude, project } from "./math";
import { arenaRadius, timeStep } from "./parameters";

export function step(level: Level) {
  level.entities.forEach(entity => entity.preStep())
  level.entities.forEach(entity => {
    entity.vx *= 1 - entity.drag * timeStep
    entity.vy *= 1 - entity.drag * timeStep
    entity.vx += entity.ax * timeStep / entity.mass
    entity.vy += entity.ay * timeStep / entity.mass
    entity.x += entity.vx * timeStep
    entity.y += entity.vy * timeStep
  })
  level.entities.forEach(entity => {
    const pos = [entity.x, entity.y]
    const dist = getMagnitude(pos)
    const maxDist = arenaRadius - entity.radius
    if (dist < maxDist) return
    const clampPos = clampVec(pos,maxDist)
    entity.x = clampPos[0]
    entity.y = clampPos[1]
    const vel = [entity.vx, entity.vy]
    const impact = project(vel, pos)
    entity.vx = vel[0] - 2*impact[0]
    entity.vy = vel[1] - 2*impact[1]
  })
}