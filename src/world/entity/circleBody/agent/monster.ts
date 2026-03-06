import { World } from '../../../world'
import { CircleBody } from '../circleBody'
import { Agent } from './agent'

export class Monster extends Agent {
  drag = 0.7
  align = 3

  constructor(world: World, position: number[]) {
    super(world, position, 10)
    this.world.monsters.push(this)
  }

  doesCollide(otherBody: CircleBody): boolean {
    if (otherBody instanceof Agent) {
      if (otherBody.align !== this.align) {
        otherBody.die()
      }
      return false
    }
    return true
  }
}
