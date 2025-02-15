import { Transform, Vec2 } from 'planck'
import { Fighter } from './fighter'
import { Game } from '../game'
import { GuardArea } from '../features/guardArea'
import { Player } from './player'
import { clamp, dirFromTo, getAngleDiff, pi, rotate, vecToAngle, whichMax, whichMin } from '../math'
export class Guard extends Fighter {
  guardAreas: GuardArea[] = []
  safeDistance: number
  closeDistance: number

  constructor (game: Game, position: Vec2) {
    super(game, position)
    this.game.guards.set(this.id, this)
    this.spawnPoint = position
    this.team = 2
    this.safeDistance = 3 * this.reach
    this.closeDistance = this.reach - 1
    this.respawn()
  }

  respawn (): void {
    super.respawn()
    this.body.setPosition(this.spawnPoint)
    this.body.setLinearVelocity(Vec2.zero())
    this.body.setAngularVelocity(0)
  }

  preStep (dt: number): void {
    super.preStep(dt)
  }

  postStep (dt: number): void {
    super.postStep(dt)
    this.guardAreas = this.getGuardAreas()
    const targetPlayer = this.getTargetPlayer()
    if (this.dead) {
      if (targetPlayer == null) this.respawn()
      return
    }
    if (targetPlayer == null) {
      this.moveDir = this.getHomeMove()
      const nearestPlayer = this.getNearestPlayer()
      if (nearestPlayer == null) {
        this.swingSign = 0
        return
      }
      this.swingSign = this.getSwingSign(nearestPlayer)
      return
    }
    this.swingSign = this.getSwingSign(targetPlayer)
    this.moveDir = this.wallSlide(this.getMove(targetPlayer))
  }

  getSwingSign (player: Fighter): number {
    const distance = Vec2.distance(this.position, player.position)
    const gap = distance / this.reach
    if (gap < 0.5) {
      return this.getAttackSwingSign(player)
    }
    const absError = Math.abs(this.getAngleError(this, player))
    const playerAbsError = Math.abs(this.getAngleError(player, this))
    const playerInside = playerAbsError < Math.max(absError, 0.3 * pi)
    if (gap < 1.8 && playerInside) {
      return this.getBlockSwingSign(player)
    }
    if (gap < 1.4) {
      return this.getAttackSwingSign(player)
    }
    return this.getEngageSwingSign(player)
  }

  getBlockSwingSign (player: Fighter): number {
    const toPlayer = dirFromTo(this.position, player.position)
    const clampError = clamp(-0.25 * pi, 0.25 * pi, this.getAngleError(player, this))
    const targetAngle = vecToAngle(toPlayer) + clampError
    const angleDiff = getAngleDiff(targetAngle, this.angle)
    const targetSpin = 100 * angleDiff
    return Math.sign(targetSpin - this.spin)
  }

  getAttackSwingSign (player: Fighter): number {
    const toPlayer = dirFromTo(this.position, player.position)
    const targetAngle = vecToAngle(toPlayer)
    const angleDiff = getAngleDiff(targetAngle, this.angle)
    const targetSpin = 100 * angleDiff
    return Math.sign(targetSpin - this.spin)
  }

  getEngageSwingSign (player: Fighter): number {
    const toPlayer = dirFromTo(this.position, player.position)
    const angleError = this.getAngleError(this, player)
    const playerAngleError = this.getAngleError(player, this)
    const pullBack = clamp(0.1 * pi, 0.25 * pi, 0.5 * Math.abs(playerAngleError))
    const offset = -pullBack * Math.sign(angleError) // * pi
    const targetAngle = vecToAngle(toPlayer) + offset
    const angleDiff = getAngleDiff(targetAngle, this.angle)
    const targetSpin = 4 * angleDiff
    return Math.sign(targetSpin - this.spin)
  }

  getDisengageSwingSign (player: Fighter): number {
    const toPlayer = dirFromTo(this.position, player.position)
    const angleError = this.getAngleError(this, player)
    const offset = -0.25 * pi * Math.sign(angleError)
    const targetAngle = vecToAngle(toPlayer) + offset
    const angleDiff = getAngleDiff(targetAngle, this.angle)
    const targetSpin = 3 * angleDiff
    return Math.sign(targetSpin - this.spin)
  }

  getMove (player: Fighter): Vec2 {
    const toPlayer = dirFromTo(this.position, player.position)
    const distance = Vec2.distance(this.position, player.position)
    const gap = distance / this.reach
    if (gap > 0.4) {
      const chaseVelocity = Vec2.combine(1, player.velocity, this.maxSpeed, toPlayer)
      return dirFromTo(this.velocity, chaseVelocity)
    }
    return this.getCircleMove(player)
  }

  getCircleMove (player: Fighter): Vec2 {
    const circleDir = this.getCircleDir(player)
    const targetVelocity = Vec2.mul(this.maxSpeed, circleDir)
    return dirFromTo(this.velocity, targetVelocity)
  }

  getCircleDir (player: Fighter): Vec2 {
    const sign = -Math.sign(this.getAngleError(player, this))
    const dirToPlayer = dirFromTo(this.position, player.position)
    return rotate(dirToPlayer, sign * 0.5 * Math.PI)
  }

  wallSlide (targetDir: Vec2): Vec2 {
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

  getNearestPlayer (): Player | null {
    const players: Player[] = [...this.game.players.values()]
    const livingPlayers = players.filter(player => !player.dead)
    if (livingPlayers.length === 0) return null
    const distances = livingPlayers.map(player => {
      return Vec2.distance(player.position, this.position)
    })
    return livingPlayers[whichMin(distances)]
  }

  getGuardAreas (): GuardArea[] {
    const guardAreas = this.game.cavern.guardAreas.filter(guardArea => {
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
