import { Rock } from '../../entity/rock'
import type { Level } from '../level'

export function addRocks(level: Level): void {
  level.rockPoints.forEach(point => {
    const radius = 3 + 3 * Math.random()
    void new Rock(level, point, radius)
  })
}
