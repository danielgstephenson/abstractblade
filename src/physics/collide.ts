import type { Orb } from '../entity/orb'
import type { Wall } from '../entity/wall'
import { clamp, combine, dirFromTo, dot, getMagnitude, mul, range, sub, sum } from '../math'

export function collideOrbs(orbs: Orb[]): void {
  orbs.forEach(orb0 => {
    orbs.forEach(orb1 => {
      if (orb0.index >= orb1.index) return
      const minDist = orb0.radius + orb1.radius
      const vector = sub(orb1.position, orb0.position)
      const squaredDist = dot(vector, vector)
      if (squaredDist >= minDist * minDist) return
      const dist = Math.sqrt(squaredDist)
      const overlap = minDist - dist
      const normal = mul(1 / dist, vector)
      const relativeVelocity = sub(orb0.velocity, orb1.velocity)
      const impactSpeed = Math.max(0, dot(relativeVelocity, normal))
      const massFactor = 1 / (1 / orb0.mass + 1 / orb1.mass)
      const impulse = mul(impactSpeed * massFactor, normal)
      const shift = mul(0.5 * overlap, normal)
      orb0.position = combine(1, orb0.position, -1, shift)
      orb1.position = combine(1, orb1.position, +1, shift)
      orb0.velocity = combine(1, orb0.velocity, -1, impulse)
      orb1.velocity = combine(1, orb1.velocity, +1, impulse)
    })
  })
}

export function collideOrbsWalls(orbs: Orb[], walls: Wall[]): void {
  orbs.forEach(orb => {
    walls.forEach(wall => {
      collideOrbWall(orb, wall)
    })
  })
}

export function collideOrbWall(orb: Orb, wall: Wall): void {
  const polygon = wall.polygon
  for (const i of range(polygon.length)) {
    const j = i > 0 ? i - 1 : polygon.length - 1
    const segment = [polygon[i], polygon[j]]
    const segmentHit = collideOrbSegment(orb, segment)
    if (segmentHit) {
      orb.onCollide(wall)
    }
  }
  for (const point of polygon) {
    const pointHit = collideOrbPoint(orb, point)
    if (pointHit) {
      orb.onCollide(wall)
    }
  }
}

export function collideOrbSegment(orb: Orb, segment: number[][]): boolean {
  const xs = segment.map(p => p[0])
  if (Math.max(...xs) < orb.position[0] - orb.radius) return false
  if (Math.min(...xs) > orb.position[0] + orb.radius) return false
  const ys = segment.map(p => p[1])
  if (Math.max(...ys) < orb.position[1] - orb.radius) return false
  if (Math.min(...ys) > orb.position[1] + orb.radius) return false
  const segmentStart = segment[0]
  const segmentEnd = segment[1]
  const segmentVector = sub(segmentEnd, segmentStart)
  const startToBody = sub(orb.position, segmentStart)
  const segmentFactor = clamp(0, 1, dot(startToBody, segmentVector) / (dot(segmentVector, segmentVector) + 1e-9))
  const nearestPoint = combine(1, segmentStart, segmentFactor, segmentVector)
  const pointToCircle = sub(orb.position, nearestPoint)
  const distance = getMagnitude(pointToCircle)
  const overlap = orb.radius - distance
  if (overlap < 0) return false
  collideOrbPoint(orb, nearestPoint)
  return true
}

export function collideOrbPoint(orb: Orb, point: number[]): boolean {
  const vector = sub(point, orb.position)
  if (Math.abs(vector[0]) > orb.radius) return false
  if (Math.abs(vector[1]) > orb.radius) return false
  const squaredDistance = sum(vector.map(x => x * x))
  if (squaredDistance >= orb.radius * orb.radius) return false
  const distance = Math.sqrt(squaredDistance)
  const overlap = orb.radius - distance
  if (overlap <= 0) return false
  const normal = dirFromTo(point, orb.position)
  const impactSpeed = -dot(orb.velocity, normal)
  const impulse = mul(impactSpeed * orb.mass, normal)
  const shift = mul(overlap, normal)
  orb.position = combine(1, orb.position, 1, shift)
  orb.velocity = combine(1, orb.velocity, 1, impulse)
  return true
}
