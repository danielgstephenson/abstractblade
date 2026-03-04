import { Container, Graphics, GraphicsContext } from 'pixi.js'
import { WorldView } from './worldView'
import { World } from '../world/world'

export const spawnGraphicsContext = new GraphicsContext().circle(0, 0, 8).stroke({
  color: 'hsla(220, 100%, 50%, 0.3)',
  width: 2,
})

export class SpawnView extends Container {
  worldView: WorldView
  world: World
  ring: Graphics

  constructor(worldView: WorldView) {
    super()
    this.worldView = worldView
    this.world = worldView.world
    this.cullable = true
    this.x = this.world.spawnPoint[0]
    this.y = this.world.spawnPoint[1]
    this.worldView.addChild(this)
    this.ring = new Graphics(spawnGraphicsContext)
    this.addChild(this.ring)
  }

  update(): void {
    this.x = this.world.spawnPoint[0]
    this.y = this.world.spawnPoint[1]
  }
}
