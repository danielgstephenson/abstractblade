import { Input } from '../../../input'
import { getDistance, normalize, range } from '../../../math'
import { Level } from '../../../level/level'
import { EntityState } from '../../entity'
import { Agent } from './agent'
import { InputDevice } from 'pixijs-input-devices'

export class Player extends Agent {
  drag = 0.7
  align = 0
  spawnPoint: number[]
  history: number[][]
  wallPoints: number[][]
  historyTimer = 1
  id = 'player'

  constructor(level: Level, position: number[]) {
    super(level, position, 5)
    this.spawnPoint = structuredClone(position)
    this.history = range(20).map(_ => structuredClone(this.position))
    this.wallPoints = this.getWallPoints()
    this.level.player = this
  }

  invincible(): boolean {
    const distance = getDistance(this.position, this.spawnPoint)
    return distance < 15
  }

  preStep(dt: number): void {
    super.preStep(dt)
    this.wallPoints = this.getWallPoints()
    this.historyTimer -= dt
    if (this.historyTimer > 0) return
    this.historyTimer = 1
    this.history.unshift(structuredClone(this.position))
    this.history.pop()
  }

  handleInput(input: Input) {
    let x = 0
    let y = 0
    for (const device of InputDevice.devices) {
      if (device.bindDown('Up')) y -= 1
      if (device.bindDown('Down')) y += 1
      if (device.bindDown('Left')) x -= 1
      if (device.bindDown('Right')) x += 1
      if (device.bindDown('ZoomIn')) {
        input.zoom += 0.1
      }
      if (device.bindDown('ZoomOut')) {
        input.zoom -= 0.1
      }
    }
    this.action = normalize([x, y])
    if (input.isMouseButtonDown(0)) this.action = normalize(input.mousePosition)
  }

  loadState(state: EntityState): void {
    super.loadState(state)
    this.history = range(50).map(_ => structuredClone(this.position))
    this.destroyed = false
  }
}
