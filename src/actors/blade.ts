import { Vec2 } from 'planck'
import { Actor } from './actor'
import { Fighter } from './fighter'
import { BladeCircle } from '../features/bladeCircle'

export class Blade extends Actor {
  fighter: Fighter
  circle: BladeCircle
  team = 1
  maxSpeed = 6
  forecast: Vec2[] = []

  constructor (fighter: Fighter) {
    super(fighter.simulation, {
      type: 'dynamic',
      bullet: true,
      linearDamping: 0.2,
      fixedRotation: true
    })
    this.fighter = fighter
    this.label = 'weapon'
    this.body.setPosition(fighter.position)
    this.updateConfiguration()
    this.circle = new BladeCircle(this)
    this.body.setMassData({
      mass: 0.1,
      center: new Vec2(0, 0),
      I: 1
    })
  }
}
