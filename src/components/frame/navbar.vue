<template>
    <b-navbar toggleable="lg" type="dark" variant="success">
    <b-navbar-brand to="/">Absensi Server</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item to="/">Home</b-nav-item>
        <b-nav-item to="/employee">Pekerja</b-nav-item>
        <b-nav-item to="/schedule">Jadwal</b-nav-item>
        <b-nav-item to="/absent">Absensi</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">

        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template v-slot:button-content>
            User
          </template>
          <b-dropdown-item @click="signout">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>
<script>
export default {
    name:'navbar-top',
    methods:{
        signout(){
            this.$cookies.remove("token")
            this.$router.push({ name: 'Login', query: { redirect: '/login' } })
        }
    }
}
</script>
<style scoped>
.navbar{
    margin-bottom: 10px;
    
}
</style>