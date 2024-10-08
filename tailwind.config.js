/* eslint-disable no-unused-vars */
import daisyui from 'daisyui';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui'),
  ],
  daisyui:{
    themes:['corporate','luxury']
  }
}

