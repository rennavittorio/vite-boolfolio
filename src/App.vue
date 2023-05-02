<template>

  <div class="container">
    <header class="py-3 mb-3">
      this is header...
    </header>

    <Main />




  </div>


</template>

<script>
import Main from './components/pages/Main.vue';

export default{
  components: {
    Main,
  },
  data(){
    return {
      test: 'questo è un test',
    }
  }
}

</script>


<style scoped>

</style>
