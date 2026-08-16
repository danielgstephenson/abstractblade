import type { Application, Ticker } from "pixi.js"
import { Level } from "./level"
import { Input } from "./input"

export class Game {
  app: Application
  level: Level
  input: Input

  constructor(app: Application) {
    this.app = app
    this.level = new Level(this)
    this.input = new Input()
    this.app.ticker.add(time => this.update(time))
  }

  update(time: Ticker): void {
    this.level.update(time)
  }
}