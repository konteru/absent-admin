<template>
  <div id="app">
    <!-- component matched by the route will render here -->
    <router-view></router-view>
  </div>
</template>

<script>
  export default{
    name : 'app',
    created(){
        if(this.$cookies.isKey('token')){
            console.log(this.$cookies.get('token'))
        }else{
                this.$router.push({ name: 'Login', query: { redirect: '/login' } })
        }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>