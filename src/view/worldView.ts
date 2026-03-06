import { Application, Container } from 'pixi.js'
import { World } from '../world/world'
import { Game } from '../game/game'
import { TrailCircleView } from './trailCircleView'
import { CircleView } from './circleView'
import { BoundaryView } from './boundaryView'
import { StarView } from './starView'
import { DoorView } from './doorView'
import { TransporterView } from './transporterView'
import { SpawnView } from './spawnView'
import { SpringView } from './springView'
import { monsterColor, playerBladeColor, playerColor, rockColor, roverBladeColor, roverColor } from './colors'

export class WorldView extends Container {
  world: World
  game: Game
  app: Application
  trailContainer: Container
  circleViews: CircleView[] = []
  springViews: SpringView[] = []
  starViews: StarView[] = []
  transporterViews: TransporterView[] = []
  doorViews: DoorView[] = []
  spawnViews: SpawnView[] = []

  constructor(game: Game, world: World) {
    super()
    console.time('WorldView contructor')
    this.game = game
    this.world = world
    this.app = this.game.app
    this.app.stage.addChild(this)
    this.trailContainer = new Container()
    this.build()
    console.timeEnd('WorldView contructor')
  }

  build(): void {
    this.world.boundaries.forEach(boundary => {
      void new BoundaryView(this, boundary)
    })
    this.world.transporters.forEach(transporter => {
      this.transporterViews.push(new TransporterView(this, transporter))
    })
    this.world.players.forEach(player => {
      this.spawnViews.push(new SpawnView(this, player))
    })
    this.world.doors.forEach(door => {
      this.doorViews.push(new DoorView(this, door))
    })
    this.addChild(this.trailContainer)
    this.world.rocks.forEach(rock => {
      this.circleViews.push(new CircleView(this, rock, rockColor))
    })
    this.world.monsters.forEach(monster => {
      this.circleViews.push(new TrailCircleView(this, monster, monsterColor))
    })
    this.world.blades.forEach(blade => {
      const color = blade.align === 0 ? playerBladeColor : roverBladeColor
      this.springViews.push(new SpringView(this, blade, color))
      this.circleViews.push(new TrailCircleView(this, blade, color))
    })
    this.world.stars.forEach(star => {
      this.starViews.push(new StarView(this, star))
    })
    this.world.players.forEach(player => {
      this.circleViews.push(new TrailCircleView(this, player, playerColor))
    })
    this.world.rovers.forEach(rover => {
      this.circleViews.push(new TrailCircleView(this, rover, roverColor))
    })
  }

  update(): void {
    this.updateCamera()
    this.circleViews.forEach(x => x.update())
    this.springViews.forEach(x => x.update())
    this.starViews.forEach(x => x.update())
    this.doorViews.forEach(x => x.update())
    this.transporterViews.forEach(x => x.update())
    this.spawnViews.forEach(x => x.update())
  }

  updateCamera(): void {
    const player = this.world.players[0]
    const offset = player != null ? player.position : [0, 0]
    const vmin = Math.min(window.innerWidth, window.innerHeight)
    this.scale = 0.007 * vmin * Math.exp(0.1 * this.game.input.zoom)
    this.x = 0.5 * window.innerWidth - this.scale.x * offset[0]
    this.y = 0.5 * window.innerHeight - this.scale.y * offset[1]
  }
}
