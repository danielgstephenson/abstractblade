import { Boundary } from './entity/boundary'
import { Player } from './entity/body/agent/player'
import { Agent } from './entity/body/agent/agent'
import { Body } from './entity/body/body'
import { Ticker } from 'pixi.js'
import { build } from './build'
import { step } from './step'
import { Rover } from './entity/body/agent/rover'
import { Rock } from './entity/body/rock'
import { Monster } from './entity/body/agent/monster'
import { Entity } from './entity/entity'
import { Star } from './entity/star'

export class World {
  boundaries: Boundary[] = []
  entities: Entity[] = []
  bodies: Body[] = []
  agents: Agent[] = []
  players: Player[] = []
  rovers: Rover[] = []
  monsters: Monster[] = []
  rocks: Rock[] = []
  stars: Star[] = []
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
    return new Player(this, position)
  }

  addRover(position: number[]): Rover {
    return new Rover(this, position)
  }

  addMonster(position: number[]): Monster {
    return new Monster(this, position)
  }

  addRock(position: number[], radius: number): Rock {
    return new Rock(this, position, radius)
  }

  addStar(position: number[]): Star {
    return new Star(this, position)
  }

  addBoundary(points: number[][]): Boundary {
    const boundary = new Boundary(this, points)
    return boundary
  }
}
