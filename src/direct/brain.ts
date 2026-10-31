import * as ort from 'onnxruntime-web'
import { actionVectors, mul, range, sub, toMatrix, whichMax } from '../math'
import type { Agent } from '../entity/agent'
import { movePower } from '../parameters'

const inputSize = 22

export const chargeSession = await ort.InferenceSession.create('onnx/charge.onnx')
export const attackSession = await ort.InferenceSession.create('onnx/attack.onnx')
export const defendSession = await ort.InferenceSession.create('onnx/defend.onnx')
export const evadeSession = await ort.InferenceSession.create('onnx/evade.onnx')

const running = new Set<ort.InferenceSession>()

export async function act(session: ort.InferenceSession, bots: Agent[], target: Agent) {
  if (running.has(session)) return
  running.add(session)
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
  } finally {
    running.delete(session)
  }
}
