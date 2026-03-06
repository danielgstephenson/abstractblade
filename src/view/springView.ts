import { Color, Graphics } from 'pixi.js'
import { WorldView } from './worldView'
import { Blade } from '../world/entity/circleBody/blade'

export class SpringView extends Graphics {
  worldView: WorldView
  blade: Blade
  color: Color

  constructor(worldView: WorldView, blade: Blade, color: Color) {
    super()
    this.worldView = worldView
    this.blade = blade
    this.color = color
    this.cullable = true
    this.worldView.addChild(this)
  }

  update(): void {
    if (this.blade.agent == null) {
      this.visible = false
      return
    }
    this.visible = true
    const a = this.blade.position
    const b = this.blade.agent.position
    this.clear()
    this.strokeStyle = {
      color: this.color,
      width: 0.7,
    }
    this.moveTo(a[0], a[1])
    this.lineTo(b[0], b[1])
    this.stroke()
  }
}
