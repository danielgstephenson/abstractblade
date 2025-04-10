import { Simulation } from '../simulation'
import { FighterSummary } from './fighterSummary'

export class SimulationSummary {
  fighters: FighterSummary[]

  constructor (simulation: Simulation) {
    const fighters = [...simulation.fighters.values()]
    this.fighters = fighters.map(fighter => fighter.summarize())
  }
}
