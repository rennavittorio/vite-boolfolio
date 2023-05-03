import { createApp } from 'vue'
import { router } from './router' //importiamo il router su main.js
import './style.css'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

createApp(App).use(router).mount('#app') //lo fissiamo prima del mount
