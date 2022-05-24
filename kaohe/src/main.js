import Vue from 'vue'
import App from './App.vue'
import { Table, TableColumn, Button, Input,  Message, MessageBox} from 'element-ui';
import store from './store/index.js'

Vue.config.productionTip = false

Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Button)
Vue.use(Input)
Vue.use(Message)
Vue.prototype.$msgbox = MessageBox
Vue.prototype.$alert = MessageBox.alert
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$prompt = MessageBox.prompt
Vue.prototype.$message = Message
new Vue({
  render: h => h(App),
  store
}).$mount('#app')
