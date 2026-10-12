import { Container, Ticker } from 'pixi.js'
import { parseSync, type INode } from 'svgson'
import type { Game } from '../game'
import { Entity } from '../entity/entity'
import { timeScale, timeStep } from '../parameters'
import { step } from '../physics/step'
import { Blade } from '../entity/blade'
import { Player } from '../entity/player'
import type { Agent } from '../entity/agent'
import type { Orb } from '../entity/orb'
import { Portal } from '../entity/portal'
import type { Wall } from '../entity/wall'
import { build } from './build/build'
import type { Rock } from '../entity/rock'
import type { Trigger } from '../entity/trigger'
import type { Star } from '../entity/star'

export class Level extends Container {
  arenaDiv = document.getElementById('arena') as HTMLDivElement
  game: Game
  svgString: string
  svgNode: INode
  wallContainer = new Container()
  portalContainer = new Container()
  triggerContainer = new Container()
  starContainer = new Container()
  trailContainer = new Container()
  rockContainer = new Container()
  springContainer = new Container()
  bladeContainer = new Container()
  agentContainer = new Container()
  player: Player
  entities: Entity[] = []
  walls: Wall[] = []
  portals: Portal[] = []
  triggers: Trigger[] = []
  stars: Star[] = []
  orbs: Orb[] = []
  rocks: Rock[] = []
  agents: Agent[] = []
  blades: Blade[] = []
  id: string
  resetRequested = false
  stepAccumulator = 0
  charge = 0
  paused = false
  index = 0

  constructor(game: Game, id: string, svgString: string) {
    super()
    this.game = game
    this.id = id
    this.svgString = svgString
    this.svgNode = parseSync(this.svgString)
    this.addChild(this.wallContainer)
    this.addChild(this.portalContainer)
    this.addChild(this.triggerContainer)
    this.addChild(this.trailContainer)
    this.addChild(this.rockContainer)
    this.addChild(this.springContainer)
    this.addChild(this.bladeContainer)
    this.addChild(this.agentContainer)
    this.addChild(this.starContainer)
    this.player = new Player(this, [0, 0])
    build(this)
    this.load()
    this.game.app.stage.addChild(this)
  }

  update(time: Ticker): void {
    if (this.resetRequested) {
      this.destroy({ children: true })
      this.game.level = new Level(this.game, this.id, this.svgString)
      return
    }
    if (this.paused) return
    this.stepAccumulator += 0.001 * time.deltaMS * timeScale
    while (this.stepAccumulator > timeStep) {
      this.stepAccumulator -= timeStep
      this.entities.forEach(entity => entity.preStep())
      step(this)
      this.entities.forEach(entity => entity.postStep())
    }
    this.entities.forEach(entity => entity.preRender())
  }

  reset(): void {
    this.resetRequested = true
  }

  continue(): void {
    if (this.player.dead) this.reset()
  }

  save(): void {
    const levelSummary = {
      id: this.id,
      stars: this.stars.map(star => star.removed),
      triggers: this.triggers.map(trigger => trigger.removed),
      walls: this.walls.map(wall => wall.removed),
    }
    console.log('save')
    console.log(levelSummary)
    this.game.summary.set(this.id, levelSummary)
  }

  load(): void {
    console.log('load')
    const summary = this.game.summary.get(this.id)
    if (summary == null) return
    console.log(summary)
    summary.stars.forEach((removed, i) => {
      if (removed) this.stars[i].remove()
    })
    summary.triggers.forEach((removed, i) => {
      if (removed) this.triggers[i].remove()
    })
    summary.walls.forEach((removed, i) => {
      if (removed) this.walls[i].remove()
    })
  }
}

export interface LevelSummary {
  id: string
  stars: boolean[]
  triggers: boolean[]
  walls: boolean[]
}
