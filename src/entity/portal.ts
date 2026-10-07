import { Container, Graphics, Sprite } from 'pixi.js'
import { Entity } from './entity'
import type { Level } from '../level/level'
import { makeRingSprite } from '../textures'
import { agentRadius, chargeStep, portalColor, portalRadius } from '../parameters'
import { clamp, getDistance } from '../math'

export class Portal extends Entity {
  container: Container
  graphics: Sprite
  chargeRing = new Graphics()
  position = [0, 0]
  target = [0, 0]
  charge = 0

  constructor(level: Level, position: number[]) {
    super(level)
    level.portals.push(this)
    this.container = new Container()
    this.graphics = makeRingSprite(portalRadius, portalColor)
    this.container.addChild(this.graphics)
    this.container.addChild(this.chargeRing)
    this.level.portalContainer.addChild(this.container)
    this.position = structuredClone(position)
    this.container.x = position[0]
    this.container.y = position[1]
  }

  preStep(): void {
    const dist = getDistance(this.position, this.level.player.position)
    const insideRing = dist < portalRadius - agentRadius
    const dCharge = insideRing ? chargeStep : -chargeStep
    this.charge = clamp(0, 1, this.charge + dCharge)
    if (this.charge == 1) this.transport()
  }

  preRender(): void {
    this.updateChargeRing()
  }

  updateChargeRing(): void {
    this.chargeRing.clear()
    const angleStart = 1.5 * Math.PI
    const angleEnd = Math.PI * (1.5 + 2 * this.charge)
    this.chargeRing.arc(0, 0, 1.5 * portalRadius, angleStart, angleEnd).stroke({ color: portalColor, join: 'round', cap: 'round', width: 4 })
  }

  transport(): void {
    this.level.player.position = structuredClone(this.target)
    this.level.player.velocity = [0, 0]
  }
}
