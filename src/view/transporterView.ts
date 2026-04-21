import { Container, Graphics, GraphicsContext } from 'pixi.js'
import { LevelView } from './levelView'
import { Transporter } from '../entity/transporter'
import { starColor } from '../colors'

export const transportGraphicsContext = new GraphicsContext().circle(0, 0, 13).stroke({
  color: starColor,
  width: 1,
})

export class TransporterView extends Container {
  levelView: LevelView
  transporter: Transporter
  baseRing: Graphics
  chargeRing: Graphics
  interval: number
  charge: number

  constructor(levelView: LevelView, transporter: Transporter) {
    super()
    this.levelView = levelView
    this.transporter = transporter
    this.interval = transporter.interval
    this.charge = transporter.charge
    this.cullable = true
    this.x = transporter.position[0]
    this.y = transporter.position[1]
    this.levelView.addChild(this)
    this.baseRing = new Graphics(transportGraphicsContext)
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
    this.chargeRing
      .arc(0, 0, 17, 1.5 * Math.PI, 1.5 * Math.PI + (this.charge / this.interval) * 2 * Math.PI)
      .stroke({ color: starColor, join: 'round', cap: 'round', width: 1 })
  }
}
