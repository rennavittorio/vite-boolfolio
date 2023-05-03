<template>

    <header class="header py-5 px-2 d-flex justify-content-between">
        <div class="logo-wrapper">
            logo
        </div>
        <nav>
            <ul class="d-flex gap-2">
                <li
                v-for="route in routeNames" :key="route"
                >
                    <router-link :to="{ name: route }">
                        {{ route }}
                    </router-link>
                </li>
            </ul>
        </nav>
    </header>

</template>

<script>
    export default {
        data(){
            return {
                routeNames: ['home', 'portfolio', 'contacts']
            }
        }
    }
</script>

<style scoped>

.header {
    background-color: darkblue;
    color: white;
}

</style>