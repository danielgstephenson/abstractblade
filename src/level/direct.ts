import { act } from './brain'
import type { Bot } from '../entity/bot'
import { Level } from './level'
import { agentRadius, movePower, timeStep, visionRange } from '../parameters'
import { combine, dirFromTo, getDistance, getRandomDir, mul, roundDir } from '../math'

export function direct(level: Level): void {
  const player = level.player
  const chargers: Bot[] = []
  const attackers: Bot[] = []
  const defenders: Bot[] = []
  const evaders: Bot[] = []
  level.bots.forEach(bot => {
    if (bot.removed) return
    const hits = level.segmentCast(bot.position, player.position)
    if (hits.length > 0) {
      bot.force = [0, 0]
      wander(bot)
      return
    }
    if (Math.random() > bot.frequency * timeStep) return
    if (Math.random() < bot.noise) {
      bot.force = mul(movePower, roundDir(getRandomDir()))
      return
    }
    if (bot.goal === 'charge') chargers.push(bot)
    if (bot.goal === 'attack') attackers.push(bot)
    if (bot.goal === 'defend') defenders.push(bot)
    if (bot.goal === 'evade') evaders.push(bot)
  })
  void act(chargers, attackers, defenders, evaders, player)
}

export function wander(bot: Bot) {
  const dist = getDistance(bot.position, bot.wanderPoint)
  bot.force = mul(movePower, dirFromTo(bot.position, bot.wanderPoint))
  if (Math.random() > 0.1 * timeStep && dist > 3 * agentRadius) return
  const vector = mul(visionRange, getRandomDir())
  const hits = bot.level.rayCast(bot.position, vector)
  const reach = Math.min(1, ...hits)
  bot.wanderPoint = combine(1, bot.position, reach, vector)
}
