import type { Application } from "pixi.js";

export class Game {
  app: Application

  constructor(app: Application) {
    this.app = app
  }
}