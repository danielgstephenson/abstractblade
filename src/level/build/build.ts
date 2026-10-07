import type { Level } from '../level'
import { addWalls } from './addWalls'
import { addBoundaries } from './addBoundaries'
import { setupPlayer } from './setupPlayer'
import { addBots } from './addBots'
import { addPortals } from './addPortals'

export function build(level: Level): void {
  addBoundaries(level)
  addWalls(level)
  setupPlayer(level)
  addBots(level)
  addPortals(level)
}
