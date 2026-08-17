import { Graphics, type ColorSource } from "pixi.js";
import { agentRadius, bladeRadius } from "../parameters";
import { Entity } from "./entity";
import type { Agent } from "./agent";
import { getMagnitude, mul, sub } from "../math";

export class Blade extends Entity {
  align: number
  color: ColorSource
  spring = new Graphics()
  agent: Agent
  drag = 0.2

  constructor(agent: Agent, color: ColorSource) {
    super(agent.level,agent.position,bladeRadius,color)
    this.agent = agent
    this.align = agent.align
    this.color = color
    console.log('blade',this.position,this.color)
    this.level.bladeContainer.addChild(this.container)
    this.level.blades.push(this)
    this.level.springContainer.addChild(this.spring)
  }

  preStep(): void {
    super.preStep()
    const vector = sub(this.agent.position, this.position)
    this.force = mul(2, vector)
  }

  preRender(): void {
    super.preRender()
    this.spring.clear()
    if(this.agent==null) return
    const a = this.position
    const b = this.agent.position
    this.spring.moveTo(a[0], a[1])
    this.spring.lineTo(b[0], b[1])
    this.spring.stroke({color: this.color, width: 0.1*agentRadius})
  }

}