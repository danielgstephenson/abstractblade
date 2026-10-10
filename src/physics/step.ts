import type { Level } from '../level/level'
import { clampVec, combine, mul } from '../math'
import { maxSpeed, timeStep } from '../parameters'
import { collideOrbs, collideOrbsOrbs, collideOrbsWalls } from './collide'

export function step(level: Level): void {
  level.entities.forEach(entity => entity.preStep())
  level.orbs.forEach(orb => {
    orb.velocity = mul(1 - orb.drag * timeStep, orb.velocity)
    orb.velocity = combine(1, orb.velocity, timeStep / orb.mass, orb.force)
    orb.velocity = clampVec(orb.velocity, maxSpeed)
    orb.position = combine(1, orb.position, timeStep, orb.velocity)
  })
  collideOrbs(level.agents)
  collideOrbs(level.blades)
  collideOrbs(level.rocks)
  collideOrbsOrbs(level.rocks, level.agents)
  collideOrbsOrbs(level.rocks, level.blades)
  collideOrbsWalls(level.orbs, level.walls)
}
