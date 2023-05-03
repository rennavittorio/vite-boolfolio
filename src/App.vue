<template>

  <div class="container">

    <router-view></router-view>

  </div>


</template>

<script>
import Main from './pages/Main.vue';

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

.container {
  height: 100vh;
}

</style>
