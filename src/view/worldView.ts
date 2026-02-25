import { Application, Container, FillGradient, Graphics, Rectangle, TilingSprite } from 'pixi.js'
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
    const fillGradient = new FillGradient({
      type: 'radial',
      center: { x: 0.5, y: 0.5 },
      outerCenter: { x: 0.5, y: 0.5 },
      colorStops: [
        { offset: 0, color: 'hsla(0,0%,10%,1)' },
        { offset: 1, color: 'hsla(0,0%,10%,0)' },
      ],
      textureSpace: 'local',
      textureSize: 1024,
    })
    const graphics = new Graphics()
    const R = 100
    range(1).forEach(_ => {
      const x = R * Math.random()
      const y = R * Math.random()
      const size = 0.5
      graphics.circle(x, y, size * R).fill(fillGradient)
      graphics.circle(x + R, y + 0, size * R).fill(fillGradient)
      graphics.circle(x - R, y + 0, size * R).fill(fillGradient)
      graphics.circle(x + 0, y + R, size * R).fill(fillGradient)
      graphics.circle(x + 0, y - R, size * R).fill(fillGradient)
      graphics.circle(x + R, y + R, size * R).fill(fillGradient)
      graphics.circle(x - R, y + R, size * R).fill(fillGradient)
      graphics.circle(x + R, y - R, size * R).fill(fillGradient)
      graphics.circle(x - R, y - R, size * R).fill(fillGradient)
    })
    const texture = this.app.renderer.generateTexture({
      target: graphics,
      antialias: false,
      clearColor: 'hsl(0,0%,3%)',
      frame: new Rectangle(0, 0, R, R),
      resolution: 1,
    })
    const boundaryPoints = this.world.boundaries.flatMap(b => b.points)
    const xs = boundaryPoints.map(p => p[0])
    const ys = boundaryPoints.map(p => p[1])
    const xMin = Math.min(...xs)
    const yMin = Math.min(...ys)
    const xMax = Math.max(...xs)
    const yMax = Math.max(...ys)
    const tilingSprite = new TilingSprite({
      texture,
      width: xMax - xMin,
      height: yMax - yMin,
      tileScale: { x: 1, y: 1 },
    })
    tilingSprite.x = xMin
    tilingSprite.y = yMin
    const mask = new Graphics()
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
      mask.addChild(boundaryView)
    })
    this.floor.addChild(tilingSprite)
    this.floor.addChild(mask)
    this.floor.mask = mask
  }
}
