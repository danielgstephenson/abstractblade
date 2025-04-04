import { BodyDef, Body, Fixture, Vec2 } from 'planck'
import { Game } from '../game'
import { normalize } from '../math'

export class Actor {
  static count = 0
  game: Game
  body: Body
  id: string
  label = 'actor'
  removed = false
  position = new Vec2(0, 0)
  velocity = new Vec2(0, 0)
  maxSpeed = Infinity
  angle = 0

  constructor (game: Game, bodyDef: BodyDef) {
    Actor.count += 1
    this.id = String(Actor.count)
    this.game = game
    this.body = this.game.world.createBody(bodyDef)
    this.body.setUserData(this)
    this.game.actors.set(this.id, this)
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
      this.game.world.destroyBody(this.body)
      this.game.actors.delete(this.id)
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
