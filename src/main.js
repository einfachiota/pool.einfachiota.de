import Vue from 'vue'
import App from './App.vue'
import {i18n} from './plugins/i18n'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'

import VueClipboard from 'vue-clipboard2'

import VueParticles from 'vue-particles'
Vue.use(VueParticles)

Vue.config.productionTip = false

Vue.use(ElementUI);
Vue.use(VueClipboard)

new Vue({
  i18n,
  router,
  render: h => h(App)
}).$mount('#app')