import { Application } from 'pixi.js'
import { Game } from './game/game'

const appDiv = document.getElementById('app')!

async function start(): Promise<void> {
  const app = new Application()
  await app.init({
    background: 'hsl(0, 0%, 0%)',
    resizeTo: window,
    antialias: true,
  })
  appDiv.appendChild(app.canvas)
  new Game(app)
}

console.log('start')

if (navigator.maxTouchPoints > 0) {
  appDiv.addEventListener('mousedown', () => {
    appDiv.requestFullscreen()
  })
  appDiv.addEventListener('touchstart', () => {
    appDiv.requestFullscreen()
  })
  appDiv.addEventListener('touchmove', () => {
    appDiv.requestFullscreen()
  })
}

start()
