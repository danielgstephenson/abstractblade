export async function fetchWithProgress(url: string, onProgress: (loaded: number, total: number) => void): Promise<ArrayBuffer> {
  const response = await fetch(url)
  if (!response.ok || response.body == null) throw new Error(`${url}: ${response.status}`)
  const total = Number(response.headers.get('Content-Length') ?? 0)
  const reader = response.body.getReader()
  const chunks: Uint8Array[] = []
  let loaded = 0
  for (;;) {
    const { done, value } = await reader.read()
    if (done) break
    chunks.push(value)
    loaded += value.byteLength
    onProgress(loaded, total)
  }
  const bytes = new Uint8Array(loaded)
  chunks.reduce((offset, chunk) => (bytes.set(chunk, offset), offset + chunk.byteLength), 0)
  return bytes.buffer
}

class Progress {
  done = new Map<string, number>() // name → 0..1
  weights: Record<string, number>
  onChange: (f: number) => void
  constructor(weights: Record<string, number>, onChange: (f: number) => void) {
    this.weights = weights
    this.onChange = onChange
  }
  step(name: string) {
    return (loaded: number, total: number) => {
      this.done.set(name, total > 0 ? loaded / total : 0)
      let sum = 0,
        acc = 0
      for (const [k, w] of Object.entries(this.weights)) {
        sum += w
        acc += w * (this.done.get(k) ?? 0)
      }
      this.onChange(acc / sum)
    }
  }
}

const loadingBar = document.getElementById('loadingBar') as HTMLDivElement

export const progress = new Progress({ wasm: 27, charge: 1.2, attack: 1.2, defend: 1.2, evade: 1.2, font: 0.1 }, f => {
  loadingBar.style.width = `${Math.round(100 * f)}%`
})
