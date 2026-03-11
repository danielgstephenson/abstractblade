import { Ticker } from 'pixi.js'
import { Game } from './game'
import { LevelView } from './view/levelView'
import { Level } from './level/level'
import { Level1 } from './level/level1'
import { Level2 } from './level/level2'
import { Input } from './input'

export class World {
  input = new Input()
  levels: Record<number, Level> = {}
  game: Game
  currentLevel: Level
  levelView: LevelView

  constructor(game: Game) {
    this.game = game
    this.buildLevels()
    this.currentLevel = this.levels[1]
    this.levelView = new LevelView(this)
    this.changeLevel(2)
    window.addEventListener('keydown', event => {
      if (event.repeat) return
      this.proceed()
    })
    window.addEventListener('mousedown', () => this.proceed())
  }

  update(time: Ticker): void {
    this.currentLevel.player.handleInput(this.input)
    this.currentLevel.update(time)
    this.levelView.update()
  }

  changeLevel(levelIndex: number): void {
    this.levelView.destroy()
    this.currentLevel = this.levels[levelIndex]
    this.levelView = new LevelView(this)
  }

  buildLevels(): void {
    void new Level1(this)
    void new Level2(this)
  }

  proceed(): void {
    if (this.currentLevel.player.dead) {
      this.currentLevel.loadBackup()
    }
  }
}
