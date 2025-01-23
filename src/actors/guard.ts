import { Transform, Vec2 } from 'planck'
import { Fighter } from './fighter'
import { Game } from '../game'
import { GuardArea } from '../features/guardArea'
import { Player } from './player'
import { dirFromTo, getAngleDiff, rotate, vecToAngle, whichMax, whichMin } from '../math'
import { Blade } from '../features/blade'
import { Torso } from '../features/torso'
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

  preStep (): void {
    super.preStep()
  }

  postStep (): void {
    super.postStep()
    this.guardAreas = this.getGuardAreas()
    const targetPlayer = this.getTargetPlayer()
    if (this.dead && targetPlayer == null) {
      this.respawn()
    }
    if (!this.dead) {
      this.swingSign = this.getSwingSign()
      this.moveDir = this.getMove()
    }
  }

  getSwingSign (): number {
    if (this.dead) return 0
    const player = this.getTargetPlayer()
    if (player == null) return 1
    const distance = Vec2.distance(this.position, player.position)
    const quickSpin = Math.abs(this.spin) > 0.5 * this.maxSpin
    if (distance > 1.2 * this.reach || quickSpin) {
      const spinSign = Math.sign(this.spin)
      return spinSign === 0 ? 1 : spinSign
    }
    const angleErrorSign = Math.sign(this.getAngleError(this, player))
    return angleErrorSign === 0 ? 1 : angleErrorSign
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
    const distance = Vec2.distance(this.position, player.position)
    const fromPlayer = dirFromTo(player.position, this.position)
    const toPlayer = dirFromTo(this.position, player.position)
    if (this.halo.wallPoints.length > 0) {
      const wallAwayDir = this.getWallAwayDir()
      if (distance > 1.3 * this.reach) return wallAwayDir
      return this.getWallSlideDir(fromPlayer)
    }
    const gap = (distance - this.reach) / this.reach
    console.log('gap', gap.toFixed(2))
    return this.getGapMove(player, 0.3)
  }

  getGapMove (player: Fighter, targetGap: number): Vec2 {
    const distance = Vec2.distance(this.position, player.position)
    const gap = (distance - this.reach) / this.reach
    if (gap < targetGap) {
      const fromPlayer = dirFromTo(player.position, this.position)
      const targetVelocity = Vec2.mul(this.maxSpeed, fromPlayer)
      return dirFromTo(this.velocity, targetVelocity)
    }
    const toPlayer = dirFromTo(this.position, player.position)
    const targetSpeed = 1.5 * (gap - targetGap)
    const targetVelocity = Vec2.combine(1, player.velocity, targetSpeed, toPlayer)
    return dirFromTo(this.velocity, targetVelocity)
  }

  getCircleMove (player: Fighter, sign: number): Vec2 {
    const dirToPlayer = dirFromTo(this.position, player.position)
    return rotate(dirToPlayer, -sign * 0.5 * Math.PI)
  }

  getAimTime (fighter: Fighter, other: Fighter): number {
    const spin = fighter.body.getAngularVelocity()
    const angle = fighter.body.getAngle()
    const otherDir = dirFromTo(fighter.position, other.position)
    const targetAngle = vecToAngle(otherDir)
    const angleDiff = getAngleDiff(targetAngle, angle)
    const maxTime = 5
    if (spin === 0) return maxTime
    const absAngleDiff = Math.abs(angleDiff)
    const absSpin = Math.abs(spin)
    if (absAngleDiff < 0.02 * Math.PI) return 0
    if (spin * angleDiff > 0) return Math.min(maxTime, absAngleDiff / absSpin)
    const bigAbsAngleDiff = 2 * Math.PI - absAngleDiff
    return Math.min(maxTime, bigAbsAngleDiff / absSpin)
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

  getFutureAngleError (fighter: Fighter, other: Fighter, time: number): number {
    const targetDir = dirFromTo(fighter.position, other.position)
    const targetAngle = vecToAngle(targetDir)
    const futureAngle = fighter.angle + fighter.spin * time
    const angleDiff = getAngleDiff(targetAngle, futureAngle)
    return angleDiff
  }

  getHomeMove (): Vec2 {
    // console.log('home')
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
