import type { Level } from "../level"
import { Entity } from "./entity"
import { playerColor } from "../parameters"
import { InputDevice } from "pixijs-input-devices"
import { normalize } from "../math"

export class Player extends Entity {

  constructor(level: Level, x: number, y: number) {
    super(level, x, y, 20, playerColor)
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
    this.ax = action[0] * this.movePower
    this.ay = action[1] * this.movePower
    // console.log(this.ax, this.ay)
  }
}