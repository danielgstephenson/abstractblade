import type { Level } from "../level"
import { agentRadius } from "../parameters"
import { Entity } from "./entity"
import type { ColorSource } from "pixi.js"

export class Agent extends Entity {
  movePower = 50

  constructor(level: Level, position: number[], color: ColorSource) {
    super(level, position, agentRadius, color)
    level.agents.push(this)
  }
}