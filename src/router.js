import { createRouter, createWebHistory } from "vue-router"; //importiamo il create e web router
import Home from './pages/Home.vue'
import Portfolio from './pages/Portfolio.vue'
import Contacts from './pages/Contacts.vue'
import ProjectShow from './pages/ProjectShow.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path:'/',
            name:'home',
            component: Home, //senza la s finale
        },
        {
            path:'/portfolio',
            name:'portfolio',
            component: Portfolio, //senza la s finale
        },
        {
            path:'/portfolio/:slug',
            name:'project.show',
            component: ProjectShow,
            props: true,
        },
        {
            path:'/contacts',
            name:'contacts',
            component: Contacts, //senza la s finale
        }

    ]
})

export { router } //esportiamo la const router