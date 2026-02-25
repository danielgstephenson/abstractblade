import { Application, Container, Graphics } from 'pixi.js'
import { World } from '../world/world'
import { Game } from '../game/game'
import { range } from '../math'

export class WorldView extends Container {
  world: World
  game: Game
  app: Application
  floor: Container

  constructor(world: World) {
    super()
    this.world = world
    this.game = world.game
    this.app = world.game.app
    this.x = 0.5 * window.innerWidth
    this.y = 0.5 * window.innerHeight
    this.scale.set(10)
    this.app.stage.addChild(this)
    this.floor = new Container()
    this.addChild(this.floor)
  }

  update(): void {
    const player = this.world.players[0]
    const offset = player != null ? player.position : [0, 0]
    this.scale = 10 * Math.exp(0.1 * this.game.input.zoom)
    this.x = 0.5 * window.innerWidth - this.scale.x * offset[0]
    this.y = 0.5 * window.innerHeight - this.scale.y * offset[1]
  }

  buildFloor(): void {
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
      const lightness = 1 + 4 * Math.random()
      const radius = 2 + 5 * Math.random()
      background.circle(x, y, radius).fill(`hsla(0,0%,${lightness}%,0.1)`)
    })
    const mask = new Container()
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
      mask.addChild(boundaryView)
    })
    this.floor.addChild(background)
    this.floor.addChild(mask)
    this.floor.mask = mask
  }
}
