import { INode, parseSync } from 'svgson'
import { World } from './world'
import { pointsOnPath } from 'points-on-path'
import { getDistance } from '../math'

export function build(world: World, svgString: string): void {
  const svgNode = parseSync(svgString)
  const layer1 = svgNode.children[2]
  addBoundaries(world, layer1)
  addPlayer(world, layer1)
  addRovers(world, layer1)
  addMonsters(world, layer1)
  addRocks(world, layer1)
}

function addBoundaries(world: World, layer: INode): void {
  const nodes = layer.children.filter(child => child.attributes.role === 'boundary')
  nodes.forEach(node => {
    const points = getPathPoints(node)
    world.addBoundary(points)
  })
}

function addPlayer(world: World, layer: INode): void {
  const node = layer.children.filter(child => child.attributes.role === 'player')[0]
  const x = Number(node.attributes.cx)
  const y = Number(node.attributes.cy)
  world.addPlayer([x, y])
}

function addRovers(world: World, layer: INode): void {
  const nodes = layer.children.filter(child => child.attributes.role === 'rover')
  nodes.forEach(node => {
    const x = Number(node.attributes.cx)
    const y = Number(node.attributes.cy)
    world.addRover([x, y])
  })
}

function addMonsters(world: World, layer: INode): void {
  const nodes = layer.children.filter(child => child.attributes.role === 'monster')
  nodes.forEach(node => {
    const x = Number(node.attributes.cx)
    const y = Number(node.attributes.cy)
    world.addMonster([x, y])
  })
}

function addRocks(world: World, layer: INode): void {
  const nodes = layer.children.filter(child => child.attributes.role === 'rock')
  nodes.forEach(node => {
    const x = Number(node.attributes.cx)
    const y = Number(node.attributes.cy)
    const position = [x, y]
    const radius = Number(node.attributes.r)
    world.addRock(position, radius)
  })
}

function getPathPoints(node: INode): number[][] {
  const path = node.attributes.d as string
  const points = pointsOnPath(path).flat()
  const endDistance = getDistance(points[0], points[points.length - 1])
  if (endDistance === 0) points.pop()
  return points
}
