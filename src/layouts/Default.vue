<template>

    <div class="wrapper d-flex flex-column">

        <Header />
    
        <main class="main px-2">
            <slot />
        </main>
    
        <Footer class="mt-auto" />

    </div>


</template>

<script>
import Header from './Header.vue';
import Footer from './Footer.vue';

    export default {
        components: {
            Header,
            Footer,
        }        
    }
</script>

<style scoped>
.wrapper {
    height: 100vh;
}


</style>