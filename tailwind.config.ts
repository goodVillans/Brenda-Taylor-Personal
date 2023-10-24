import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
      "white-main": "#FFF9FC",
      "mint": "#86626e",
      "lavender": "#e2e4f6",
      "thistle": "#e7c8dd",
      "claret": "#8b1e3f"
      },
    },
  },
  plugins: [],
}
export default config
