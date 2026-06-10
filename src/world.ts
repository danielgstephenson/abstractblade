import { Ticker } from 'pixi.js'
import { Game } from './game'
import { LevelView } from './view/levelView'
import { Level } from './level/level'
import { Level0 } from './level/level0'
import { Input } from './input'
import { Level1 } from './level/level1'
import { Level2 } from './level/level2'
import { EvadeBladeBrain } from './brain/evadeBladeBrain'
import { GuardBrain } from './brain/guardBrain'

export class World {
  input = new Input()
  evadeBladeBrain = new EvadeBladeBrain()
  guardBrain = new GuardBrain()
  levels: Level[] = []
  game: Game
  level: Level
  levelView: LevelView

  constructor(game: Game) {
    this.game = game
    this.buildLevels()
    this.level = this.levels[0]
    this.levelView = new LevelView(this)
    window.addEventListener('keydown', event => {
      if (event.repeat) return
      this.proceed()
    })
    window.addEventListener('mousedown', () => this.proceed())
  }

  update(time: Ticker): void {
    if (this.level.leaving) {
      this.level.leaving = false
      this.changeLevel(this.level.targetLevel, this.level.targetEntrance)
    }
    this.level.paused = this.input.paused
    this.level.player.handleInput(this.input)
    this.level.update(time)
    this.levelView.update()
  }

  changeLevel(levelIndex: number, entranceIndex: number): void {
    const blade = this.level.player.blade
    if (blade != null) blade.detach()
    const oldLevelView = this.levelView
    oldLevelView.visible = false
    this.level = this.levels[levelIndex]
    const entrance = this.level.entrances[entranceIndex]
    this.level.player.position = structuredClone(entrance.position)
    this.level.player.spawnPoint = structuredClone(entrance.position)
    this.level.player.trail = this.level.player.trail.map(_ => structuredClone(entrance.position))
    this.level.player.history = this.level.player.history.map(_ => structuredClone(entrance.position))
    this.level.saveBackup()
    this.levelView = new LevelView(this)
    oldLevelView.destroy({ children: true, texture: true, textureSource: true })
  }

  buildLevels(): void {
    void new Level0(this)
    void new Level1(this)
    void new Level2(this)
  }

  proceed(): void {
    if (this.level.player.destroyed) {
      this.level.loadBackup()
    }
  }
}
