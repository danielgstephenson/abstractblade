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
  reach: number
  safeDistance: number
  closeDistance: number
  pullback = Math.PI * 0.5 * Math.random()

  constructor (game: Game, position: Vec2) {
    super(game, position)
    this.game.guards.set(this.id, this)
    this.spawnPoint = position
    this.team = 2
    this.reach = Blade.reach + Torso.radius
    this.safeDistance = 3 * this.reach
    this.closeDistance = this.reach - 1
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
      this.swingSign = 0
      this.moveDir = this.getHomeMove()
      return
    }
    if (!this.dead) {
      this.swingSign = this.getSwingSign()
      this.moveDir = this.getMove()
      const wallAwayDir = this.getWallAwayDir()
      const open = Vec2.dot(this.moveDir, wallAwayDir) >= 0
      if (open) return
      this.moveDir = this.getWallSlideDir(this.moveDir)
    }
  }

  getSwingSign (): number {
    if (this.dead) return 0
    const player = this.getTargetPlayer()
    if (player == null) return 1
    const distance = Vec2.distance(this.position, player.position)
    const quickSpin = Math.abs(this.spin) < 0.7 * this.maxSpin
    if (quickSpin || distance > 1.5 * this.reach) {
      const spinSign = Math.sign(this.spin)
      return spinSign === 0 ? 1 : spinSign
    }
    const angleErrorSign = Math.sign(this.getAngleError(this, player))
    return angleErrorSign === 0 ? 1 : angleErrorSign
  }

  getAimSwingSign (targetAngle: number): number {
    const angleDiff = getAngleDiff(targetAngle, this.angle)
    const targetSpin = 0.4 * this.maxSpin * angleDiff
    return Math.sign(targetSpin - this.spin)
  }

  getMove (): Vec2 {
    if (this.dead) return new Vec2(0, 0)
    const player = this.getTargetPlayer()
    if (player == null) {
      return this.getHomeMove()
    }
    return this.getPlayerMove(player)
  }

  getPlayerMove (player: Fighter): Vec2 {
    if (this.halo.wallPoints.length > 0) {
      const dirFromPlayer = dirFromTo(player.position, this.position)
      return this.getWallSlideDir(dirFromPlayer)
    }
    const playerAngleError = this.getAngleError(player, this)
    const playerAimed = Math.abs(playerAngleError) < 0.3 * Math.PI
    if (playerAimed) {
      return this.getDistanceMove(player, 1.5 * Blade.reach)
    }
    return this.getDistanceMove(player, 1.5 * Blade.reach)
  }

  getDistanceMove (player: Fighter, targetDistance: number): Vec2 {
    const dirFromPlayer = dirFromTo(player.position, this.position)
    const targetPosition = Vec2.combine(1, player.position, targetDistance, dirFromPlayer)
    const dirToTarget = dirFromTo(this.position, targetPosition)
    const targetVelocity = Vec2.combine(1, player.velocity, this.maxSpeed, dirToTarget)
    return dirFromTo(this.velocity, targetVelocity)
  }

  getCircleMove (player: Fighter, sign: number): Vec2 {
    const dirToPlayer = dirFromTo(this.position, player.position)
    const circleDir = rotate(dirToPlayer, -sign * 0.5 * Math.PI)
    return circleDir
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

  getAngleError (fighter: Fighter, other: Fighter): number {
    const targetDir = dirFromTo(fighter.position, other.position)
    const targetAngle = vecToAngle(targetDir)
    const angleDiff = getAngleDiff(targetAngle, fighter.angle)
    return angleDiff
  }

  getHomeMove (): Vec2 {
    const distToHome = Vec2.distance(this.position, this.spawnPoint)
    const dirToHome = dirFromTo(this.position, this.spawnPoint)
    if (distToHome > 1) return this.getWallSlideDir(dirToHome)
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
