import Vue from 'vue'
import Vuetify from 'vuetify'

import App from './App'
import router from './router'

Vue.config.productionTip = false

Vue.use(Vuetify,{
  theme: {
    primary: '#009688',
    dark: '#004D40',
    secondary: '#0097A7',
    accent: '#00796B',
    error: '#E57373',
    info: '#80DEEA',
    success: '#43A047',
    warning: '#FFF59D',
    text: 'white'
  }
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
