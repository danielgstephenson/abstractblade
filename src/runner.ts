import { Game } from './game'

export class Runner {
  game: Game
  timescale: number
  time: number

  constructor (game: Game) {
    this.game = game
    this.time = performance.now()
    this.timescale = this.game.server.config.timeScale
    setInterval(() => this.step(), 20)
  }

  step (): void {
    const oldTime = this.time
    this.time = performance.now()
    const dt = this.timescale * (this.time - oldTime) / 1000
    this.game.actors.forEach(actor => actor.preStep())
    this.game.world.step(dt)
    this.game.actors.forEach(actor => actor.postStep())
    this.game.summary = this.game.summarize()
  }
}