import Vue from 'vue'
import App from './App'
import tab from './utils/global/tab'
import modal from './utils/global/modal'

Vue.prototype.$tab = tab
Vue.prototype.$modal = modal
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
