import path from 'path'
import fs from 'fs-extra'
import { INode, parseSync as parseSvg } from 'svgson'
import { parseSVG as parseSvgPath, makeAbsolute } from 'svg-path-parser'
import { Vec2 } from 'planck'
import { LayoutSummary } from './summaries/layoutSummary'

export class Layout {
  svg: INode
  boundary: Vec2[]
  gaps: Vec2[][]
  savePoints: Vec2[] = []
  guardPoints: Vec2[] = []
  summary: LayoutSummary

  constructor () {
    const dirname = path.dirname(__filename)
    const filePath = path.join(dirname, '../layout.svg')
    const fileExists = fs.existsSync(filePath)
    if (!fileExists) {
      throw new Error('../layout.svg does not exist')
    }
    const svgString = fs.readFileSync(filePath, 'utf-8')
    this.svg = parseSvg(svgString)
    this.boundary = this.getBorder()
    this.gaps = this.getGaps()
    this.savePoints = this.getSavePoints()
    this.guardPoints = this.getGuardPoints()
    this.summary = new LayoutSummary(this)
  }

  getGuardPoints (): Vec2[] {
    const guardPointLayer = this.svg.children[5]
    const guardPoints = guardPointLayer.children.map(child => {
      const x = Number(child.attributes.cx)
      const y = Number(child.attributes.cy)
      return Vec2(x, -y)
    })
    return guardPoints
  }

  getSavePoints (): Vec2[] {
    const savePointLayer = this.svg.children[4]
    const savePoints = savePointLayer.children.map(child => {
      const x = Number(child.attributes.cx)
      const y = Number(child.attributes.cy)
      return Vec2(x, -y)
    })
    return savePoints
  }

  getGaps (): Vec2[][] {
    const gapLayer = this.svg.children[3]
    const gaps = gapLayer.children.map(gapSvg => {
      const gapPath = gapSvg.attributes.d
      return this.pathToPoints(gapPath)
    })
    return gaps
  }

  getBorder (): Vec2[] {
    const borderPath = this.svg.children[2].children[0].attributes.d
    return this.pathToPoints(borderPath)
  }

  getBackroundColor (): string {
    return this.svg.children[0].attributes.pagecolor
  }

  pathToPoints (svgPath: string): Vec2[] {
    const actions = parseSvgPath(svgPath)
    const absoluteActions = makeAbsolute(actions)
    const pointActions = absoluteActions.filter(action => action.command !== 'closepath')
    const points = pointActions.map(action => Vec2(action.x, -action.y))
    return points
  }
}
