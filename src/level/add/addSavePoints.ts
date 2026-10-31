import { SavePoint } from '../../entity/savePoint'
import type { Level } from '../level'
import { getChildById } from './getChildById'
import { getPathPoints } from './getPathPoints'

export function addSavePoints(level: Level) {
  const layer = getChildById(level.svgNode, 'savePointLayer')
  const nodes = layer.children.filter(child => child.attributes.role === 'savePoint')
  console.log(`savePoint nodes ${nodes.length}`)
  nodes.forEach(node => {
    const polygon = getPathPoints(node)
    const id = node.attributes.id
    void new SavePoint(level, polygon, id)
  })
}
