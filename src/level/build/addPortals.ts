import { Portal } from '../../entity/portal'
import type { Level } from '../level'
import { getChildById } from './getChildById'

export function addPortals(level: Level): void {
  const layer = getChildById(level.svgNode, 'portalLayer')
  const nodes = layer.children.filter(child => child.attributes.role === 'portal')
  nodes.forEach(node => {
    const x = Number(node.attributes.cx as string)
    const y = Number(node.attributes.cy as string)
    void new Portal(level, [x, y])
  })
}
