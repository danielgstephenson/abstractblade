import { Simulation } from '../simulation'
import { Actor } from './actor'
import { Boundary } from '../features/boundary'
import { GuardArea } from '../features/guardArea'

export class Cavern extends Actor {
  outerBoundary: Boundary
  innerBoundaries: Boundary[] = []
  guardAreas: GuardArea[] = []

  constructor (simulation: Simulation) {
    super(simulation, {
      type: 'static'
    })
    this.outerBoundary = new Boundary(this, this.simulation.layout.boundary)
    this.simulation.layout.gaps.forEach(vertices => {
      const innerBoundary = new Boundary(this, vertices)
      this.innerBoundaries.push(innerBoundary)
    })
    this.simulation.layout.guardAreas.forEach(vertices => {
      const guardArea = new GuardArea(this, vertices)
      this.guardAreas.push(guardArea)
    })
  }

  preStep (dt: number): void {
    super.preStep(dt)
    this.guardAreas.forEach(guardArea => guardArea.preStep())
  }
}
