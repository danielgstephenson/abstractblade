import { Application, ColorMatrixFilter, Container } from 'pixi.js'
import { World } from '../world/world'
import { Game } from '../game/game'
import { AgentView } from './agentView'
import { BodyView } from './bodyView'
import { BoundaryView } from './boundaryView'
import { StarView } from './starView'
import { DoorView } from './doorView'

const playerColor = 'hsl(220, 100%, 50%)'
const roverColor = 'hsl(120, 100%, 35%)'
const monsterColor = 'hsl(0, 100%, 40%)'
const rockColor = 'hsl(120, 0%, 50%)'

export class WorldView extends Container {
  world: World
  game: Game
  app: Application
  layer1: Container
  layer2: Container
  layer3: Container
  bodyViews: BodyView[] = []
  starViews: StarView[] = []
  doorViews: DoorView[] = []

  constructor(game: Game, world: World) {
    super()
    this.game = game
    this.world = world
    this.app = this.game.app
    this.app.stage.addChild(this)
    this.layer1 = new Container()
    this.layer2 = new Container()
    this.layer3 = new Container()
    this.addChild(this.layer1)
    this.addChild(this.layer2)
    this.addChild(this.layer3)
    const colorMatrix = new ColorMatrixFilter()
    colorMatrix.brightness(navigator.maxTouchPoints > 0 ? 4 : 1, false)
    this.layer1.filters = [colorMatrix]
    this.build()
  }

  build(): void {
    this.world.boundaries.forEach(boundary => {
      void new BoundaryView(this, boundary)
    })
    this.world.doors.forEach(door => {
      this.doorViews.push(new DoorView(this, door))
    })
    this.world.stars.forEach(star => {
      this.starViews.push(new StarView(this, star))
    })
    this.world.players.forEach(player => {
      this.bodyViews.push(new AgentView(this, player, playerColor))
    })
    this.world.rovers.forEach(rover => {
      this.bodyViews.push(new AgentView(this, rover, roverColor))
    })
    this.world.monsters.forEach(monster => {
      this.bodyViews.push(new AgentView(this, monster, monsterColor))
    })
    this.world.rocks.forEach(rock => {
      this.bodyViews.push(new BodyView(this, rock, rockColor))
    })
  }

  update(): void {
    this.updateCamera()
    this.bodyViews.forEach(x => x.update())
    this.starViews.forEach(x => x.update())
    this.doorViews.forEach(x => x.update())
  }

  updateCamera(): void {
    const player = this.world.players[0]
    const offset = player != null ? player.position : [0, 0]
    const vmin = Math.min(window.innerWidth, window.innerHeight)
    console.log('test', 1)
    this.scale = 0.01 * vmin * Math.exp(0.1 * this.game.input.zoom)
    this.x = 0.5 * window.innerWidth - this.scale.x * offset[0]
    this.y = 0.5 * window.innerHeight - this.scale.y * offset[1]
  }
}
