import { Graphics, Sprite, Texture, type ColorSource, type Renderer } from 'pixi.js'

export const circleTextureRadius = 512
let circleTexture: Texture

export function initCircleTexture(renderer: Renderer): void {
  const graphics = new Graphics()
    .circle(circleTextureRadius, circleTextureRadius, circleTextureRadius)
    .fill(0xffffff)
  circleTexture = renderer.generateTexture({
    target: graphics,
    antialias: true,
    textureSourceOptions: { scaleMode: 'linear', autoGenerateMipmaps: true },
  })
  graphics.destroy()
}

export function makeCircleSprite(radius: number, color: ColorSource): Sprite {
  const sprite = new Sprite(circleTexture)
  sprite.anchor.set(0.5)
  sprite.scale.set(radius / circleTextureRadius)
  sprite.tint = color
  return sprite
}