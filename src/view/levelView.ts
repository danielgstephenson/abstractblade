import { Container } from 'pixi.js'
import { TrailCircleView } from './trailCircleView'
import { CircleView } from './circleView'
import { BoundaryView } from './boundaryView'
import { StarView } from './starView'
import { DoorView } from './doorView'
import { TransporterView } from './transporterView'
import { SpawnView } from './spawnView'
import { SpringView } from './springView'
import { monsterColor, playerBladeColor, playerColor, rockColor, roverBladeColor, roverColor } from './colors'
import { World } from '../world'
import { Level } from '../level/level'

export class LevelView extends Container {
  level: Level
  world: World
  trailContainer: Container
  circleViews: CircleView[] = []
  springViews: SpringView[] = []
  starViews: StarView[] = []
  transporterViews: TransporterView[] = []
  doorViews: DoorView[] = []
  spawnViews: SpawnView[] = []

  constructor(world: World) {
    super()
    this.world = world
    this.level = world.level
    this.world.game.app.stage.addChild(this)
    this.trailContainer = new Container()
    this.build()
  }

  build(): void {
    this.level.boundaries.forEach(boundary => {
      void new BoundaryView(this, boundary)
    })
    this.level.transporters.forEach(transporter => {
      this.transporterViews.push(new TransporterView(this, transporter))
    })
    this.spawnViews.push(new SpawnView(this, this.level.player))
    this.level.stars.forEach(star => {
      this.starViews.push(new StarView(this, star))
    })
    this.level.doors.forEach(door => {
      this.doorViews.push(new DoorView(this, door))
    })
    this.addChild(this.trailContainer)
    this.level.rocks.forEach(rock => {
      this.circleViews.push(new CircleView(this, rock, rockColor))
    })
    this.level.blades.forEach(blade => {
      const color = blade.align === 0 ? playerBladeColor : roverBladeColor
      this.springViews.push(new SpringView(this, blade, color))
      this.circleViews.push(new TrailCircleView(this, blade, color))
    })
    this.level.monsters.forEach(monster => {
      this.circleViews.push(new TrailCircleView(this, monster, monsterColor))
    })
    this.circleViews.push(new TrailCircleView(this, this.level.player, playerColor))
    this.level.rovers.forEach(rover => {
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
    const player = this.level.player
    const offset = player != null ? player.position : [0, 0]
    const vmin = Math.min(window.innerWidth, window.innerHeight)
    this.scale = 0.004 * vmin * Math.exp(0.1 * this.world.input.zoom)
    this.x = 0.5 * window.innerWidth - this.scale.x * offset[0]
    this.y = 0.5 * window.innerHeight - this.scale.y * offset[1]
  }
}
