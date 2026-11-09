import svg1 from './level1.svg?raw'
import svg2 from './level2.svg?raw'
import svg2A from './level2A.svg?raw'
import svg2B from './level2B.svg?raw'
import svg3 from './level3.svg?raw'
import svg4 from './level4.svg?raw'

export const svgs = {
  level1: svg1,
  level2: svg2,
  level2A: svg2A,
  level2B: svg2B,
  level3: svg3,
  level4: svg4,
}

export function isLevelName(name: string): name is keyof typeof svgs {
  return Object.keys(svgs).includes(name)
}
