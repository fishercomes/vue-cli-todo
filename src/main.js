import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this; //配置全局事件总线 $bus就是当前应用的vm
  }
}).$mount('#app')
