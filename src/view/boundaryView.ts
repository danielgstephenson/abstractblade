import { Container, Graphics } from 'pixi.js'
import { Level } from '../level/level'
import { LevelView } from './levelView'
import { Boundary } from '../entity/polygonBody/boundary'

export class BoundaryView extends Container {
  levelView: LevelView
  level: Level
  boundary: Boundary
  floor: Container

  constructor(levelView: LevelView, boundary: Boundary) {
    super()
    this.levelView = levelView
    this.level = this.levelView.level
    this.boundary = boundary
    this.floor = this.buildFloor()
    this.addChild(this.floor)
    this.levelView.addChild(this)
  }

  buildFloor(): Container {
    const floor = new Container()
    const cavern = new Graphics()
    this.boundary.polygon.forEach((point, i) => {
      if (i === 0) cavern.moveTo(point[0], point[1])
      else cavern.lineTo(point[0], point[1])
    })
    cavern.closePath()
    cavern.fill('hsl(0,0%,0%)')
    floor.addChild(cavern)
    return floor
  }
}
