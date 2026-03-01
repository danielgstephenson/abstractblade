import { Input } from '../../../../game/input'
import { normalize } from '../../../../math'
import { World } from '../../../world'
import { Agent } from './agent'

export class Player extends Agent {
  drag = 0.7
  align = 0

  constructor(world: World, position: number[]) {
    super(world, position, 5)
    this.world.players.push(this)
  }

  handleInput(input: Input) {
    let x = 0
    let y = 0
    if (input.isKeyDown('KeyW') || input.isKeyDown('ArrowUp')) y -= 1
    if (input.isKeyDown('KeyS') || input.isKeyDown('ArrowDown')) y += 1
    if (input.isKeyDown('KeyA') || input.isKeyDown('ArrowLeft')) x -= 1
    if (input.isKeyDown('KeyD') || input.isKeyDown('ArrowRight')) x += 1
    this.action = normalize([x, y])
  }
}
