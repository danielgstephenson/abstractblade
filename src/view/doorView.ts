import { Container, Graphics } from 'pixi.js'
import { LevelView } from './levelView'
import { Door } from '../entity/door'
import { starGraphicsContext } from './starView'

export class DoorView extends Container {
  simulationView: LevelView
  door: Door
  background: Graphics
  outline: Container
  starGraphics: Graphics
  holeGraphics: Graphics

  constructor(simulationView: LevelView, door: Door) {
    super()
    this.simulationView = simulationView
    this.door = door
    this.cullable = true
    this.x = door.position[0]
    this.y = door.position[1]
    this.simulationView.addChild(this)
    this.background = this.buildBackground()
    this.outline = this.buildContainer()
    this.addChild(this.background)
    this.addChild(this.outline)
    this.background.mask = this.outline
    this.holeGraphics = new Graphics().star(0, 0, 5, 4, 1.8).fill('black').stroke({
      color: 'black',
      width: 1,
      join: 'round',
    })
    this.starGraphics = new Graphics(starGraphicsContext)
    this.starGraphics.visible = false
    this.addChild(this.holeGraphics)
    this.addChild(this.starGraphics)
    // this.cacheAsTexture({ resolution: 10 })
  }

  update(): void {
    this.x = this.door.position[0]
    this.y = this.door.position[1]
    if (this.starGraphics.visible === this.door.star) return
    this.starGraphics.visible = this.door.star
    this.cacheAsTexture({ resolution: 10 })
  }

  buildBackground(): Graphics {
    const points = this.door.localPoints
    const xs = points.map(p => p[0])
    const ys = points.map(p => p[1])
    const xMin = Math.min(...xs)
    const yMin = Math.min(...ys)
    const xMax = Math.max(...xs)
    const yMax = Math.max(...ys)
    const width = xMax - xMin
    const height = yMax - yMin
    const background = new Graphics()
    background.rect(xMin, yMin, width, height)
    background.fill('hsl(36,100%,10%)')
    // const count = Math.round((width * height) / 5)
    // range(count).forEach(_ => {
    //   const x = xMin + width * Math.random()
    //   const y = yMin + height * Math.random()
    //   const lightness = 5 + 5 * Math.random()
    //   const radius = 1 + 4 * Math.random()
    //   background.circle(x, y, radius).fill(`hsla(36,100%,${lightness}%,0.2)`)
    // })
    return background
  }

  buildContainer(): Container {
    const container = new Container()
    const graphics = new Graphics()
    this.door.localPoints.forEach((point, i) => {
      if (i === 0) graphics.moveTo(point[0], point[1])
      else graphics.lineTo(point[0], point[1])
    })
    graphics.closePath()
    graphics.fill('hsl(0,0%,0%)')
    graphics.cullable = true
    container.addChild(graphics)
    return container
  }
}
