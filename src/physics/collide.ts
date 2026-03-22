import { add, combine, dirFromTo, dot, getDistance, mul, normalize, range, sub } from '../math'
import { CircleBody } from '../entity/circleBody/circleBody'
import { Boundary } from '../entity/boundary'
import { Door } from '../entity/door'

export function collideBodyBody(body1: CircleBody, body2: CircleBody): boolean {
  if (body1.destroyed || body2.destroyed) return false
  const distance = getDistance(body1.position, body2.position)
  const overlap = body1.radius + body2.radius - distance
  if (overlap <= 0) return false
  const doesCollide1 = body1.doesCollide(body2)
  const doesCollide2 = body2.doesCollide(body1)
  if (!doesCollide1 || !doesCollide2) return false
  const normal = dirFromTo(body1.position, body2.position)
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
  const distance = getDistance(body.position, point)
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
