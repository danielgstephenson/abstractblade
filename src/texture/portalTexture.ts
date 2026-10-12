import { Graphics, Sprite, Texture, type ColorSource, type Renderer } from 'pixi.js'
import { textureRadius } from './circleTexture'

let portalTexture: Texture

export function initPortalTexture(renderer: Renderer): void {
  const graphics = new Graphics().circle(textureRadius, textureRadius, textureRadius).stroke({ color: 0xffffff, width: 50 })
  portalTexture = renderer.generateTexture({
    target: graphics,
    antialias: true,
    textureSourceOptions: { scaleMode: 'linear', autoGenerateMipmaps: true },
  })
  graphics.destroy({ children: true })
}

export function makePortalSprite(radius: number, color: ColorSource): Sprite {
  const sprite = new Sprite(portalTexture)
  sprite.anchor.set(0.5)
  sprite.scale.set(radius / textureRadius)
  sprite.tint = color
  return sprite
}
