import { Container, Graphics } from 'pixi.js'
import { Simulation } from '../simulation/simulation'
import { range } from '../math'
import { LevelView } from './levelView'
import { Boundary } from '../entity/boundary'

export class BoundaryView extends Container {
  simulationView: LevelView
  simulation: Simulation
  boundary: Boundary
  background: Graphics
  floor: Container

  constructor(simulationView: LevelView, boundary: Boundary) {
    super()
    this.simulationView = simulationView
    this.simulation = this.simulationView.level
    this.boundary = boundary
    this.background = this.buildBackground()
    this.floor = this.buildFloor()
    this.addChild(this.background)
    this.addChild(this.floor)
    this.background.mask = this.floor
    this.simulationView.addChild(this)
    this.cacheAsTexture({ resolution: 10 })
  }

  buildBackground(): Graphics {
    const xs = this.boundary.polygon.map(p => p[0])
    const ys = this.boundary.polygon.map(p => p[1])
    const xMin = Math.min(...xs)
    const yMin = Math.min(...ys)
    const xMax = Math.max(...xs)
    const yMax = Math.max(...ys)
    const width = xMax - xMin
    const height = yMax - yMin
    const background = new Graphics()
    background.rect(xMin, yMin, width, height)
    background.fill(`hsl(0,0%,3%)`)
    const count = Math.round((width * height) / 20)
    range(count).forEach(_ => {
      const x = xMin + width * Math.random()
      const y = yMin + height * Math.random()
      const lightness = 1 + 2 * Math.random() * 1.5
      const radius = 1 + 4 * Math.random()
      background.circle(x, y, radius).fill(`hsla(0,0%,${lightness}%,0.5)`)
    })
    return background
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
