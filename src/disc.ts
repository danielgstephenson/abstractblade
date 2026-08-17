import { Graphics, Sprite, Texture, type ColorSource, type Renderer } from 'pixi.js'

export const discRadius = 512
let discTexture: Texture

export function initDiscTexture(renderer: Renderer): void {
  const graphics = new Graphics()
    .circle(discRadius, discRadius, discRadius)
    .fill(0xffffff)
  discTexture = renderer.generateTexture({
    target: graphics,
    antialias: true,
    textureSourceOptions: { scaleMode: 'linear', autoGenerateMipmaps: true },
  })
  graphics.destroy()
}

export function makeDisc(radius: number, color: ColorSource): Sprite {
  const sprite = new Sprite(discTexture)
  sprite.anchor.set(0.5)
  sprite.scale.set(radius / discRadius)
  sprite.tint = color
  return sprite
}