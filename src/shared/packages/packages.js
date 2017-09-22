import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Raven from 'raven-js'
import RavenVue from 'raven-js/plugins/vue'
import VueToastr from '@deveodk/vue-toastr'
import '@deveodk/vue-toastr/dist/@deveodk/vue-toastr.css'
import errorTracker from '@deveodk/vue-error-tracker'
import vueSeo from '@deveodk/vue-seo'

const API_URL = process.env.API_URL

Vue.use(VueAxios, axios)
axios.defaults.baseURL = API_URL + '/v1/'

if (process.env.NODE_ENV !== 'development') {
Raven
    .config(' --- ADD SENTRY DSN HERE --- ')
    .addPlugin(RavenVue, Vue)
    .install()
Vue.prototype.$raven = Raven
}

Vue.use(vueSeo)

Vue.use(VueAxios, axios)
axios.defaults.baseURL = ''

Vue.use(VueToastr, {
    defaultPosition: 'toast-bottom-right',
    defaultType: 'info',
    defaultTimeout: 5000
})

Vue.use(errorTracker, {
    HttpDriver: require('@deveodk/vue-error-tracker/drivers/http/axios.js'),
    NotificationDriver: require('@deveodk/vue-error-tracker/drivers/notification/deveoToastr.js'),
    ReportDriver: require('@deveodk/vue-error-tracker/drivers/report/sentry.js'),
    HttpErrorCodes: {
        401: {
            title: 'Ingen adgang',
            message: 'Du har ikke adgang til at se dette',
            type: 'error'
        },
        400: {
            title: 'Ukendt fejl',
            message: 'Noget gik galt',
            type: 'error'
        },

        500: {
            title: 'Server fejl',
            message: 'Åhh nej noget er gået galt',
            type: 'error'
        }
    }
})
