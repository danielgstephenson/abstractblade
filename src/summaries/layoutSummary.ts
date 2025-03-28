import { Vec2 } from 'planck'
import { Layout } from '../layout'

export class LayoutSummary {
  boundary: Vec2[]
  stars: Vec2[]
  guardAreas: Vec2[][]
  gaps: Vec2[][]

  constructor (layout: Layout) {
    this.boundary = layout.boundary
    this.gaps = layout.gaps
    this.guardAreas = layout.guardAreas
    this.stars = layout.starPoints
  }
}
