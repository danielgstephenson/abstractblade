import { Container, Sprite } from 'pixi.js'
import { Entity } from './entity'
import type { Level } from '../level/level'
import { agentRadius, starColor } from '../parameters'
import { getDistance } from '../math'
import { makeStarSprite } from '../texture/starTexture'

export class Star extends Entity {
  container: Container
  graphics: Sprite
  position: number[]
  active = true

  constructor(level: Level, position: number[]) {
    super(level)
    level.stars.push(this)
    this.container = new Container()
    level.starContainer.addChild(this.container)
    this.graphics = makeStarSprite(agentRadius, starColor)
    this.container.addChild(this.graphics)
    this.position = structuredClone(position)
    this.container.x = position[0]
    this.container.y = position[1]
  }

  preStep(): void {
    if (!this.active) return
    const dist = getDistance(this.position, this.level.player.position)
    if (dist < 2 * agentRadius) this.pickup()
  }

  pickup(): void {
    this.active = false
    this.graphics.visible = false
  }
}
