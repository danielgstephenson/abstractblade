import type { Level } from './level'
import { addWalls } from './add/addWalls'
import { addBoundaries } from './add/addBoundaries'
import { setupPlayer } from './add/setupPlayer'
import { addBots } from './add/addBots'
import { addPortals } from './add/addPortals'
import { addRocks } from './add/addRocks'
import { addTriggers } from './add/addTriggers'
import { addStars } from './add/addStars'
import { addEntrances } from './add/addEntrances'
import { addGates } from './add/addGates'

export function build(level: Level): void {
  setupPlayer(level)
  addBoundaries(level)
  addWalls(level)
  addGates(level)
  addRocks(level)
  addBots(level)
  addPortals(level)
  addTriggers(level)
  addStars(level)
  addEntrances(level)
}
