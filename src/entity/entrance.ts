import { Simulation } from '../physics/simulation'
import { Entity } from './entity'

export class Entrance extends Entity {
  simulation: Simulation
  position: number[]
  entranceIndex: number

  constructor(simulation: Simulation, position: number[]) {
    super(simulation)
    this.simulation = simulation
    this.position = structuredClone(position)
    this.entranceIndex = this.simulation.entrances.length
    this.simulation.entrances.push(this)
  }
}
