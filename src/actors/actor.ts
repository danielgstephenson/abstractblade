import { BodyDef, Body, Fixture, Vec2 } from 'planck'
import { normalize } from '../math'
import { Simulation } from '../simulation'

export class Actor {
  static count = 0
  simulation: Simulation
  body: Body
  id: string
  label = 'actor'
  removed = false
  position = new Vec2(0, 0)
  velocity = new Vec2(0, 0)
  maxSpeed = Infinity
  angle = 0

  constructor (simulation: Simulation, bodyDef: BodyDef) {
    Actor.count += 1
    this.id = String(Actor.count)
    this.simulation = simulation
    this.body = this.simulation.world.createBody(bodyDef)
    this.body.setUserData(this)
    this.simulation.actors.set(this.id, this)
  }

  getFixtures (): Fixture[] {
    const fixtures = []
    for (let fixture = this.body.getFixtureList(); fixture != null; fixture = fixture.getNext()) {
      fixtures.push(fixture)
    }
    return fixtures
  }

  preStep (dt: number): void {}

  postStep (dt: number): void {
    this.limitSpeed()
    this.updateConfiguration()
    if (this.removed) {
      this.simulation.world.destroyBody(this.body)
      this.simulation.actors.delete(this.id)
    }
  }

  limitSpeed (): void {
    const oldVelocity = this.body.getLinearVelocity()
    const oldSpeed = oldVelocity.length()
    if (oldSpeed > this.maxSpeed) {
      this.velocity = Vec2.mul(this.maxSpeed, normalize(oldVelocity))
      this.body.setLinearVelocity(this.velocity)
    }
  }

  remove (): void {
    this.removed = true
  }

  updateConfiguration (): void {
    this.position = this.body.getPosition()
    this.velocity = this.body.getLinearVelocity()
    this.angle = this.body.getAngle()
  }
}
