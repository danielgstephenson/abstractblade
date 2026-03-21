import { Input } from '../../../input'
import { getDistance, normalize, range } from '../../../math'
import { Simulation } from '../../../physics/simulation'
import { EntityState } from '../../entity'
import { Agent } from './agent'

export class Player extends Agent {
  drag = 0.7
  align = 0
  spawnPoint: number[]
  history: number[][]
  historyTimer = 1
  id = 'player'

  constructor(simulation: Simulation, position: number[]) {
    super(simulation, position, 5)
    this.spawnPoint = structuredClone(position)
    this.history = range(20).map(_ => structuredClone(this.position))
    this.simulation.player = this
  }

  invincible(): boolean {
    const distance = getDistance(this.position, this.spawnPoint)
    return distance < 15
  }

  preStep(dt: number): void {
    super.preStep(dt)
    this.historyTimer -= dt
    if (this.historyTimer > 0) return
    this.historyTimer = 1
    this.history.unshift(structuredClone(this.position))
    this.history.pop()
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
    this.history = range(50).map(_ => structuredClone(this.position))
    this.destroyed = false
  }
}
