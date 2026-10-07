import { parseSync, type INode } from 'svgson'
import type { Level } from '../level'
import { pointsOnPath } from 'points-on-path'
import { getDistance } from '../../math'
import { Wall } from '../../entity/wall'
import { wallColor } from '../../parameters'
import { loadVideoTextures } from 'pixi.js'

export function build(level: Level): void {
  addBoundaries(level)
  addWalls(level)
  setupPlayer(level)
}

export function setupPlayer(level: Level) {
  const layer = getChildById(level.svgNode, 'agentLayer')
  const nodes = layer.children.filter(child => child.attributes.role === 'player')
  nodes.forEach(node => {
    const x = Number(node.attributes.cx as string)
    const y = Number(node.attributes.cy as string)
    level.player.position = [x, y]
    level.player.blade.position = [x, y]
  })
}

export function addBoundaries(level: Level) {
  const layer = getChildById(level.svgNode, 'boundaryLayer')
  const nodes = layer.children.filter(child => child.attributes.role === 'boundary')
  nodes.forEach(node => {
    const polygon = getPathPoints(node)
    void new Wall(level, polygon, 'black')
  })
}

export function addWalls(level: Level) {
  const layer = getChildById(level.svgNode, 'wallLayer')
  const nodes = layer.children.filter(child => child.attributes.role === 'wall')
  nodes.forEach(node => {
    const polygon = getPathPoints(node)
    void new Wall(level, polygon, wallColor)
  })
}

export function getChildById(node: INode, id: string): INode {
  const matches = node.children.filter(child => child.attributes.id === id)
  if (matches.length === 0) {
    const ids = node.children.map(child => child.attributes.id)
    console.log('child ids', ids)
    throw new Error(`Child "${id}" not found.`)
  }
  return matches[0]
}

function getPathPoints(node: INode): number[][] {
  const path = node.attributes.d as string
  const points = pointsOnPath(path).flat()
  const endDistance = getDistance(points[0], points[points.length - 1])
  if (endDistance === 0) points.pop()
  return points
}
