import { World } from '../../world'
import { CircleBody } from './circleBody'

export class Rock extends CircleBody {
  drag = 2

  constructor(world: World, position: number[], radius: number) {
    super(world, position, radius)
    this.world.rocks.push(this)
  }
}
