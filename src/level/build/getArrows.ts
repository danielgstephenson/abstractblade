import type { Level } from '../level'
import { getChildById } from './getChildById'
import { getPathPoints } from './getPathPoints'

export function getArrows(level: Level): number[][][] {
  const layer = getChildById(level.svgNode, 'arrowLayer')
  const nodes = layer.children.filter(child => child.attributes.role === 'arrow')
  const arrows = nodes.map(node => {
    return getPathPoints(node)
  })
  return arrows
}
