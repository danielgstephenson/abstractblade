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
    const quickSpin = Math.abs(this.spin) > 0.5 * this.maxSpin
    if (distance > 1.5 * this.reach || quickSpin) {
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
    if (this.halo.wallPoints.length > 0) {
      const dirFromPlayer = dirFromTo(player.position, this.position)
      if (distance < 2 * this.reach) return this.getWallSlideDir(dirFromPlayer)
      return this.getWallAwayDir()
    }
    if (distance > 3 * this.reach) {
      return this.getAttackMove(player)
    }
    if (distance > 1.5 * this.reach) {
      return this.getDistanceMove(player, 1.3 * this.reach)
    }
    const angleError = this.getAngleError(this, player)
    const playerAngleError = this.getAngleError(player, this)
    const aimTime = this.getAimTime(this, player)
    const playerAimTime = this.getAimTime(player, this)
    const advantage =
      distance < 1.2 * this.reach &&
      aimTime + 0.2 < playerAimTime &&
      Math.abs(angleError) + 0.2 < Math.abs(playerAngleError)
    if (advantage) return dirFromTo(this.position, player.position)
    const targetReachTime = playerAimTime + 0.3
    const advanceSpeed = (distance - this.reach) / targetReachTime
    const dirToPlayer = dirFromTo(this.position, player.position)
    const targetVelocity = Vec2.combine(1, player.velocity, advanceSpeed, dirToPlayer)
    return dirFromTo(this.velocity, targetVelocity)
  }

  getAttackMove (player: Fighter): Vec2 {
    const dirFromPlayer = dirFromTo(player.position, this.position)
    const targetPosition = Vec2.combine(1, player.position, 0.5 * this.reach, dirFromPlayer)
    const dirToTarget = dirFromTo(this.position, targetPosition)
    const targetVelocity = Vec2.mul(this.maxSpeed, dirToTarget)
    return dirFromTo(this.velocity, targetVelocity)
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
