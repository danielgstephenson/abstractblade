import { Polygon, Vec2 } from 'planck'
import { Feature } from './feature'
import { Fighter } from '../actors/fighter'

export class Blade extends Feature {
  static hy = 0.19
  static start = 0.9
  static narrow = 5
  static reach = 6
  static vertices = [
    new Vec2(Blade.start, -Blade.hy),
    new Vec2(Blade.narrow, -Blade.hy),
    new Vec2(Blade.reach, 0),
    new Vec2(Blade.narrow, Blade.hy),
    new Vec2(Blade.start, Blade.hy)
  ]

  fighter: Fighter
  alive = true

  constructor (fighter: Fighter) {
    super(fighter, {
      shape: new Polygon(Blade.vertices),
      density: 1,
      friction: 0,
      restitution: 0
    })
    this.fighter = fighter
    this.label = 'blade'
  }
}
