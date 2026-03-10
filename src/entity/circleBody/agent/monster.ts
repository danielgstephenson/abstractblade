import { Simulation } from '../../../simulation/simulation'
import { CircleBody } from '../circleBody'
import { Agent } from './agent'

export class Monster extends Agent {
  drag = 0.7
  align = 3

  constructor(simulation: Simulation, position: number[]) {
    super(simulation, position, 10)
    this.simulation.monsters.push(this)
  }

  doesCollide(otherBody: CircleBody): boolean {
    if (otherBody instanceof Agent) {
      if (otherBody.align !== this.align) {
        if (otherBody.invincible()) this.die()
        else otherBody.die()
      }
      return false
    }
    return true
  }
}
