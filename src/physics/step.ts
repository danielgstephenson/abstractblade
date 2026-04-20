import { combine, dot, mean, mul, normalize } from '../math'
import { collideCircleCircle, collideCirclePolygon } from './collide'
import { Simulation } from './simulation'

export function step(simulation: Simulation): void {
  if (simulation.busy) {
    console.log('simulation busy')
    return
  }
  if (simulation.player.destroyed) return
  const dt = simulation.timeStep * simulation.timeScale
  simulation.time += dt
  simulation.entities.forEach(entity => entity.preStep(dt))
  clear(simulation)
  simulation.agents.forEach(agent => {
    if (agent.destroyed) return
    agent.force = combine(1, agent.force, agent.movePower / agent.mass, agent.action)
  })
  resolve(simulation, dt)
  clear(simulation)
  simulation.circleBodies.forEach(circle => {
    if (circle.destroyed) return
    simulation.boundaries.forEach(boundary => {
      collideCirclePolygon(circle, boundary)
    })
    simulation.doors.forEach(door => {
      const hit = collideCirclePolygon(circle, door)
      if (hit) door.knock(circle)
    })
    simulation.circleBodies.forEach(other => {
      if (other.destroyed) return
      if (circle.index <= other.index) return
      collideCircleCircle(circle, other)
    })
  })
  resolve(simulation, dt)
}

function clear(simulation: Simulation): void {
  simulation.circleBodies.forEach(circle => {
    circle.force = [0, 0]
    circle.impulse = [0, 0]
    circle.shift = [0, 0]
    circle.collisions = []
  })
}

function resolve(simulation: Simulation, dt: number): void {
  simulation.circleBodies.forEach(circle => {
    if (circle.destroyed || circle.static) return
    const normals = circle.collisions.map(c => c.normal)
    const xMean = mean(normals.map(v => v[0]))
    const yMean = mean(normals.map(v => v[1]))
    const normalMean = normalize([xMean, yMean])
    const impactSpeed = -Math.max(0, dot(circle.velocity, normalMean))
    circle.impulse = combine(1, circle.impulse, impactSpeed, normalMean)
    const overlaps = circle.collisions.map(c => c.overlap)
    if (overlaps.length === 0) return
    const maxOverlap = Math.max(...overlaps)
    const factor = circle.collisions.length > 1 ? 1 : 1
    const shift = mul(maxOverlap, normalMean)
    circle.shift = combine(1, circle.shift, factor, shift)
  })
  simulation.circleBodies.forEach(circle => {
    if (circle.destroyed || circle.static) return
    circle.velocity = mul(1 - circle.drag * dt, circle.velocity)
    circle.velocity = combine(1, circle.velocity, dt / circle.mass, circle.force)
    circle.velocity = combine(1, circle.velocity, 1 / circle.mass, circle.impulse)
    circle.position = combine(1, circle.position, dt, circle.velocity)
    circle.position = combine(1, circle.position, 1, circle.shift)
  })
}
