import { Boundary } from '../entity/polygonBody/boundary'
import { Player } from '../entity/circleBody/agent/player'
import { Agent } from '../entity/circleBody/agent/agent'
import { CircleBody } from '../entity/circleBody/circleBody'
import { Ticker } from 'pixi.js'
import { build } from '../physics/build'
import { step } from '../physics/step'
import { Rover } from '../entity/circleBody/agent/rover'
import { Rock } from '../entity/circleBody/rock'
import { Monster } from '../entity/circleBody/agent/monster'
import { Entity, EntityState } from '../entity/entity'
import { Star } from '../entity/star'
import { Door } from '../entity/polygonBody/door'
import { Transporter } from '../entity/transporter'
import { Blade } from '../entity/circleBody/blade'
import { Entrance } from '../entity/entrance'
import { rayCastPolygon, segmentCastPolygon } from '../physics/rayCast'
import { Wall } from '../entity/polygonBody/wall'
import { combine, sub } from '../math'
import { World } from '../world'

export type LevelState = EntityState[]

export class Level {
  world: World
  index: number
  boundaries: Boundary[] = []
  entities: Entity[] = []
  circleBodies: CircleBody[] = []
  agents: Agent[] = []
  player!: Player
  rovers: Rover[] = []
  monsters: Monster[] = []
  rocks: Rock[] = []
  blades: Blade[] = []
  stars: Star[] = []
  walls: Wall[] = []
  doors: Door[] = []
  transporters: Transporter[] = []
  entrances: Entrance[] = []
  timeStep = 0.02
  maxSpeed = 50
  timeScale = 1.5
  time = 0
  accumulator = 0
  leaving = false
  targetLevel = 2
  targetEntrance = 0
  paused = false
  busy = false
  backup: LevelState

  constructor(world: World, index: number, svgString: string) {
    this.world = world
    this.index = index
    build(this, svgString)
    this.backup = this.getState()
  }

  update(time: Ticker): void {
    this.accumulator += 0.001 * time.deltaMS * this.timeScale
    while (this.accumulator > this.timeStep) {
      this.accumulator -= this.timeStep
      step(this)
    }
  }

  getState(): LevelState {
    return this.entities.map(x => x.getState())
  }

  saveBackup(): void {
    this.backup = this.getState()
  }

  loadBackup(): void {
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

  addWall(points: number[][]): Wall {
    return new Wall(this, points)
  }

  addTransporter(position: number[], radius: number, target: number[]): Transporter {
    return new Transporter(this, position, radius, target)
  }

  addExit(position: number[], radius: number, targetLevel: number, targetEntrance: number): Transporter {
    const transporter = new Transporter(this, position, radius, position)
    transporter.exit = true
    transporter.targetLevel = targetLevel
    transporter.targetEntrance = targetEntrance
    return transporter
  }

  addBoundary(points: number[][]): Boundary {
    const boundary = new Boundary(this, points)
    return boundary
  }

  addEntrance(position: number[]): Entrance {
    const entrance = new Entrance(this, position)
    return entrance
  }

  segmentCast(segment: number[][]): number[] {
    const hitFactors: number[] = []
    this.boundaries.forEach(boundary => {
      hitFactors.push(...segmentCastPolygon(segment, boundary.polygon))
    })
    this.doors.forEach(door => {
      hitFactors.push(...segmentCastPolygon(segment, door.polygon))
    })
    this.walls.forEach(wall => {
      hitFactors.push(...segmentCastPolygon(segment, wall.polygon))
    })
    return hitFactors
  }

  segmentCastPoint(segment: number[][]): number[] {
    const hitFactors = this.segmentCast(segment)
    if (hitFactors.length === 0) return segment[1]
    const hitFactor = Math.min(...hitFactors)
    const vector = sub(segment[1], segment[0])
    return combine(1, segment[0], hitFactor, vector)
  }

  rayCast(start: number[], vector: number[]): number[] {
    const hitFactors: number[] = []
    this.boundaries.forEach(boundary => {
      hitFactors.push(...rayCastPolygon(start, vector, boundary.polygon))
    })
    this.doors.forEach(door => {
      hitFactors.push(...rayCastPolygon(start, vector, door.polygon))
    })
    this.walls.forEach(wall => {
      hitFactors.push(...rayCastPolygon(start, vector, wall.polygon))
    })
    return hitFactors
  }
}
