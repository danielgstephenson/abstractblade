import type { Level } from "./level";
import { timeStep } from "./parameters";

export function step(level: Level) {
  console.log('step')
  level.entities.forEach(entity => {
    entity.x += entity.vx * timeStep
    entity.y += entity.vy * timeStep
  })
}