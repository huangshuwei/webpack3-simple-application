import Vue from 'vue'
import APP from './components/App.vue'
import router from './router'
/*import store from './store'*/

import './css/index.css'


import { Menu, Submenu,MenuItem,MenuItemGroup } from 'element-ui'
Vue.component(Menu.name, Menu)
Vue.component(Submenu.name, Submenu)
Vue.component(MenuItem.name, MenuItem)
Vue.component(MenuItemGroup.name, MenuItemGroup)



new Vue({
        el: '#app',
   /*     store,*/
        router,
        render: h => h(APP)
})