import { World } from '../world'
import { Body } from './body'

export class Rock extends Body {
  drag = 2

  constructor(world: World, position: number[], radius: number) {
    super(world, position, radius)
    this.world.rocks.push(this)
  }
}
