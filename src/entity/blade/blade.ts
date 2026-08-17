import { Graphics, type ColorSource } from "pixi.js";
import type { Level } from "../../level";
import { bladeRadius } from "../../parameters";
import { Entity } from "../entity";
import type { Agent } from "../agent/agent";

export class Blade extends Entity {
  align: number
  color: ColorSource
  spring = new Graphics()
  agent?: Agent

  constructor(level: Level, position: number[], align: number, color: ColorSource, agent?: Agent) {
    super(level,position,bladeRadius,color)
    this.agent = agent
    this.align = align
    this.color = color
    console.log('blade',this.position,this.color)
    this.level.bladeContainer.addChild(this.container)
    this.level.blades.push(this)
    // this.level.springContainer.addChild(this.spring)
  }

  preRender(): void {
    // super.preRender()
    // this.spring.clear()
    // if(this.agent==null) return
    // const a = this.position
    // const b = this.agent.position
    // this.spring.moveTo(a[0], a[1])
    // this.spring.lineTo(b[0], b[1])
    // this.spring.stroke({color: this.color, width: 5})
  }

}