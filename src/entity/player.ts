import type { Level } from "../level"
import { Entity } from "./entity"
import { playerColor } from "../parameters"

export class Player extends Entity {
  vx = 0
  vy = 0

  constructor(level: Level, x: number, y: number) {
    super(level, x, y, 20, playerColor)
  }
}