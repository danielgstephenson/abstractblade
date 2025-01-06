import { Vec2 } from 'planck'
import { Fighter } from './fighter'
import { Game } from '../game'
import { GuardArea } from '../features/guardArea'
import { Player } from './player'
import { dirFromTo, getAngleDiff, rotate, twoPi, vecToAngle, whichMax, whichMin } from '../math'
import { Blade } from '../features/blade'
export class Guard extends Fighter {
  guardArea: GuardArea
  safeDistance = 0
  closeDistance = 0

  constructor (game: Game, position: Vec2) {
    super(game, position)
    this.game.guards.set(this.id, this)
    this.spawnPoint = position
    this.team = 2
    const guardAreas = this.game.cavern.guardAreas.filter(guardArea => {
      const worldTransform = guardArea.actor.body.getTransform()
      return guardArea.polygon.testPoint(worldTransform, this.spawnPoint)
    })
    if (guardAreas.length === 0) throw new Error(`No guardArea at (${this.spawnPoint.x},${this.spawnPoint.y})`)
    this.guardArea = guardAreas[0]
    this.safeDistance = Blade.reach + 1
    this.closeDistance = Blade.reach - 1
    this.respawn()
  }

  respawn (): void {
    super.respawn()
    this.body.setPosition(this.spawnPoint)
  }

  preStep (): void {
    super.preStep()
  }

  postStep (): void {
    super.postStep()
    console.log('guard swingSign', this.swingSign)
    const player = this.getNearestPlayer()
    if (player == null) return
    const playerDistance = Vec2.distance(this.spawnPoint, player.position)
    if (this.dead && this.guardArea.players.size === 0 && playerDistance > 10) {
      this.respawn()
    }
    this.moveDir = this.getMove()
  }

  getMove (): Vec2 {
    if (this.dead) return Vec2(0, 0)
    const player = this.getTargetPlayer()
    const wallAwayDir = this.getWallAwayDir()
    if (player == null) {
      const homeMove = this.getHomeMove()
      const open = Vec2.dot(homeMove, wallAwayDir) >= 0
      if (open) return homeMove
      return this.getWallSlideDir(wallAwayDir, homeMove)
    }
    const distanceMove = this.getDistanceMove(player, this.safeDistance)
    const open = Vec2.dot(distanceMove, wallAwayDir) >= 0
    if (open) return distanceMove
    const playerAwayDir = dirFromTo(player.position, this.position)
    return this.getWallSlideDir(wallAwayDir, playerAwayDir)
  }

  getWallAwayDir (): Vec2 {
    if (this.halo.wallPoints.length === 0) return new Vec2(0, 0)
    const distances = this.halo.wallPoints.map(wallPoint => {
      return Vec2.distance(this.position, wallPoint)
    })
    const distance = Math.min(...distances)
    if (distance > 0.5 * this.safeDistance) return new Vec2(0, 0)
    const nearWallPoint = this.halo.wallPoints[whichMin(distances)]
    return dirFromTo(nearWallPoint, this.position)
  }

  getWallSlideDir (wallAwayDir: Vec2, targetMoveDir: Vec2): Vec2 {
    const options = [rotate(wallAwayDir, 0.5 * Math.PI), rotate(wallAwayDir, -0.5 * Math.PI)]
    const dots = options.map(option => Vec2.dot(option, targetMoveDir))
    return options[whichMax(dots)]
  }

  getDistanceMove (player: Player, targetDistance: number): Vec2 {
    const dirFromPlayer = dirFromTo(player.position, this.position)
    const distFromPlayer = Vec2.distance(player.position, this.position)
    if (Math.abs(targetDistance - distFromPlayer) < 0.1) {
      return Vec2.zero()
    }
    const targetPosition = Vec2.combine(1, player.position, targetDistance, dirFromPlayer)
    const dirToTarget = dirFromTo(this.position, targetPosition)
    const targetVelocity = Vec2.combine(0.5, player.velocity, this.maxSpeed, dirToTarget)
    return dirFromTo(this.velocity, targetVelocity)
  }

  getSwingTimes (fighter: Fighter, other: Fighter): number[] {
    const spin = fighter.body.getAngularVelocity()
    const angle = fighter.body.getAngle()
    const otherDir = dirFromTo(fighter.position, other.position)
    const targetAngle = vecToAngle(otherDir)
    const angleDiff = getAngleDiff(targetAngle, angle)
    if (spin === 0) return [Infinity, Infinity]
    const absAngleDiff = Math.abs(angleDiff)
    const absSpin = Math.abs(spin)
    if (absAngleDiff < 0.02 * Math.PI) return [0, twoPi / absSpin]
    if (spin * angleDiff > 0) return [absAngleDiff / absSpin, absAngleDiff + twoPi / absSpin]
    const bigAbsAngleDiff = 2 * Math.PI - absAngleDiff
    return [bigAbsAngleDiff / absSpin, bigAbsAngleDiff + twoPi / absSpin]
  }

  getHomeMove (): Vec2 {
    const distToHome = Vec2.distance(this.position, this.spawnPoint)
    const dirToHome = dirFromTo(this.position, this.spawnPoint)
    if (distToHome > 1) return dirToHome
    return new Vec2(0, 0)
  }

  getTargetPlayer (): Player | null {
    const players = [...this.guardArea.players.values()]
    const livingPlayers = players.filter(player => !player.dead)
    if (livingPlayers.length === 0) return null
    const distances = livingPlayers.map(player => {
      return Vec2.distance(player.position, this.position)
    })
    return livingPlayers[whichMin(distances)]
  }

  getNearestPlayer (): Player | null {
    const players = [...this.game.players.values()]
    const livingPlayers = players.filter(player => !player.dead)
    if (livingPlayers.length === 0) return null
    const distances = livingPlayers.map(player => {
      return Vec2.distance(player.position, this.position)
    })
    return livingPlayers[whichMin(distances)]
  }

  remove (): void {
    super.remove()
    this.dead = true
    this.game.guards.delete(this.id)
  }
}
