module.exports = {
  content: ['./src/**/*.{html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {},
    screens: {
      xxl: { max: '1440px' },
      xl: { max: '1200px' },
      lg: { max: '992px' },
      md: { max: '768px' },
      sm: { max: '576px' }
    },
    container: {
      center: true,
      screens: {
        sm: '100%',
        md: '100%',
        lg: '992px',
        xl: '1200px'
      }
    }
  },
  plugins: []
}
