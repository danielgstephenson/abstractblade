import { Container, Graphics, GraphicsContext } from 'pixi.js'
import { LevelView } from './levelView'
import { Level } from '../level/level'
import { Player } from '../entity/circleBody/agent/player'

export const spawnGraphicsContext = new GraphicsContext().circle(0, 0, 8).stroke({
  color: 'hsla(220, 100%, 50%, 0.3)',
  width: 2,
})

export class SpawnView extends Container {
  levelView: LevelView
  player: Player
  level: Level
  ring: Graphics

  constructor(levelView: LevelView, player: Player) {
    super()
    this.levelView = levelView
    this.level = levelView.level
    this.player = player
    this.cullable = true
    this.x = this.player.spawnPoint[0]
    this.y = this.player.spawnPoint[1]
    this.levelView.addChild(this)
    this.ring = new Graphics(spawnGraphicsContext)
    this.addChild(this.ring)
  }

  update(): void {
    this.x = this.player.spawnPoint[0]
    this.y = this.player.spawnPoint[1]
  }
}
