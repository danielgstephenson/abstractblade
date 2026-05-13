import * as ort from 'onnxruntime-web'
import { Agent } from '../entity/circleBody/agent/agent'
import { combine, range, sub } from '../math'
import { roundVector } from '../simulation/actionVectors'

export class EvadeBrain {
  session?: ort.InferenceSession
  visionReach = 100
  visionDirs: number[][] = []

  constructor() {
    this.setup()
    range(8).forEach(i => {
      const angle = (2 * Math.PI * i) / 8
      const dir = [Math.cos(angle), Math.sin(angle)]
      this.visionDirs.push(dir)
    })
  }

  async setup(): Promise<void> {
    ort.env.wasm.wasmPaths = 'https://cdn.jsdelivr.net/npm/onnxruntime-web@latest/dist/'
    const session = await ort.InferenceSession.create('onnx/dodge.onnx')
    this.session = session
  }

  getVision(agent: Agent): number[] {
    const visionPoints = this.visionDirs.map(visionDir => {
      const lookPoint = combine(1, agent.position, this.visionReach, visionDir)
      const segment = [agent.position, lookPoint]
      const hitPoint = agent.simulation.segmentCastPoint(segment)
      return sub(hitPoint, agent.position)
    })
    return visionPoints.flat()
  }

  async act(agent: Agent, otherAgent: Agent): Promise<void> {
    if (this.session == null) return
    if (agent.thinking) return
    agent.thinking = true
    const bladePosition = otherAgent.blade == null ? otherAgent.position : otherAgent.blade.position
    const bladeVelocity = otherAgent.blade == null ? otherAgent.velocity : otherAgent.blade.velocity
    const state: number[] = []
    state.push(...sub(otherAgent.position, agent.position))
    state.push(...otherAgent.velocity)
    state.push(...sub(bladePosition, agent.position))
    state.push(...bladeVelocity)
    state.push(...agent.velocity)
    state.push(...this.getVision(agent))
    const data = new Float32Array(state)
    const dims = [1, 26]
    const stateTensor = new ort.Tensor('float32', data, dims)
    const feeds = { state: stateTensor }
    const results = await this.session.run(feeds)
    const output = Array.from(results['grad'].data as Float32Array)
    agent.action = roundVector(output)
    agent.thinking = false
  }
}
