import { Container, Graphics, Sprite } from 'pixi.js'
import { Entity } from './entity'
import type { Level } from '../level/level'
import { makeTriggerSprite } from '../textures'
import { agentRadius, chargeStep, portalColor, portalRadius, triggerColor } from '../parameters'
import { clamp, getDistance } from '../math'
import type { Wall } from './wall'

export class Trigger extends Entity {
  container: Container
  graphics: Sprite
  chargeRing = new Graphics()
  position = [0, 0]
  wall?: Wall
  charge = 0
  active = true

  constructor(level: Level, position: number[]) {
    super(level)
    level.triggers.push(this)
    this.container = new Container()
    this.graphics = makeTriggerSprite(portalRadius, triggerColor)
    this.container.addChild(this.graphics)
    this.container.addChild(this.chargeRing)
    this.level.triggerContainer.addChild(this.container)
    this.position = structuredClone(position)
    this.container.x = position[0]
    this.container.y = position[1]
  }

  preStep(): void {
    if (!this.active) return
    const dist = getDistance(this.position, this.level.player.position)
    const insideRing = dist < portalRadius - agentRadius
    const dCharge = insideRing ? chargeStep : -chargeStep
    this.charge = clamp(0, 1, this.charge + dCharge)
    if (this.charge == 1) this.fire()
  }

  preRender(): void {
    this.updateChargeRing()
  }

  updateChargeRing(): void {
    this.chargeRing.clear()
    const angleStart = 1.5 * Math.PI
    const angleEnd = Math.PI * (1.5 + 2 * this.charge)
    this.chargeRing.arc(0, 0, 1.5 * portalRadius, angleStart, angleEnd).stroke({ color: triggerColor, join: 'round', cap: 'round', width: 4 })
  }

  fire(): void {
    this.charge = 0
    if (this.wall == null) return
    this.wall.remove()
    this.active = false
    this.graphics.visible = false
  }
}
