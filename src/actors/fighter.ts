import { Vec2 } from 'planck'
import { Game } from '../game'
import { Actor } from './actor'
import { Torso } from '../features/torso'
import { FighterSummary } from '../summaries/fighterSummary'
import { normalize, roundDir } from '../math'
import { Blade } from '../features/blade'
import { Halo } from '../features/halo'

export class Fighter extends Actor {
  movePower = 20
  maxSpeed = 6 // 6
  maxSpin = 10
  swingPower = 30 // 1.5
  deathPoint = new Vec2(0, 0)
  moveDir = new Vec2(0, 0)
  swingSign = 0
  spawnPoint = new Vec2(0, 0)
  dead = false
  deathTimer = 0
  team = 1
  torso: Torso
  blade: Blade
  halo: Halo
  reach: number

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
    this.reach = Blade.reach + Torso.radius
  }

  die (deathPoint: Vec2): void {
    if (!this.dead) {
      this.deathPoint = deathPoint
      this.dead = true
      this.deathTimer = 0
    }
  }

  preStep (dt: number): void {
    super.preStep(dt)
    this.halo.wallPoints = []
    if (this.dead) {
      this.moveDir = Vec2.zero()
      this.swingSign = 0
      this.body.setLinearVelocity(Vec2.zero())
    }
    this.applyMove()
    this.applySwing()
  }

  applyMove (): void {
    this.moveDir = normalize(this.moveDir)
    this.moveDir = roundDir(this.moveDir)
    if (this.moveDir.length() === 0) {
      if (this.velocity.length() < 0.01) {
        this.velocity = Vec2.zero()
        this.body.setLinearVelocity(this.velocity)
        return
      }
      const reverse = normalize(Vec2.mul(this.velocity, -5))
      const force = Vec2.mul(this.movePower, reverse)
      this.body.applyForce(force, this.body.getPosition())
      return
    }
    const force = Vec2.mul(this.movePower, this.moveDir)
    this.body.applyForce(force, this.body.getPosition())
  }

  applySwing (): void {
    const stopSign = Math.abs(this.spin) > 1 ? -Math.sign(this.spin) : -this.spin
    this.swingSign = this.swingSign === 0 ? stopSign : Math.sign(this.swingSign)
    this.body.applyTorque(this.swingPower * this.swingSign)
  }

  postStep (dt: number): void {
    super.postStep(dt)
    if (this.dead) {
      this.deathTimer += dt
    }
    if (this.removed) {
      this.game.fighters.delete(this.id)
    }
  }

  respawn (): void {
    this.body.setPosition(this.spawnPoint)
    this.body.setAngle(Math.random() * 2 * Math.PI)
    this.body.setLinearVelocity(new Vec2(0, 0))
    this.body.setAngularVelocity(0)
    this.deathTimer = 0
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
