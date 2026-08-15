import { Application } from 'pixi.js'
import { Game } from './game'

const arenaDiv = document.getElementById('arena') as HTMLDivElement
const app = new Application()
await app.init({
  width: 1000,
  height: 1000,
  backgroundAlpha: 0,
  resizeTo: arenaDiv,
  antialias: true,
})
arenaDiv.appendChild(app.canvas)

void new Game(app)
