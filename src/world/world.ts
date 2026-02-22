import { Game } from '../game/game'
import { WorldView } from '../game/view/worldView'
import { Boundary } from './boundary'
import { Player } from './body/player'
import { Agent } from './body/agent'
import { Body } from './body/body'
import { Ticker } from 'pixi.js'
import { combine, mul } from '../math'

export class World {
  game: Game
  view: WorldView
  boundaries: Boundary[] = []
  bodies: Body[] = []
  agents: Agent[] = []
  players: Player[] = []
  timeStep = 1 / 60
  time = 0
  accumulator = 0
  busy = false
  paused = false

  constructor(game: Game) {
    this.game = game
    this.view = new WorldView(this)
    this.addBoundary([
      [-20, -20],
      [+20, -20],
      [+20, +20],
      [-20, +20],
    ])
    this.addPlayer([0, 0])
  }

  update(time: Ticker): void {
    this.players.forEach(player => player.handleInput())
    this.accumulator += time.deltaTime * this.timeStep
    while (this.accumulator > this.timeStep) {
      this.accumulator -= this.timeStep
      this.step()
    }
    this.players.forEach(player => player.view.update())
    this.view.update()
  }

  step(): void {
    if (this.busy) {
      console.log('busy')
      return
    }
    if (this.paused) return
    const dt = this.timeStep
    this.time += dt
    this.bodies.forEach(body => {
      body.force = [0, 0]
      body.impulse = [0, 0]
      body.shift = [0, 0]
    })
    this.agents.forEach(agent => {
      if (agent.dead) return
      agent.force = mul(agent.movePower, agent.action)
    })
    this.bodies.forEach(body => {
      body.velocity = mul(1 - body.drag * dt, body.velocity)
      body.velocity = combine(1, body.velocity, dt / body.mass, body.force)
      body.velocity = combine(1, body.velocity, 1 / body.mass, body.impulse)
      body.position = combine(1, body.position, dt, body.velocity)
      body.position = combine(1, body.position, 1, body.shift)
    })
  }

  addPlayer(position: number[]): Player {
    const player = new Player(this, position)
    return player
  }

  addBoundary(points: number[][]): Boundary {
    const boundary = new Boundary(this, points)
    return boundary
  }
}
