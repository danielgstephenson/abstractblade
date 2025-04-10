import { Simulation } from './simulation'

export class Runner {
  simulation: Simulation

  constructor (simulation: Simulation) {
    this.simulation = simulation
  }

  step (dt: number): void {
    this.simulation.actors.forEach(actor => actor.preStep(dt))
    this.simulation.world.step(dt)
    this.simulation.actors.forEach(actor => actor.postStep(dt))
  }
}
