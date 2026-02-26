import { range } from '../../math'
import { World } from '../world'
import { Body } from './body'

export class Agent extends Body {
  static historyLength = 50
  movePower = 15
  align = 1
  action = [0, 0]
  dead = false
  history: number[][]

  constructor(world: World, position: number[], radius: number) {
    super(world, position, radius)
    this.history = range(Agent.historyLength).map(_ => structuredClone(this.position))
    this.world.agents.push(this)
  }

  preStep(): void {
    this.history.push(this.position)
    this.history.shift()
  }
}
