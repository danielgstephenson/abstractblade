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
    const goals: string[] = []
    const intervals: number[] = []
    node.attributes.goals.split(',').forEach((str, i) => {
      if (i % 2 === 0) goals.push(str)
      else intervals.push(Number(str))
    })
    if (intervals.length === 0) intervals.push(100)
    bot.pattern = goals.map((goal, i) => [goal, intervals[i]])
    console.log('pattern', bot.pattern)
    bot.goal = goals[0]
    if (intervals.length > 0) bot.timer = intervals[0]
  })
}
