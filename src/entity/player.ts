import type { Level } from "../level"
import { playerColor } from "../parameters"
import { InputDevice } from "pixijs-input-devices"
import { mul, normalize } from "../math"
import { Agent } from "./agent"

export class Player extends Agent {

  constructor(level: Level, position: number[]) {
    super(level, position, playerColor)
  }

  preStep(): void {
    this.handleInput()
  }

  handleInput() {
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
    this.force = mul(this.movePower, action)
  }
}