import { Transform, Vec2 } from 'planck'
import { Fighter } from './fighter'
import { Game } from '../game'
import { GuardArea } from '../features/guardArea'
import { Player } from './player'
import { dirFromTo, pi, randomDir, rotate, whichMax, whichMin } from '../math'
import { Torso } from '../features/torso'
import { Blade } from '../features/blade'

export class Guard extends Fighter {
  guardAreas: GuardArea[] = []

  constructor (game: Game, position: Vec2) {
    super(game, position)
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
  }

  preStep (dt: number): void {
    super.preStep(dt)
  }

  postStep (dt: number): void {
    super.postStep(dt)
    this.guardAreas = this.getGuardAreas()
    if (this.dead) {
      const visiblePlayer = this.getVisiblePlayer()
      if (visiblePlayer == null) {
        this.respawn()
        return
      }
    }
    const targetPlayer = this.getTargetPlayer()
    if (targetPlayer == null) {
      this.moveDir = this.getHomeMove()
      return
    }
    this.moveDir = this.wallSlide(this.getMove(targetPlayer))
  }

  getMove (player: Fighter): Vec2 {
    console.log('v', this.weapon.velocity.length().toFixed(2))
    const chaseMove = this.getChaseMove(player)
    const swingMove = this.getSwingMove()
    const playerDist = Vec2.distance(this.position, player.position)
    const playerBladeDist = Vec2.distance(this.position, player.weapon.position)
    if (playerDist > this.reach + 4) {
      return chaseMove
    }
    if (playerBladeDist > Blade.radius + Torso.radius + 1) {
      if (playerDist > this.reach) {
        return chaseMove
      }
      return swingMove
    }
    if (playerBladeDist > Blade.radius + Torso.radius + 0.5) {
      return swingMove
    }
    const retreatMove = this.getChaseMove(player, 2 * this.reach)
    return retreatMove
  }

  getChaseMove (player: Fighter, targetDist = this.reach - 1): Vec2 {
    const fromPlayer = dirFromTo(player.position, this.position)
    const targetPosition = Vec2.combine(1, player.position, targetDist, fromPlayer)
    const toTarget = dirFromTo(this.position, targetPosition)
    const distanceToTarget = Vec2.distance(this.position, targetPosition)
    const chaseSpeed = 0.5 * distanceToTarget
    const chaseVelocity = Vec2.combine(1, player.velocity, chaseSpeed, toTarget)
    return dirFromTo(this.velocity, chaseVelocity)
  }

  getSwingMove (): Vec2 {
    if (this.swing === 0) return randomDir()
    const position = this.body.getPosition()
    const bladePosition = this.weapon.body.getPosition()
    const away = Vec2.sub(bladePosition, position)
    if (away.length() === 0) return randomDir()
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
    const distToHome = Vec2.distance(this.position, this.spawnPoint)
    const dirToHome = dirFromTo(this.position, this.spawnPoint)
    if (distToHome > this.reach) return dirToHome
    return this.getSwingMove()
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

  getVisiblePlayer (): Player | null {
    const players: Player[] = []
    this.guardAreas.forEach(guardArea => {
      const guardAreaPlayers = [...guardArea.players.values()]
      players.push(...guardAreaPlayers)
    })
    if (players.length === 0) return null
    const distances = players.map(player => {
      return Vec2.distance(player.position, this.position)
    })
    return players[whichMin(distances)]
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
