<template>
  <div>
    <div class='row'>
      <div class='col-1'>Client</div>
      <div class='col-5'>
        <input type='text' id='inlineFormInputGroup' class='form-control' placeholder='Client' v-model='study.Client'>
      </div>
      <div class='col-1'>Engagement</div>
      <div class='col-5'>
        <Multiselect v-model='selectedEngagementTypes' :options='engagementTypes' :multiple='true'></Multiselect>
      </div>
    </div>
    <div class='row'>
      <div class='col-1'>Project</div>
      <div class='col-5'> <input type='text' id='inlineFormInputGroup' class='form-control' placeholder='Client'
          v-model='study.ProjectName'>
      </div>
      <div class='col-1'>Discipline</div>
      <div class='col-5'> <input type='text' id='inlineFormInputGroup' class='form-control' placeholder='Client'
          v-model='study.Discipline'>
      </div>
    </div>
    <div class='row'>
      <div class='col-1'>Year</div>
      <div class='col-5'> <input type='text' id='inlineFormInputGroup' class='form-control' placeholder='Client'
          v-model='study.Year'>
      </div>
      <div class='col-1'>Summary</div>
      <div class='col-5'> <input type='text' id='inlineFormInputGroup' class='form-control' placeholder='Client'
          v-model='study.ProjectSummary'>
      </div>
    </div>
    <div class='row'>
      <div class='col-1'>Brand</div>
      <div class='col-5'> <input type='text' id='inlineFormInputGroup' class='form-control' placeholder='Client'
          v-model='study.Brand'>
      </div>
      <div class='col-1'>Project Team</div>
      <div class='col-5'> <input type='text' id='inlineFormInputGroup' class='form-control' placeholder='Client'
          v-model='study.ProjectTeam'>
      </div>
    </div>
    <div class='row'>
      <div class='col-1'>Industry</div>
      <div class='col-5'> <input type='text' id='inlineFormInputGroup' class='form-control' placeholder='Client'
          v-model='study.Industry'>
      </div>
      <div class='col-1'>Keywords</div>
      <div class='col-5'>
        <Multiselect v-model='selectedKeywords' :options='keywords' :multiple='true'></Multiselect>
      </div>
    </div>
    <div class='row'>
      <div class='col-1'>Sector</div>
      <div class='col-5'> <input type='text' id='inlineFormInputGroup' class='form-control' placeholder='Client'
          v-model='study.Sector'>
      </div>
      <div class='col-1'>Situation</div>
      <div class='col-5'> <input type='text' id='inlineFormInputGroup' class='form-control' placeholder='Client'
          v-model='study.Situation'>
      </div>
    </div>
    <div class='row'>
      <div class='col-1'>Services</div>
      <div class='col-5'>
        <Multiselect v-model='selectedServices' :options='services' :multiple='true'></Multiselect>
      </div>
      <div class='col-1'>Solution</div>
      <div class='col-5'> <input type='text' id='inlineFormInputGroup' class='form-control' placeholder='Client'
          v-model='study.Solution'>
      </div>
    </div>
    <div class='row'>
      <div class='col-1'>Challenges</div>
      <div class='col-5'> <input type='text' id='inlineFormInputGroup' class='form-control' placeholder='Client'
          v-model='study.Challenges'>
      </div>
      <div class='col-1'>Project Type</div>
      <div class='col-5'> <input type='text' id='inlineFormInputGroup' class='form-control' placeholder='Client'
          v-model='study.ProjectApplicationType'>
      </div>
    </div>
    <div class='row'>
      <div class='col-1'>Proven Results</div>
      <div class='col-5'> <input type='text' id='inlineFormInputGroup' class='form-control' placeholder='Client'
          v-model='study.ProvenResults'>
      </div>
      <div class='col-1'>Image</div>
      <div class='col-5'> <input type='text' id='inlineFormInputGroup' class='form-control' placeholder='Client'
          v-model='study.Images'>
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
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>