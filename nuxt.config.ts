// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    'nuxt-quasar-ui'
  ],
  quasar: { 
    plugins: [
      'BottomSheet',
      'Dialog',
      'Loading',
      'LoadingBar',
      'Notify',
      'Dark',
    ],
    extras: {
      font: 'roboto-font',
      fontIcons: ['material-icons'],
    },
    config: {
      brand: {
        primary: '#204669',
        secondary: '#26A69A',
        accent: '#9C27B0',
  
        dark: '#1d1d1d',
  
  
        positive: '#21BA45',
        negative: '#C10015',
        info: '#31CCEC',
        warning: '#F2C037'
      }
    }
  },
  vite: {
    server: {
      fs: {
          allow: ["..","../.."]
      }
    }
  }
})
