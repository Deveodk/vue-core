import Vue from 'vue'
import App from './app'
import 'bootstrap'

import './shared/packages/packages'
import i18n from './infrastructure/lang/locale'
import moment from './infrastructure/lang/moment'
import router from './infrastructure/router/router'
import store from './infrastructure/store/store'

Vue.config.productionTip = process.env.PRODUCTION_TIP
Vue.config.debug = process.env.DEBUG_MODE
Vue.config.devtools = process.env.DEV_TOOLS

/* eslint-disable no-new */
new Vue({
    el: '#app',
    i18n,
    store,
    mixins: [moment],
    router,
    template: '<App/>',
    components: { App }
})
