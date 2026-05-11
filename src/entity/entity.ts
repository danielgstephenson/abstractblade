import { Simulation } from '../simulation/simulation'

export type EntityState = Record<string, number>

export class Entity {
  simulation: Simulation
  index: number
  id = 'entityId'

  constructor(simulation: Simulation) {
    this.simulation = simulation
    this.index = this.simulation.entities.length
    this.simulation.entities.push(this)
  }

  preStep(_dt: number): void {}

  getState(): EntityState {
    return {}
  }

  loadState(_state: EntityState) {}
}
