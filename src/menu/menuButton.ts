import type { Menu } from './menu'

export class MenuButton {
  div: HTMLDivElement
  menu: Menu
  highlighted = false
  index: number
  onSelect = () => {}

  constructor(menu: Menu, divId: string, onSelect?: VoidFunction) {
    this.menu = menu
    this.index = this.menu.buttons.length
    this.menu.buttons.push(this)
    if (onSelect != null) this.onSelect = onSelect
    this.div = document.getElementById(divId) as HTMLDivElement
    this.div.addEventListener('mouseover', () => this.highlight())
    this.div.addEventListener('mousedown', () => {
      this.highlight()
      this.onSelect()
    })
    this.setStyle()
  }

  highlight(): void {
    this.menu.buttons.forEach(b => {
      b.highlighted = false
    })
    this.highlighted = true
    this.menu.buttons.forEach(b => {
      b.setStyle()
    })
  }

  setStyle(): void {
    this.div.style.color = this.highlighted ? 'hsl(200, 100%, 75%)' : 'hsl(200, 71%, 45%)'
    this.div.style.outlineColor = this.highlighted ? 'rgb(25, 0, 255)' : 'rgb(0, 195, 255)'
    this.div.style.backgroundColor = this.highlighted ? 'rgb(25, 0, 255)' : 'black'
  }
}
