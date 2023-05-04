<template>

  <div class="container">

    <router-view></router-view>

  </div>


</template>

<script>

export default{
  components: {

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
