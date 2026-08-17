import type { ColorSource } from "pixi.js";
import type { Level } from "../../level";
import { bladeRadius } from "../../parameters";
import { Entity } from "../entity";

export class Blade extends Entity {
  align: number

  constructor(level: Level, position: number[], align: number, color: ColorSource) {
    super(level,position,bladeRadius,color)
    this.align = align
    this.level.bladeContainer.addChild(this.container)
  }

}