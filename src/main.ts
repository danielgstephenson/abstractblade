import { Application } from 'pixi.js'
import { Game } from './game'
import { wallColor } from './parameters'

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

const cornerLabels = document.querySelectorAll('.cornerLabel') as NodeListOf<HTMLDivElement> 
cornerLabels.forEach(cornerLabel => {
  cornerLabel.style.color = wallColor
})

const ringDiv = document.querySelector('#ring') as HTMLDivElement
ringDiv.style.borderColor = wallColor
ringDiv.style.borderWidth = '0.7vmin'

void new Game(app)
