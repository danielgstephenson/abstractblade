import { cross, range, sub } from '../math'

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

export function insidePolygon(point: number[], polygon: number[][]): boolean {
  const hitFactors = rayCastPolygon(point, [1, 0], polygon)
  return hitFactors.length % 2 === 1
}
