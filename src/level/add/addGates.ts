// src/level/build/addLocks.ts
import { Gate } from '../../entity/gate'
import { insidePolygon } from '../../physics/raycast'
import type { Level } from '../level'
import { getChildById } from './getChildById'

export function addGates(level: Level): void {
  const layer = getChildById(level.svgNode, 'gateLayer')
  const nodes = layer.children.filter(child => child.name === 'text')
  nodes.forEach(node => {
    const x = parseFloat(node.attributes.x)
    const y = parseFloat(node.attributes.y)
    const gate = new Gate(level, [x, y])
    level.walls.forEach(wall => {
      if (insidePolygon([x, y], wall.polygon)) {
        gate.wall = wall
      }
    })
  })
}
