import { Graphics, Sprite, Texture, type ColorSource, type Renderer } from 'pixi.js'

export const textureRadius = 512
let circleTexture: Texture

export function initCircleTexture(renderer: Renderer): void {
  const graphics = new Graphics().circle(textureRadius, textureRadius, textureRadius).fill(0xffffff)
  circleTexture = renderer.generateTexture({
    target: graphics,
    antialias: true,
    textureSourceOptions: { scaleMode: 'linear', autoGenerateMipmaps: true },
  })
  graphics.destroy({ children: true })
}

export function makeCircleSprite(radius: number, color: ColorSource): Sprite {
  const sprite = new Sprite(circleTexture)
  sprite.anchor.set(0.5)
  sprite.scale.set(radius / textureRadius)
  sprite.tint = color
  return sprite
}
