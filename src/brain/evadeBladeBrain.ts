import * as ort from 'onnxruntime-web'
import { Agent } from '../entity/circleBody/agent/agent'
import { combine, range, toMatrix, sub } from '../math'
import { roundVector } from '../simulation/actionVectors'

export class EvadeBladeBrain {
  session?: ort.InferenceSession
  busy = false
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

  async act(agents: Agent[], danger: Agent): Promise<void> {
    if (this.session == null) return
    if (this.busy) {
      console.log('busy')
      return
    }
    this.busy = true
    const bladePosition = danger.blade == null ? danger.position : danger.blade.position
    const bladeVelocity = danger.blade == null ? danger.velocity : danger.blade.velocity
    const states: number[] = []
    agents.forEach(agent => {
      states.push(...sub(danger.position, agent.position))
      states.push(...danger.velocity)
      states.push(...sub(bladePosition, agent.position))
      states.push(...bladeVelocity)
      states.push(...agent.velocity)
      states.push(...this.getVision(agent))
    })
    const data = new Float32Array(states)
    const dims = [agents.length, 26]
    const stateTensor = new ort.Tensor('float32', data, dims)
    const feeds = { state: stateTensor }
    const results = await this.session.run(feeds)
    const output = Array.from(results['grad'].data as Float32Array)
    const grads = toMatrix(output, [agents.length, 2])
    range(agents.length).forEach(i => {
      agents[i].action = roundVector(grads[i])
    })
    this.busy = false
  }
}
