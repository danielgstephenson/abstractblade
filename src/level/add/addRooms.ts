import { Room } from '../../entity/room'
import type { Level } from '../level'
import { getChildById } from './getChildById'
import { getPathPoints } from './getPathPoints'

export function addRooms(level: Level): void {
  const layer = getChildById(level.svgNode, 'boundaryLayer')
  const nodes = layer.children.filter(child => child.attributes.role === 'boundary')
  nodes.forEach(node => {
    const polygon = getPathPoints(node)
    void new Room(level, polygon)
  })
}
