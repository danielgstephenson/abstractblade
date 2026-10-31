import { Rock } from '../../entity/rock'
import type { Level } from '../level'
import { getChildById } from './getChildById'

export function addRocks(level: Level): void {
  const layer = getChildById(level.svgNode, 'rockLayer')
  const nodes = layer.children.filter(child => child.attributes.role === 'rock')
  nodes.forEach(node => {
    const x = Number(node.attributes.cx)
    const y = Number(node.attributes.cy)
    const r = Number(node.attributes.r)
    void new Rock(level, [x, y], r)
  })
}
