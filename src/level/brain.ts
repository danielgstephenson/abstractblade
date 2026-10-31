import * as ort from 'onnxruntime-web'
import { actionVectors, mul, range, sub, toMatrix, whichMax } from '../math'
import type { Agent } from '../entity/agent'
import { movePower } from '../parameters'
import type { Bot } from '../entity/bot'

const inputSize = 22

let busy = true
export const chargeSession = await ort.InferenceSession.create('onnx/charge.onnx')
export const attackSession = await ort.InferenceSession.create('onnx/attack.onnx')
export const defendSession = await ort.InferenceSession.create('onnx/defend.onnx')
export const evadeSession = await ort.InferenceSession.create('onnx/evade.onnx')
busy = false

export async function act(chargers: Bot[], attackers: Bot[], defenders: Bot[], evaders: Bot[], target: Agent) {
  if (busy) return
  busy = true
  try {
    await actSession(chargeSession, chargers, target)
    await actSession(attackSession, attackers, target)
    await actSession(defendSession, defenders, target)
    await actSession(evadeSession, evaders, target)
  } catch (error) {
    console.error('act failed', error)
  } finally {
    busy = false
  }
}

export async function actSession(session: ort.InferenceSession, bots: Agent[], target: Agent) {
  try {
    const actors: Agent[] = []
    const states: number[] = []
    bots.forEach(bot => {
      if (bot.blade == null) return
      if (target.blade == null) return
      actors.push(bot)
      states.push(...bot.velocity)
      states.push(...target.velocity)
      states.push(...bot.blade.velocity)
      states.push(...target.blade.velocity)
      states.push(...sub(bot.blade.position, bot.position))
      states.push(...sub(target.blade.position, bot.position))
      states.push(...sub(target.position, bot.position))
      states.push(...bot.level.visionCast(bot.position))
    })
    if (states.length > 0) {
      const data = new Float32Array(states)
      const dims = [actors.length, inputSize]
      const stateTensor = new ort.Tensor('float32', data, dims)
      const feeds = { state: stateTensor }
      const results = await session.run(feeds)
      const output = Array.from(results.action_values.data as Float32Array)
      const actionValues = toMatrix(output, [actors.length, 9])
      range(actors.length).forEach(i => {
        const action = whichMax(actionValues[i])
        const dir = actionVectors[action]
        actors[i].force = mul(movePower, dir)
      })
    }
  } catch (error) {
    console.error('act failed', error)
  }
}
