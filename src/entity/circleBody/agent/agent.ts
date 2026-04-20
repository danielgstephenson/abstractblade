import { sum } from '../../../math'
import { Simulation } from '../../../physics/simulation'
import { Blade } from '../blade'
import { CircleBody } from '../circleBody'

export class Agent extends CircleBody {
  movePower = 20
  align = 1
  action = [0, 0]
  blade?: Blade
  agentIndex: number
  actionTimer = 0

  constructor(simulation: Simulation, position: number[], radius: number) {
    super(simulation, position, radius)
    this.mass = 1
    this.agentIndex = this.simulation.agents.length
    this.simulation.agents.push(this)
  }

  preStep(dt: number): void {
    super.preStep(dt)
    if (this.destroyed && this.blade != null) {
      this.blade.detach()
    }
    const active = sum(this.action.map(x => x ** 2)) > 0
    this.actionTimer = active ? 0 : this.actionTimer + dt
  }
}
