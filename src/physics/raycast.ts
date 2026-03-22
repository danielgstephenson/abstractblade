import { cross, range, sub } from '../math'

export function rayCastPolygon(rayStart: number[], rayVector: number[], polygon: number[][]): number[] {
  const hitFactors: number[] = []
  range(polygon.length).forEach(i => {
    const j = i > 0 ? i - 1 : polygon.length - 1
    const side = [polygon[i], polygon[j]]
    const sideHitFactors = rayCastSegment(rayStart, rayVector, side)
    hitFactors.push(...sideHitFactors)
  })
  return hitFactors
}

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

export function rayCastSegment(rayStart: number[], rayVector: number[], segment: number[][]): number[] {
  const segmentStart = segment[0]
  const segmentEnd = segment[1]
  const segmentVector = sub(segmentEnd, segmentStart)
  const startDifference = sub(segmentStart, rayStart)
  const denominator = cross(rayVector, segmentVector)
  if (denominator === 0) return []
  const rayFactor = cross(startDifference, segmentVector) / denominator
  if (rayFactor < 0) return []
  const segmentFactor = cross(startDifference, rayVector) / denominator
  if (segmentFactor < 0) return []
  if (segmentFactor > 1) return []
  return [rayFactor]
}

export function insidePolygon(point: number[], polygon: number[][]): boolean {
  const intersections = rayCastPolygon(point, [1, 0], polygon)
  return intersections.length % 2 === 1
}

export function segmentCastSegment(segmentA: number[][], segmentB: number[][]): number[] {
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
