import type { Application, Ticker } from 'pixi.js'
import { Level, type LevelSummary } from './level/level'
import { Input } from './input'
import { InputDevice } from 'pixijs-input-devices'

export class Game {
  cornerLabels = document.querySelectorAll('.cornerLabel') as NodeListOf<HTMLDivElement>
  app: Application
  level: Level
  input: Input
  starCount = 0
  summary = new Map<string, LevelSummary>()

  constructor(app: Application) {
    this.app = app
    this.input = new Input()
    this.level = new Level(this, 'level1')
    this.app.ticker.add(time => this.update(time))
    window.addEventListener('resize', () => this.layout())
    window.addEventListener('keydown', event => {
      if (event.repeat) return
      this.level.continue()
    })
    window.addEventListener('mousedown', () => {
      this.level.continue()
    })
    InputDevice.onBindDown('Continue', () => this.level.continue())
  }

  update(time: Ticker): void {
    this.countStars()
    this.level.update(time)
    this.layout()
  }

  countStars(): void {
    let starCount = 0
    this.level.stars.forEach(star => {
      if (star.removed) starCount += 1
    })
    this.summary.forEach(levelSummary => {
      if (levelSummary.id === this.level.id) return
      levelSummary.stars.forEach(removed => {
        if (removed) starCount += 1
      })
    })
    this.starCount = starCount
    this.cornerLabels.forEach(cornerLabel => {
      cornerLabel.innerHTML = `${this.starCount}`
    })
  }

  layout(): void {
    const { width, height } = this.app.screen
    const scale = 1.6 * Math.exp(0.1 * this.input.zoom)
    this.level.scale.set(scale)
    const x = width / 2 - this.level.player.position[0] * scale
    const y = height / 2 - this.level.player.position[1] * scale
    this.app.stage.position.set(x, y)
  }
}
