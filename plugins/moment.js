import Vue from 'vue'
import moment from 'moment'
Vue.prototype.$moment = function (date, type) {
  if (type) {
    return moment(new Date(date)).locale('ru').format(type)
  }
}
