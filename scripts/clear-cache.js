import { rmSync } from 'fs'
import { join as joinPath } from 'path'

const cacheDir = joinPath(__dirname, '..', 'node_modules/.cache')
rmSync(cacheDir, { recursive: true, force: true })