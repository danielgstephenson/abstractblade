import { Simulation } from './simulation'

export class Runner {
  simulation: Simulation
  timescale: number
  time: number

  constructor (game: Simulation) {
    this.simulation = game
    this.time = performance.now()
    this.timescale = this.simulation.server.config.timeScale
  }

  step (dt: number): void {
    this.simulation.actors.forEach(actor => actor.preStep(dt))
    this.simulation.world.step(dt)
    this.simulation.actors.forEach(actor => actor.postStep(dt))
  }
}
