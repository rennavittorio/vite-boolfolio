<template>
    <div class="card">
        <div class="card-body">
            <h5 class="card-title">
                Title: {{ title }}
            </h5>
            <div class="wrapper-category">
                <h6 
                v-if="project_category !== null"
                class="card-subtitle mb-2 text-body-secondary">
                    Project Category: <span class="badge bg-primary">{{ project_category }}</span> 
                </h6>
                <h6 
                v-else
                class="card-subtitle mb-2 text-body-secondary">
                    Project Category: -
                </h6>
            </div>
            <div class="wrapper-tech">
                <ul 
                v-if="technologies.length === 0"
                class="card-subtitle mb-2 text-body-secondary techs"> Stack: none

                </ul>
                <ul
                v-else
                class="card-subtitle mb-2 text-body-secondary techs"
                > Stack: 
                    <li
                    v-for="item in technologies"
                    >
                        <span class="badge bg-warning">{{ item.technology }}</span>
                    </li>
                </ul>
            </div>

        </div>
    </div>
</template>
<script>
export default {
    props: {
        title: {
            type: String,
            required: true,
        },
        project_category: {
            type: String,
            required: false
        },
        technologies: {
            type: Array,
            required: false
        }
    }
}
</script>
<style scoped>
ul, ol, li, menu {
    list-style: none;
    padding: 0;
    margin: 0;
}

.techs {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
}
</style>