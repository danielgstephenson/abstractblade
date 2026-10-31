import type { Level } from './level'
import { addInnerWalls } from './add/addInnerWalls'
import { addRooms } from './add/addRooms'
import { setupPlayer } from './add/setupPlayer'
import { addBots } from './add/addBots'
import { addPortals } from './add/addPortals'
import { addRocks } from './add/addRocks'
import { addTriggers } from './add/addTriggers'
import { addStars } from './add/addStars'
import { addGates } from './add/addGates'
import { addSavePoints } from './add/addSavePoints'

export function build(level: Level): void {
  setupPlayer(level)
  addRooms(level)
  addInnerWalls(level)
  addSavePoints(level)
  addGates(level)
  addRocks(level)
  addBots(level)
  addPortals(level)
  addTriggers(level)
  addStars(level)
  level.nonPlayerOrbs = level.orbs.filter(orb => {
    const notPlayer = orb.index != level.player.index
    const notPlayerBlade = orb.index != level.player.blade.index
    return notPlayer && notPlayerBlade
  })
}
