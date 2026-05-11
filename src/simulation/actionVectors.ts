import { angleToDir, dot, range, whichMax } from '../math'

export const actionVectors: number[][] = []
actionVectors.push([0, 0])
range(8).forEach(i => {
  const angle = (2 * Math.PI * i) / 8
  const dir = angleToDir(angle)
  actionVectors.push(dir)
})

export function roundVector(vector: number[]): number[] {
  const dots = actionVectors.map(actionVector => dot(vector, actionVector))
  return actionVectors[whichMax(dots)]
}
