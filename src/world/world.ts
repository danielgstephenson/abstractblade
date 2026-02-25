import { Game } from '../game/game'
import { WorldView } from '../view/worldView'
import { Boundary } from './boundary'
import { Player } from './body/player'
import { Agent } from './body/agent'
import { Body } from './body/body'
import { Ticker } from 'pixi.js'
import { build } from './build'
import { step } from './step'

export class World {
  game: Game
  view: WorldView
  boundaries: Boundary[] = []
  bodies: Body[] = []
  agents: Agent[] = []
  players: Player[] = []
  timeStep = 1 / 60
  time = 0
  accumulator = 0
  busy = false
  paused = false

  constructor(game: Game, svgString?: string) {
    this.game = game
    this.view = new WorldView(this)
    if (svgString == null) return
    build(this, svgString)
  }

  destroy(): void {
    this.view.destroy()
  }

  update(time: Ticker): void {
    this.players.forEach(player => player.handleInput())
    this.accumulator += time.deltaTime * this.timeStep
    while (this.accumulator > this.timeStep) {
      this.accumulator -= this.timeStep
      step(this)
    }
    this.players.forEach(player => player.view.update())
    this.view.update()
  }

  addPlayer(position: number[]): Player {
    const player = new Player(this, position)
    return player
  }

  addBoundary(points: number[][]): Boundary {
    const boundary = new Boundary(this, points)
    return boundary
  }
}
