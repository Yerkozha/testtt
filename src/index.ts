// import Vue from 'vue';
// import App from './App.vue'

// var vm = new Vue({
//     el: '#app',
//     render: h => h(App)
//     render: App.render
// })


import { createApp } from 'vue'

import App from './App.vue'
import pinia from '@/app/providers/store';
import router from '@/app/providers/router';
import '@/scss/main.scss'

console.log(App);
const app = createApp(App)

app.use(pinia);
app.use(router);
app.mount('#app');
