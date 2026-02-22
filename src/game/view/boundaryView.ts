import { Graphics } from 'pixi.js'
import { Boundary } from '../../world/boundary'

export class BoundaryView extends Graphics {
  boundary: Boundary

  constructor(boundary: Boundary) {
    super()
    this.boundary = boundary
    boundary.points.forEach((point, i) => {
      if (i === 0) {
        this.moveTo(point[0], point[1])
        return
      }
      this.lineTo(point[0], point[1])
    })
    this.closePath()
    this.fill('hsl(0,0%,6%)')
    this.boundary.world.view.addChild(this)
  }
}
