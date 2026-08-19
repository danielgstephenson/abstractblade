
import { InputDevice } from "pixijs-input-devices"
import { Agent } from "./agent"
import { chargeStep, movePower, playerBladeColor, playerColor, targetRadius } from "../parameters"
import { clamp, getMagnitude, mul, normalize } from "../math"
import type { Level } from "../level"
import { Blade } from "./blade"

export class Player extends Agent {
  align = 0
  blade: Blade

  constructor(level: Level, position: number[]) {
    super(level, position, playerColor)
    this.blade = new Blade(this, playerBladeColor)
  }

  preStep(): void {
    super.preStep()
    this.handleInput()
    this.checkRing()
  }

  checkRing(): void {
    const dist = getMagnitude(this.position)
    const insideRing = dist < targetRadius - this.radius
    const dCharge = insideRing ? chargeStep : -chargeStep 
    this.level.charge = clamp(0, 1, this.level.charge + dCharge)
    if (this.level.charge < 1) return
    this.level.onComplete()
  }

  handleInput(): void {
    const input = this.level.game.input
    let x = 0
    let y = 0
    for (const device of InputDevice.devices) {
      if (device.bindDown('North')) y -= 1
      if (device.bindDown('South')) y += 1
      if (device.bindDown('East')) x -= 1
      if (device.bindDown('West')) x += 1
      if (device.bindDown('ZoomIn')) {
        input.zoom += 0.1
      }
      if (device.bindDown('ZoomOut')) {
        input.zoom -= 0.1
      }
    }
    let action = normalize([x, y])
    if (input.isMouseButtonDown(0)) action = normalize(input.mousePosition)
    this.force = mul(movePower, action)
  }
}