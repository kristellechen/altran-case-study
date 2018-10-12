<template>
  <nav class="navbar sticky-top header">
    <b-navbar-brand href="#">
      <img src='@/assets/AltranLogo.jpg' />
    </b-navbar-brand>
    <b-nav-item class='nav-link'>
      <router-link to='/Home'><div class='headerText'>Home</div></router-link>
    </b-nav-item>
    <b-nav-item class='nav-link'>
      <router-link to='/AddProject'><div class='headerText'>Add Project</div></router-link>
    </b-nav-item>
    <b-nav-item class='nav-link'>
      <router-link to='/ExportSettings'><div class='headerText'>Export Settings</div></router-link>
    </b-nav-item>
    <b-nav-item class='nav-link' href="#"><div class='headerText'>Logout</div></b-nav-item>
    <b-nav-item class='ml-auto nav-link' href="#">{{message}}</b-nav-item>
    <b-nav-item class='ml-auto nav-link'>
      <button type="button" v-b-toggle.collapse1 class="btn btn-outline-light mr-3 mt-3 mb-2 ml-auto"><i class="fas fa-search"></i></button>
    </b-nav-item>
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
 	/* background: url('../assets/nightsky.jpg'); */
  background-color: #314455;
}

.headerText {
  color:antiquewhite;
}
</style>