import { FancyButton, List, Switcher } from '@pixi/ui'
import { Container, Text, ColorSource, Graphics } from 'pixi.js'
import { UINavigation } from 'pixijs-input-devices'
import { Game } from './game'

export class Menu extends Container {
  game: Game
  switcher: Switcher
  main: Container

  constructor(game: Game) {
    super()
    this.game = game
    this.main = this.createMainMenu()
    this.switcher = new Switcher([this.main, new Container()], [])
    this.switcher.active = 0
    this.switcher.pivot.set(this.switcher.width / 2, this.switcher.height / 2)
    this.addChild(this.switcher)
    this.switcher.onChange.connect(active => {
      if (active == 1) {
        this.game.world.view.visible = true
        this.game.world.input.paused = false
      }
    })
  }

  createMainMenu(): Container {
    const container = new Container()
    const buttons = [
      this.makeButton('Begin', () => {
        this.switcher.active = 1
      }),
    ]
    const list = new List({ type: 'vertical', elementsMargin: 15, children: buttons })
    container.addChild(list)
    return container
  }

  makeButton(label: string, onPress: () => void, width = 200, height = 50): FancyButton {
    function stateView(color: ColorSource): Graphics {
      return new Graphics().roundRect(0, 0, width, height, 10).fill(color)
    }
    const text = new Text({
      text: label,
      style: {
        fill: 'white',
        fontSize: 28,
        fontWeight: '600',
      },
    })
    const button = new FancyButton({
      text,
      defaultView: stateView('hsl(240, 9%, 18%)'),
      hoverView: stateView('hsl(221, 83%, 53%)'),
      pressedView: stateView('hsl(224, 76%, 48%)'),
    })
    button.onPress.connect(onPress)
    button.onHover.connect(() => {
      UINavigation.focusTarget = button
    })
    return button
  }
}
