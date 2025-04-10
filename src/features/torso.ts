import { Circle, Vec2 } from 'planck'
import { Feature } from './feature'
import { Fighter } from '../actors/fighter'

export class Torso extends Feature {
  static radius = 1
  fighter: Fighter
  alive = true

  constructor (fighter: Fighter) {
    super(fighter, {
      shape: new Circle(new Vec2(0, 0), Torso.radius),
      density: 1,
      friction: 0,
      restitution: 0
    })
    this.fighter = fighter
    this.label = 'torso'
  }
}
