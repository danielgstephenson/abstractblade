import { ColorSource, Container, Graphics, GraphicsContext } from 'pixi.js'
import { LevelView } from './levelView'
import { CircleBody } from '../entity/circleBody/circleBody'
import { starGraphicsContext } from './starView'
import { Player } from '../entity/circleBody/agent/player'

export class CircleView extends Container {
  levelView: LevelView
  body: CircleBody
  torsoGraphicsContext: GraphicsContext
  torsoGraphics: Graphics
  starGraphics: Graphics

  constructor(levelView: LevelView, body: CircleBody, color: ColorSource) {
    super()
    this.torsoGraphicsContext = new GraphicsContext().circle(0, 0, body.radius).fill(color)
    this.torsoGraphics = new Graphics(this.torsoGraphicsContext)
    this.addChild(this.torsoGraphics)
    this.levelView = levelView
    this.body = body
    this.cullable = true
    this.levelView.addChild(this)
    this.starGraphics = new Graphics(starGraphicsContext)
    this.starGraphics.visible = false
    this.addChild(this.starGraphics)
  }

  update(): void {
    this.x = this.body.position[0]
    this.y = this.body.position[1]
    this.starGraphics.visible = this.body.star
    this.visible = !this.body.destroyed || this.body instanceof Player
  }
}
