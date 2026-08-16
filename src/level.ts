import { Container, Graphics, Ticker } from "pixi.js";
import type { Game } from "./game";
import { Entity } from "./entity/entity";
import { guideColor, timeScale, timeStep } from "./parameters";
import { step } from "./step";

export class Level extends Container{
  arenaDiv = document.getElementById('arena') as HTMLDivElement
  game: Game
  graphics: Graphics
  accumulator = 0
  entities: Entity[] = []

  constructor(game: Game) {
    super()
    this.game = game
    this.layout()
    this.game.app.stage.addChild(this)
    this.graphics = new Graphics()
    this.addChild(this.graphics)
    window.addEventListener('resize',() => this.layout())
    this.setup()
  }

  update(time: Ticker): void {
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
    const player = new Entity(this,0,0,20,'hsl(220 100% 50%)')
    player.vx = 10
  }

  layout(): void {
    const { width, height } = this.game.app.screen
    this.position.set(width / 2, height / 2)
    this.scale.set(Math.min(width, height) / 1000)
  }
}