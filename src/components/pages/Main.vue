<template>
    <main class="main">
        <div class="conteinr">
            <div class="grid-layout mb-2">
                <!-- <div 
                v-for="p in projects_list" :key="p.id"
                class="card">
                    <div class="card-body">
                        <h5 class="card-title">Title: {{ p.title }}</h5>
                        <h6 class="card-subtitle mb-2 text-body-secondary">Id: {{ p.id }}</h6>
                    </div>
                </div> -->

                <Card 
                v-for="p in projects_list" :key="p.id"
                :title="p.title"
                :project_category="p.proj_category"
                :technologies="p.technologies"
                />

            </div>

            <div class="pagination d-flex flex-column">

                <p class="current-page">
                    Current page: {{ current_page }}
                </p>
                <ul class="page_list d-flex gap-2"> Pages:
                    <li
                    v-for="n in last_page" :key="n"
                    @click="fetchProjects(n)"
                    class="btn btn-sm btn-warning px-3"
                    >
                        {{ n }}
                    </li>
                </ul>

            </div>
        </div>
    </main>
</template>


<script>
import axios from 'axios';
import Card from '../Card.vue';

export default {
    components: {
        Card,
    },  
    data(){
        return {
            projects_list: [],
            current_page: 0,
            last_page: 0,
        }
    },
    methods: {
        fetchProjects(n){
            axios.get('http://127.0.0.1:8000/api/projects', { params: {
                page: n,
            }
            }).then(res=>{
                // console.log(res);
                const projects = res.data.projects;
                this.projects_list = projects.data;
                this.current_page = projects.current_page;
                this.last_page = projects.last_page;
                console.log(projects.last_page);
            })
        }
    },
    mounted(){
        this.fetchProjects(1);
    }
}
</script>


<style scoped>

.grid-layout{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;

}

ul, ol, li, menu {
    list-style: none;
    padding: 0;
    margin: 0;
}
</style>