import * as ort from 'onnxruntime-web'
import { Agent } from '../entity/circleBody/agent/agent'
import { range, toMatrix, sub } from '../math'
import { roundDir } from '../physics/actionVectors'
import { Player } from '../entity/circleBody/agent/player'

export class GuardBrain {
  session?: ort.InferenceSession
  busy = false
  inputSize = 18

  constructor() {
    this.setup()
  }

  async setup(): Promise<void> {
    ort.env.wasm.wasmPaths = 'https://cdn.jsdelivr.net/npm/onnxruntime-web@latest/dist/'
    const session = await ort.InferenceSession.create('onnx/guard.onnx')
    this.session = session
    const testData = new Float32Array(range(this.inputSize))
    const testDims = [1, this.inputSize]
    const testTensor = new ort.Tensor('float32', testData, testDims)
    const testFeeds = { state: testTensor }
    this.session.run(testFeeds)
  }

  async act(agents: Agent[], player: Player, guardPoint: number[]): Promise<void> {
    if (this.session == null) return
    if (this.busy) {
      console.log('busy')
      return
    }
    this.busy = true
    const states: number[] = []
    agents.forEach(agent => {
      if (agent.destroyed) return
      if (agent.blade == null || player.blade == null) {
        agent.action = [0, 0]
        return
      }
      states.push(...agent.velocity)
      states.push(...player.velocity)
      states.push(...agent.blade.velocity)
      states.push(...player.blade.velocity)
      states.push(...sub(agent.position, guardPoint))
      states.push(...sub(player.position, guardPoint))
      states.push(...sub(agent.blade.position, guardPoint))
      states.push(...sub(player.blade.position, guardPoint))
      states.push(...[1, 1])
    })
    if (states.length > 0) {
      // console.log('state:', Array.from(states))
      const data = new Float32Array(states)
      const dims = [agents.length, this.inputSize]
      const stateTensor = new ort.Tensor('float32', data, dims)
      const feeds = { state: stateTensor }
      const results = await this.session.run(feeds)
      const output = Array.from(results['grad'].data as Float32Array)
      const grads = toMatrix(output, [agents.length, 2])
      // console.log('grad:', output.slice(0, 2))
      range(agents.length).forEach(i => {
        agents[i].action = roundDir(grads[i])
      })
    }
    this.busy = false
  }
}
