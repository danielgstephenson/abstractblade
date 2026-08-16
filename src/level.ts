import { Container, Graphics, Ticker } from "pixi.js"
import type { Game } from "./game"
import { Entity } from "./entity/entity"
import { guideColor, timeScale, timeStep } from "./parameters"
import { step } from "./step"
import { Player } from "./entity/player"

export class Level extends Container{
  arenaDiv = document.getElementById('arena') as HTMLDivElement
  game: Game
  graphics: Graphics
  accumulator = 0
  entities: Entity[] = []
  player: Player

  constructor(game: Game) {
    super()
    this.graphics = new Graphics()
    this.game = game
    this.addChild(this.graphics)
    this.setup()
    this.player = new Player(this,0,0)
    this.player.vx = 10
    this.layout()
    this.game.app.stage.addChild(this)
    window.addEventListener('resize',() => this.layout())
  }

  update(time: Ticker): void {
    this.layout()
    this.accumulator += 0.001 * time.deltaMS * timeScale
    while (this.accumulator > timeStep) {
      this.accumulator -= timeStep
      step(this)
    }
  }

  setup(): void {
    this.graphics.strokeStyle = {width: 7, color: guideColor }
    this.graphics.moveTo(0, 500)
    this.graphics.lineTo(0,-500)
    this.graphics.stroke()
    this.graphics.moveTo(-500,0)
    this.graphics.lineTo( 500,0)
    this.graphics.stroke()
    this.graphics.circle(0,0,250)
    this.graphics.stroke()
    this.graphics.circle(0,0,35)
    this.graphics.stroke()
    this.graphics.fill('black')
  }

  layout(): void {
    const { width, height } = this.game.app.screen
    this.game.app.stage.position.set(width / 2 - this.player.x, height / 2 - this.player.y)
    this.scale.set(1.5)
  }
}