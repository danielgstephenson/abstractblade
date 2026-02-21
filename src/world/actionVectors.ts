import { angleToDir, range } from '../math'

export const actionVectors: number[][] = []

actionVectors.push([0, 0])

range(8).forEach((i) => {
  const angle = (2 * Math.PI * i) / 8
  const dir = angleToDir(angle)
  actionVectors.push(dir)
})
