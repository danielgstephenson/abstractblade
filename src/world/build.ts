import { INode, parseSync } from 'svgson'
import { World } from './world'
import { pointsOnPath } from 'points-on-path'
import { getDistance, mean } from '../math'

export function build(world: World, svgString: string): void {
  const svgNode = parseSync(svgString)
  const entityLayer = svgNode.children[2]
  addBoundaries(world, entityLayer)
  addStars(world, entityLayer)
  addPlayer(world, entityLayer)
  addRovers(world, entityLayer)
  addMonsters(world, entityLayer)
  addRocks(world, entityLayer)
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

function addStars(world: World, layer: INode): void {
  const nodes = layer.children.filter(child => child.attributes.role === 'star')
  nodes.forEach(node => {
    const points = getPathPoints(node)
    const xs = points.map(p => p[0])
    const ys = points.map(p => p[1])
    const x = mean(xs)
    const y = mean(ys)
    const position = [x, y]
    world.addStar(position)
  })
}

function getPathPoints(node: INode): number[][] {
  const path = node.attributes.d as string
  const points = pointsOnPath(path).flat()
  const endDistance = getDistance(points[0], points[points.length - 1])
  if (endDistance === 0) points.pop()
  return points
}
