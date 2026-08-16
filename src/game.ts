import type { Application, Ticker } from "pixi.js"
import { Level } from "./level"

export class Game {
  app: Application
  level: Level

  constructor(app: Application) {
    this.app = app
    this.level = new Level(this)
    this.app.ticker.add(time => this.update(time))
  }

  update(time: Ticker): void {
    this.level.update(time)
  }
}