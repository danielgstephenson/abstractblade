import { Vec2 } from 'planck'
import { Torso } from '../features/torso'
import { dirFromTo, range } from '../math'
import { FighterSummary } from '../summaries/fighterSummary'
import { LayoutSummary } from '../summaries/layoutSummary'
import { Camera } from './camera'
import { Checker } from './checker'
import { Client } from './client'
import { BladeCircle } from '../features/bladeCircle'

export class Renderer {
  canvas: HTMLCanvasElement
  context: CanvasRenderingContext2D
  starCountDiv: HTMLDivElement
  camera = new Camera()
  checker = new Checker()
  client: Client
  fighters: FighterSummary[] = []
  id: string
  layout?: LayoutSummary
  starVertices: Vec2[]
  savePoint = new Vec2(0, 0)
  stars = [0]

  backgroundColor = '#000000'
  torsoColor1 = 'rgb(0,000,255)'
  bladeColor1 = 'rgba(0,190,255,0.4)'
  torsoColor2 = 'rgb(0,140,000)'
  bladeColor2 = 'rgba(150,255,150,0.4)'

  constructor (client: Client) {
    this.canvas = document.getElementById('canvas') as HTMLCanvasElement
    this.context = this.canvas.getContext('2d') as CanvasRenderingContext2D
    this.starCountDiv = document.getElementById('starCountDiv') as HTMLDivElement
    this.id = ''
    this.client = client
    this.starVertices = this.getStarVertices()
    this.draw()
  }

  draw (): void {
    window.requestAnimationFrame(() => this.draw())
    if (this.layout == null) return
    this.starCountDiv.innerHTML = this.stars.length.toFixed(0)
    this.setupCanvas()
    this.moveCamera()
    this.drawBoundary()
    this.drawGaps()
    this.drawStars()
    console.log('this.fighters.length', this.fighters.length)
    this.fighters.forEach(fighter => {
      this.drawBlood(fighter)
    })
    this.fighters.forEach(fighter => {
      this.drawRope(fighter)
    })
    this.fighters.forEach(fighter => {
      this.drawTorso(fighter)
    })
    this.fighters.forEach(fighter => {
      this.drawBlade(fighter)
    })
    this.fighters.forEach(fighter => {
      // this.drawForecast(fighter)
    })
  }

  drawGuardAreas (): void {
    if (this.layout == null) return
    this.resetContext()
    this.context.strokeStyle = 'rgb(0 255 0)'
    this.context.lineWidth = 0.2
    this.layout.guardAreas.forEach(guardArea => {
      this.context.beginPath()
      guardArea.forEach((vertex, i) => {
        if (i === 0) this.context.moveTo(vertex.x, vertex.y)
        else this.context.lineTo(vertex.x, vertex.y)
      })
      this.context.closePath()
      this.context.stroke()
    })
  }

  drawBoundary (): void {
    if (this.layout == null) return
    this.context.fillStyle = this.backgroundColor
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height)
    this.resetContext()
    this.context.imageSmoothingEnabled = false
    this.context.fillStyle = this.checker.pattern
    this.context.beginPath()
    this.layout.boundary.forEach((vertex, i) => {
      if (i === 0) this.context.moveTo(vertex.x, vertex.y)
      else this.context.lineTo(vertex.x, vertex.y)
    })
    this.context.fill()
  }

  drawGaps (): void {
    if (this.layout == null) return
    this.resetContext()
    this.context.fillStyle = this.backgroundColor
    this.layout.gaps.forEach(gap => {
      this.context.beginPath()
      gap.forEach((vertex, i) => {
        if (i === 0) this.context.moveTo(vertex.x, vertex.y)
        else this.context.lineTo(vertex.x, vertex.y)
      })
      this.context.fill()
    })
  }

  drawStars (): void {
    if (this.layout == null) return
    this.resetContext()
    this.layout.stars.forEach((position, index) => {
      const brightYellow = 'hsl(51 100 50)'
      const darkYellow = 'hsl(51 30 20)'
      const distance = Vec2.distance(this.savePoint, position)
      this.context.fillStyle = distance < 1 ? brightYellow : darkYellow
      this.context.beginPath()
      this.starVertices.forEach((vertex, i) => {
        const point = Vec2.add(position, vertex)
        if (i === 0) this.context.moveTo(point.x, point.y)
        else this.context.lineTo(point.x, point.y)
      })
      this.context.closePath()
      this.context.fill()
      this.context.strokeStyle = brightYellow
      this.context.lineWidth = 0.6
      if (this.stars.includes(index)) {
        this.context.save()
        this.context.clip()
        this.context.stroke()
        this.context.restore()
      }
    })
  }

  drawBlood (fighter: FighterSummary): void {
    if (!fighter.dead) return
    this.resetContext()
    this.context.fillStyle = 'rgb(170,0,0)'
    this.context.beginPath()
    const maxRadius = 1.3 * Torso.radius
    const minRadius = 0.5 * Torso.radius
    const radius = Math.min(maxRadius, minRadius + 0.1 * fighter.deathTimer)
    this.context.arc(
      fighter.deathPoint.x,
      fighter.deathPoint.y,
      radius, 0, 2 * Math.PI
    )
    this.context.fill()
  }

  drawTorso (fighter: FighterSummary): void {
    this.resetContext()
    this.context.fillStyle = fighter.team === 1 ? this.torsoColor1 : this.torsoColor2
    this.context.beginPath()
    this.context.arc(
      fighter.position.x,
      fighter.position.y,
      Torso.radius, 0, 2 * Math.PI
    )
    this.context.fill()
  }

  drawForecast (fighter: FighterSummary): void {
    this.resetContext()
    this.context.fillStyle = 'red'
    fighter.bladeForecast.forEach(point => {
      this.context.beginPath()
      this.context.arc(point.x, point.y, 0.1, 0, 2 * Math.PI)
      this.context.fill()
    })
  }

  drawBlade (fighter: FighterSummary): void {
    this.resetContext()
    this.context.fillStyle = fighter.team === 1 ? this.bladeColor1 : this.bladeColor2
    this.context.beginPath()
    this.context.arc(
      fighter.bladePosition.x,
      fighter.bladePosition.y,
      BladeCircle.radius, 0, 2 * Math.PI
    )
    this.context.fill()
  }

  drawRope (fighter: FighterSummary): void {
    this.resetContext()
    const distance = Vec2.distance(fighter.bladePosition, fighter.position)
    if (distance < Torso.radius + BladeCircle.radius) return
    const dirFromBlade = dirFromTo(fighter.bladePosition, fighter.position)
    const anchor = Vec2.combine(1, fighter.bladePosition, BladeCircle.radius, dirFromBlade)
    this.context.globalAlpha = 0.5
    this.context.strokeStyle = 'white'
    this.context.beginPath()
    this.context.lineWidth = 0.1
    this.context.beginPath()
    this.context.moveTo(fighter.position.x, fighter.position.y)
    this.context.lineTo(anchor.x, anchor.y)
    this.context.stroke()
  }

  drawRay (ray: Vec2[]): void {
    this.resetContext()
    this.context.strokeStyle = 'red'
    this.context.lineWidth = 0.2
    this.context.beginPath()
    this.context.moveTo(ray[0].x, ray[0].y)
    this.context.lineTo(ray[1].x, ray[1].y)
    this.context.stroke()
  }

  moveCamera (): void {
    this.fighters.forEach(fighter => {
      if (fighter.id === this.id) {
        this.camera.position = fighter.position
      }
    })
  }

  setupCanvas (): void {
    this.canvas.width = window.innerWidth
    this.canvas.height = window.innerHeight
  }

  resetContext (): void {
    this.context.resetTransform()
    this.context.translate(0.5 * this.canvas.width, 0.5 * this.canvas.height)
    const vmin = Math.min(this.canvas.width, this.canvas.height)
    this.context.scale(vmin, -vmin)
    this.context.scale(this.camera.scale, this.camera.scale)
    this.context.translate(-this.camera.position.x, -this.camera.position.y)
    this.context.globalAlpha = 1
  }

  getStarVertices (): Vec2[] {
    const radius = 1
    const vertices: Vec2[] = []
    range(0, 4).forEach(i => {
      const angle = (0.25 + i / 5) * 2 * Math.PI
      const point = Vec2(radius * Math.cos(angle), radius * Math.sin(angle))
      vertices.push(point)
      const insetRadius = 0.55 * radius
      const angle2 = angle + 1 / 10 * 2 * Math.PI
      const point2 = Vec2(insetRadius * Math.cos(angle2), insetRadius * Math.sin(angle2))
      vertices.push(point2)
    })
    return vertices
  }
}
