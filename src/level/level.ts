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
import { build } from './build'
import type { Rock } from '../entity/rock'
import type { Trigger } from '../entity/trigger'
import type { Star } from '../entity/star'
import { SavePoint } from '../entity/savePoint'
import { svgs } from '../svg/svgs'
import type { Entrance } from '../entity/entrance'
import type { Gate } from '../entity/gate'

export class Level extends Container {
  arenaDiv = document.getElementById('arena') as HTMLDivElement
  game: Game
  svgString: string
  svgNode: INode
  wallContainer = new Container()
  gateContainer = new Container()
  portalContainer = new Container()
  triggerContainer = new Container()
  starContainer = new Container()
  trailContainer = new Container()
  rockContainer = new Container()
  springContainer = new Container()
  bladeContainer = new Container()
  agentContainer = new Container()
  player: Player
  savePoint: SavePoint
  entities: Entity[] = []
  entrances: Entrance[] = []
  walls: Wall[] = []
  gates: Gate[] = []
  portals: Portal[] = []
  triggers: Trigger[] = []
  stars: Star[] = []
  orbs: Orb[] = []
  rocks: Rock[] = []
  agents: Agent[] = []
  blades: Blade[] = []
  activePortal?: Portal
  transportRequested = false
  id: keyof typeof svgs
  resetRequested = false
  stepAccumulator = 0
  charge = 0
  paused = false
  index = 0

  constructor(game: Game, id: keyof typeof svgs, entrance?: string) {
    super()
    this.game = game
    this.id = id
    this.svgString = svgs[id]
    this.svgNode = parseSync(this.svgString)
    this.addChild(this.wallContainer)
    this.addChild(this.gateContainer)
    this.addChild(this.portalContainer)
    this.addChild(this.triggerContainer)
    this.addChild(this.trailContainer)
    this.addChild(this.rockContainer)
    this.addChild(this.springContainer)
    this.addChild(this.bladeContainer)
    this.addChild(this.agentContainer)
    this.addChild(this.starContainer)
    this.player = new Player(this, [0, 0])
    this.savePoint = new SavePoint(this, [0, 0])
    build(this)
    this.load()
    console.log('entrance', entrance)
    this.entrances.forEach(e => {
      if (e.id === entrance) {
        this.player.position = structuredClone(e.position)
        this.player.blade.position = structuredClone(e.position)
      }
    })
    console.log('this.player.position', this.player.position)
    this.save()
    this.game.app.stage.addChild(this)
  }

  update(time: Ticker): void {
    if (this.resetRequested) {
      this.destroy({ children: true })
      this.game.level = new Level(this.game, this.id)
      return
    }
    if (this.transportRequested) {
      this.transportRequested = false
      if (this.activePortal == null) return
      if (this.activePortal.targetLevel == null) return
      if (this.activePortal.targetEntrance == null) return
      this.save()
      this.destroy({ children: true })
      this.game.level = new Level(this.game, this.activePortal.targetLevel, this.activePortal.targetEntrance)
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
    this.savePoint.position = structuredClone(this.player.position)
    const levelSummary = {
      id: this.id,
      stars: this.stars.map(star => star.removed),
      triggers: this.triggers.map(trigger => trigger.removed),
      walls: this.walls.map(wall => wall.removed),
      savePoint: this.player.position,
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
    this.savePoint.position = summary.savePoint
    this.player.position = summary.savePoint
    this.player.blade.position = summary.savePoint
  }
}

export interface LevelSummary {
  id: string
  stars: boolean[]
  triggers: boolean[]
  walls: boolean[]
  savePoint: number[]
}
