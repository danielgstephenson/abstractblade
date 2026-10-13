import svg1 from './level1.svg?raw'
import svg2 from './level2.svg?raw'

export const svgs = {
  level1: svg1,
  level2: svg2,
}

export function isLevelName(name: string): name is keyof typeof svgs {
  return Object.keys(svgs).includes(name)
}
