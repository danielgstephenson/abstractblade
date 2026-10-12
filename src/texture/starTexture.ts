import { Graphics, Sprite, Texture, type ColorSource, type Renderer } from 'pixi.js'
import { textureRadius } from './circleTexture'
import { range } from '../math'

let starTexture: Texture

export function initStarTexture(renderer: Renderer): void {
  const graphics = new Graphics()
  const r0 = 0.5 * textureRadius
  const r1 = textureRadius
  const angles = range(10).map(i => Math.PI * (0.1 + i / 5))
  angles.forEach((angle, i) => {
    const r = i % 2 === 0 ? r0 : r1
    const x = textureRadius + r * Math.cos(angle)
    const y = textureRadius + r * Math.sin(angle)
    if (i === 0) graphics.moveTo(x, y)
    else graphics.lineTo(x, y)
  })
  graphics.closePath()
  graphics.fill({ color: 0xffffff })
  starTexture = renderer.generateTexture({
    target: graphics,
    antialias: true,
    textureSourceOptions: { scaleMode: 'linear', autoGenerateMipmaps: true },
  })
  graphics.destroy({ children: true })
}

export function makeStarSprite(radius: number, color: ColorSource): Sprite {
  const sprite = new Sprite(starTexture)
  sprite.anchor.set(0.5)
  sprite.scale.set(radius / textureRadius)
  sprite.tint = color
  return sprite
}
