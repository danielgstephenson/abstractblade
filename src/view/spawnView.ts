import { Container, Graphics, GraphicsContext } from 'pixi.js'
import { LevelView } from './levelView'
import { Simulation } from '../physics/simulation'
import { Player } from '../entity/circleBody/agent/player'

export const spawnGraphicsContext = new GraphicsContext().circle(0, 0, 8).stroke({
  color: 'hsla(220, 100%, 50%, 0.3)',
  width: 2,
})

export class SpawnView extends Container {
  simulationView: LevelView
  player: Player
  simulation: Simulation
  ring: Graphics

  constructor(simulationView: LevelView, player: Player) {
    super()
    this.simulationView = simulationView
    this.simulation = simulationView.level
    this.player = player
    this.cullable = true
    this.x = this.player.spawnPoint[0]
    this.y = this.player.spawnPoint[1]
    this.simulationView.addChild(this)
    this.ring = new Graphics(spawnGraphicsContext)
    this.addChild(this.ring)
  }

  update(): void {
    this.x = this.player.spawnPoint[0]
    this.y = this.player.spawnPoint[1]
  }
}
