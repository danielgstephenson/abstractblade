import { add, dirFromTo, dot, getDistance, mul, normalize, range, sub } from '../math'
import { Body } from './body/body'
import { Boundary } from './boundary'

export function collideBodyBounday(body: Body, boundary: Boundary): boolean {
  const points = boundary.points
  let hit = false
  for (const i of range(points.length)) {
    const j = i > 0 ? i - 1 : points.length - 1
    const a = points[i]
    const b = points[j]
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
    if (dot(ac, ab) < 0) continue
    if (dot(bc, ab) > 0) continue
    const overlap = body.radius - dot(ac, normal)
    if (overlap < 0) continue
    const impactSpeed = -dot(body.velocity, normal)
    const impulse = mul(1.2 * impactSpeed * body.mass, normal)
    body.impulse = add(body.impulse, impulse)
    const shift = mul(overlap, normal)
    body.shift = add(body.shift, shift)
    hit = true
  }
  if (hit) return hit
  for (const point of points) {
    if (collideBodyPoint(body, point)) {
      hit = true
    }
  }
  return hit
}

export function collideBodyPoint(body: Body, point: number[]): boolean {
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
