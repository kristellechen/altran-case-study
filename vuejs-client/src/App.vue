<template>
  <div id="app">
    <Toasted href='toasted' />
    <Header />
    <router-view class='myRouterView' />
  </div>
</template>

<script>
  // @ is an alias to /src
  import Header from '@/components/Header.vue'

  let toastrOpts = {
    duration: 3000,
    fullWidth: true,
    position: 'top-center'
  }

  export default {
    name: 'app',
    components: {
      Header
    },
    mounted() {
      this.$store.dispatch('initialize').then(resp => {
        this.$toasted.show('initialized', toastrOpts)
      }).catch(err => {
        this.$toasted.show(err.message, toastrOpts)
      })
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
    background-color: #EAE7DC;
  }

  #nav {
    padding: 30px;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }

  .myRouterView {
    margin-left: 50px;
    margin-right: 50px;
    margin-top: 5px;
  }
</style>