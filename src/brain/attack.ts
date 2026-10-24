import * as ort from 'onnxruntime-web'
import { actionVectors, mul, range, sub, toMatrix, whichMax } from '../math'
import type { Agent } from '../entity/agent'
import { movePower } from '../parameters'

let busy = true
const session = await ort.InferenceSession.create('onnx/attack.onnx')
const inputSize = 14
busy = false

export async function attack(attackers: Agent[], target: Agent) {
  if (busy) {
    console.log('busy')
    return
  }
  busy = true
  const actors: Agent[] = []
  const states: number[] = []
  attackers.forEach(attacker => {
    if (attacker.blade == null) return
    if (target.blade == null) return
    actors.push(attacker)
    states.push(...attacker.velocity)
    states.push(...target.velocity)
    states.push(...attacker.blade.velocity)
    states.push(...target.blade.velocity)
    states.push(...sub(attacker.blade.position, attacker.position))
    states.push(...sub(target.blade.position, attacker.position))
    states.push(...sub(target.position, attacker.position))
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
  busy = false
}
