import { Gate } from '../../entity/gate'
import { insidePolygon } from '../../physics/raycast'
import type { Level } from '../level'
import { getChildById } from './getChildById'

export function addGates(level: Level): void {
  const layer = getChildById(level.svgNode, 'gateLayer')
  const nodes = layer.children.filter(child => child.attributes.role === 'gate')
  nodes.forEach(node => {
    const x = parseFloat(node.attributes.x)
    const y = parseFloat(node.attributes.y)
    const gate = new Gate(level, [x, y])
    gate.quota = parseFloat(node.attributes.quota)
    level.innerWalls.forEach(wall => {
      if (insidePolygon([x, y], wall.polygon)) {
        gate.wall = wall
      }
    })
  })
}
