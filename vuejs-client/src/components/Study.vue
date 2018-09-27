<template>
  <div>
    <div class='row'>
      <div class='col-1'>Client</div>
      <div class='col-5'>
        <input type='text' id='inlineFormInputGroup' class='form-control' placeholder='Client' v-model='study.client'>
      </div>
      <div class='col-1'>Engagement</div>
      <div class='col-5'>
        <Multiselect v-model='selectedEngagementTypes' :options='engagementTypes' :multiple='true'></Multiselect>
      </div>
    </div>
    <div class='row'>
      <div class='col-1'>Project</div>
      <div class='col-5'> <input type='text' id='inlineFormInputGroup' class='form-control' placeholder='Client'
          v-model='study.projectName'>
      </div>
      <div class='col-1'>Discipline</div>
      <div class='col-5'> <input type='text' id='inlineFormInputGroup' class='form-control' placeholder='Client'
          v-model='study.discipline'>
      </div>
    </div>
    <div class='row'>
      <div class='col-1'>Year</div>
      <div class='col-5'> <input type='text' id='inlineFormInputGroup' class='form-control' placeholder='Client'
          v-model='study.year'>
      </div>
      <div class='col-1'>Summary</div>
      <div class='col-5'> <input type='text' id='inlineFormInputGroup' class='form-control' placeholder='Client'
          v-model='study.projectSummary'>
      </div>
    </div>
    <div class='row'>
      <div class='col-1'>Brand</div>
      <div class='col-5'> <input type='text' id='inlineFormInputGroup' class='form-control' placeholder='Client'
          v-model='study.brand'>
      </div>
      <div class='col-1'>Project Team</div>
      <div class='col-5'> <input type='text' id='inlineFormInputGroup' class='form-control' placeholder='Client'
          v-model='study.projectTeam'>
      </div>
    </div>
    <div class='row'>
      <div class='col-1'>Industry</div>
      <div class='col-5'> <input type='text' id='inlineFormInputGroup' class='form-control' placeholder='Client'
          v-model='study.industry'>
      </div>
      <div class='col-1'>Keywords</div>
      <div class='col-5'>
        <Multiselect v-model='selectedKeywords' :options='keywords' :multiple='true'></Multiselect>
      </div>
    </div>
    <div class='row'>
      <div class='col-1'>Sector</div>
      <div class='col-5'> <input type='text' id='inlineFormInputGroup' class='form-control' placeholder='Client'
          v-model='study.sector'>
      </div>
      <div class='col-1'>Situation</div>
      <div class='col-5'> <input type='text' id='inlineFormInputGroup' class='form-control' placeholder='Client'
          v-model='study.situation'>
      </div>
    </div>
    <div class='row'>
      <div class='col-1'>Services</div>
      <div class='col-5'>
        <Multiselect v-model='selectedServices' :options='services' :multiple='true'></Multiselect>
      </div>
      <div class='col-1'>Solution</div>
      <div class='col-5'> <input type='text' id='inlineFormInputGroup' class='form-control' placeholder='Client'
          v-model='study.solution'>
      </div>
    </div>
    <div class='row'>
      <div class='col-1'>Challenges</div>
      <div class='col-5'> <input type='text' id='inlineFormInputGroup' class='form-control' placeholder='Client'
          v-model='study.challenges'>
      </div>
      <div class='col-1'>Project Type</div>
      <div class='col-5'> <input type='text' id='inlineFormInputGroup' class='form-control' placeholder='Client'
          v-model='study.projectApplicationType'>
      </div>
    </div>
    <div class='row'>
      <div class='col-1'>Proven Results</div>
      <div class='col-5'> <input type='text' id='inlineFormInputGroup' class='form-control' placeholder='Client'
          v-model='study.provenResults'>
      </div>
      <div class='col-1'>Image</div>
      <div class='col-5'> <input type='text' id='inlineFormInputGroup' class='form-control' placeholder='Client'
          v-model='study.images'>
      </div>
    </div>
  </div>
</template>

<script>
  import Multiselect from 'vue-multiselect'

  export default {
    name: 'Study',
    components: {
      Multiselect
    },
    data() {
      return {
        selectedServices: [],
        selectedKeywords: [],
        selectedEngagementTypes: []
      }
    },
    watch: {
      selectedServices: function (array) {
        this.study.services = array.join(', ')
      },
      selectedKeywords: function (array) {
        this.study.keywords = array.join(', ')
      },
      selectedEngagementTypes: function (array) {
        this.study.engagementType = array.join(', ')
      }
    },
    props: ['study'],
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
    methods: {},
    mounted() {
      // When this components is mounted, convert strings to the multiselect controls.
      this.selectedServices = this.study.services.split(',')
      this.selectedKeywords = this.study.keywords.split(',')
      this.selectedEngagementTypes = this.study.engagementType.split(',')
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>