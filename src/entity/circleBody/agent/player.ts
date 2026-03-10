import { Input } from '../../../game/input'
import { getDistance, normalize } from '../../../math'
import { Simulation } from '../../../simulation/simulation'
import { EntityState } from '../../entity'
import { Agent } from './agent'

export class Player extends Agent {
  drag = 0.7
  align = 0
  spawnPoint: number[]
  name = 'player'

  constructor(simulation: Simulation, position: number[]) {
    super(simulation, position, 5)
    this.spawnPoint = structuredClone(position)
    this.simulation.players.push(this)
  }

  invincible(): boolean {
    const distance = getDistance(this.position, this.spawnPoint)
    return distance < 15
  }

  handleInput(input: Input) {
    let x = 0
    let y = 0
    if (input.isKeyDown('KeyW') || input.isKeyDown('ArrowUp')) y -= 1
    if (input.isKeyDown('KeyS') || input.isKeyDown('ArrowDown')) y += 1
    if (input.isKeyDown('KeyA') || input.isKeyDown('ArrowLeft')) x -= 1
    if (input.isKeyDown('KeyD') || input.isKeyDown('ArrowRight')) x += 1
    this.action = normalize([x, y])
    if (input.isMouseButtonDown(0)) this.action = normalize(input.mousePosition)
  }

  loadState(state: EntityState): void {
    super.loadState(state)
    this.dead = false
  }
}
