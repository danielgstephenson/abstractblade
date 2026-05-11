import { add, clamp, combine, dirFromTo, dot, getMagnitude, mul, normalize, range, sub, sum } from '../math'
import { CircleBody } from '../entity/circleBody/circleBody'
import { Boundary } from '../entity/polygonBody/boundary'
import { Door } from '../entity/polygonBody/door'
import { Collision } from './collision'

export function collideCircleCircle(body1: CircleBody, body2: CircleBody): boolean {
  if (body1.destroyed || body2.destroyed) return false
  const totalRadius = body1.radius + body2.radius
  const vector = sub(body2.position, body1.position)
  if (Math.abs(vector[0]) > totalRadius) return false
  if (Math.abs(vector[1]) > totalRadius) return false
  const squaredDistance = sum(vector.map(x => x * x))
  if (squaredDistance >= totalRadius * totalRadius) return false
  const distance = Math.sqrt(squaredDistance)
  const overlap = totalRadius - distance
  const doesCollide1 = body1.doesCollide(body2)
  const doesCollide2 = body2.doesCollide(body1)
  if (!doesCollide1 || !doesCollide2) return false
  const normal = mul(1 / distance, vector)
  const relativeVelocity = sub(body1.velocity, body2.velocity)
  const impactSpeed = dot(relativeVelocity, normal)
  const massFactor = 1 / (1 / body1.mass + 1 / body2.mass)
  const impulse = mul(impactSpeed * massFactor, normal)
  const shift = mul(0.5 * overlap, normal)
  body1.impulse = combine(1, body1.impulse, -1, impulse)
  body2.impulse = combine(1, body2.impulse, +1, impulse)
  body1.shift = combine(1, body1.shift, -1, shift)
  body2.shift = combine(1, body2.shift, +1, shift)
  body1.onCollide(body2)
  body2.onCollide(body1)
  return true
}

export function collideCirclePolygon(body: CircleBody, entity: Boundary | Door): boolean {
  const polygon = entity.polygon
  let collide = false
  for (const i of range(polygon.length)) {
    const j = i > 0 ? i - 1 : polygon.length - 1
    const segment = [polygon[i], polygon[j]]
    const segmentHit = collideCircleSegment(body, segment)
    if (segmentHit) {
      body.onCollide(entity)
      collide = true
    }
  }
  for (const point of polygon) {
    const pointHit = collideCirclePoint(body, point)
    if (pointHit) {
      body.onCollide(entity)
      collide = true
    }
  }
  return collide
}

export function collideCircleSegment(circle: CircleBody, segment: number[][]): boolean {
  const xs = segment.map(p => p[0])
  if (Math.max(...xs) < circle.position[0] - circle.radius) return false
  if (Math.min(...xs) > circle.position[0] + circle.radius) return false
  const ys = segment.map(p => p[1])
  if (Math.max(...ys) < circle.position[1] - circle.radius) return false
  if (Math.min(...ys) > circle.position[1] + circle.radius) return false
  const segmentStart = segment[0]
  const segmentEnd = segment[1]
  const segmentVector = sub(segmentEnd, segmentStart)
  const startToBody = sub(circle.position, segmentStart)
  const segmentFactor = clamp(0, 1, dot(startToBody, segmentVector) / (dot(segmentVector, segmentVector) + 1e-9))
  const closestPoint = combine(1, segmentStart, segmentFactor, segmentVector)
  const pointToCircle = sub(circle.position, closestPoint)
  const distance = getMagnitude(pointToCircle)
  const overlap = circle.radius - distance
  if (overlap < 0) return false
  const normal = normalize(pointToCircle)
  circle.collisions.push(new Collision(normal, overlap))
  return true
}

export function collideCirclePoint(circle: CircleBody, point: number[]): boolean {
  const vector = sub(point, circle.position)
  if (Math.abs(vector[0]) > circle.radius) return false
  if (Math.abs(vector[1]) > circle.radius) return false
  const squaredDistance = sum(vector.map(x => x * x))
  if (squaredDistance >= circle.radius * circle.radius) return false
  const distance = Math.sqrt(squaredDistance)
  const overlap = circle.radius - distance
  if (overlap <= 0) return false
  const normal = dirFromTo(point, circle.position)
  const impactSpeed = -dot(circle.velocity, normal)
  const impulse = mul(1.2 * impactSpeed * circle.mass, normal)
  circle.impulse = add(circle.impulse, impulse)
  const shift = mul(overlap, normal)
  circle.shift = add(circle.shift, shift)
  return true
}
