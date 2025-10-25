/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './ui/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#16BFA8",
          DEFAULT: "#0FA47A",
          dark: "#0D8F6B",
        },
        accent: {
          teal: "#2DD4BF",
          pink: "#F9A8D4",
          gold: "#FACC15",
        },
        dark: {
          base: "#1F1B3D",
          text: "#D1D5DB",
        },
        // Brand gradients
        brand: {
          primary: {
            light: "from-emerald-400 to-teal-400",
            DEFAULT: "from-emerald-500 to-teal-500",
            dark: "from-emerald-600 to-teal-600",
          },
          secondary: {
            light: "from-teal-400 to-cyan-400",
            DEFAULT: "from-teal-500 to-cyan-500",
            dark: "from-teal-600 to-cyan-600",
          },
        },
        // Neutral colors with proper naming
        neutral: {
          50: "#FAFAFA",
          100: "#F5F5F5",
          200: "#E5E5E5",
          300: "#D4D4D4",
          400: "#A3A3A3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#1C1C1C",
        },
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #0FA47A 0%, #16BFA8 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #16BFA8 0%, #2DD4BF 100%)',
        'gradient-teal': 'linear-gradient(135deg, #2DD4BF 0%, #14B8A6 100%)',
        'gradient-pink': 'linear-gradient(135deg, #F9A8D4 0%, #F472B6 100%)',
        'gradient-gold': 'linear-gradient(135deg, #FACC15 0%, #EAB308 100%)',
      },
      boxShadow: {
        'brand': '0 4px 14px 0 rgba(15, 164, 122, 0.15)',
        'brand-lg': '0 10px 25px 0 rgba(15, 164, 122, 0.25)',
      },
    },
  },
  plugins: [],
}
