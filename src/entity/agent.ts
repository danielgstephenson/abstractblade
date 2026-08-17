
import type { ColorSource } from "pixi.js"
import { Entity } from "./entity"
import type { Level } from "../level"
import { agentRadius, bladeRadius } from "../parameters"
import { combine, getDistance, mul, normalize } from "../math"
import type { Blade } from "./blade"

export class Agent extends Entity {
  movePower = 50
  align = 0
  blade?: Blade

  constructor(level: Level, position: number[], color: ColorSource) {
    super(level, position, agentRadius, color)
    level.agents.push(this)
    level.agentContainer.addChild(this.container)
  }

  preStep(): void {
    super.preStep()
    this.checkBlades()
  }

  checkBlades(): void {
    this.level.blades.forEach(blade => {
      if(blade.align === this.align) return
      const dist = getDistance(blade.position, this.position)
      const minDist  = this.radius + blade.radius
      if(dist < minDist) this.respawn()
    })
  }

  respawn(): void {
    const noise = [Math.random(),Math.random()]
    this.position = combine(1,this.position,0.0001,noise)
    this.velocity = [0,0]
    this.position = mul(bladeRadius-500,normalize(this.position))
    if(this.blade == null) return
    this.blade.velocity = [0,0]
    this.blade.position = structuredClone(this.position)
  }
}