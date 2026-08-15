import * as opentype from 'opentype.js'
import fontUrl from './assets/Lekton-Bold.ttf?url'
import { Application } from 'pixi.js'

const response = await fetch(fontUrl)
const buffer = await response.arrayBuffer()
void opentype.parse(buffer)

const arenaDiv = document.getElementById('arena') as HTMLDivElement
const app = new Application()
await app.init({
  width: 1000,
  height: 1000,
  backgroundColor: 'hsl(0 0% 0%)',
  resizeTo: arenaDiv,
  antialias: true,
})
arenaDiv.appendChild(app.canvas)