import { Server } from './server'
import { Vec2, World } from 'planck'
import { Actor } from './actors/actor'
import { Cavern } from './actors/cavern'
import { Fighter } from './actors/fighter'
import { Runner } from './runner'
import { Layout } from './layout'
import { Collider } from './collider'
import { SimulationSummary } from './summaries/gameSummary'

export class Simulation {
  world: World
  layout: Layout
  cavern: Cavern
  server: Server
  runner: Runner
  collider: Collider
  summary: SimulationSummary
  actors = new Map<string, Actor>()
  fighters = new Map<string, Fighter>()
  startPoint = new Vec2(0, 0)

  constructor (server: Server) {
    this.server = server
    this.layout = new Layout()
    this.world = new World()
    this.cavern = new Cavern(this)
    this.runner = new Runner(this)
    this.collider = new Collider(this)
    this.summary = new SimulationSummary(this)
  }

  summarize (): SimulationSummary {
    return new SimulationSummary(this)
  }
}
