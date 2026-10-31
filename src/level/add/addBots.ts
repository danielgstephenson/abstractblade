import { Bot } from '../../entity/bot'
import type { Level } from '../level'
import { getChildById } from './getChildById'

export function addBots(level: Level): void {
  const layer = getChildById(level.svgNode, 'agentLayer')
  const nodes = layer.children.filter(child => child.attributes.role === 'bot')
  nodes.forEach(node => {
    const x = Number(node.attributes.cx)
    const y = Number(node.attributes.cy)
    const bot = new Bot(level, [x, y])
    bot.frequency = Number(node.attributes.frequency)
    bot.noise = Number(node.attributes.noise)
    bot.goal = node.attributes.goal
  })
}
