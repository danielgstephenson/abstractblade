import { Color, Graphics } from 'pixi.js'
import { LevelView } from './levelView'
import { Blade } from '../entity/circleBody/blade'

export class SpringView extends Graphics {
  simulationView: LevelView
  blade: Blade
  color: Color

  constructor(simulationView: LevelView, blade: Blade, color: Color) {
    super()
    this.simulationView = simulationView
    this.blade = blade
    this.color = color
    this.cullable = true
    this.simulationView.addChild(this)
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
