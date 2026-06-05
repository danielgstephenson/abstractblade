import { Color, Container, Graphics, GraphicsContext } from 'pixi.js'
import { LevelView } from './levelView'
import { Transporter } from '../entity/transporter'

export class TransporterView extends Container {
  levelView: LevelView
  transporter: Transporter
  baseRing: Graphics
  chargeRing: Graphics
  charge: number
  radius: number
  color: Color

  constructor(levelView: LevelView, transporter: Transporter) {
    super()
    this.color = levelView.colors.transporterColor
    this.levelView = levelView
    this.transporter = transporter
    this.charge = transporter.charge
    this.radius = transporter.radius
    this.cullable = true
    this.x = transporter.position[0]
    this.y = transporter.position[1]
    this.levelView.addChild(this)
    const graphicsContext = new GraphicsContext().circle(0, 0, this.radius).stroke({
      color: this.color,
      width: 1,
    })
    this.baseRing = new Graphics(graphicsContext)
    this.addChild(this.baseRing)
    this.chargeRing = new Graphics()
    this.addChild(this.chargeRing)
    this.drawChargeRing()
  }

  update(): void {
    if (this.charge === this.transporter.charge) return
    this.charge = this.transporter.charge
    this.drawChargeRing()
  }

  drawChargeRing(): void {
    this.chargeRing.clear()
    const angleStart = 1.5 * Math.PI
    const angleEnd = Math.PI * (1.5 + 2 * this.charge)
    this.chargeRing
      .arc(0, 0, this.transporter.radius + 5, angleStart, angleEnd)
      .stroke({ color: this.color, join: 'round', cap: 'round', width: 1 })
  }
}
