import { combine, mul } from '../math'
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
  simulation.circleBodies.forEach(body => {
    body.force = [0, 0]
    body.impulse = [0, 0]
    body.shift = [0, 0]
  })
  simulation.entities.forEach(entity => entity.preStep(dt))
  simulation.agents.forEach(agent => {
    if (agent.destroyed) return
    agent.force = mul(agent.movePower, agent.action)
  })
  simulation.circleBodies.forEach(body => {
    if (body.destroyed) return
    simulation.boundaries.forEach(boundary => {
      collideCirclePolygon(body, boundary)
    })
    simulation.doors.forEach(door => {
      const hit = collideCirclePolygon(body, door)
      if (hit) door.knock(body)
    })
    simulation.circleBodies.forEach(other => {
      if (other.destroyed) return
      if (body.index <= other.index) return
      collideCircleCircle(body, other)
    })
  })
  simulation.circleBodies.forEach(body => {
    if (body.destroyed || body.static) return
    body.velocity = mul(1 - body.drag * dt, body.velocity)
    body.velocity = combine(1, body.velocity, dt / body.mass, body.force)
    body.velocity = combine(1, body.velocity, 1 / body.mass, body.impulse)
    body.position = combine(1, body.position, dt, body.velocity)
    body.position = combine(1, body.position, 1, body.shift)
  })
}
