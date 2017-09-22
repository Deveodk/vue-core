import Vue from 'vue'
import moment from 'moment'
import VueMoment from 'vue-moment'

Vue.use(VueMoment, moment)

export default {
  created () {
    moment.locale(this.language)
  },
  computed: {
    language () {
      return this.$i18n.locale
    }
  },
  watch: {
    language () {
      moment.locale(this.language)
    }
  }
}
