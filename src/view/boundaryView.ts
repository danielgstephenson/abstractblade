import { Container, Graphics } from 'pixi.js'
import { Simulation } from '../simulation/simulation'
import { LevelView } from './levelView'
import { Boundary } from '../entity/boundary'

export class BoundaryView extends Container {
  simulationView: LevelView
  simulation: Simulation
  boundary: Boundary
  floor: Container

  constructor(simulationView: LevelView, boundary: Boundary) {
    super()
    this.simulationView = simulationView
    this.simulation = this.simulationView.level
    this.boundary = boundary
    this.floor = this.buildFloor()
    this.addChild(this.floor)
    this.simulationView.addChild(this)
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
