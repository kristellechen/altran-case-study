<template>
  <div class='row'>
    <div class='col-1' />
    <div class='col-10'>
    <div class='row' style='padding-top: 20px;'>
      <div class='col-2 my-auto labelDiv'>Client Name</div>
      <div class='col-4'><input type='text' class='form-control' v-model='searchPayload.clientname'></div>
      <div class='col-2 my-auto labelDiv'>Engagement</div>
      <div class='col-4'>
        <Multiselect v-model='searchPayload.selectedEngagementTypes' :options='engagementTypes' :multiple='true'></Multiselect>
      </div>
    </div>
    <div class='row' style='padding-top: 20px;'>
      <div class='col-2 my-auto labelDiv'>Project Name</div>
      <div class='col-4'><input type='text' class='form-control' v-model='searchPayload.projectname'></div>
      <div class='col-2 my-auto labelDiv'>Industry</div>
      <div class='col-4'><input type='text' class='form-control' v-model='searchPayload.industry'></div>
    </div>
    <div class='row' style='padding-top: 20px;'>
      <div class='col-2 my-auto labelDiv'>Keyword</div>
      <div class='col-4'>
        <Multiselect v-model='searchPayload.selectedKeywords' :options='keywords' :multiple='true'></Multiselect>
      </div>
      <div class='col-2 my-auto labelDiv'>Discipline</div>
      <div class='col-4'><input type='text' class='form-control' v-model='searchPayload.discipline'></div>
    </div>
    <div class='float-right'>
      <b-button @click.prevent='resetForm' class='btn-outline-danger mt-2'>Reset</b-button>
    </div>
    </div>
    <div class='col-1' />
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
          selectedEngagementTypes: [],
        }
      }
    },
    watch: {
      searchPayload: {
        // note the use of handler and deep
        handler (newVal, oldVal) {
          this.onSearch(newVal)
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

.labelDiv {
    text-align: right;
}

</style>