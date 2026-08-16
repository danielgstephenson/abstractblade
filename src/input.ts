import {
  KeyboardDevice,
  GamepadDevice,
  InputDevice,
  UINavigation,
  registerPixiJSNavigationMixin,
} from 'pixijs-input-devices'
import { Container, isMobile, Ticker } from 'pixi.js'
import { clamp } from './math'

// window.addEventListener('keydown', event => {
//   const keyCode = event.code
//   console.log(`Code: ${keyCode}`)
// })

export type InGameBind = 'North' | 'South' | 'East' | 'West' | 'ZoomIn' | 'ZoomOut' | 'Pause'

declare module 'pixijs-input-devices' {
  interface BindValues {
    inGame: InGameBind
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

GamepadDevice.configureDefaultBinds({
  North: ['LeftStickUp', 'RightStickUp', 'DpadUp'],
  South: ['LeftStickDown', 'RightStickDown', 'DpadDown'],
  East: ['LeftStickLeft', 'RightStickLeft', 'DpadLeft'],
  West: ['LeftStickRight', 'RightStickRight', 'DpadRight'],
  ZoomIn: ['RightShoulder', 'RightTrigger'],
  ZoomOut: ['LeftShoulder', 'LeftTrigger'],
  Pause: ['Start'],
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
  mousePosition: number[] = [0, 0]
  mouseButtons = new Map<number, boolean>()
  maxZoom = 20
  minZoom = -40
  zoom = 0

  constructor() {
    window.addEventListener('wheel', (event: WheelEvent) => this.onwheel(event))
    window.addEventListener('mousemove', (event: MouseEvent) => this.onmousemove(event))
    window.addEventListener('mousedown', (event: MouseEvent) => this.onmousedown(event))
    window.addEventListener('mouseup', (event: MouseEvent) => this.onmouseup(event))
    window.addEventListener('touchmove', (event: TouchEvent) => this.ontouchmove(event))
    window.addEventListener('touchstart', (event: TouchEvent) => this.ontouchstart(event))
    window.addEventListener('touchend', (event: TouchEvent) => this.ontouchend(event))
    window.oncontextmenu = () => {}
  }

  onwheel(event: WheelEvent): void {
    const change = -0.005 * event.deltaY
    this.zoom = clamp(this.minZoom, this.maxZoom, this.zoom + change)
  }

  onmousemove(event: MouseEvent): void {
    this.mousePosition[0] = event.clientX - 0.5 * window.innerWidth
    this.mousePosition[1] = event.clientY - 0.5 * window.innerHeight
  }

  onmousedown(event: MouseEvent): void {
    this.mouseButtons.set(event.button, true)
    this.mousePosition[0] = event.clientX - 0.5 * window.innerWidth
    this.mousePosition[1] = event.clientY - 0.5 * window.innerHeight
  }

  onmouseup(event: MouseEvent): void {
    this.mouseButtons.set(event.button, false)
  }

  ontouchmove(event: TouchEvent): void {
    this.mousePosition[0] = event.touches[0].clientX - 0.5 * window.innerWidth
    this.mousePosition[1] = event.touches[0].clientY - 0.5 * window.innerHeight
  }

  ontouchstart(event: TouchEvent): void {
    this.mouseButtons.set(0, true)
    this.mousePosition[0] = event.touches[0].clientX - 0.5 * window.innerWidth
    this.mousePosition[1] = event.touches[0].clientY - 0.5 * window.innerHeight
  }

  ontouchend(_: TouchEvent): void {
    this.mouseButtons.set(0, false)
  }

  isMouseButtonDown(button: number): boolean {
    return this.mouseButtons.get(button) ?? false
  }
}
