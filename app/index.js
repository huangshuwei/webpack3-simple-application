import Vue from 'vue'
import APP from './components/App.vue'
import router from './router'
/*import store from './store'*/

import './css/index.css'



new Vue({
        el: '#app',
   /*     store,*/
        router,
        render: h => h(APP)
})