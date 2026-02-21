import { Application, Assets, Graphics, GraphicsContext, Sprite } from 'pixi.js'

async function start(): Promise<void> {
  const app = new Application()
  await app.init({ background: 'hsl(0, 0%, 0%)', resizeTo: window })
  document.getElementById('pixi-container')!.appendChild(app.canvas)
  const circleContext = new GraphicsContext().circle(100, 100, 50).fill('blue')
  const circle = new Graphics(circleContext)
  app.stage.addChild(circle)
  const texture = await Assets.load('/assets/bunny.png')
  const bunny = new Sprite(texture)
  bunny.anchor.set(0.5)
  bunny.position.set(app.screen.width / 2, app.screen.height / 2)
  app.stage.addChild(bunny)
  app.ticker.add((time) => {
    bunny.rotation += 0.1 * time.deltaTime
  })
}

start()
