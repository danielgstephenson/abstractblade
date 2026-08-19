import { Graphics, type ColorSource } from "pixi.js";
import { agentRadius, bladeDrag, bladeRadius, springPower } from "../parameters";
import { Entity } from "./entity";
import type { Agent } from "./agent";
import { mul, sub } from "../math";

export class Blade extends Entity {
  align: number
  color: ColorSource
  spring = new Graphics()
  agent: Agent
  drag = bladeDrag

  constructor(agent: Agent, color: ColorSource) {
    super(agent.level,agent.position,bladeRadius,color)
    this.agent = agent
    this.align = agent.align
    this.color = color
    this.level.bladeContainer.addChild(this.container)
    this.level.blades.push(this)
    this.level.springContainer.addChild(this.spring)
  }

  preStep(): void {
    super.preStep()
    const vector = sub(this.agent.position, this.position)
    this.force = mul(springPower, vector)
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