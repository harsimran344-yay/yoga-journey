/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {
    screens: {
      'tablet': '640px',
      'laptop': '1024px',
      'desktop': '1280px'
    },
    colors: {
      indigo: '#5c6ac4',
      blue: '#007ace',
      red: {
        regular: '#de3618',
        dark: '#A52A2A'
      },
      pink: {
        light: '#FFB6C1'
      }
    },
    fontFamily: {
      default: ['OpenSans']
    }
  }
}
