import { Graphics, Sprite, Texture, type ColorSource, type Renderer } from 'pixi.js'
import { textureRadius } from './circleTexture'

let triggerTexture: Texture

export function initTriggerTexture(renderer: Renderer): void {
  const graphics = new Graphics().circle(textureRadius, textureRadius, textureRadius).stroke({ color: 0xffffff, width: 50 })
  const r = textureRadius - 25
  const angles = [0.25, 0.75, 1.25, 1.75]
  angles.forEach((angle, i) => {
    const x = textureRadius + r * Math.cos(angle * Math.PI)
    const y = textureRadius + r * Math.sin(angle * Math.PI)
    if (i === 0) graphics.moveTo(x, y)
    else graphics.lineTo(x, y)
  })
  graphics.closePath()
  graphics.stroke({ color: 0xffffff, width: 50 })
  triggerTexture = renderer.generateTexture({
    target: graphics,
    antialias: true,
    textureSourceOptions: { scaleMode: 'linear', autoGenerateMipmaps: true },
  })
  graphics.destroy({ children: true })
}

export function makeTriggerSprite(radius: number, color: ColorSource): Sprite {
  const sprite = new Sprite(triggerTexture)
  sprite.anchor.set(0.5)
  sprite.scale.set(radius / textureRadius)
  sprite.tint = color
  return sprite
}
