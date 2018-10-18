<template>
  <nav class="navbar sticky-top header">
    <b-navbar-brand href="#">
      <img src='@/assets/AltranLogo.jpg' />
    </b-navbar-brand>
    <b-nav-item class='nav-link'>
      <router-link to='/Home'>
        <div v-if='linkActive[0]' class='headerText'><strong>Home</strong></div>
        <div v-else class='headerText'>Home</div>
      </router-link>
    </b-nav-item>
    <b-nav-item class='nav-link'>
      <router-link to='/AddProject'>
        <div v-if='linkActive[1]' class='headerText'><strong>Add Project</strong></div>
        <div v-else class='headerText'>Add Project</div>
      </router-link>
    </b-nav-item>
    <b-nav-item class='nav-link'>
      <router-link to='/EditTables'>
        <div v-if='linkActive[2]' class='headerText'><strong>Edit Tables</strong></div>
        <div v-else class='headerText'>Edit Tables</div>
      </router-link>
    </b-nav-item>
    <b-nav-item class='nav-link'>
      <router-link to='/ExportSettings'>
        <div v-if='linkActive[3]' class='headerText'><strong>Export Settings</strong></div>
        <div v-else class='headerText'>Export Settings</div>
      </router-link>
    </b-nav-item>
    <b-nav-item class='nav-link' href="#">
      <div v-if='linkActive[4]' class='headerText'><strong>Logout</strong></div>
      <div v-else class='headerText'>Logout</div>
    </b-nav-item>
    <b-nav-item class='ml-auto nav-link' href="#">{{message}}</b-nav-item>
    <b-nav-item class='ml-auto nav-link'>
      <button type="button" v-show='canSearch' v-b-toggle.collapse1 class="btn btn-outline-light mr-3 ml-auto"><i class="fas fa-search"></i></button>
    </b-nav-item>
  </nav>
</template>

<script>
  export default {
    name: 'Header',
    data() {
      return {
        canSearch: true,
        linkActive: [true, false, false, false, false]
      }
    },
    computed: {
      message() {
        return this.$store.state.message
      }
    },
    watch: {
      $route(to, from) {
        this.canSearch = false

        if (to.name.toUpperCase() === 'HOME') {
          this.canSearch = true;
          this.linkActive = [true, false, false, false, false]
        } else if (to.name.toUpperCase() == 'ADDPROJECT') {
          this.linkActive = [false, true, false, false, false]
        } else if (to.name.toUpperCase() == 'EDITTABLES') {
          this.linkActive = [false, false, true, false, false]
        } else if (to.name.toUpperCase() == 'EXPORTSETTINGS') {
          this.linkActive = [false, false, false, true, false]
        } else if (to.name.toUpperCase() == 'LOGOUT') {
          this.linkActive = [false, false, false, false, true]
        }  else {
          this.linkActive = [false, false, false, false, false,]
        }
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
    color: antiquewhite;
  }
</style>