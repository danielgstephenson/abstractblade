import svg1 from './level1.svg?raw'
import svg2 from './level2.svg?raw'
import svg2A from './level2A.svg?raw'
import svg2B from './level2B.svg?raw'

export const svgs = {
  level1: svg1,
  level2: svg2,
  level2A: svg2A,
  level2B: svg2B,
}

export function isLevelName(name: string): name is keyof typeof svgs {
  return Object.keys(svgs).includes(name)
}
