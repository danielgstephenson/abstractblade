import { Fighter } from './fighter'
import { Game } from '../game'
import { Vec2 } from 'planck'
import { PlayerSummary } from '../summaries/playerSummary'
import { InputSummary } from '../summaries/inputSummary'
import { rotate } from '../math'

export class Player extends Fighter {
  spawnOffset = 2
  stars = [0]
  game: Game
  model: Fighter

  constructor (game: Game) {
    super(game, game.startPoint)
    this.game = game
    this.game.players.set(this.id, this)
    this.spawnPoint = this.simulation.startPoint
    this.team = 1
    this.respawn()
    this.model = new Fighter(this.game.simulation, this.position)
  }

  respawn (): void {
    const spawnAngle = Math.random() * 2 * Math.PI
    const offset = rotate(new Vec2(0, this.spawnOffset), spawnAngle)
    const startPoint = Vec2.add(this.spawnPoint, offset)
    this.dead = false
    this.body.setPosition(startPoint)
    this.blade.body.setPosition(startPoint)
    this.body.setLinearVelocity(new Vec2(0, 0))
    this.blade.body.setLinearVelocity(new Vec2(0, 0))
    this.updateConfiguration()
  }

  handleInput (input: InputSummary): void {
    const move = input.moveDir ?? new Vec2(0, 0)
    this.moveDir.x = move.x ?? 0
    this.moveDir.y = move.y ?? 0
  }

  getPlayerSummary (): PlayerSummary {
    return new PlayerSummary(this)
  }

  postStep (dt: number): void {
    super.postStep(dt)
  }

  remove (): void {
    super.remove()
    this.model.remove()
    this.dead = true
    this.game.players.delete(this.id)
  }
}
