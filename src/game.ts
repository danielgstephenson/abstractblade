import type { Application, Ticker } from 'pixi.js'
import { Level, type LevelSummary } from './level/level'
import { Input } from './input'
import { InputDevice } from 'pixijs-input-devices'
import type { svgs } from './svg/svgs'

export class Game {
  joystick = document.getElementById('joystock') as HTMLDivElement
  cornerLabels = document.querySelectorAll('.cornerLabel')
  app: Application
  level: Level
  input: Input
  starCount = 0
  summary = new Map<string, LevelSummary>()
  startLevelId: keyof typeof svgs = 'level4'

  constructor(app: Application) {
    this.app = app
    this.input = new Input()
    this.level = this.load()
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
    this.layout() // layout after update so the camera tracks this frame's position
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
    const vmin = Math.min(width, height)
    const base = vmin / 500
    const scale = base * Math.exp(0.1 * this.input.zoom)
    this.level.scale.set(scale)
    const x = width / 2 - this.level.player.position[0] * scale
    const y = height / 2 - this.level.player.position[1] * scale
    this.app.stage.position.set(x, y)
  }

  load(): Level {
    const jsonLevelSummaries = localStorage.getItem('levelSummaries')
    console.log('jsonLevelSummaries', jsonLevelSummaries)
    if (jsonLevelSummaries == null) return new Level(this, this.startLevelId)
    const levelId = localStorage.getItem('levelId')
    if (levelId == null) return new Level(this, this.startLevelId)
    const levelSummaries = JSON.parse(jsonLevelSummaries) as LevelSummary[]
    levelSummaries.forEach(s => this.summary.set(s.id, s))
    const levelSummary = this.summary.get(levelId)
    if (levelSummary == null) return new Level(this, this.startLevelId)
    const level = new Level(this, levelSummary.id)
    level.player.position = levelSummary.savePosition
    return level
  }
}
