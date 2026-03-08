import { Application } from 'pixi.js'
import { Simulation } from '../simulation/simulation'
import { Input } from './input'
import { SimulationView } from '../view/simulationView'
import { EntityState } from '../simulation/entity/entity'
import svgLevel1 from '../svg/level1.svg?raw'

export class Game {
  app: Application
  simulation: Simulation
  simulationView: SimulationView
  input: Input
  accumulator = 0
  saveState: EntityState[]

  constructor(app: Application) {
    this.app = app
    this.simulation = new Simulation(svgLevel1)
    this.simulationView = new SimulationView(this, this.simulation)
    this.input = new Input()
    this.saveState = this.simulation.getState()
    app.ticker.add(time => {
      this.simulation.players.forEach(player => player.handleInput(this.input))
      this.simulation.update(time)
      this.simulationView.update()
    })
    window.addEventListener('keydown', event => {
      if (event.repeat) return
      this.proceed()
    })
    window.addEventListener('mousedown', () => this.proceed())
  }

  proceed(): void {
    if (this.simulation.players[0].dead) {
      this.simulation.loadState()
    }
  }
}
