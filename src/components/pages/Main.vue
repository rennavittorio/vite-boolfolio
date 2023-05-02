<template>
    <main class="main">
        <div class="conteinr">
            <div class="grid-layout">
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
        }
    },
    methods: {
        fetchProjects(){
            axios.get('http://127.0.0.1:8000/api/projects').then(res=>{
                // console.log(res);
                const projects = res.data.projects;
                this.projects_list = projects.data;
                console.log(this.projects_list);
            })
        }
    },
    mounted(){
        this.fetchProjects();
    }
}
</script>


<style scoped>

.grid-layout{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;

}
</style>