import { Application } from 'pixi.js'
import { Game } from './game/game'

async function start(): Promise<void> {
  const app = new Application()
  await app.init({ background: 'hsl(0, 0%, 0%)', resizeTo: window })
  const pixiDiv = document.getElementById('pixiDiv')!
  pixiDiv.appendChild(app.canvas)
  new Game(app)
}

start()
