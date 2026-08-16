import { Container, Graphics, Ticker } from "pixi.js"
import type { Game } from "./game"
import { Entity } from "./entity/entity"
import { arenaRadius, guideColor, playerColor, targetRadius, timeScale, timeStep } from "./parameters"
import { step } from "./step"
import { Player } from "./entity/player"
import { Bot } from "./entity/bot"
import type { Agent } from "./entity/agent"

export class Level extends Container {
  arenaDiv = document.getElementById('arena') as HTMLDivElement
  game: Game
  arena: Graphics
  chargeRing: Graphics
  player: Player
  entities: Entity[] = []
  agents: Agent[] = []
  trailContainer: Container
  stepAccumulator = 0
  charge = 0
  paused = false

  constructor(game: Game) {
    super()
    this.game = game
    this.arena = new Graphics()
    this.addChild(this.arena)
    this.setupArena()
    this.chargeRing = new Graphics()
    this.addChild(this.chargeRing)
    this.trailContainer = new Container()
    this.addChild(this.trailContainer)
    this.player = new Player(this,[0,-100])
    void new Bot(this,[0,0])
    this.layout()
    this.game.app.stage.addChild(this)
    window.addEventListener('resize',() => this.layout())
  }

  update(time: Ticker): void {
    this.stepAccumulator += 0.001 * time.deltaMS * timeScale
    while (this.stepAccumulator > timeStep) {
      this.stepAccumulator -= timeStep
      step(this)
    }
    this.layout()
    this.entities.forEach(entity => {
      entity.container.x = entity.position[0]
      entity.container.y = entity.position[1]
    })
    this.updateChargeRing()
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
    this.arena.circle(0,0,targetRadius)
    this.arena.stroke({width: 8, color: guideColor})
    this.arena.fill('black')
  }

  layout(): void {
    const { width, height } = this.game.app.screen
    const scale = 1.6*Math.exp(0.1 * this.game.input.zoom)
    this.scale.set(scale)
    const x = width / 2 - this.player.position[0] * scale
    const y = height / 2 - this.player.position[1] * scale
    this.game.app.stage.position.set(x,y)
  }
}