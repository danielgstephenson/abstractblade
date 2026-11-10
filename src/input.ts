import { KeyboardDevice, GamepadDevice, InputDevice, UINavigation, registerPixiJSNavigationMixin, type GamepadCode } from 'pixijs-input-devices'
import { Container, isMobile, Ticker } from 'pixi.js'
import { clamp } from './math'
import { Joystick } from './joystick'

// window.addEventListener('keydown', event => {
//   const keyCode = event.code
//   console.log(`Code: ${keyCode}`)
// })

export type InGameBind = 'North' | 'South' | 'East' | 'West' | 'ZoomIn' | 'ZoomOut' | 'Pause'

declare module 'pixijs-input-devices' {
  interface BindValues {
    inGame: InGameBind | 'Continue'
  }
}

KeyboardDevice.configureBinds({
  North: ['KeyW', 'ArrowUp'],
  South: ['KeyS', 'ArrowDown'],
  East: ['KeyA', 'ArrowLeft'],
  West: ['KeyD', 'ArrowRight'],
  ZoomIn: ['Equal'],
  ZoomOut: ['Minus'],
  Pause: ['Escape'],
})

const gamepadContinueCodes: GamepadCode[] = [
  'Face1',
  'Face2',
  'Face3',
  'Face4',
  'Back',
  'Start',
  'LeftStickClick',
  'RightStickClick',
  'DpadUp',
  'DpadDown',
  'DpadLeft',
  'DpadRight',
]

GamepadDevice.configureDefaultBinds({
  North: ['LeftStickUp', 'RightStickUp', 'DpadUp'],
  South: ['LeftStickDown', 'RightStickDown', 'DpadDown'],
  East: ['LeftStickLeft', 'RightStickLeft', 'DpadLeft'],
  West: ['LeftStickRight', 'RightStickRight', 'DpadRight'],
  ZoomIn: ['RightShoulder', 'RightTrigger'],
  ZoomOut: ['LeftShoulder', 'LeftTrigger'],
  Pause: ['Start'],
  Continue: gamepadContinueCodes,
})

Ticker.shared.add(() => InputDevice.update())

registerPixiJSNavigationMixin(Container)

if (!isMobile.any) {
  UINavigation.options.events.press = ['mousedown']
  UINavigation.options.events.release = ['mouseup', 'click']
  UINavigation.options.events.focus = ['mouseover']
  UINavigation.options.events.blur = ['mouseout']
}

export class Input {
  arena = document.getElementById('arena') as HTMLDivElement
  joystick: Joystick = new Joystick()
  mousePosition: number[] = [0, 0]
  mouseButtons = new Map<number, boolean>()
  maxZoom = 20
  minZoom = -30
  zoom = 0

  constructor() {
    window.addEventListener('wheel', (event: WheelEvent) => this.onwheel(event))
    window.addEventListener('mousemove', (event: MouseEvent) => this.onmousemove(event))
    window.addEventListener('mousedown', (event: MouseEvent) => this.onmousedown(event))
    window.addEventListener('mouseup', (event: MouseEvent) => this.onmouseup(event))
    window.addEventListener('touchmove', (event: TouchEvent) => this.ontouchmove(event))
    window.addEventListener('touchstart', (event: TouchEvent) => this.ontouchstart(event))
    window.addEventListener('touchend', (event: TouchEvent) => this.ontouchend(event))
    window.addEventListener('contextmenu', event => event.preventDefault())
  }

  onwheel(event: WheelEvent): void {
    const change = -0.005 * event.deltaY
    this.zoom = clamp(this.minZoom, this.maxZoom, this.zoom + change)
  }

  setMousePosition(clientX: number, clientY: number): void {
    const rect = this.arena.getBoundingClientRect()
    this.mousePosition[0] = clientX - (rect.left + 0.5 * rect.width)
    this.mousePosition[1] = clientY - (rect.top + 0.5 * rect.height)
  }

  onmousemove(event: MouseEvent): void {
    this.setMousePosition(event.clientX, event.clientY)
  }

  onmousedown(event: MouseEvent): void {
    this.mouseButtons.set(event.button, true)
    this.setMousePosition(event.clientX, event.clientY)
  }

  onmouseup(event: MouseEvent): void {
    this.mouseButtons.set(event.button, false)
  }

  ontouchmove(event: TouchEvent): void {
    this.setMousePosition(event.touches[0].clientX, event.touches[0].clientY)
  }

  ontouchstart(event: TouchEvent): void {
    this.mouseButtons.set(0, true)
    this.setMousePosition(event.touches[0].clientX, event.touches[0].clientY)
  }

  ontouchend(_: TouchEvent): void {
    this.mouseButtons.set(0, false)
  }

  isMouseButtonDown(button: number): boolean {
    return this.mouseButtons.get(button) ?? false
  }
}
