<template>
  <b-navbar type="dark" variant="dark" toggleable class='fixed-top'>
    <b-navbar-brand href="#">
      <img src='@/assets/AltranLogo.jpg' />
    </b-navbar-brand>
    <b-nav-item>
      <router-link to='/Home'><h5>Home</h5></router-link>
    </b-nav-item>
    <b-nav-item>
      <router-link to='/AddProject'><h5>Add Project</h5></router-link>
    </b-nav-item>
    <b-nav-item>
      <router-link to='/ExportSettings'><h5>Export Settings</h5></router-link>
    </b-nav-item>
    <b-nav-item href="#"><h5>Logout</h5></b-nav-item>
    <b-nav-item class='ml-auto' href="#">{{message}}</b-nav-item>
    <b-nav-item class='ml-auto'><img src='@/assets/logo.png' width=50dp /></b-nav-item>
  </b-navbar>
</template>

<script>
  export default {
    name: 'Header',
    computed: {
        message() {
          return this.$store.state.message
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>