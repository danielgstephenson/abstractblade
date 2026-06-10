import { KeyboardDevice, GamepadDevice, InputDevice, GamepadCode } from 'pixijs-input-devices'
import { Ticker } from 'pixi.js'
import { clamp } from './math'

const gamepadCodes: GamepadCode[] = [
  'Face1',
  'Face2',
  'Face3',
  'Face4',
  'LeftShoulder',
  'RightShoulder',
  'LeftTrigger',
  'RightTrigger',
  'Back',
  'Start',
  'LeftStickClick',
  'RightStickClick',
  'DpadUp',
  'DpadDown',
  'DpadLeft',
  'DpadRight',
]

declare module 'pixijs-input-devices' {
  interface BindValues {
    inGame: 'Up' | 'Left' | 'Right' | 'Down' | 'ZoomIn' | 'ZoomOut' | 'AnyKey'
  }
}

KeyboardDevice.configureBinds({
  Up: ['KeyW', 'ArrowUp'],
  Down: ['KeyS', 'ArrowDown'],
  Left: ['KeyA', 'ArrowLeft'],
  Right: ['KeyD', 'ArrowRight'],
})

GamepadDevice.configureDefaultBinds({
  Up: ['LeftStickUp', 'RightStickUp', 'DpadUp'],
  Down: ['LeftStickDown', 'RightStickDown', 'DpadDown'],
  Left: ['LeftStickLeft', 'RightStickLeft', 'DpadLeft'],
  Right: ['LeftStickRight', 'RightStickRight', 'DpadRight'],
  ZoomIn: ['LeftShoulder', 'LeftTrigger'],
  ZoomOut: ['RightShoulder', 'RightTrigger'],
  AnyKey: gamepadCodes,
})

Ticker.shared.add(() => InputDevice.update())

export class Input {
  mousePosition: number[] = [0, 0]
  mouseButtons = new Map<number, boolean>()
  maxZoom = 20
  minZoom = -40
  zoom = 0
  paused = false

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
