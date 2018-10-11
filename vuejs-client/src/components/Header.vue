<template>
  <nav class="navbar fixed-top header">
    <b-navbar-brand href="#">
      <img src='@/assets/AltranLogo.jpg' />
    </b-navbar-brand>
    <b-nav-item>
      <router-link to='/Home'><div class='headerText h5'>Home</div></router-link>
    </b-nav-item>
    <b-nav-item>
      <router-link to='/AddProject'><div class='headerText h5'>Add Project</div></router-link>
    </b-nav-item>
    <b-nav-item>
      <router-link to='/ExportSettings'><div class='headerText h5'>Export Settings</div></router-link>
    </b-nav-item>
    <b-nav-item href="#"><div class='headerText h5'>Logout</div></b-nav-item>
    <b-nav-item class='ml-auto' href="#">{{message}}</b-nav-item>
    <b-nav-item class='ml-auto'><img src='@/assets/logo.png' width=50dp /></b-nav-item>
  </nav>
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

.body {
  background-color: blue;
}

.header {
	background-repeat: repeat-x;
	background-size: cover;
	/* background-image: url('../assets/nightsky.jpg'); */
 	background: url('../assets/nightsky.jpg');
}

.headerText {
  color:antiquewhite;
}
</style>