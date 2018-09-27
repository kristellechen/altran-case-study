<template>
  <div>
    <div class='row'>
      <div class='col-2'>Client Name</div>
      <div class='col-4'><input type='text' class='form-control' v-model='searchPayload.clientname'></div>
      <div class='col-2'>Engagement</div>
      <div class='col-4'>
        <Multiselect v-model='searchPayload.selectedEngagementTypes' :options='engagementTypes' :multiple='true'></Multiselect>
      </div>
    </div>
    <div class='row'>
      <div class='col-2'>Project Name</div>
      <div class='col-4'><input type='text' class='form-control' v-model='searchPayload.projectname'></div>
      <div class='col-2'>Industry</div>
      <div class='col-4'><input type='text' class='form-control' v-model='searchPayload.industry'></div>
    </div>
    <div class='row'>
      <div class='col-2'>Keyword</div>
      <div class='col-4'>
        <Multiselect v-model='searchPayload.selectedKeywords' :options='keywords' :multiple='true'></Multiselect>
      </div>
      <div class='col-2'>Discipline</div>
      <div class='col-4'><input type='text' class='form-control' v-model='searchPayload.discipline'></div>
    </div>
    <div class='float-right'>
      <b-button @click.prevent='resetForm' class='btn-danger mt-2'>Reset</b-button>
    </div>
  </div>
</template>

<script>
  import Multiselect from 'vue-multiselect'

  export default {
    name: 'Search',
    components: {
      Multiselect
    },
    data() {
      return {
        searchPayload: {
          clientname: '',
          projectname: '',
          industry: '',
          discipline: '',
          selectedKeywords: [],
          selectedEngagementTypes: []
        }
      }
    },
    watch: {
      searchPayload: {
        function (json) {
          this.onSearch(json)
        },
        deep: true      // set deep to look for nested changes
      }
    },
    computed: {
      services() {
        return this.$store.state.services.map(a => a.name)
      },
      keywords() {
        return this.$store.state.keywords.map(a => a.name)
      },
      engagementTypes() {
        return this.$store.state.engagementTypes.map(a => a.name)
      }
    },
    methods: {
      onSearch(json) {
        this.$emit('onSearch', json)
      },
      resetForm() {
        this.searchPayload.clientname = ''
        this.searchPayload.projectname = ''
        this.searchPayload.industry = ''
        this.searchPayload.discipline = ''
        this.searchPayload.selectedKeywords = []
        this.searchPayload.selectedEngagementTypes = []
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>