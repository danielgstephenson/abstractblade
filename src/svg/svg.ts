import { INode } from 'svgson'

export function getChildById(node: INode, id: string): INode {
  const matches = node.children.filter(child => child.attributes.id === id)
  if (matches.length === 0) {
    const ids = node.children.map(child => child.attributes.id)
    console.log('child ids', ids)
    throw new Error(`Child "${id}" not found.`)
  }
  return matches[0]
}
