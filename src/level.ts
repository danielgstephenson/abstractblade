import { Container, Graphics, Ticker } from "pixi.js"
import type { Game } from "./game"
import { Entity } from "./entity/entity"
import { arenaRadius, guideColor, timeScale, timeStep, wallColor } from "./parameters"
import { step } from "./step"
import { Player } from "./entity/player"
import { Bot } from "./entity/bot"
import type { Agent } from "./entity/agent"

export class Level extends Container{
  arenaDiv = document.getElementById('arena') as HTMLDivElement
  game: Game
  graphics: Graphics
  player: Player
  entities: Entity[] = []
  agents: Agent[] = []
  accumulator = 0
  paused = false

  constructor(game: Game) {
    super()
    this.graphics = new Graphics()
    this.game = game
    this.addChild(this.graphics)
    this.setup()
    this.player = new Player(this,[0,-100])
    void new Bot(this,[0,0])
    this.layout()
    this.game.app.stage.addChild(this)
    window.addEventListener('resize',() => this.layout())
  }

  update(time: Ticker): void {
    this.accumulator += 0.001 * time.deltaMS * timeScale
    while (this.accumulator > timeStep) {
      this.accumulator -= timeStep
      step(this)
    }
    this.layout()
    this.entities.forEach(entity => {
      entity.container.x = entity.position[0]
      entity.container.y = entity.position[1]
    })
  }

  setup(): void {
    this.graphics.circle(0,0,arenaRadius)
    this.graphics.stroke({width: 20, color: wallColor})
    this.graphics.fill('black')
    this.graphics.moveTo(0, arenaRadius)
    this.graphics.lineTo(0,-arenaRadius)
    this.graphics.stroke({width: 4, color: guideColor})
    this.graphics.moveTo(-arenaRadius,0)
    this.graphics.lineTo( arenaRadius,0)
    this.graphics.stroke({width: 4, color: guideColor})
    this.graphics.circle(0,0,0.5*arenaRadius)
    this.graphics.stroke({width: 4, color: guideColor})
    this.graphics.strokeStyle = {width: 8, color: guideColor }
    this.graphics.circle(0,0,25)
    this.graphics.stroke({width: 8, color: guideColor})
    this.graphics.fill('black')
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