import Vue from 'vue'
import App from './app'

import i18n from './infrastructure/lang/locale'
import router from './infrastructure/router/router'

/* eslint-disable no-new */
new Vue({
    el: '#app',
    i18n,
    // store,
    router,
    template: '<App/>',
    components: { App }
})
