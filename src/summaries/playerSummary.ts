import { Vec2 } from 'planck'
import { SimulationSummary } from './gameSummary'
import { Player } from '../actors/player'

export class PlayerSummary {
  game: SimulationSummary
  id: string
  spawnPoint: Vec2
  stars: number[]

  constructor (player: Player) {
    this.game = player.game.summary
    this.id = player.id
    this.spawnPoint = player.spawnPoint
    this.stars = player.stars
  }
}
