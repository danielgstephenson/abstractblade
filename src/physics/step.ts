import { add, clampVec, combine, dot, mean, mul, normalize } from '../math'
import { collideCircleCircle, collideCirclePolygon } from './collide'
import { Level } from '../level/level'

export function step(level: Level): void {
  if (level.busy) {
    console.log('level busy')
    return
  }
  if (level.paused) return
  if (level.player.destroyed) return
  const dt = level.timeStep
  level.time += dt
  level.entities.forEach(entity => entity.preStep(dt))
  clear(level)
  level.agents.forEach(agent => {
    if (agent.destroyed) return
    const dir = normalize(agent.action)
    agent.force = combine(1, agent.force, agent.movePower, dir)
  })
  level.blades.forEach(blade => {
    if (blade.destroyed) return
    blade.force = add(blade.force, blade.action)
  })
  level.circleBodies.forEach(circle => {
    if (circle.destroyed) return
    level.boundaries.forEach(boundary => {
      collideCirclePolygon(circle, boundary)
    })
    level.walls.forEach(wall => {
      collideCirclePolygon(circle, wall)
    })
    level.doors.forEach(door => {
      const hit = collideCirclePolygon(circle, door)
      if (hit) door.knock(circle)
    })
    level.circleBodies.forEach(other => {
      if (other.destroyed) return
      if (circle.index <= other.index) return
      collideCircleCircle(circle, other)
    })
  })
  resolve(level, dt)
}

function clear(level: Level): void {
  level.circleBodies.forEach(circle => {
    circle.force = [0, 0]
    circle.impulse = [0, 0]
    circle.shift = [0, 0]
    circle.collisions = []
  })
}

function resolve(level: Level, dt: number): void {
  level.circleBodies.forEach(circle => {
    if (circle.destroyed || circle.static) return
    const normals = circle.collisions.map(c => c.normal)
    const xMean = mean(normals.map(v => v[0]))
    const yMean = mean(normals.map(v => v[1]))
    const normalMean = normalize([xMean, yMean])
    const impactFactor = -(1 + circle.bounce) * circle.mass * dot(circle.velocity, normalMean)
    circle.impulse = combine(1, circle.impulse, impactFactor, normalMean)
    const overlaps = circle.collisions.map(c => c.overlap)
    if (overlaps.length === 0) return
    const maxOverlap = Math.max(...overlaps)
    const factor = circle.collisions.length > 1 ? 1 : 1
    const shift = mul(maxOverlap, normalMean)
    circle.shift = combine(1, circle.shift, factor, shift)
  })
  level.circleBodies.forEach(circle => {
    if (circle.destroyed || circle.static) return
    circle.velocity = mul(1 - circle.drag * dt, circle.velocity)
    circle.velocity = combine(1, circle.velocity, dt / circle.mass, circle.force)
    circle.velocity = combine(1, circle.velocity, 1 / circle.mass, circle.impulse)
    circle.velocity = clampVec(circle.velocity, level.maxSpeed)
    circle.position = combine(1, circle.position, dt, circle.velocity)
    circle.position = combine(1, circle.position, 1, circle.shift)
  })
}
