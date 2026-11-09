import { Sign } from '../../entity/sign'
import type { Level } from '../level'
import { getChildById } from './getChildById'

export function addSigns(level: Level): void {
  const layer = getChildById(level.svgNode, 'gateLayer')
  const nodes = layer.children.filter(child => child.attributes.role === 'sign')
  nodes.forEach(node => {
    const x = parseFloat(node.attributes.x)
    const y = parseFloat(node.attributes.y)
    const text = node.children[0].children[0].value
    void new Sign(level, [x, y], text)
  })
}
