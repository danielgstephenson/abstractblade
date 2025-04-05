import { Circle, Vec2 } from 'planck'
import { Feature } from './feature'
import { Weapon } from '../actors/weapon'
import { Fighter } from '../actors/fighter'

export class Blade extends Feature {
  static radius = 1.5
  weapon: Weapon
  fighter: Fighter
  alive = true

  constructor (weapon: Weapon) {
    super(weapon, {
      shape: new Circle(new Vec2(0, 0), Blade.radius),
      density: 1,
      friction: 0,
      restitution: 0
    })
    this.weapon = weapon
    this.fighter = weapon.fighter
    this.label = 'blade'
  }
}
