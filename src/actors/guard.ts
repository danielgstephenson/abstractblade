import { Transform, Vec2 } from 'planck'
import { Fighter } from './fighter'
import { Game } from '../game'
import { GuardArea } from '../features/guardArea'
import { Player } from './player'
import { angleToDir, dirFromTo, getAngleDiff, pi, rotate, vecToAngle, whichMax, whichMin } from '../math'
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
    if (gap < 1.3) {
      if (Math.abs(this.spin) > 0.5 * this.maxSpin) {
        return Math.sign(this.spin)
      }
      return this.getAttackSwingSign(player)
    }
    // const playerAngleError = this.getAngleError(player, this)
    // const playerSmallError = Math.abs(playerAngleError) < 0.4 * pi
    // if (gap < 1.5 && playerSmallError) {
    //   return this.getDeflectSwingSign(player)
    // }
    // if (Math.abs(player.spin) > 0.5 * player.maxSpin) {
    //   return this.getBlockSwingSign(player)
    // }
    return this.getMatchSwingSign(player)
  }

  getDeflectSwingSign (player: Fighter): number {
    const length = 0.9 * player.reach
    const playerBladePosition = Vec2.combine(1, player.position, length, angleToDir(player.angle))
    const toPlayerBlade = dirFromTo(this.position, playerBladePosition)
    const targetAngle = vecToAngle(toPlayerBlade)
    const angleDiff = getAngleDiff(targetAngle, this.angle)
    const targetSpin = 2 * this.maxSpin * angleDiff / pi
    return Math.sign(targetSpin - this.spin)
  }

  getBlockSwingSign (player: Fighter): number {
    const toPlayer = dirFromTo(this.position, player.position)
    const targetAngle = vecToAngle(toPlayer) + 0.2 * pi * Math.sign(player.spin)
    const angleDiff = getAngleDiff(targetAngle, this.angle)
    const targetSpin = 2 * this.maxSpin * angleDiff / pi
    return Math.sign(targetSpin - this.spin)
  }

  getAttackSwingSign (player: Fighter): number {
    const toPlayer = dirFromTo(this.position, player.position)
    const targetAngle = vecToAngle(toPlayer)
    const angleDiff = getAngleDiff(targetAngle, this.angle)
    return Math.sign(angleDiff)
  }

  getMatchSwingSign (player: Fighter): number {
    const toPlayer = dirFromTo(this.position, player.position)
    const playerAngleError = this.getAngleError(player, this)
    const targetAngle = vecToAngle(toPlayer) + playerAngleError
    const angleDiff = getAngleDiff(targetAngle, this.angle)
    const targetSpin = -0.5 * player.spin + 3 * this.maxSpin * angleDiff / pi
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
    const sign = -Math.sign(this.getAngleError(player, this))
    const dirToPlayer = dirFromTo(this.position, player.position)
    const circleDir = rotate(dirToPlayer, sign * 0.5 * Math.PI)
    const targetVelocity = Vec2.mul(this.maxSpeed, circleDir)
    return dirFromTo(this.velocity, targetVelocity)
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
