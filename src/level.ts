import { Container, Graphics, Ticker } from "pixi.js"
import type { Game } from "./game"
import { Entity } from "./entity/entity"
import { arenaRadius, guideColor, timeScale, timeStep, wallColor } from "./parameters"
import { step } from "./step"
import { Player } from "./entity/player"

export class Level extends Container{
  arenaDiv = document.getElementById('arena') as HTMLDivElement
  game: Game
  graphics: Graphics
  player: Player
  entities: Entity[] = []
  accumulator = 0
  paused = false

  constructor(game: Game) {
    super()
    this.graphics = new Graphics()
    this.game = game
    this.addChild(this.graphics)
    this.setup()
    this.player = new Player(this,0,0)
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
    this.graphics.circle(0,0,35)
    this.graphics.stroke({width: 8, color: guideColor})
    this.graphics.fill('black')
  }

  layout(): void {
    const { width, height } = this.game.app.screen
    const scale = 1.5
    this.scale.set(scale)
    this.game.app.stage.position.set(width / 2 - this.player.x * scale, height / 2 - this.player.y * scale)
    this.scale.set(1.5)
  }
}