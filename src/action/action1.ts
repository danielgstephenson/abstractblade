import { attack } from '../brain/attack'
import type { Bot } from '../entity/bot'
import type { Level } from '../level/level'
import { combine, dirFromTo, mul, roundDir, sub } from '../math'
import { movePower } from '../parameters'

export function action1(level: Level): void {
  const player = level.player
  const attackers: Bot[] = []
  level.bots.forEach(bot => {
    if (bot.removed) return
    const hits = level.segmentCast(bot.position, player.position)
    if (hits.length > 0) return
    const toPlayer = dirFromTo(bot.position, player.position)
    const targetVel = combine(1, player.velocity, 100, toPlayer)
    const moveDir = roundDir(sub(targetVel, bot.velocity))
    bot.force = mul(movePower, moveDir)
    // attackers.push(bot)
  })
  void attack(attackers, player)
}
