import { readFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

import { describe, expect, it } from 'vitest'

const componentPath = resolve(dirname(fileURLToPath(import.meta.url)), '../AppHeader.vue')
const componentSource = readFileSync(componentPath, 'utf8')
const activeTemplateSource = componentSource.replace(/<!--[\s\S]*?-->/g, '')

describe('AppHeader user dropdown', () => {
  it('does not render the GitHub menu item from the signed-in user dropdown', () => {
    expect(activeTemplateSource).not.toContain('{{ t(\'nav.github\') }}')
    expect(activeTemplateSource).not.toContain('href="https://github.com/Wei-Shaw/sub2api"')
  })
})
