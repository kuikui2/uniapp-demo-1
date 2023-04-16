import Vue from 'vue'
import App from './App'

// 此处为引用自定义顶部
import cuCustom from './colorui/components/cu-custom.vue'
Vue.component('cu-custom',cuCustom);
import TnCustom from './components/TnCustom/TnCustom.vue'
Vue.component('tn-custom', TnCustom)

// // 引入:uView-UI 1.X版本
// import uView from 'uview-ui';
// Vue.use(uView);

// 引入:uView-UI 2.X版本
import uView from '@/uni_modules/uview-ui';
Vue.use(uView);

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
