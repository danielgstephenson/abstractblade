import type { Level } from "./level";
import { timeStep } from "./parameters";

export function step(level: Level) {
  level.entities.forEach(entity => entity.preStep())
  level.entities.forEach(entity => {
    entity.vx += entity.ax * entity.movePower * timeStep
    entity.vy += entity.ay * entity.movePower * timeStep
    entity.x += entity.vx * timeStep
    entity.y += entity.vy * timeStep
  })
}