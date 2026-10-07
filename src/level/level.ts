import { Container, Ticker } from 'pixi.js'
import { parseSync, type INode } from 'svgson'
import type { Game } from '../game'
import { Entity } from '../entity/entity'
import { bladeRadius, timeScale, timeStep } from '../parameters'
import { step } from '../physics'
import { Blade } from '../entity/blade'
import { Player } from '../entity/player'
import type { Agent } from '../entity/agent'
import { Bot } from '../entity/bot'
import { add, getRandomDir, mul } from '../math'
import type { Orb } from '../entity/orb'
import { Portal } from '../entity/portal'
import type { Wall } from '../entity/wall'
import { build } from './build/build'

export class Level extends Container {
  arenaDiv = document.getElementById('arena') as HTMLDivElement
  game: Game
  svgString: string
  svgNode: INode
  wallContainer = new Container()
  portalContainer = new Container()
  trailContainer = new Container()
  springContainer = new Container()
  bladeContainer = new Container()
  agentContainer = new Container()
  player: Player
  entities: Entity[] = []
  walls: Wall[] = []
  portals: Portal[] = []
  orbs: Orb[] = []
  agents: Agent[] = []
  blades: Blade[] = []
  resetRequested = false
  stepAccumulator = 0
  charge = 0
  paused = false
  index = 0

  constructor(game: Game, svgString: string) {
    super()
    this.game = game
    this.svgString = svgString
    this.svgNode = parseSync(this.svgString)
    this.addChild(this.wallContainer)
    this.addChild(this.portalContainer)
    this.addChild(this.trailContainer)
    this.addChild(this.springContainer)
    this.addChild(this.bladeContainer)
    this.addChild(this.agentContainer)
    this.player = new Player(this, [0, 0])
    const botPosition = mul(10 * bladeRadius, getRandomDir())
    const bot = new Bot(this, botPosition)
    bot.blade.position = add(bot.position, mul(6 * bladeRadius, getRandomDir()))
    void new Portal(this, [0, 0])
    build(this)
    this.game.app.stage.addChild(this)
  }

  update(time: Ticker): void {
    this.stepAccumulator += 0.001 * time.deltaMS * timeScale
    while (this.stepAccumulator > timeStep) {
      this.stepAccumulator -= timeStep
      this.entities.forEach(entity => entity.preStep())
      step(this)
      this.entities.forEach(entity => entity.postStep())
    }
    if (this.resetRequested) {
      this.destroy({ children: true })
      this.game.level = new Level(this.game, this.svgString)
      return
    }
    this.entities.forEach(entity => entity.preRender())
  }

  // setupArena(): void {
  //   this.arena.circle(0, 0, arenaRadius)
  //   this.arena.fill('black')
  // }

  reset(): void {
    this.resetRequested = true
  }
}
