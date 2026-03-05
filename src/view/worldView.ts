import { Application, Color, Container } from 'pixi.js'
import { World } from '../world/world'
import { Game } from '../game/game'
import { TrailBodyView } from './agentView'
import { BodyView } from './bodyView'
import { BoundaryView } from './boundaryView'
import { StarView } from './starView'
import { DoorView } from './doorView'
import { TransporterView } from './transporterView'
import { SpawnView } from './spawnView'
import { SpringView } from './springView'

export const playerColor = new Color('hsl(220, 100%, 50%)')
export const roverColor = new Color('hsl(120, 100%, 35%)')
export const monsterColor = new Color('hsl(0, 100%, 40%)')
export const rockColor = new Color('hsl(120, 0%, 50%)')
export const playerBladeColor = new Color('hsl(190, 100%, 50%)')
export const roverBladeColor = new Color('hsl(150, 100%, 50%)')

export class WorldView extends Container {
  world: World
  game: Game
  app: Application
  trailContainer: Container
  bodyViews: BodyView[] = []
  springViews: SpringView[] = []
  starViews: StarView[] = []
  transporterViews: TransporterView[] = []
  doorViews: DoorView[] = []
  spawnView: SpawnView

  constructor(game: Game, world: World) {
    super()
    console.time('WorldView contructor')
    this.game = game
    this.world = world
    this.app = this.game.app
    this.app.stage.addChild(this)
    this.trailContainer = new Container()
    this.spawnView = new SpawnView(this)
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
    this.world.doors.forEach(door => {
      this.doorViews.push(new DoorView(this, door))
    })
    this.addChild(this.spawnView)
    this.addChild(this.trailContainer)
    this.world.stars.forEach(star => {
      this.starViews.push(new StarView(this, star))
    })
    this.world.rocks.forEach(rock => {
      this.bodyViews.push(new BodyView(this, rock, rockColor))
    })
    this.world.blades.forEach(blade => {
      const color = blade.align === 0 ? playerBladeColor : roverBladeColor
      this.springViews.push(new SpringView(this, blade, color))
      this.bodyViews.push(new TrailBodyView(this, blade, color))
    })
    this.world.players.forEach(player => {
      this.bodyViews.push(new TrailBodyView(this, player, playerColor))
    })
    this.world.rovers.forEach(rover => {
      this.bodyViews.push(new TrailBodyView(this, rover, roverColor))
    })
    this.world.monsters.forEach(monster => {
      this.bodyViews.push(new TrailBodyView(this, monster, monsterColor))
    })
  }

  update(): void {
    this.updateCamera()
    this.bodyViews.forEach(x => x.update())
    this.springViews.forEach(x => x.update())
    this.starViews.forEach(x => x.update())
    this.doorViews.forEach(x => x.update())
    this.transporterViews.forEach(x => x.update())
    this.spawnView.update()
  }

  updateCamera(): void {
    const player = this.world.players[0]
    const offset = player != null ? player.position : [0, 0]
    const vmin = Math.min(window.innerWidth, window.innerHeight)
    this.scale = 0.01 * vmin * Math.exp(0.1 * this.game.input.zoom)
    this.x = 0.5 * window.innerWidth - this.scale.x * offset[0]
    this.y = 0.5 * window.innerHeight - this.scale.y * offset[1]
  }
}
