import { Entrance } from '../../entity/entrance'
import type { Level } from '../level'
import { getChildById } from './getChildById'

export function addEntrances(level: Level): void {
  const layer = getChildById(level.svgNode, 'entranceLayer')
  const nodes = layer.children.filter(child => child.attributes.role === 'entrance')
  nodes.forEach(node => {
    const x = Number(node.attributes.cx as string)
    const y = Number(node.attributes.cy as string)
    const id = node.attributes.id as string
    void new Entrance(level, id, [x, y])
  })
}
