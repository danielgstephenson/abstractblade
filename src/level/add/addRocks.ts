import { Rock } from '../../entity/rock'
import type { Level } from '../level'
import { getChildById } from './getChildById'

export function addRocks(level: Level): void {
  const layer = getChildById(level.svgNode, 'rockLayer')
  const nodes = layer.children.filter(child => child.attributes.role === 'rock')
  nodes.forEach(node => {
    const x = Number(node.attributes.cx as string)
    const y = Number(node.attributes.cy as string)
    const r = Number(node.attributes.r as string)
    void new Rock(level, [x, y], r)
  })
}
