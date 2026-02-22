import { Game } from '../game/game'
import { WorldView } from '../game/view/worldView'
import { Boundary } from './boundary'
import { Player } from './body/player'

export class World {
  game: Game
  view: WorldView
  boundaries: Boundary[] = []
  players: Player[] = []
  timeStep = 1 / 60
  busy = false
  paused = false

  constructor(game: Game) {
    this.game = game
    this.view = new WorldView(this)
    this.addBoundary([
      [-20, -20],
      [+20, -20],
      [+20, +20],
      [-20, +20],
    ])
    this.addPlayer([0, 0])
  }

  step(): void {}

  addPlayer(position: number[]): Player {
    const player = new Player(this, position)
    return player
  }

  addBoundary(points: number[][]): Boundary {
    const boundary = new Boundary(this, points)
    return boundary
  }
}
