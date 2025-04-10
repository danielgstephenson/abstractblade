import { Circle, Vec2 } from 'planck'
import { Feature } from './feature'
import { Fighter } from '../actors/fighter'

export class Halo extends Feature {
  fighter: Fighter
  wallPoints: Vec2[] = []

  constructor (fighter: Fighter) {
    super(fighter, {
      shape: new Circle(new Vec2(0, 0), 0.25 * fighter.reach),
      density: 1,
      friction: 0,
      restitution: 0
    })
    this.fighter = fighter
    this.label = 'halo'
  }
}
