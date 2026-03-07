import { INode, parseSync } from 'svgson'
import { World } from './world'
import { pointsOnPath } from 'points-on-path'
import { getDistance, mean, sub } from '../math'
import { insidePolygon } from './raycast'
import { getChildById } from '../svg/svg'

export function build(world: World, svgString: string): void {
  const svgNode = parseSync(svgString)
  const boundaryLayer = getChildById(svgNode, 'boundaryLayer')
  const starLayer = getChildById(svgNode, 'starLayer')
  const transportLayer = getChildById(svgNode, 'transportLayer')
  const doorLayer = getChildById(svgNode, 'doorLayer')
  const rockLayer = getChildById(svgNode, 'rockLayer')
  const bladeLayer = getChildById(svgNode, 'bladeLayer')
  const agentLayer = getChildById(svgNode, 'agentLayer')
  const arrowLayer = getChildById(svgNode, 'arrowLayer')
  const arrows = getArrows(arrowLayer)
  addBoundaries(world, boundaryLayer)
  addStars(world, starLayer)
  addTransporters(world, transportLayer, arrows)
  addDoors(world, doorLayer, arrows)
  addRocks(world, rockLayer)
  addBlades(world, bladeLayer)
  addPlayer(world, agentLayer)
  addRovers(world, agentLayer)
  addMonsters(world, agentLayer)
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
  const position = [x, y]
  world.addPlayer(position)
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

function addBlades(world: World, layer: INode): void {
  const nodes = layer.children.filter(child => child.attributes.role === 'blade')
  nodes.forEach(node => {
    const x = Number(node.attributes.cx)
    const y = Number(node.attributes.cy)
    const position = [x, y]
    const align = Number(node.attributes.align)
    world.addBlade(position, align)
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

function addDoors(world: World, layer: INode, arrows: number[][][]): void {
  const nodes = layer.children.filter(child => child.attributes.role === 'door')
  nodes.forEach(node => {
    const polygon = getPathPoints(node)
    const insideArrow = arrows.filter(a => insidePolygon(a[0], polygon))[0]
    const vector = sub(insideArrow[1], insideArrow[0])
    world.addDoor(polygon, vector)
  })
}

function addTransporters(world: World, layer: INode, arrows: number[][][]): void {
  const nodes = layer.children.filter(child => child.attributes.role === 'transporter')
  nodes.forEach(node => {
    const x = Number(node.attributes.cx)
    const y = Number(node.attributes.cy)
    const r = Number(node.attributes.r)
    const position = [x, y]
    const insideArrow = arrows.filter(a => getDistance(a[0], position) < r)[0]
    world.addTransporter(position, insideArrow[1])
  })
}

function getPathPoints(node: INode): number[][] {
  const path = node.attributes.d as string
  const points = pointsOnPath(path).flat()
  const endDistance = getDistance(points[0], points[points.length - 1])
  if (endDistance === 0) points.pop()
  return points
}

function getArrows(layer: INode): number[][][] {
  const nodes = layer.children.filter(child => child.attributes.role === 'arrow')
  const arrows = nodes.map(node => {
    return getPathPoints(node)
  })
  return arrows
}
