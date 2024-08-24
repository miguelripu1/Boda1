// https://nuxt.com/docs/api/configuration/nuxt-config
import modules from './modules'


export default ({
  ...modules,
  
  css: [
    "~/node_modules/bootstrap/dist/css/bootstrap.min.css",
    '~/static/assets/css/main.css',
    '~/node_modules/swiper/swiper-bundle.css'
  ],

  plugins: [
    { src: "~/plugins/bootstrap.js", mode: 'client'},
  ],

  head: {
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Parisienne&display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Cardo:ital,wght@0,400;0,700;1,400&display=swap'},
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Cardo:ital,wght@0,400;0,700;1,400&family=Gudea:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet"'},
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
    
  }

});