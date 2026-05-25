import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        void: '#050508',
        surface: '#0d0d14',
        gold: '#C8A97E',
        'gold-dim': '#8a7358',
      },
      fontFamily: {
        cormorant: ['Cormorant Garamond', 'serif'],
        syne: ['Syne', 'sans-serif'],
        mono: ['DM Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
export default config
