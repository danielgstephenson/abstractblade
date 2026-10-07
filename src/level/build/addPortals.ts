import { Portal } from '../../entity/portal'
import { getDistance } from '../../math'
import { portalRadius } from '../../parameters'
import type { Level } from '../level'
import { getArrows } from './getArrows'
import { getChildById } from './getChildById'

export function addPortals(level: Level): void {
  const arrows = getArrows(level)
  const layer = getChildById(level.svgNode, 'portalLayer')
  const nodes = layer.children.filter(child => child.attributes.role === 'portal')
  nodes.forEach(node => {
    const x = Number(node.attributes.cx as string)
    const y = Number(node.attributes.cy as string)
    const portal = new Portal(level, [x, y])
    const insideArrows = arrows.filter(a => getDistance(a[0], portal.position) < portalRadius)
    insideArrows.forEach(arrow => {
      portal.target = arrow[1]
    })
  })
}
