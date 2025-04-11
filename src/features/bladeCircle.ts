import { Circle, Vec2 } from 'planck'
import { Feature } from './feature'
import { Blade } from '../actors/blade'
import { Fighter } from '../actors/fighter'

export class BladeCircle extends Feature {
  static radius = 3.2
  weapon: Blade
  fighter: Fighter
  alive = true

  constructor (blade: Blade) {
    super(blade, {
      shape: new Circle(new Vec2(0, 0), BladeCircle.radius),
      density: 1,
      friction: 0,
      restitution: 0
    })
    this.weapon = blade
    this.fighter = blade.fighter
    this.label = 'blade'
  }
}
