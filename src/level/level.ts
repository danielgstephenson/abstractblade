import { Simulation } from '../physics/simulation'
import { World } from '../world'

export class Level extends Simulation {
  world: World
  index: number

  constructor(world: World, index: number, svgString: string) {
    super(svgString)
    this.index = index
    this.world = world
    this.world.levels[this.index] = this
  }
}
