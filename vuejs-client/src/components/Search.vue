<template>
  <div>
    <h1>Search Component</h1>
    <b-btn @click='doSearch'>Search</b-btn>
  </div>
</template>

<script>
  export default {
    name: 'Search',
    data() {
      return {
        searchPayload: {
          Client: 'clieney'
        }
      }
    },
    methods: {
      doSearch() {
        this.$emit('onSearch', this.searchPayload)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>