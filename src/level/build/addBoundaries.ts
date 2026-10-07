import { Wall } from '../../entity/wall'
import type { Level } from '../level'
import { getChildById } from './getChildById'
import { getPathPoints } from './getPathPoints'

export function addBoundaries(level: Level) {
  const layer = getChildById(level.svgNode, 'boundaryLayer')
  const nodes = layer.children.filter(child => child.attributes.role === 'boundary')
  nodes.forEach(node => {
    const polygon = getPathPoints(node)
    void new Wall(level, polygon, 'black')
  })
}
