import { World } from '../../../world'
import { Blade } from '../blade'
import { CircleBody } from '../circleBody'

export class Agent extends CircleBody {
  movePower = 20
  align = 1
  action = [0, 0]
  blade?: Blade
  agentIndex: number

  constructor(world: World, position: number[], radius: number) {
    super(world, position, radius)
    this.mass = 1
    this.agentIndex = this.world.agents.length
    this.world.agents.push(this)
  }

  die() {
    super.die()
    this.blade?.detach()
  }
}
