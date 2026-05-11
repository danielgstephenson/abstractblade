import { Simulation } from '../../simulation/simulation'
import { Entity } from '../entity'

export class Wall extends Entity {
  polygon: number[][]

  constructor(simulation: Simulation, points: number[][]) {
    super(simulation)
    this.polygon = structuredClone(points)
    this.simulation.walls.push(this)
  }
}
