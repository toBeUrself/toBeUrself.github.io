import Vue from 'vue'
import App from './App.vue'
import 'normalize.css'
import 'highlight.js/styles/gruvbox-dark.css'
// import router from './router'

const vm = new Vue({
    components: {
        App,
    },
    // router,
    render: h => h(App)
}).$mount('#app')