import { Vec2 } from 'planck'
import { Fighter } from '../actors/fighter'

export class FighterSummary {
  id: string
  position: Vec2
  bladePosition: Vec2
  deathPoint: Vec2
  deathTimer: number
  team: number
  dead: boolean

  constructor (fighter: Fighter) {
    this.position = fighter.body.getPosition()
    this.bladePosition = fighter.weapon.body.getPosition()
    this.id = fighter.id
    this.team = fighter.team
    this.dead = fighter.dead
    this.deathPoint = fighter.deathPoint
    this.deathTimer = fighter.deathTimer
  }
}
