import type { Level } from '../level'
import { addWalls } from './addWalls'
import { addBoundaries } from './addBoundaries'
import { setupPlayer } from './setupPlayer'
import { addBots } from './addBots'
import { addPortals } from './addPortals'
import { addRocks } from './addRocks'

export function build(level: Level): void {
  setupPlayer(level)
  addBoundaries(level)
  addWalls(level)
  addRocks(level)
  addBots(level)
  addPortals(level)
}
