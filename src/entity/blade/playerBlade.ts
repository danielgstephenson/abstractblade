import type { Level } from "../../level";
import { playerBladeColor } from "../../parameters";
import { Blade } from "./blade";

export class PlayerBlade extends Blade {

  constructor(level: Level, position: number[]) {
    super(level,position,0,playerBladeColor)
  }

}