import svg1 from './level1.svg?raw'
import svg2 from './level2.svg?raw'
import svg2A from './level2A.svg?raw'
import svg2B from './level2B.svg?raw'
import svg3 from './level3.svg?raw'
import svg4 from './level4.svg?raw'
import svg4A from './level4A.svg?raw'
import svg4B from './level4B.svg?raw'
import svg5 from './level5.svg?raw'
import svg6 from './level6.svg?raw'

export const svgs = {
  level1: svg1,
  level2: svg2,
  level2A: svg2A,
  level2B: svg2B,
  level3: svg3,
  level4: svg4,
  level4A: svg4A,
  level4B: svg4B,
  level5: svg5,
  level6: svg6,
}

export function isLevelName(name: string): name is keyof typeof svgs {
  return Object.keys(svgs).includes(name)
}
