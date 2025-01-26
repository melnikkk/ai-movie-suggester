export default {
  corePlugins: {
    preflight: false,
  },
  important: '#_next',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'neutral-0': '--neutral-0',
        'neutral-10': '--neutral-10',
        'green-50': '--green-50',
        'green-100': '--green-100',
        'success-200': '--success-200',
        'error-200': '--error-200',
      },
      screens: {
        '-2xl': { max: '1535px' },
        '-xl': { max: '1279px' },
        '-lg': { max: '1023px' },
        '-md': { max: '767px' },
        '-sm': { max: '639px' },
        '-xs': { max: '370px' },
        '-xxs': { max: '329px' },
      },
      fontFamily: {
        inter: 'var(--font-inter)',
      },
      fontSize: {
        h1: '4rem',
        h2: '3.5rem',
        h3: '3rem',
        h4: '2.5rem',
        h5: '2rem',
        h6: '1.5rem',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [import('@tailwindcss/forms')],
};
