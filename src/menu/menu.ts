import { InputDevice } from 'pixijs-input-devices'
import { Game } from '../game'
import { MenuButton } from './menuButton'
import type { Application } from 'pixi.js'

export class Menu {
  div = document.getElementById('menu') as HTMLDivElement
  buttons: MenuButton[] = []
  continueButton: MenuButton
  newGameButton: MenuButton
  app: Application

  constructor(app: Application) {
    this.app = app
    this.continueButton = new MenuButton(this, 'continueButton', () => this.continue())
    this.newGameButton = new MenuButton(this, 'newGameButton', () => this.newGame())
    if (localStorage.getItem('levelId') == null) {
      this.continueButton.div.style.display = 'none'
    }
    InputDevice.onBindDown('South', () => {
      this.next()
    })
    InputDevice.onBindDown('North', () => {
      this.previous()
    })
    InputDevice.onBindDown('Select', () => {
      this.select()
    })
  }

  continue(): void {
    console.log('continue')
    this.div.style.display = 'none'
    void new Game(this.app)
  }

  newGame(): void {
    console.log('new game')
    localStorage.clear()
    void new Game(this.app)
    this.div.style.display = 'none'
  }

  select(): void {
    if (this.div.style.display == 'none') return
    const highlightedButton = this.buttons.find(b => b.highlighted)
    if (highlightedButton == null) return
    highlightedButton.onSelect()
  }

  next(): void {
    if (this.div.style.display == 'none') return
    const highlightedButton = this.buttons.find(b => b.highlighted)
    if (highlightedButton == null) {
      this.buttons[0].highlight()
      return
    }
    const nextIndex = (highlightedButton.index + 1) % this.buttons.length
    const nextButton = this.buttons[nextIndex]
    nextButton.highlight()
  }

  previous(): void {
    if (this.div.style.display == 'none') return
    const highlightedButton = this.buttons.find(b => b.highlighted)
    if (highlightedButton == null) {
      this.buttons[0].highlight()
      return
    }
    const nextIndex = (this.buttons.length + highlightedButton.index - 1) % this.buttons.length
    const nextButton = this.buttons[nextIndex]
    nextButton.highlight()
  }
}
