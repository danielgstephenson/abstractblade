import { combine, mul } from '../math'
import { collideBodyBody, collideBodyPolygon } from './collide'
import { Simulation } from './simulation'

export function step(simulation: Simulation): void {
  if (simulation.busy) {
    console.log('busy')
    return
  }
  if (simulation.players[0].dead) return
  if (simulation.paused) return
  const dt = simulation.timeStep * simulation.timeScale
  simulation.time += dt
  simulation.bodies.forEach(body => {
    body.force = [0, 0]
    body.impulse = [0, 0]
    body.shift = [0, 0]
  })
  simulation.entities.forEach(entity => entity.preStep(dt))
  simulation.agents.forEach(agent => {
    if (agent.dead) return
    agent.force = mul(agent.movePower, agent.action)
  })
  simulation.bodies.forEach(body => {
    if (body.dead) return
    simulation.boundaries.forEach(boundary => {
      collideBodyPolygon(body, boundary.polygon)
    })
    simulation.doors.forEach(door => {
      const hit = collideBodyPolygon(body, door.polygon)
      if (hit) door.knock(body)
    })
    simulation.bodies.forEach(other => {
      if (other.dead) return
      if (body.index <= other.index) return
      collideBodyBody(body, other)
    })
  })
  simulation.bodies.forEach(body => {
    if (body.dead || body.static) return
    body.velocity = mul(1 - body.drag * dt, body.velocity)
    body.velocity = combine(1, body.velocity, dt / body.mass, body.force)
    body.velocity = combine(1, body.velocity, 1 / body.mass, body.impulse)
    body.position = combine(1, body.position, dt, body.velocity)
    body.position = combine(1, body.position, 1, body.shift)
  })
}
