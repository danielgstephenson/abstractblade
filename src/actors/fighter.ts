import { RopeJoint, Vec2 } from 'planck'
import { Actor } from './actor'
import { Torso } from '../features/torso'
import { FighterSummary } from '../summaries/fighterSummary'
import { dirFromTo, getAngleDiff, normalize, rotate, roundDir, vecToAngle } from '../math'
import { Halo } from '../features/halo'
import { Blade } from './blade'
import { BladeCircle } from '../features/bladeCircle'
import { Simulation } from '../simulation'

export class Fighter extends Actor {
  movePower = 10
  maxSpeed = 5
  reach = 10
  deathPoint = new Vec2(0, 0)
  moveDir = new Vec2(0, 0)
  swing = 0
  angle = 0
  spawnPoint = new Vec2(0, 0)
  dead = false
  deathTimer = 0
  team = 1
  stringLength: number
  torso: Torso
  halo: Halo
  blade: Blade
  forecast: Vec2[] = []

  constructor (simulation: Simulation, position: Vec2) {
    super(simulation, {
      type: 'dynamic',
      bullet: true,
      linearDamping: 0,
      fixedRotation: true
    })
    this.label = 'fighter'
    this.body.setPosition(position)
    this.body.setAngularVelocity(0)
    this.simulation.fighters.set(this.id, this)
    this.torso = new Torso(this)
    this.halo = new Halo(this)
    this.blade = new Blade(this)
    this.updateConfiguration()
    this.body.setMassData({
      mass: 1,
      center: new Vec2(0, 0),
      I: 1
    })
    this.stringLength = this.reach - BladeCircle.radius - Torso.radius
    const ropeJoint = new RopeJoint({
      bodyA: this.body,
      bodyB: this.blade.body,
      localAnchorA: new Vec2(0, 0),
      localAnchorB: new Vec2(0, 0),
      maxLength: this.stringLength,
      collideConnected: false
    })
    this.simulation.world.createJoint(ropeJoint)
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
      this.body.setLinearVelocity(Vec2.zero())
    }
    this.applyMove()
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

  postStep (dt: number): void {
    super.postStep(dt)
    if (this.dead) {
      this.deathTimer += dt
    }
    if (this.removed) {
      this.simulation.fighters.delete(this.id)
    }
  }

  respawn (): void {
    this.body.setPosition(this.spawnPoint)
    this.body.setLinearVelocity(new Vec2(0, 0))
    this.blade.body.setPosition(this.spawnPoint)
    this.blade.body.setLinearVelocity(new Vec2(0, 0))
    this.deathTimer = 0
    this.dead = false
    this.updateConfiguration()
  }

  updateConfiguration (): void {
    super.updateConfiguration()
    this.angle = this.getAngle()
    this.swing = this.getSwing()
  }

  getAngle (): number {
    const position = this.body.getPosition()
    const bladePosition = this.blade.body.getPosition()
    const x = Vec2.sub(bladePosition, position)
    return vecToAngle(x)
  }

  getSwing (): number {
    const position = this.body.getPosition()
    const bladePosition = this.blade.body.getPosition()
    const x = Vec2.sub(bladePosition, position)
    const r = x.length()
    if (r === 0) return 0
    const p = rotate(normalize(x), 0.5 * Math.PI)
    const velocity = this.body.getLinearVelocity()
    const bladeVelocity = this.blade.body.getLinearVelocity()
    const v = Vec2.sub(bladeVelocity, velocity)
    return Vec2.dot(v, p) / (r * 2 * Math.PI)
  }

  getAngleError (enemy: Fighter): number {
    const toEnemy = dirFromTo(this.position, enemy.position)
    const toEnemyAngle = vecToAngle(toEnemy)
    return getAngleDiff(toEnemyAngle, this.angle)
  }

  getAttackSwing (enemy: Fighter): number {
    const angleError = this.getAngleError(enemy)
    return this.swing * Math.sign(angleError)
  }

  summarize (): FighterSummary {
    return new FighterSummary(this)
  }

  remove (): void {
    super.remove()
    this.blade.remove()
    this.dead = true
    this.simulation.fighters.delete(this.id)
  }
}
