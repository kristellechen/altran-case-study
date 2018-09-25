<template>
  <b-navbar type="dark" variant="dark" toggleable>
    <b-navbar-brand href="#">
      <img src='@/assets/logo.png' width=50dp />
    </b-navbar-brand>
    <b-nav-item>
      <router-link to='Home'>Home</router-link>
    </b-nav-item>
    <b-nav-item>
      <router-link to='AddProject'>Add Project</router-link>
    </b-nav-item>
    <b-nav-item>
      <router-link to='ExportSettings'>Export Settings</router-link>
    </b-nav-item>
    <b-nav-item href="#">Logout</b-nav-item>
    <b-nav-item href="#">Search</b-nav-item>
    <b-nav-item class='ml-auto'><img src='@/assets/logo.png' width=50dp /></b-nav-item>
  </b-navbar>
</template>

<script>
  export default {
    name: 'Header'
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>