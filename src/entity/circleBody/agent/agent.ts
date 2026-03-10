import { Simulation } from '../../../simulation/simulation'
import { Blade } from '../blade'
import { CircleBody } from '../circleBody'

export class Agent extends CircleBody {
  movePower = 20
  align = 1
  action = [0, 0]
  blade?: Blade
  agentIndex: number

  constructor(simulation: Simulation, position: number[], radius: number) {
    super(simulation, position, radius)
    this.mass = 1
    this.agentIndex = this.simulation.agents.length
    this.simulation.agents.push(this)
  }

  preStep(dt: number): void {
    super.preStep(dt)
    if (this.dead && this.blade != null) {
      this.blade.detach()
    }
  }

  die() {
    super.die()
  }
}
