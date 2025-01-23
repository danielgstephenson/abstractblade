import { Transform, Vec2 } from 'planck'
import { Fighter } from './fighter'
import { Game } from '../game'
import { GuardArea } from '../features/guardArea'
import { Player } from './player'
import { dirFromTo, getAngleDiff, pi, rotate, vecToAngle, whichMax, whichMin } from '../math'
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
    const gap = (distance - this.reach) / this.reach
    if (gap > 0.05 || quickSpin) {
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
    const gap = (distance - this.reach) / this.reach
    if (this.halo.wallPoints.length > 0) {
      const wallAwayDir = this.getWallAwayDir()
      if (gap > 0.5) return wallAwayDir
      return this.getWallSlideDir(fromPlayer)
    }
    const aimTime = this.getAimTime(this, player)
    const playerAimTime = this.getAimTime(player, this)
    const playerAngleError = this.getAngleError(player, this)
    const advantage =
      Math.abs(playerAngleError) > 0.3 * pi &&
      aimTime + 0.1 < playerAimTime
    console.log('gap', gap.toFixed(2), advantage, Math.abs(playerAngleError) > 0.3 * pi, aimTime + 0.1 < playerAimTime)
    if (gap < 0) return this.getCircleMove(player, playerAngleError)
    if (gap < 0.2 && advantage) return this.getAdvanceMove(player)
    return this.getGapMove(player, 0.15)
  }

  getAdvanceMove (player: Fighter): Vec2 {
    const toPlayer = dirFromTo(this.position, player.position)
    const distance = Vec2.distance(this.position, player.position)
    const sign = distance > 0.5 * this.reach ? 1 : -1
    const targetVelocity = Vec2.mul(sign * this.maxSpeed, toPlayer)
    return dirFromTo(this.velocity, targetVelocity)
  }

  getGapMove (player: Fighter, targetGap: number): Vec2 {
    const distance = Vec2.distance(this.position, player.position)
    const gap = (distance - this.reach) / this.reach
    if (gap < targetGap) {
      const fromPlayer = dirFromTo(player.position, this.position)
      return fromPlayer
    }
    const toPlayer = dirFromTo(this.position, player.position)
    const targetSpeed = this.maxSpeed * Math.sign(gap - targetGap)
    const targetVelocity = Vec2.combine(1, player.velocity, targetSpeed, toPlayer)
    return dirFromTo(this.velocity, targetVelocity)
  }

  getCircleMove (player: Fighter, sign: number): Vec2 {
    const dirToPlayer = dirFromTo(this.position, player.position)
    return rotate(dirToPlayer, -Math.sign(sign) * 0.5 * Math.PI)
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

  getReachTime (fighter: Fighter, other: Fighter): number {
    const fighterToOther = dirFromTo(fighter.position, other.position)
    const otherToFighter = dirFromTo(other.position, fighter.position)
    const fighterSpeed = Vec2.dot(fighter.velocity, fighterToOther)
    const otherSpeed = Vec2.dot(other.velocity, otherToFighter)
    const speed = fighterSpeed + otherSpeed
    const distance = Vec2.distance(fighter.position, other.position)
    if (speed <= 0) return Infinity * (distance - this.reach)
    return (distance - this.reach) / speed
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
