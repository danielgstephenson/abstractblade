import type { Level } from "../../level";
import { playerBladeColor } from "../../parameters";
import type { Player } from "../agent/player";
import { Blade } from "./blade";

export class PlayerBlade extends Blade {
  player?: Player

  constructor(level: Level, position: number[], player?: Player) {
    super(level,position,0,playerBladeColor)
    this.player = player
  }

}