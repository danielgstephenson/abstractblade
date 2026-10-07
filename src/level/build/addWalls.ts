import { Wall } from "../../entity/wall"
import { wallColor } from "../../parameters"
import type { Level } from "../level"
import { getChildById } from "./getChildById"
import { getPathPoints } from "./getPathPoints"

export function addWalls(level: Level) {
  const layer = getChildById(level.svgNode, 'wallLayer')
  const nodes = layer.children.filter(child => child.attributes.role === 'wall')
  nodes.forEach(node => {
    const polygon = getPathPoints(node)
    void new Wall(level, polygon, wallColor)
  })
}
