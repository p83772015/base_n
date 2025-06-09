import type { Config } from 'tailwindcss'
 
const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
export default config
