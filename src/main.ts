import { Application } from 'pixi.js'
import { Game } from './game'
import { hudColor, wallColor } from './parameters'
import { initTriggerTexture } from './texture/triggerTexture'
import { initCircleTexture } from './texture/circleTexture'
import { initPortalTexture } from './texture/portalTexture'
import { initStarTexture } from './texture/starTexture'
import { initSavePointTexture } from './texture/savePointTexture'

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
initPortalTexture(app.renderer)
initTriggerTexture(app.renderer)
initStarTexture(app.renderer)
initSavePointTexture(app.renderer)

const cornerLabels = document.querySelectorAll('.cornerLabel') as NodeListOf<HTMLDivElement>
cornerLabels.forEach(cornerLabel => {
  cornerLabel.style.color = hudColor
})

void new Game(app)
