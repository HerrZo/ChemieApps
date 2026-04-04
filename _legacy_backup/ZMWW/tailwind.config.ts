import { baseConfig } from '../shared/tailwind.config.base'
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      ...(baseConfig.theme?.extend ?? {}),
    },
  },
  plugins: [],
}
