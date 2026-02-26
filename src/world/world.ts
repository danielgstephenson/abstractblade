import { Boundary } from './boundary'
import { Player } from './body/player'
import { Agent } from './body/agent'
import { Body } from './body/body'
import { Ticker } from 'pixi.js'
import { build } from './build'
import { step } from './step'

export class World {
  boundaries: Boundary[] = []
  bodies: Body[] = []
  agents: Agent[] = []
  players: Player[] = []
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
      step(this)
    }
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
