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
      "mint": "#DEFFFC",
      "lavender": "#e2e4f6",
      "thistle": "#054A91",
      "claret": "#A4BEF3"
      },
      backgroundImage: {
        "gradient-mintLavender": "linear-gradient(90deg, #DEFFFC 0%, #e2e4f6 100%)",
        "mobile-home": "url('./public/assets/HomePageGraphic.png')"
      },
      content: {
        // sparkles: "url('./public/assets/sparkles.png')",
        // circles: "url('./public/assets/circles.png')",
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
}
export default config
