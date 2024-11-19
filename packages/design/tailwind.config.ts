import type { Config } from 'tailwindcss'
import daisyui from 'daisyui'

export default {
  content: [
    './components/**/*.vue',
    './stories/**/*.mdx',
  ],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: ['business'],
  },
} satisfies Config
