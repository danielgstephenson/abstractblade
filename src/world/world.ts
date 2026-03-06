import { Boundary } from './entity/boundary'
import { Player } from './entity/circleBody/agent/player'
import { Agent } from './entity/circleBody/agent/agent'
import { CircleBody } from './entity/circleBody/circleBody'
import { Ticker } from 'pixi.js'
import { build } from './build'
import { step } from './step'
import { Rover } from './entity/circleBody/agent/rover'
import { Rock } from './entity/circleBody/rock'
import { Monster } from './entity/circleBody/agent/monster'
import { Entity, EntityState } from './entity/entity'
import { Star } from './entity/star'
import { Door } from './entity/door'
import { Transporter } from './entity/transporter'
import { Blade } from './entity/circleBody/blade'

export type WorldState = EntityState[]

export class World {
  backup: WorldState
  boundaries: Boundary[] = []
  entities: Entity[] = []
  bodies: CircleBody[] = []
  agents: Agent[] = []
  players: Player[] = []
  rovers: Rover[] = []
  monsters: Monster[] = []
  rocks: Rock[] = []
  stars: Star[] = []
  doors: Door[] = []
  blades: Blade[] = []
  transporters: Transporter[] = []
  timeStep = 1 / 60
  timeScale = 2
  time = 0
  accumulator = 0
  busy = false
  paused = false

  constructor(svgString: string) {
    build(this, svgString)
    this.backup = this.getState()
  }

  update(time: Ticker): void {
    this.accumulator += time.deltaTime * this.timeStep
    while (this.accumulator > this.timeStep) {
      this.accumulator -= this.timeStep
      step(this)
    }
  }

  getState(): WorldState {
    return this.entities.map(x => x.getState())
  }

  saveState(): void {
    this.backup = this.getState()
  }

  loadState(): void {
    this.entities.map((entity, i) => {
      entity.loadState(this.backup[i])
    })
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

  addBlade(position: number[], align: number): Blade {
    return new Blade(this, position, align)
  }

  addStar(position: number[]): Star {
    return new Star(this, position)
  }

  addDoor(points: number[][], vector: number[]): Door {
    return new Door(this, points, vector)
  }

  addTransporter(position: number[], target: number[]): Transporter {
    return new Transporter(this, position, target)
  }

  addBoundary(points: number[][]): Boundary {
    const boundary = new Boundary(this, points)
    return boundary
  }
}
