import { cross, range, sub } from '../math'

export function segmentCastPolygon(segment: number[][], polygon: number[][]): number[] {
  const hitFactors: number[] = []
  range(polygon.length).forEach(i => {
    const j = i > 0 ? i - 1 : polygon.length - 1
    const side = [polygon[i], polygon[j]]
    const sideHitFactors = segmentCastSegment(segment, side)
    hitFactors.push(...sideHitFactors)
  })
  return hitFactors
}

export function segmentCastSegment(segmentA: number[][], segmentB: number[][]): number[] {
  const xsA = segmentA.map(p => p[0])
  const xsB = segmentB.map(p => p[0])
  const xMaxA = Math.max(...xsA)
  const xMinB = Math.min(...xsB)
  if (xMaxA < xMinB) return []
  const xMinA = Math.min(...xsA)
  const xMaxB = Math.max(...xsB)
  if (xMaxB < xMinA) return []
  const ysA = segmentA.map(p => p[1])
  const ysB = segmentB.map(p => p[1])
  const yMaxA = Math.max(...ysA)
  const yMinB = Math.min(...ysB)
  if (yMaxA < yMinB) return []
  const yMinA = Math.min(...ysA)
  const yMaxB = Math.max(...ysB)
  if (yMaxB < yMinA) return []
  const aStart = segmentA[0]
  const aEnd = segmentA[1]
  const bStart = segmentB[0]
  const bEnd = segmentB[1]
  const aVector = sub(aEnd, aStart)
  const bVector = sub(bEnd, bStart)
  const startDifference = sub(aStart, bStart)
  const denominator = cross(bVector, aVector)
  if (denominator === 0) return []
  const aFactor = cross(startDifference, bVector) / denominator
  if (aFactor < 0) return []
  if (aFactor > 1) return []
  const bFactor = cross(startDifference, aVector) / denominator
  if (bFactor < 0) return []
  if (bFactor > 1) return []
  return [aFactor]
}
