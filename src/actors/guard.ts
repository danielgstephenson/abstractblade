import { Transform, Vec2 } from 'planck'
import { Fighter } from './fighter'
import { GuardArea } from '../features/guardArea'
import { Player } from './player'
import { dirFromTo, pi, randomDir, rotate, whichMax, whichMin } from '../math'
import { BladeCircle } from '../features/bladeCircle'
import { Game } from '../game'

export class Guard extends Fighter {
  guardAreas: GuardArea[] = []
  distanceToPlayer: number = Infinity
  game: Game
  chargeProb: number
  charge = false

  constructor (game: Game, position: Vec2, chargeProb: number) {
    super(game, position)
    this.game = game
    this.chargeProb = chargeProb
    this.game.guards.set(this.id, this)
    this.spawnPoint = position
    this.team = 2
    this.respawn()
  }

  respawn (): void {
    super.respawn()
    this.body.setPosition(this.spawnPoint)
    this.body.setLinearVelocity(Vec2.zero())
    this.body.setAngularVelocity(0)
    this.distanceToPlayer = Infinity
  }

  preStep (dt: number): void {
    super.preStep(dt)
    if (Math.random() < dt) {
      this.charge = Math.random() < this.chargeProb
    }
  }

  postStep (dt: number): void {
    super.postStep(dt)
    this.guardAreas = this.getGuardAreas()
    const targetPlayer = this.getTargetPlayer()
    const nearestPlayer = this.getNearestPlayer(this.position)
    if (this.dead) {
      if (nearestPlayer == null) {
        this.respawn()
        return
      }
      const spawnNearestPlayer = this.getNearestPlayer(this.spawnPoint)
      if (spawnNearestPlayer == null) {
        this.respawn()
        return
      }
      const distance = Vec2.distance(nearestPlayer.position, this.position)
      const spawnDistance = Vec2.distance(spawnNearestPlayer.position, this.spawnPoint)
      const minDistance = Math.min(distance, spawnDistance)
      if (minDistance > 3 * this.reach && targetPlayer == null) {
        this.respawn()
      }
      return
    }
    if (targetPlayer != null) {
      this.distanceToPlayer = Vec2.distance(targetPlayer.position, this.position)
    } else {
      this.distanceToPlayer = Infinity
    }
    const nearGuard = this.getNearGuard()
    if (nearGuard != null) {
      const nearGuardDistance = Vec2.distance(nearGuard.position, this.position)
      const tooClose = nearGuardDistance < 2 * this.reach
      const yieldToOther = nearGuard.distanceToPlayer <= this.distanceToPlayer
      if (tooClose && yieldToOther) {
        this.moveDir = dirFromTo(nearGuard.position, this.position)
        return
      }
    }
    if (targetPlayer == null) {
      this.moveDir = this.wallSlide(this.getHomeMove())
      return
    }
    this.moveDir = this.wallSlide(this.getFightMove(targetPlayer))
  }

  getFightMove (player: Player): Vec2 {
    if (!this.charge) {
      const dodgeMove = this.getDodgeMove(player)
      if (dodgeMove != null) return dodgeMove
    }
    const swingMove = this.getSwingMove()
    const distanceToPlayer = Vec2.distance(this.position, player.position)
    const reachTime = 0.5 * distanceToPlayer / this.maxSpeed
    const targetPosition = Vec2.combine(1, player.position, reachTime, player.velocity)
    const targetDir = dirFromTo(this.position, targetPosition)
    const targetVelocity = Vec2.combine(1, player.velocity, this.maxSpeed, targetDir)
    const targetMove = dirFromTo(this.velocity, targetVelocity)
    if (Vec2.dot(targetMove, swingMove) > 0) {
      return swingMove
    }
    return targetMove
  }

  getDodgeMove (player: Player): Vec2 | null {
    for (const point of player.blade.forecast) {
      const distance = Vec2.distance(this.position, point)
      if (distance < this.reach - BladeCircle.radius) {
        const dirFromPoint = dirFromTo(point, this.position)
        const targetVelocity = Vec2.combine(1, player.blade.velocity, this.maxSpeed, dirFromPoint)
        return dirFromTo(this.velocity, targetVelocity)
      }
    }
    return null
  }

  getSwingMove (): Vec2 {
    if (this.swing === 0) return randomDir()
    const position = this.body.getPosition()
    const bladePosition = this.blade.body.getPosition()
    const away = Vec2.sub(bladePosition, position)
    if (away.length() === 0) return randomDir()
    const bladeSpeed = this.blade.velocity.length()
    if (bladeSpeed < 2) {
      return dirFromTo(this.blade.position, this.position)
    }
    const perp = rotate(away, -0.5 * pi * Math.sign(this.swing))
    return perp
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
    if (distance > 2) return new Vec2(0, 0)
    const nearWallPoint = this.halo.wallPoints[whichMin(distances)]
    return dirFromTo(nearWallPoint, this.position)
  }

  getHomeMove (): Vec2 {
    const player = this.getNearestPlayer(this.position)
    if (player != null) {
      const dodgeMove = this.getDodgeMove(player)
      if (dodgeMove != null) return dodgeMove
    }
    const distToHome = Vec2.distance(this.position, this.spawnPoint)
    const dirToHome = dirFromTo(this.position, this.spawnPoint)
    if (distToHome > this.reach) return dirToHome
    return this.getSwingMove()
  }

  getNearGuard (): Guard | null {
    const guards: Guard[] = []
    this.guardAreas.forEach(guardArea => {
      const areaGuards = [...guardArea.guards.values()]
      const otherGuards = areaGuards.filter(guard => guard.id !== this.id)
      guards.push(...otherGuards)
    })
    const livingGuards = guards.filter(guard => !guard.dead)
    if (livingGuards.length === 0) return null
    const distances = livingGuards.map(guard => {
      return Vec2.distance(guard.position, this.position)
    })
    return livingGuards[whichMin(distances)]
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

  getNearestPlayer (position: Vec2): Player | null {
    const players: Player[] = [...this.game.players.values()]
    if (players.length === 0) return null
    const distances = players.map(player => {
      return Vec2.distance(player.position, position)
    })
    return players[whichMin(distances)]
  }

  getGuardAreas (): GuardArea[] {
    const guardAreas = this.simulation.cavern.guardAreas.filter(guardArea => {
      const spawnInside = guardArea.polygon.testPoint(Transform.identity(), this.spawnPoint)
      const currentInside = guardArea.polygon.testPoint(Transform.identity(), this.position)
      return spawnInside || currentInside
    })
    return guardAreas
  }

  remove (): void {
    super.remove()
    this.dead = true
    this.game.guards.delete(this.id)
  }
}
