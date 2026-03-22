import { INode, parseSync } from 'svgson'
import { Simulation } from './simulation'
import { pointsOnPath } from 'points-on-path'
import { getDistance, mean, sub } from '../math'
import { insidePolygon } from './segmentCast'
import { getChildById } from '../svg/svg'

export function build(simulation: Simulation, svgString: string): void {
  const svgNode = parseSync(svgString)
  const boundaryLayer = getChildById(svgNode, 'boundaryLayer')
  const starLayer = getChildById(svgNode, 'starLayer')
  const transportLayer = getChildById(svgNode, 'transportLayer')
  const doorLayer = getChildById(svgNode, 'doorLayer')
  const rockLayer = getChildById(svgNode, 'rockLayer')
  const bladeLayer = getChildById(svgNode, 'bladeLayer')
  const agentLayer = getChildById(svgNode, 'agentLayer')
  const entranceLayer = getChildById(svgNode, 'entranceLayer')
  const arrowLayer = getChildById(svgNode, 'arrowLayer')
  const arrows = getArrows(arrowLayer)
  addBoundaries(simulation, boundaryLayer)
  addStars(simulation, starLayer)
  addTransporters(simulation, transportLayer, arrows)
  addDoors(simulation, doorLayer, arrows)
  addRocks(simulation, rockLayer)
  addBlades(simulation, bladeLayer)
  addPlayer(simulation, agentLayer)
  addRovers(simulation, agentLayer)
  addMonsters(simulation, agentLayer)
  addEntrances(simulation, entranceLayer)
}

function addBoundaries(simulation: Simulation, layer: INode): void {
  const nodes = layer.children.filter(child => child.attributes.role === 'boundary')
  nodes.forEach(node => {
    const points = getPathPoints(node)
    const boundary = simulation.addBoundary(points)
    boundary.id = node.attributes.id
  })
}

function addPlayer(simulation: Simulation, layer: INode): void {
  const node = layer.children.filter(child => child.attributes.role === 'player')[0]
  const x = Number(node.attributes.cx)
  const y = Number(node.attributes.cy)
  const position = [x, y]
  simulation.addPlayer(position)
}

function addRovers(simulation: Simulation, layer: INode): void {
  const nodes = layer.children.filter(child => child.attributes.role === 'rover')
  nodes.forEach(node => {
    const x = Number(node.attributes.cx)
    const y = Number(node.attributes.cy)
    const rover = simulation.addRover([x, y])
    rover.id = node.attributes.id
  })
}

function addMonsters(simulation: Simulation, layer: INode): void {
  const nodes = layer.children.filter(child => child.attributes.role === 'monster')
  nodes.forEach(node => {
    const x = Number(node.attributes.cx)
    const y = Number(node.attributes.cy)
    const monster = simulation.addMonster([x, y])
    monster.id = node.attributes.id
  })
}

function addBlades(simulation: Simulation, layer: INode): void {
  const nodes = layer.children.filter(child => child.attributes.role === 'blade')
  nodes.forEach(node => {
    const x = Number(node.attributes.cx)
    const y = Number(node.attributes.cy)
    const position = [x, y]
    const align = Number(node.attributes.align)
    const blade = simulation.addBlade(position, align)
    blade.id = node.attributes.id
  })
}

function addRocks(simulation: Simulation, layer: INode): void {
  const nodes = layer.children.filter(child => child.attributes.role === 'rock')
  nodes.forEach(node => {
    const x = Number(node.attributes.cx)
    const y = Number(node.attributes.cy)
    const position = [x, y]
    const radius = Number(node.attributes.r)
    const rock = simulation.addRock(position, radius)
    rock.id = node.attributes.id
  })
}

function addStars(simulation: Simulation, layer: INode): void {
  const nodes = layer.children.filter(child => child.attributes.role === 'star')
  nodes.forEach(node => {
    const points = getPathPoints(node)
    const xs = points.map(p => p[0])
    const ys = points.map(p => p[1])
    const x = mean(xs)
    const y = mean(ys)
    const position = [x, y]
    const star = simulation.addStar(position)
    star.id = node.attributes.id
  })
}

function addDoors(simulation: Simulation, layer: INode, arrows: number[][][]): void {
  const nodes = layer.children.filter(child => child.attributes.role === 'door')
  nodes.forEach(node => {
    const polygon = getPathPoints(node)
    const insideArrow = arrows.filter(a => insidePolygon(a[0], polygon))[0]
    const vector = sub(insideArrow[1], insideArrow[0])
    const door = simulation.addDoor(polygon, vector)
    door.id = node.attributes.id
  })
}

function addTransporters(simulation: Simulation, layer: INode, arrows: number[][][]): void {
  const nodes = layer.children.filter(child => child.attributes.role === 'transporter')
  nodes.forEach(node => {
    const x = Number(node.attributes.cx)
    const y = Number(node.attributes.cy)
    const r = Number(node.attributes.r)
    const position = [x, y]
    const insideArrows = arrows.filter(a => getDistance(a[0], position) < r)
    const target = insideArrows.length > 0 ? insideArrows[0][1] : position
    const transporter = simulation.addTransporter(position, target)
    transporter.id = node.attributes.id
    transporter.exit = node.attributes.exit === 'true'
    if (!transporter.exit) return
    transporter.targetLevel = Number(node.attributes.targetLevel)
    transporter.targetEntrance = Number(node.attributes.targetEntrance)
  })
}

function addEntrances(simulation: Simulation, layer: INode): void {
  const nodes = layer.children.filter(child => child.attributes.role === 'entrance')
  nodes.forEach(node => {
    const x = Number(node.attributes.cx)
    const y = Number(node.attributes.cy)
    const position = [x, y]
    const entrance = simulation.addEntrance(position)
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
