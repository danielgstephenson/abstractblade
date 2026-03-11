import { Level } from './level'
import { World } from '../world'
import svgString from '../svg/level1.svg?raw'

export class Level1 extends Level {
  constructor(world: World) {
    super(world, 1, svgString)
  }
}
