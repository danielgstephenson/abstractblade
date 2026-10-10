import { Trigger } from '../../entity/trigger'
import { getDistance } from '../../math'
import { portalRadius } from '../../parameters'
import { insidePolygon } from '../../physics/raycast'
import type { Level } from '../level'
import { getArrows } from './getArrows'
import { getChildById } from './getChildById'

export function addTriggers(level: Level): void {
  const arrows = getArrows(level)
  const layer = getChildById(level.svgNode, 'portalLayer')
  const nodes = layer.children.filter(child => child.attributes.role === 'trigger')
  nodes.forEach(node => {
    const x = Number(node.attributes.cx as string)
    const y = Number(node.attributes.cy as string)
    const trigger = new Trigger(level, [x, y])
    const insideArrows = arrows.filter(a => getDistance(a[0], trigger.position) < portalRadius)
    insideArrows.forEach(arrow => {
      level.walls.forEach(wall => {
        if (insidePolygon(arrow[1], wall.polygon)) {
          trigger.wall = wall
        }
      })
    })
  })
}
