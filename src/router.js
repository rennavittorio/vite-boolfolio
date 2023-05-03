import { createRouter, createWebHistory } from "vue-router"; //importiamo il create e web router
import Home from './pages/Home.vue'
import AboutMe from './pages/AboutMe.vue'
import Contacts from './pages/Contacts.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path:'/',
            name:'home',
            component: Home, //senza la s finale
        },
        {
            path:'/about',
            name:'about-me',
            component: AboutMe, //senza la s finale
        },
        {
            path:'/contacts',
            name:'contacts',
            component: Contacts, //senza la s finale
        }

    ]
})

export { router } //esportiamo la const router