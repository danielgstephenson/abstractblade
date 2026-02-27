import { Boundary } from './boundary'
import { Player } from './body/agent/player'
import { Agent } from './body/agent/agent'
import { Body } from './body/body'
import { Ticker } from 'pixi.js'
import { build } from './build'
import { step } from './step'
import { Rover } from './body/agent/rover'
import { Rock } from './body/rock'

export class World {
  boundaries: Boundary[] = []
  bodies: Body[] = []
  agents: Agent[] = []
  players: Player[] = []
  rovers: Rover[] = []
  rocks: Rock[] = []
  timeStep = 1 / 60
  time = 0
  accumulator = 0
  busy = false
  paused = false

  constructor(svgString?: string) {
    if (svgString == null) return
    build(this, svgString)
  }

  update(time: Ticker): void {
    this.accumulator += time.deltaTime * this.timeStep
    while (this.accumulator > this.timeStep) {
      this.accumulator -= this.timeStep
      this.bodies.forEach(b => b.preStep())
      step(this)
    }
  }

  addPlayer(position: number[]): Player {
    const player = new Player(this, position)
    return player
  }

  addRover(position: number[]): Rover {
    const rover = new Rover(this, position)
    return rover
  }

  addRock(position: number[], radius: number): Rock {
    const rock = new Rock(this, position, radius)
    return rock
  }

  addBoundary(points: number[][]): Boundary {
    const boundary = new Boundary(this, points)
    return boundary
  }
}
