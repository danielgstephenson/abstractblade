import { add, combine, dirFromTo, dot, mul, normalize, range, sub, sum } from '../math'
import { CircleBody } from '../entity/circleBody/circleBody'
import { Boundary } from '../entity/polygonBody/boundary'
import { Door } from '../entity/polygonBody/door'

export function collideBodyBody(body1: CircleBody, body2: CircleBody): boolean {
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

export function collideBodyPolygon(body: CircleBody, entity: Boundary | Door): boolean {
  const polygon = entity.polygon
  for (const i of range(polygon.length)) {
    const j = i > 0 ? i - 1 : polygon.length - 1
    const segment = [polygon[i], polygon[j]]
    const segmentHit = collideBodySegment(body, segment)
    if (segmentHit) {
      body.onCollide(entity)
      return true
    }
  }
  for (const point of polygon) {
    const pointHit = collideBodyPoint(body, point)
    if (pointHit) {
      body.onCollide(entity)
      return true
    }
  }
  return false
}

export function collideBodySegment(body: CircleBody, segment: number[][]): boolean {
  const xs = segment.map(p => p[0])
  if (Math.max(...xs) < body.position[0] - body.radius) return false
  if (Math.min(...xs) > body.position[0] + body.radius) return false
  const ys = segment.map(p => p[1])
  if (Math.max(...ys) < body.position[1] - body.radius) return false
  if (Math.min(...ys) > body.position[1] + body.radius) return false
  const a = segment[0]
  const b = segment[1]
  const c = body.position
  const ab = sub(b, a)
  const ac = sub(c, a)
  const bc = sub(c, b)
  const dir = normalize(ab)
  const normal = [-dir[1], +dir[0]]
  if (dot(normal, ac) < 0) {
    normal[0] = -normal[0]
    normal[1] = -normal[1]
  }
  if (dot(ac, ab) < 0) return false
  if (dot(bc, ab) > 0) return false
  const overlap = body.radius - dot(ac, normal)
  if (overlap < 0) return false
  const impactSpeed = -dot(body.velocity, normal)
  const impulse = mul(1.2 * impactSpeed * body.mass, normal)
  body.impulse = add(body.impulse, impulse)
  const shift = mul(overlap, normal)
  body.shift = add(body.shift, shift)
  return true
}

export function collideBodyPoint(body: CircleBody, point: number[]): boolean {
  const vector = sub(point, body.position)
  if (Math.abs(vector[0]) > body.radius) return false
  if (Math.abs(vector[1]) > body.radius) return false
  const squaredDistance = sum(vector.map(x => x * x))
  if (squaredDistance >= body.radius * body.radius) return false
  const distance = Math.sqrt(squaredDistance)
  const overlap = body.radius - distance
  if (overlap <= 0) return false
  const normal = dirFromTo(point, body.position)
  const impactSpeed = -dot(body.velocity, normal)
  const impulse = mul(1.2 * impactSpeed * body.mass, normal)
  body.impulse = add(body.impulse, impulse)
  const shift = mul(overlap, normal)
  body.shift = add(body.shift, shift)
  return true
}
