import { Application } from 'pixi.js'
import { Game } from './game'
import { levelColor, wallColor } from './parameters'
import { initCircleTexture } from './texture'

const arenaDiv = document.getElementById('arena') as HTMLDivElement
const app = new Application()
await app.init({
  width: 1000,
  height: 1000,
  backgroundAlpha: 1,
  backgroundColor: wallColor,
  resizeTo: arenaDiv,
  antialias: true,
})
arenaDiv.appendChild(app.canvas)
initCircleTexture(app.renderer)

const cornerLabels = document.querySelectorAll('.cornerLabel') as NodeListOf<HTMLDivElement> 
cornerLabels.forEach(cornerLabel => {
  cornerLabel.style.color = levelColor
})

void new Game(app)
