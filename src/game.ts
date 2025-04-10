import { Server } from './server'
import { InputSummary } from './summaries/inputSummary'
import { Player } from './actors/player'
import { Simulation } from './simulation'
import { Guard } from './actors/guard'
import { Star } from './actors/star'
import { SimulationSummary } from './summaries/gameSummary'
import { range } from './math'

export class Game extends Simulation {
  time: number
  timeScale: number
  simulation: Simulation
  players = new Map<string, Player>()
  guards = new Map<string, Guard>()
  stars = new Map<string, Star>()

  constructor (server: Server) {
    super(server)
    this.time = performance.now()
    this.timeScale = this.server.config.timeScale
    this.simulation = new Simulation(this.server)
    this.setupSavePoints()
    this.setupGuards()
    this.setupIo()
    setInterval(() => this.step(), 20)
  }

  setupIo (): void {
    this.server.io.on('connection', socket => {
      console.log('connect:', socket.id)
      socket.emit('connected', this.layout.summary)
      const player = new Player(this)
      socket.on('input', (input: InputSummary) => {
        socket.emit('summary', player.getPlayerSummary())
        if (player.dead) return
        player.handleInput(input)
      })
      socket.on('disconnect', () => {
        console.log('disconnect:', socket.id)
        player.remove()
      })
      socket.on('keydown', () => {
        if (player.dead && player.deathTimer > 0) {
          player.respawn()
        }
      })
    })
  }

  setupGuards (): void {
    this.layout.guardPoints.forEach((position, i) => {
      void new Guard(this, position)
    })
  }

  setupSavePoints (): void {
    this.layout.starPoints.forEach((position, index) => {
      void new Star(this, position, index)
      if (index === 0) this.startPoint = position
    })
  }

  step (): void {
    const oldTime = this.time
    this.time = performance.now()
    const dt = this.timeScale * (this.time - oldTime) / 1000
    this.runner.step(dt)
    this.players.forEach(player => {
      player.forecast = []
      player.blade.forecast = []
      player.model.body.setPosition(player.position)
      player.model.blade.body.setPosition(player.blade.position)
      player.model.body.setLinearVelocity(player.velocity)
      player.model.blade.body.setLinearVelocity(player.blade.velocity)
      player.model.moveDir = player.moveDir
    })
    range(1, 20).forEach(() => {
      this.simulation.runner.step(0.1 * this.timeScale)
      this.players.forEach(player => {
        player.forecast.push(player.model.position.clone())
        player.blade.forecast.push(player.model.blade.position.clone())
      })
    })
    this.summary = new SimulationSummary(this)
  }
}
