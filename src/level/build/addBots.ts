import { Bot } from '../../entity/bot'
import type { Level } from '../level'
import { getChildById } from './getChildById'

export function addBots(level: Level): void {
  const layer = getChildById(level.svgNode, 'agentLayer')
  const nodes = layer.children.filter(child => child.attributes.role === 'bot')
  nodes.forEach(node => {
    const x = Number(node.attributes.cx as string)
    const y = Number(node.attributes.cy as string)
    void new Bot(level, [x, y])
  })
}
