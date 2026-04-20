export class Collision {
  normal: number[]
  overlap: number

  constructor(normal: number[], overlap: number) {
    this.normal = normal
    this.overlap = overlap
  }
}
