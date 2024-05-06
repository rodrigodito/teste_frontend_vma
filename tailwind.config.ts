import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/stories/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontSize: {
      xs: ['10px', '10px'],
      sm: ['12px', '12px'],
      md: ['14px', '14px'],
      lg: ['16px', '16px'],
      xl: ['19px', '19px'],
      '2xl': ['24px', '24px'],
      '3xl': ['36px', '36px']
    },
    extend: {
      colors: {
        vma: {
          darkGrey: '#121212',
          whiteSmoke: '#f8f8f8',
          grey: '#EDEDF1',
          borderGrey: '#D6D7DD',
          mediumGrey: '#B9B9B9',
          foggyGrey: '#ACA99F',
          sonicSilver: '#777777',
          warning: '#D24340',
          lightYellow: '#FBC81D'
        }
      },
      boxShadow: {
        '3xl': '0px 5px 15px 0px #00000040',
        infoBox: '0px 1px 3px 0px #00000026'
      }
    }
  },
  plugins: []
}
export default config
