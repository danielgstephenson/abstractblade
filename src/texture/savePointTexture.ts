import { Graphics, Sprite, Texture, type ColorSource, type Renderer } from 'pixi.js'
import { textureRadius } from './circleTexture'

let savePointTexture: Texture

export function initSavePointTexture(renderer: Renderer): void {
  const graphics = new Graphics()
  graphics.moveTo(textureRadius, 2 * textureRadius)
  graphics.lineTo(2 * textureRadius, textureRadius)
  graphics.lineTo(textureRadius, 0)
  graphics.lineTo(0, textureRadius)
  graphics.closePath()
  graphics.stroke({ color: 0xffffff, width: 50 })
  savePointTexture = renderer.generateTexture({
    target: graphics,
    antialias: true,
    textureSourceOptions: { scaleMode: 'linear', autoGenerateMipmaps: true },
  })
  graphics.destroy({ children: true })
}

export function makeSavePointSprite(radius: number, color: ColorSource): Sprite {
  const sprite = new Sprite(savePointTexture)
  sprite.anchor.set(0.5)
  sprite.scale.set(radius / textureRadius)
  sprite.tint = color
  return sprite
}
