import { World } from '../world'
import { Body } from './body'

export class Agent extends Body {
  movePower = 30
  align = 1
  action = [0, 0]
  dead = false

  constructor(world: World, position: number[], radius: number) {
    super(world, position, radius)
    this.world.agents.push(this)
  }
}
