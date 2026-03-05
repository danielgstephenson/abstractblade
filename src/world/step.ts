import { combine, mul } from '../math'
import { collideBodyBody, collideBodyPolygon } from './collide'
import { World } from './world'

export function step(world: World): void {
  if (world.busy) {
    console.log('busy')
    return
  }
  if (world.paused) return
  const dt = world.timeStep * world.timeScale
  world.time += dt
  world.bodies.forEach(body => {
    body.force = [0, 0]
    body.impulse = [0, 0]
    body.shift = [0, 0]
  })
  world.entities.forEach(entity => entity.preStep(dt))
  world.agents.forEach(agent => {
    if (agent.dead) return
    agent.force = mul(agent.movePower, agent.action)
  })
  world.bodies.forEach(body => {
    world.boundaries.forEach(boundary => {
      collideBodyPolygon(body, boundary.points)
    })
    world.doors.forEach(door => {
      const hit = collideBodyPolygon(body, door.points)
      if (hit) door.knock(body)
    })
    world.bodies.forEach(other => {
      if (body.index <= other.index) return
      collideBodyBody(body, other)
    })
  })
  world.bodies.forEach(body => {
    body.velocity = mul(1 - body.drag * dt, body.velocity)
    body.velocity = combine(1, body.velocity, dt / body.mass, body.force)
    body.velocity = combine(1, body.velocity, 1 / body.mass, body.impulse)
    body.position = combine(1, body.position, dt, body.velocity)
    body.position = combine(1, body.position, 1, body.shift)
  })
}
