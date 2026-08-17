
import type { ColorSource } from "pixi.js"
import { Entity } from "./entity"
import type { Level } from "../level"
import { agentRadius } from "../parameters"

export class Agent extends Entity {
  movePower = 50
  align = 0

  constructor(level: Level, position: number[], color: ColorSource) {
    super(level, position, agentRadius, color)
    level.agents.push(this)
    level.agentContainer.addChild(this.container)
  }
}