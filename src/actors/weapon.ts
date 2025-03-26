import { Vec2 } from 'planck'
import { Actor } from './actor'
import { Fighter } from './fighter'
import { Blade } from '../features/blade'

export class Weapon extends Actor {
  fighter: Fighter
  blade: Blade
  team = 1

  constructor (fighter: Fighter) {
    super(fighter.game, {
      type: 'dynamic',
      bullet: true,
      linearDamping: 0.2,
      fixedRotation: true
    })
    this.fighter = fighter
    this.label = 'weapon'
    this.body.setPosition(fighter.position)
    this.updateConfiguration()
    this.blade = new Blade(this)
    this.body.setMassData({
      mass: 0.1,
      center: new Vec2(0, 0),
      I: 1
    })
  }
}
