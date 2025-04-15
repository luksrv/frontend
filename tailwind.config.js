import tailwindcss from '@tailwindcss/postcss'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3B82F6',
          dark: '#2563EB',
        }
      }
    },
  },
  plugins: [],
  corePlugins: {
    preflight: true, // Habilitado por padrão na v4
  }
}