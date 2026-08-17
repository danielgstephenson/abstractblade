import type { Application, Ticker } from "pixi.js"
import { Level } from "./level"
import { Input } from "./input"

export class Game {
  app: Application
  level: Level
  input: Input

  constructor(app: Application) {
    this.app = app
    this.input = new Input()
    this.level = new Level(this)
    this.app.ticker.add(time => this.update(time))
    window.addEventListener('resize',() => this.layout())
  }

  update(time: Ticker): void {
    this.level.update(time)
    this.layout()
  }

  layout(): void {
    const { width, height } = this.app.screen
    const scale = 1.6*Math.exp(0.1 * this.input.zoom)
    this.level.scale.set(scale)
    const x = width / 2 - this.level.player.position[0] * scale
    const y = height / 2 - this.level.player.position[1] * scale
    this.app.stage.position.set(x,y)
  }
}