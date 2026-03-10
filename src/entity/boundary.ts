import { Simulation } from '../simulation/simulation'
import { Entity } from './entity'

export class Boundary extends Entity {
  polygon: number[][]

  constructor(simulation: Simulation, polygon: number[][]) {
    super(simulation)
    this.simulation.boundaries.push(this)
    this.polygon = structuredClone(polygon)
  }
}
