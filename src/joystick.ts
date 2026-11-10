import { getMagnitude, mul } from './math'

export class Joystick {
  value: number[] = [0, 0]
  div = document.getElementById('joystick') as HTMLDivElement
  base = document.getElementById('joystickBase') as HTMLDivElement
  knob = document.getElementById('joystickKnob') as HTMLDivElement
  pointerId: number | null = null

  constructor() {
    this.base.addEventListener('pointerdown', event => this.onDown(event))
    this.base.addEventListener('pointermove', event => this.onMove(event))
    this.base.addEventListener('pointerup', event => this.onUp(event))
    this.base.addEventListener('pointercancel', event => this.onUp(event))
  }

  onDown(event: PointerEvent): void {
    if (this.pointerId != null) return
    this.pointerId = event.pointerId
    this.base.setPointerCapture(event.pointerId)
    this.update(event)
  }

  onMove(event: PointerEvent): void {
    if (event.pointerId === this.pointerId) this.update(event)
  }

  onUp(event: PointerEvent): void {
    if (event.pointerId !== this.pointerId) return
    this.pointerId = null
    this.value = [0, 0]
    this.knob.style.transform = ''
  }

  update(event: PointerEvent): void {
    const rect = this.base.getBoundingClientRect()
    const radius = 0.5 * rect.width
    const offset = [event.clientX - (rect.left + radius), event.clientY - (rect.top + radius)]
    const dist = getMagnitude(offset)
    const clamped = dist > radius ? mul(radius / dist, offset) : offset
    this.value = mul(1 / radius, clamped)
    this.knob.style.transform = `translate(${clamped[0]}px, ${clamped[1]}px)`
  }
}
