import type { Level } from '../level'
import { getChildById } from './getChildById'

export function setupPlayer(level: Level) {
  const layer = getChildById(level.svgNode, 'agentLayer')
  const nodes = layer.children.filter(child => child.attributes.role === 'player')
  nodes.forEach(node => {
    const x = Number(node.attributes.cx as string)
    const y = Number(node.attributes.cy as string)
    level.player.position = [x, y]
    level.player.blade.position = [x, y]
  })
}
