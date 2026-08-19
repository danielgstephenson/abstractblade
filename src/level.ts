import { Container, Graphics, Ticker } from "pixi.js"
import type { Game } from "./game"
import { Entity } from "./entity/entity"
import { arenaRadius, bladeRadius, guideColor, playerColor, targetRadius, timeScale, timeStep } from "./parameters"
import { step } from "./physics"
import { Blade } from "./entity/blade"
import { Player } from "./entity/player"
import type { Agent } from "./entity/agent"
import { Bot } from "./entity/bot"

export class Level extends Container {
  arenaDiv = document.getElementById('arena') as HTMLDivElement
  game: Game
  arena = new Graphics()
  chargeRing = new Graphics()
  trailContainer = new Container()
  springContainer = new Container()
  bladeContainer = new Container()
  agentContainer = new Container()
  player: Player
  entities: Entity[] = []
  agents: Agent[] = []
  blades: Blade[] = []
  stepAccumulator = 0
  charge = 0
  paused = false
  index = 0

  constructor(game: Game) {
    super()
    this.game = game
    this.addChild(this.arena)
    this.setupArena()
    this.addChild(this.chargeRing)
    this.addChild(this.trailContainer)
    this.addChild(this.springContainer)
    this.addChild(this.bladeContainer)
    this.addChild(this.agentContainer)
    const startDist = 500-bladeRadius
    const startAngle = 2*Math.PI*Math.random()
    const startPosition = [
      startDist * Math.cos(startAngle),
      startDist * Math.sin(startAngle),
    ]
    this.player = new Player(this,startPosition)
    void new Bot(this,[0,0])
    this.game.app.stage.addChild(this)
  }

  update(time: Ticker): void {
    this.stepAccumulator += 0.001 * time.deltaMS * timeScale
    while (this.stepAccumulator > timeStep) {
      this.stepAccumulator -= timeStep
      step(this)
    }
    this.entities.forEach(entity => {
      entity.container.x = entity.position[0]
      entity.container.y = entity.position[1]
    })
    this.updateChargeRing()
    this.entities.forEach(entity => entity.preRender())
  }

  updateChargeRing(): void {
    this.chargeRing.clear()
    const angleStart = 1.5 * Math.PI
    const angleEnd = Math.PI * (1.5 + 2 * this.charge)
    this.chargeRing
      .arc(0, 0, 0.25*arenaRadius, angleStart, angleEnd)
      .stroke({ color: playerColor, alpha: 0.2, join: 'round', cap: 'round', width: 8 })
  }

  setupArena(): void {
    this.arena.circle(0,0,arenaRadius)
    this.arena.fill('black')
    this.arena.moveTo(0, arenaRadius)
    this.arena.lineTo(0,-arenaRadius)
    this.arena.stroke({width: 4, color: guideColor})
    this.arena.moveTo(-arenaRadius,0)
    this.arena.lineTo( arenaRadius,0)
    this.arena.stroke({width: 4, color: guideColor})
    this.arena.circle(0,0,0.5*arenaRadius)
    this.arena.stroke({width: 4, color: guideColor})
    this.arena.strokeStyle = {width: 8, color: guideColor }
    this.arena.circle(0,0,targetRadius-4)
    this.arena.stroke({width: 8, color: guideColor})
    this.arena.fill('black')
  }

  onComplete(): void {
    this.destroy()
    const newLevel = new Level(this.game)
    newLevel.index = this.index + 1
    this.game.level = newLevel
  }
}