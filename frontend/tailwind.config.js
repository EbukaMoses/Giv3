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
          light: "#A993FF",
          DEFAULT: "#6C63FF",
          dark: "#4F46E5",
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
            light: "from-violet-400 to-purple-400",
            DEFAULT: "from-violet-500 to-purple-500",
            dark: "from-violet-600 to-purple-600",
          },
          secondary: {
            light: "from-purple-400 to-pink-400",
            DEFAULT: "from-purple-500 to-pink-500",
            dark: "from-purple-600 to-pink-600",
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
        'gradient-primary': 'linear-gradient(135deg, #6C63FF 0%, #A993FF 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%)',
        'gradient-teal': 'linear-gradient(135deg, #2DD4BF 0%, #14B8A6 100%)',
        'gradient-pink': 'linear-gradient(135deg, #F9A8D4 0%, #F472B6 100%)',
        'gradient-gold': 'linear-gradient(135deg, #FACC15 0%, #EAB308 100%)',
      },
      boxShadow: {
        'brand': '0 4px 14px 0 rgba(108, 99, 255, 0.15)',
        'brand-lg': '0 10px 25px 0 rgba(108, 99, 255, 0.25)',
      },
    },
  },
  plugins: [],
}
