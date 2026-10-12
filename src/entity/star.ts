import { Container, Sprite } from 'pixi.js'
import { Entity } from './entity'
import type { Level } from '../level/level'
import { agentRadius, starColor, starRadius } from '../parameters'
import { getDistance } from '../math'
import { makeStarSprite } from '../texture/starTexture'

export class Star extends Entity {
  container: Container
  graphics: Sprite
  position: number[]

  constructor(level: Level, position: number[]) {
    super(level)
    level.stars.push(this)
    this.container = new Container()
    level.starContainer.addChild(this.container)
    this.graphics = makeStarSprite(starRadius, starColor)
    this.container.addChild(this.graphics)
    this.position = structuredClone(position)
    this.container.x = position[0]
    this.container.y = position[1]
  }

  preStep(): void {
    if (this.removed) return
    const dist = getDistance(this.position, this.level.player.position)
    if (dist < starRadius + agentRadius) this.remove()
  }

  remove(): void {
    this.removed = true
    this.graphics.visible = false
  }
}
