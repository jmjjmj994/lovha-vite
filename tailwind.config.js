/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundColor: {
        'bg-primary-clr': 'hsl(0, 0%, 90%)',
        'bg-secondary-clr': 'hsl(0, 0%, 100%)',
        'bg-input-clr': 'hsl(0, 0%, 23%)',
        'blue-B50': 'hsl(254, 52%, 94%)',
        'blue-B75': 'hsl(256, 54%, 73%)',
        'blue-B100': 'hsl(256, 54%, 62%)',
        'blue-B200': 'hsl(256, 63%, 46%)',
        'blue-B300': 'hsl(256, 100%, 35%)',
        'blue-B400': 'hsl(256, 100%, 25%)',
        'blue-B500': 'hsl(256, 100%, 21%)',
      },

      textColor: {
        'headers-clr': 'hsl(0, 0%, 23%)',
        'body-text-light': 'hsl(254, 52%, 94%)',
      },

      fontFamily: {
        mono: ['Roboto Mono', 'monospace'],
      },
    },
  },
  plugins: [],
};
