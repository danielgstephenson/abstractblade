import { Star } from '../../entity/star'
import { mean } from '../../math'
import type { Level } from '../level'
import { getChildById } from './getChildById'
import { getPathPoints } from './getPathPoints'

export function addStars(level: Level): void {
  const layer = getChildById(level.svgNode, 'starLayer')
  const nodes = layer.children.filter(child => child.attributes.role === 'star')
  nodes.forEach(node => {
    const polygon = getPathPoints(node)
    console.log('polygon', polygon)
    const x = mean(polygon.map(point => point[0]))
    const y = mean(polygon.map(point => point[1]))
    console.log('[x,y]', [x, y])
    void new Star(level, [x, y])
  })
}
