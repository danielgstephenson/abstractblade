import { Level } from './level'
import { World } from '../world'
import svgString from '../svg/level2.svg?raw'

export class Level2 extends Level {
  constructor(world: World) {
    super(world, 2, svgString)
  }
}
