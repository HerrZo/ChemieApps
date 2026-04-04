import type { Config } from 'tailwindcss'

export const baseConfig: Partial<Config> = {
  theme: {
    extend: {
      colors: {
        'chem-50':  '#fff7ed',
        'chem-100': '#ffedd5',
        'chem-200': '#fed7aa',
        'chem-300': '#fdba74',
        'chem-400': '#fb923c',
        'chem-500': '#f97316',
        'chem-600': '#ea580c',
        'chem-700': '#c2410c',
        'chem-800': '#9a3412',
        'chem-900': '#7c2d12',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        'card': '0 2px 16px 0 rgba(0,0,0,0.08)',
        'card-hover': '0 8px 32px 0 rgba(0,0,0,0.14)',
      },
    },
  },
}
