import { Container, Sprite } from 'pixi.js'
import { Entity } from './entity'
import type { Level } from '../level/level'
import { savePointColor, savePointRadius } from '../parameters'
import { makeSavePointSprite } from '../texture/savePointTexture'

export class SavePoint extends Entity {
  container: Container
  graphics: Sprite
  position = [0, 0]

  constructor(level: Level, position: number[]) {
    super(level)
    console.log('savePoint')
    level.savePoint = this
    this.container = new Container()
    this.graphics = makeSavePointSprite(savePointRadius, savePointColor)
    this.container.addChild(this.graphics)
    this.level.portalContainer.addChild(this.container)
    this.position = structuredClone(position)
    this.container.x = position[0]
    this.container.y = position[1]
  }

  preRender(): void {
    this.container.x = this.position[0]
    this.container.y = this.position[1]
  }
}
