import { Vec2 } from 'planck'
import { Game } from '../game'
import { Actor } from './actor'
import { Torso } from '../features/torso'
import { FighterSummary } from '../summaries/fighterSummary'
import { normalize } from '../math'
import { Blade } from '../features/blade'
import { Halo } from '../features/halo'

export class Fighter extends Actor {
  movePower = 20
  maxSpeed = 2
  swingPower = 2
  maxSpin = 3
  moveDir = new Vec2(0, 0)
  swingSign = 0
  spawnPoint = new Vec2(0, 0)
  dead = false
  team = 1
  torso: Torso
  blade: Blade
  halo: Halo

  constructor (game: Game, position: Vec2) {
    super(game, {
      type: 'dynamic',
      bullet: true,
      linearDamping: 0,
      angularDamping: 0,
      fixedRotation: false
    })
    this.label = 'fighter'
    this.body.setPosition(position)
    this.body.setAngularVelocity(0)
    this.updateConfiguration()
    this.game.fighters.set(this.id, this)
    this.torso = new Torso(this)
    this.blade = new Blade(this)
    this.halo = new Halo(this)
    this.body.setMassData({
      mass: 1,
      center: new Vec2(0, 0),
      I: 1
    })
  }

  die (): void {
    this.dead = true
  }

  preStep (): void {
    super.preStep()
    this.halo.wallPoints = []
    this.applyMove()
    this.applySwing()
  }

  applyMove (): void {
    this.moveDir = normalize(this.moveDir)
    if (this.moveDir.length() === 0) {
      if (this.velocity.length() < 0.1) {
        this.velocity = Vec2.zero()
        this.body.setLinearVelocity(this.velocity)
        return
      }
      const reverse = Vec2.mul(this.velocity, -5)
      this.moveDir = normalize(reverse)
    }
    const force = Vec2.mul(this.moveDir, this.movePower)
    this.body.applyForce(force, this.body.getPosition())
  }

  applySwing (): void {
    this.swingSign = Math.sign(this.swingSign)
    if (this.swingSign === 0) {
      if (Math.abs(this.spin) < 0.1) {
        this.spin = 0
        this.body.setAngularVelocity(this.spin)
        return
      }
      this.swingSign = -Math.sign(this.spin)
    }
    this.body.applyTorque(this.swingPower * this.swingSign)
  }

  postStep (): void {
    super.postStep()
    if (this.removed) {
      this.game.fighters.delete(this.id)
    }
  }

  respawn (): void {
    this.body.setPosition(this.spawnPoint)
    this.body.setAngle(Math.random() * 2 * Math.PI)
    this.body.setLinearVelocity(new Vec2(0, 0))
    this.body.setAngularVelocity(0)
    this.dead = false
  }

  summarize (): FighterSummary {
    return new FighterSummary(this)
  }

  remove (): void {
    super.remove()
    this.dead = true
    this.game.fighters.delete(this.id)
  }
}
