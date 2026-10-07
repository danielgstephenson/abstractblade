import { pointsOnPath } from "points-on-path"
import type { INode } from "svgson"
import { getDistance } from "../../math"

export function getPathPoints(node: INode): number[][] {
  const path = node.attributes.d as string
  const points = pointsOnPath(path).flat()
  const endDistance = getDistance(points[0], points[points.length - 1])
  if (endDistance === 0) points.pop()
  return points
}
