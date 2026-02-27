import { World } from '../../world'
import { Agent } from './agent'

export class Rover extends Agent {
  drag = 0.7
  align = 1

  constructor(world: World, position: number[]) {
    super(world, position, 5)
    this.world.rovers.push(this)
  }
}
