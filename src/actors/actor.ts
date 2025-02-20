import { BodyDef, Body, Fixture, Vec2 } from 'planck'
import { Game } from '../game'
import { clamp, clampVec } from '../math'

export class Actor {
  static count = 0
  game: Game
  body: Body
  id: string
  label = 'actor'
  removed = false
  maxSpeed = Infinity
  maxSpin = Infinity
  position = new Vec2(0, 0)
  velocity = new Vec2(0, 0)
  angle = 0
  spin = 0

  constructor (game: Game, bodyDef: BodyDef) {
    Actor.count += 1
    this.id = String(Actor.count)
    this.game = game
    this.body = this.game.world.createBody(bodyDef)
    this.body.setUserData(this)
    this.game.actors.set(this.id, this)
    this.updateConfiguration()
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
    this.updateConfiguration()
    if (this.removed) {
      this.game.world.destroyBody(this.body)
      this.game.actors.delete(this.id)
    }
  }

  remove (): void {
    this.removed = true
  }

  updateConfiguration (): void {
    this.position = this.body.getPosition()
    this.velocity = clampVec(this.body.getLinearVelocity(), this.maxSpeed)
    this.body.setLinearVelocity(this.velocity)
    this.angle = this.body.getAngle()
    this.spin = clamp(-this.maxSpin, this.maxSpin, this.body.getAngularVelocity())
    this.body.setAngularVelocity(this.spin)
  }
}
