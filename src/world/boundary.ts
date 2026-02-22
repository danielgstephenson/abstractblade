import { BoundaryView } from '../game/view/boundaryView'
import { World } from './world'

export class Boundary {
  world: World
  view: BoundaryView
  points: number[][]

  constructor(world: World, points: number[][]) {
    this.world = world
    this.world.boundaries.push(this)
    this.points = points
    this.view = new BoundaryView(this)
  }
}
