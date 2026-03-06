import { Container, Graphics, GraphicsContext } from 'pixi.js'
import { WorldView } from './worldView'
import { World } from '../world/world'
import { Player } from '../world/entity/circleBody/agent/player'

export const spawnGraphicsContext = new GraphicsContext().circle(0, 0, 8).stroke({
  color: 'hsla(220, 100%, 50%, 0.3)',
  width: 2,
})

export class SpawnView extends Container {
  worldView: WorldView
  player: Player
  world: World
  ring: Graphics

  constructor(worldView: WorldView, player: Player) {
    super()
    this.worldView = worldView
    this.world = worldView.world
    this.player = player
    this.cullable = true
    this.x = this.player.spawnPoint[0]
    this.y = this.player.spawnPoint[1]
    this.worldView.addChild(this)
    this.ring = new Graphics(spawnGraphicsContext)
    this.addChild(this.ring)
  }

  update(): void {
    this.x = this.player.spawnPoint[0]
    this.y = this.player.spawnPoint[1]
  }
}
