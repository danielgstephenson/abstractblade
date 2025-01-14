import { Transform, Vec2 } from 'planck'
import { Fighter } from './fighter'
import { Game } from '../game'
import { GuardArea } from '../features/guardArea'
import { Player } from './player'
import { dirFromTo, getAngleDiff, rotate, twoPi, vecToAngle, whichMax, whichMin } from '../math'
import { Blade } from '../features/blade'
import { Torso } from '../features/torso'
export class Guard extends Fighter {
  guardAreas: GuardArea[] = []
  safeDistance: number
  closeDistance: number
  pullback = Math.PI * 0.5 * Math.random()

  constructor (game: Game, position: Vec2) {
    super(game, position)
    this.game.guards.set(this.id, this)
    this.spawnPoint = position
    this.team = 2
    this.safeDistance = Blade.reach + 3
    this.closeDistance = Blade.reach - 1
    this.respawn()
  }

  respawn (): void {
    super.respawn()
    this.pullback = Math.PI * 0.3 * Math.random()
    this.body.setPosition(this.spawnPoint)
    this.body.setLinearVelocity(Vec2.zero())
    this.body.setAngularVelocity(0)
  }

  preStep (): void {
    super.preStep()
  }

  postStep (): void {
    super.postStep()
    this.guardAreas = this.getGuardAreas()
    const targetPlayer = this.getTargetPlayer()
    if (targetPlayer == null) {
      if (this.dead) this.respawn()
      this.moveDir = this.getHomeMove()
      this.swingSign = 0
      return
    }
    if (!this.dead) {
      this.moveDir = this.getMoveDir()
      this.swingSign = this.getSwingSign()
    }
  }

  getSwingSign (): number {
    if (this.dead) return 0
    const player = this.getTargetPlayer()
    if (player == null) return 0
    const distance = Vec2.distance(this.position, player.position)
    if (distance < Blade.reach + Torso.radius + 1) {
      const targetDir = dirFromTo(this.position, player.position)
      const targetAngle = vecToAngle(targetDir)
      const angleDiff = getAngleDiff(targetAngle, this.angle)
      return Math.sign(angleDiff)
    }
    const targetDir = dirFromTo(this.position, player.position)
    const targetAngle = vecToAngle(targetDir) + this.pullback * Math.sign(player.spin)
    return this.getAimSwingSign(targetAngle)
  }

  getAimSwingSign (targetAngle: number): number {
    const angleDiff = getAngleDiff(targetAngle, this.angle)
    const targetSpin = 0.4 * this.maxSpin * angleDiff
    return Math.sign(targetSpin - this.spin)
  }

  getMoveDir (): Vec2 {
    if (this.dead) return Vec2(0, 0)
    const player = this.getTargetPlayer()
    const wallAwayDir = this.getWallAwayDir()
    if (player == null) {
      const homeMove = this.getHomeMove()
      const open = Vec2.dot(homeMove, wallAwayDir) >= 0
      if (open) return homeMove
      return this.getWallSlideDir(homeMove)
    }
    const distanceMove = this.getDistanceMove(player, this.closeDistance)
    const open = Vec2.dot(distanceMove, wallAwayDir) >= 0
    if (open) return distanceMove
    const playerAwayDir = dirFromTo(player.position, this.position)
    return this.getWallSlideDir(playerAwayDir)
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

  getWallSlideDir (targetDir: Vec2): Vec2 {
    if (this.halo.wallPoints.length === 0) return targetDir
    const distances = this.halo.wallPoints.map(wallPoint => {
      return Vec2.distance(this.position, wallPoint)
    })
    const nearWallPoint = this.halo.wallPoints[whichMin(distances)]
    const fromWallDir = dirFromTo(nearWallPoint, this.position)
    if (Vec2.dot(fromWallDir, targetDir) >= 0) return targetDir
    const options = [rotate(fromWallDir, 0.5 * Math.PI), rotate(fromWallDir, -0.5 * Math.PI)]
    const optionDots = options.map(option => Vec2.dot(option, targetDir))
    const sideDir = options[whichMax(optionDots)]
    return sideDir
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
    const players: Player[] = []
    this.guardAreas.forEach(guardArea => {
      const guardAreaPlayers = [...guardArea.players.values()]
      players.push(...guardAreaPlayers)
    })
    const livingPlayers = players.filter(player => !player.dead)
    if (livingPlayers.length === 0) return null
    const distances = livingPlayers.map(player => {
      return Vec2.distance(player.position, this.position)
    })
    return livingPlayers[whichMin(distances)]
  }

  getNearPlayer (): Player | null {
    const players = [...this.game.players.values()]
    const livingPlayers = players.filter(player => !player.dead)
    if (livingPlayers.length === 0) return null
    const distances = livingPlayers.map(player => {
      return Vec2.distance(player.position, this.position)
    })
    return livingPlayers[whichMin(distances)]
  }

  getGuardAreas (): GuardArea[] {
    const guardAreas = this.game.cavern.guardAreas.filter(guardArea => {
      // const worldTransform = guardArea.actor.body.getTransform()
      return guardArea.polygon.testPoint(Transform.identity(), this.position)
    })
    return guardAreas
  }

  remove (): void {
    super.remove()
    this.dead = true
    this.game.guards.delete(this.id)
  }
}
