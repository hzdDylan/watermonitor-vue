import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入Web3
// import Web3 from 'web3'

const app = createApp(App);

import installElementPlus from './plugins/element' //装载element-plug ui
//调用
installElementPlus(app);

app.use(store).use(router).mount('#app');
