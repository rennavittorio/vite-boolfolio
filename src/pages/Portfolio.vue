<template>

    <Default>

        <div class="wrapper h-100 d-flex flex-column">

            <h3 class="mb-3">
                My portfolio
            </h3>

            <div class="pagination d-flex align-items-center gap-3 my-3">
                
                <p class="current-page d-flex mb-0">
                    Current page: {{ current_page }}
                </p>
                <ul class="page_list d-flex gap-2"> Pages:
                    <li
                    v-for="n in last_page" :key="n"
                    @click="fetchProjects(n)"
                    class="btn btn-sm btn-warning px-3 d-flex"
                    >
                        {{ n }}
                    </li>
                </ul>  
            </div>
    
            <div class="grid-layout">
    
                <Card 
                v-for="p in projects_list" :key="p.id"
                :title="p.title"
                :project_slug="p.slug"
                :project_category="p.proj_category"
                :technologies="p.technologies"
                />
                
            </div>

        </div>

    </Default>


</template>
<script>
import axios from 'axios';
import Default from '../layouts/Default.vue';
import Card from '../components/Card.vue';

export default {
    components: {
        Default,
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
.main {
    height: 800px;
}

.container{
    height: 800px;
}
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