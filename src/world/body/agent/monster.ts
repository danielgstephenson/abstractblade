import { World } from '../../world'
import { Agent } from './agent'

export class Monster extends Agent {
  drag = 0.7
  align = 2

  constructor(world: World, position: number[]) {
    super(world, position, 10)
    this.world.monsters.push(this)
  }
}
