import { Application, Container, Graphics } from 'pixi.js'
import { Game } from '../game/game'
import { World } from '../world/world'
import { range } from '../math'

export class Floor extends Container {
  world: World
  game: Game
  app: Application
  background: Graphics
  cavern: Container

  constructor(world: World) {
    super()
    this.world = world
    this.game = world.game
    this.app = world.game.app
    this.background = this.buildBackground()
    this.cavern = this.buildCavern()
    this.addChild(this.background)
    this.addChild(this.cavern)
    this.background.mask = this.cavern
    this.cacheAsTexture({ resolution: 10 })
  }

  buildBackground(): Graphics {
    const boundaryPoints = this.world.boundaries.flatMap(b => b.points)
    const xs = boundaryPoints.map(p => p[0])
    const ys = boundaryPoints.map(p => p[1])
    const xMin = Math.min(...xs)
    const yMin = Math.min(...ys)
    const xMax = Math.max(...xs)
    const yMax = Math.max(...ys)
    const width = xMax - xMin
    const height = yMax - yMin
    const background = new Graphics()
    background.rect(xMin, yMin, width, height)
    background.fill('hsl(0,0%,3%)')
    const count = Math.round((width * height) / 10)
    console.log(count)
    range(count).forEach(_ => {
      const x = xMin + width * Math.random()
      const y = yMin + height * Math.random()
      const lightness = 1 + 10 * Math.random()
      const radius = 2 + 5 * Math.random()
      background.circle(x, y, radius).fill(`hsla(0,0%,${lightness}%,0.08)`)
    })
    return background
  }

  buildCavern(): Container {
    const cavern = new Container()
    this.world.boundaries.forEach(boundary => {
      const boundaryView = new Graphics()
      boundary.points.forEach((point, i) => {
        if (i === 0) {
          boundaryView.moveTo(point[0], point[1])
          return
        }
        boundaryView.lineTo(point[0], point[1])
      })
      boundaryView.closePath()
      boundaryView.fill('hsl(0,0%,0%)')
      boundaryView.cullable = true
      cavern.addChild(boundaryView)
    })
    return cavern
  }
}
