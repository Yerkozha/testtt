// import Vue from 'vue';
// import App from './App.vue'

// var vm = new Vue({
//     el: '#app',
//     render: h => h(App)
// })


import { createApp } from 'vue'
import './scss/main.scss'

import App from './App.vue'

console.log(App);
createApp(App).mount('#app')
// createApp({
//     data: function(...args) {
//         console.log(args)
//         return {
//             bla: '111'
//         }
//     },
//     render: App.render
// }).mount('#app')