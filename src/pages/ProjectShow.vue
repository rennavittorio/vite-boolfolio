<template>

    <Default>

        <div class="container">
            
            <template v-if="loading === false">

                <h3>
                    Detail
                </h3>

                <Card
                :title="project.title"
                :project_slug="project.slug"
                :project_category="project.proj_category"
                :technologies="project.technologies"
                />

                <div class="mt-5">

                    <h3>
                        Related tech
                    </h3>

                    <div v-if="relatedProjects.length > 0" class="grid-layout">
    
                        <Card 
                        v-for="related in relatedProjects[0].projects" :key="related.id"
                        :title="related.title"
                        :project_slug="related.slug"
                        :project_category="related.proj_category"
                        :technologies="related.technologies"
                        />
                        
                    </div>

                </div>

            </template>

            <template v-else>
                now loading...
            </template>

        </div>

    </Default>


</template>
<script>
import Default from '../layouts/Default.vue';
import Card from '../components/Card.vue';
import axios from 'axios';

export default {
    components: {
        Default,
        Card,
    },
    props: ['slug'],
    data(){
        return {
            project: null,
            relatedProjects: [],
            loading: true,
        }
    }, 
    methods: {
        fetchProject(slug){

            this.loading = true

            axios.get(`http://127.0.0.1:8000/api/projects/${slug}`).then(res=>{
                const { success, project } = res.data;
                this.project = project;
                this.relatedProjects = project.technologies;
                console.log(this.project)
            }).finally(()=>{
                this.loading = false
                console.log('show me')
            })
        }
    },
    created(){
        this.fetchProject(this.slug);
    },
    beforeRouteUpdate(to, from){
        const newSlug = to.params.slug
        this.fetchProject(newSlug)
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