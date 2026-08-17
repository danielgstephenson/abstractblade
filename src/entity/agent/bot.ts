import type { Level } from "../../level"
import { botColor } from "../../parameters"
import { Agent } from "./agent"

export class Bot extends Agent {
  align = 1

  constructor(level: Level, position: number[]) {
    super(level, position, botColor)
  }
}