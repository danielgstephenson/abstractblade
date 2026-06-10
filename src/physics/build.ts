import { INode, parseSync } from 'svgson'
import { Level } from '../level/level'
import { pointsOnPath } from 'points-on-path'
import { getDistance, mean, sub } from '../math'
import { getChildById } from '../svg/svg'
import { insidePolygon } from './rayCast'

export function build(level: Level, svgString: string): void {
  const svgNode = parseSync(svgString)
  const boundaryLayer = getChildById(svgNode, 'boundaryLayer')
  const starLayer = getChildById(svgNode, 'starLayer')
  const transportLayer = getChildById(svgNode, 'transportLayer')
  const wallLayer = getChildById(svgNode, 'wallLayer')
  const doorLayer = getChildById(svgNode, 'doorLayer')
  const rockLayer = getChildById(svgNode, 'rockLayer')
  const bladeLayer = getChildById(svgNode, 'bladeLayer')
  const agentLayer = getChildById(svgNode, 'agentLayer')
  const entranceLayer = getChildById(svgNode, 'entranceLayer')
  const arrowLayer = getChildById(svgNode, 'arrowLayer')
  const arrows = getArrows(arrowLayer)
  addBoundaries(level, boundaryLayer)
  addStars(level, starLayer)
  addTransporters(level, transportLayer, arrows)
  addExits(level, transportLayer)
  addWalls(level, wallLayer)
  addDoors(level, doorLayer, arrows)
  addRocks(level, rockLayer)
  addBlades(level, bladeLayer)
  addPlayer(level, agentLayer)
  addRovers(level, agentLayer)
  addMonsters(level, agentLayer)
  addEntrances(level, entranceLayer)
}

function addBoundaries(level: Level, layer: INode): void {
  const nodes = layer.children.filter(child => child.attributes.role === 'boundary')
  nodes.forEach(node => {
    const points = getPathPoints(node)
    const boundary = level.addBoundary(points)
    boundary.id = node.attributes.id
  })
}

function addPlayer(level: Level, layer: INode): void {
  const node = layer.children.filter(child => child.attributes.role === 'player')[0]
  const x = Number(node.attributes.cx)
  const y = Number(node.attributes.cy)
  const position = [x, y]
  const player = level.addPlayer(position)
  player.id = 'player'
}

function addRovers(level: Level, layer: INode): void {
  const nodes = layer.children.filter(child => child.attributes.role === 'rover')
  nodes.forEach(node => {
    const x = Number(node.attributes.cx)
    const y = Number(node.attributes.cy)
    const rover = level.addRover([x, y])
    rover.id = node.attributes.id
  })
}

function addMonsters(level: Level, layer: INode): void {
  const nodes = layer.children.filter(child => child.attributes.role === 'monster')
  nodes.forEach(node => {
    const x = Number(node.attributes.cx)
    const y = Number(node.attributes.cy)
    const monster = level.addMonster([x, y])
    monster.id = node.attributes.id
  })
}

function addBlades(level: Level, layer: INode): void {
  const nodes = layer.children.filter(child => child.attributes.role === 'blade')
  nodes.forEach(node => {
    const x = Number(node.attributes.cx)
    const y = Number(node.attributes.cy)
    const position = [x, y]
    const align = Number(node.attributes.align)
    const blade = level.addBlade(position, align)
    blade.id = node.attributes.id
  })
}

function addRocks(level: Level, layer: INode): void {
  const nodes = layer.children.filter(child => child.attributes.role === 'rock')
  nodes.forEach(node => {
    const x = Number(node.attributes.cx)
    const y = Number(node.attributes.cy)
    const position = [x, y]
    const radius = Number(node.attributes.r)
    const rock = level.addRock(position, radius)
    rock.id = node.attributes.id
  })
}

function addStars(level: Level, layer: INode): void {
  const nodes = layer.children.filter(child => child.attributes.role === 'star')
  nodes.forEach(node => {
    const points = getPathPoints(node)
    const xs = points.map(p => p[0])
    const ys = points.map(p => p[1])
    const x = mean(xs)
    const y = mean(ys)
    const position = [x, y]
    const star = level.addStar(position)
    star.id = node.attributes.id
  })
}

function addDoors(level: Level, layer: INode, arrows: number[][][]): void {
  const nodes = layer.children.filter(child => child.attributes.role === 'door')
  nodes.forEach(node => {
    const polygon = getPathPoints(node)
    const insideArrow = arrows.filter(a => insidePolygon(a[0], polygon))[0]
    const vector = sub(insideArrow[1], insideArrow[0])
    const door = level.addDoor(polygon, vector)
    door.id = node.attributes.id
  })
}

function addWalls(level: Level, layer: INode): void {
  const nodes = layer.children.filter(child => child.attributes.role === 'wall')
  nodes.forEach(node => {
    const polygon = getPathPoints(node)
    const wall = level.addWall(polygon)
    wall.id = node.attributes.id
  })
}

function addTransporters(level: Level, layer: INode, arrows: number[][][]): void {
  const nodes = layer.children.filter(child => child.attributes.role === 'transporter')
  nodes.forEach(node => {
    const x = Number(node.attributes.cx)
    const y = Number(node.attributes.cy)
    const radius = Number(node.attributes.r)
    const position = [x, y]
    const insideArrows = arrows.filter(a => getDistance(a[0], position) < radius)
    const target = insideArrows.length > 0 ? insideArrows[0][1] : position
    const transporter = level.addTransporter(position, radius, target)
    transporter.id = node.attributes.id
  })
}

function addExits(level: Level, layer: INode): void {
  const nodes = layer.children.filter(child => child.attributes.role === 'exit')
  nodes.forEach(node => {
    const x = Number(node.attributes.cx)
    const y = Number(node.attributes.cy)
    const radius = Number(node.attributes.r)
    const position = [x, y]
    const targetLevel = Number(node.attributes.targetLevel)
    const targetEntrance = Number(node.attributes.targetEntrance)
    const exit = level.addExit(position, radius, targetLevel, targetEntrance)
    exit.id = node.attributes.id
  })
}

function addEntrances(level: Level, layer: INode): void {
  const nodes = layer.children.filter(child => child.attributes.role === 'entrance')
  nodes.forEach(node => {
    const x = Number(node.attributes.cx)
    const y = Number(node.attributes.cy)
    const position = [x, y]
    const entrance = level.addEntrance(position)
    entrance.id = node.attributes.id
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
