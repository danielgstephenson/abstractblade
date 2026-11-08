import { Rock } from '../../entity/rock'
import { checkCircleWall } from '../../physics/collide'
import type { Level } from '../level'

export function addRocks(level: Level): void {
  level.rockPoints.forEach(point => {
    const radius = 3 + 3 * Math.random()
    for (const wall of level.walls) {
      if (checkCircleWall(point, radius, wall)) {
        return
      }
    }
    void new Rock(level, point, radius)
  })
}
