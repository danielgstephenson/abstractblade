import { Application, Container, Graphics } from 'pixi.js'
import { Game } from '../game/game'
import { World } from '../world/world'
import { range } from '../math'
import { WorldView } from './worldView'
import { Boundary } from '../world/boundary'

export class BoundaryView extends Container {
  worldView: WorldView
  world: World
  game: Game
  app: Application
  boundary: Boundary
  background: Graphics
  floor: Container

  constructor(worldView: WorldView, boundary: Boundary) {
    super()
    this.worldView = worldView
    this.world = this.worldView.world
    this.game = this.worldView.game
    this.app = this.worldView.game.app
    this.boundary = boundary
    this.background = this.buildBackground()
    this.floor = this.buildFloor()
    this.addChild(this.background)
    this.addChild(this.floor)
    this.background.mask = this.floor
    this.cacheAsTexture({ resolution: 10 })
    this.worldView.addChild(this)
  }

  buildBackground(): Graphics {
    const xs = this.boundary.points.map(p => p[0])
    const ys = this.boundary.points.map(p => p[1])
    const xMin = Math.min(...xs)
    const yMin = Math.min(...ys)
    const xMax = Math.max(...xs)
    const yMax = Math.max(...ys)
    const width = xMax - xMin
    const height = yMax - yMin
    const background = new Graphics()
    background.rect(xMin, yMin, width, height)
    background.fill('hsl(0,0%,4%)')
    const count = Math.round((width * height) / 10)
    console.log(count)
    range(count).forEach(_ => {
      const x = xMin + width * Math.random()
      const y = yMin + height * Math.random()
      const lightness = 2 + 4 * Math.random()
      const radius = 2 + 5 * Math.random()
      background.circle(x, y, radius).fill(`hsla(0,0%,${lightness}%,0.2)`)
    })
    return background
  }

  buildFloor(): Container {
    const cavern = new Container()
    const boundaryView = new Graphics()
    this.boundary.points.forEach((point, i) => {
      if (i === 0) boundaryView.moveTo(point[0], point[1])
      else boundaryView.lineTo(point[0], point[1])
    })
    boundaryView.closePath()
    boundaryView.fill('hsl(0,0%,0%)')
    boundaryView.cullable = true
    cavern.addChild(boundaryView)
    return cavern
  }
}
