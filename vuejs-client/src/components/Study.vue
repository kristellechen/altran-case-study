<template>
  <div>
    <form>
      <div class='row'>
        <div class='col-1 my-auto labelDiv'>Client</div>
        <div class='col-5'>
          <b-form-input id='inlineFormInputGroup' type='text' class='form-control' :state='!hasErrorClient' placeholder='Client name is required'
            v-model='study.client' />
        </div>
        <div class='col-1 my-auto labelDiv'>Engagement</div>
        <div class='col-5'>
          <Multiselect v-model='selectedEngagementTypes' :options='engagementTypes' :multiple='true' :taggable='true' @tag='customEngagement'></Multiselect>
        </div>
      </div>
      <div class='row'>
        <div class='col-1 my-auto labelDiv'>Project</div>
        <div class='col-5'>
          <b-form-input id='inlineFormInputGroup' :state='!hasErrorProjectName' class='form-control' placeholder='Project name is required'
            v-model='study.projectName' />
        </div>
        <div class='col-1 my-auto labelDiv'>Discipline</div>
        <div class='col-5'>
          <b-form-input id='inlineFormInputGroup' class='form-control' placeholder='Client' v-model='study.discipline' />
        </div>
      </div>
      <div class='row'>
        <div class='col-1 my-auto labelDiv'>Year</div>
        <div class='col-5'>
          <b-form-input id='inlineFormInputGroup' class='form-control' placeholder='Client' v-model='study.year' />
        </div>
        <div class='col-1 my-auto labelDiv'>Summary</div>
        <div class='col-5'>
          <b-form-input id='inlineFormInputGroup' class='form-control' placeholder='Client' v-model='study.summary' />
        </div>
      </div>
      <div class='row'>
        <div class='col-1 my-auto labelDiv'>Brand</div>
        <div class='col-5'>
          <b-form-input id='inlineFormInputGroup' :state='!hasErrorBrand' class='form-control' placeholder='Error brand is required'
            v-model='study.brand' />
        </div>
        <div class='col-1 my-auto labelDiv'>Project Team</div>
        <div class='col-5'>
          <b-form-input id='inlineFormInputGroup' class='form-control' placeholder='Client' v-model='study.team' />
        </div>
      </div>
      <div class='row'>
        <div class='col-1 my-auto labelDiv'>Industry</div>
        <div class='col-5'>
          <b-form-input id='inlineFormInputGroup' class='form-control' placeholder='Client' v-model='study.industry' />
        </div>
        <div class='col-1 my-auto labelDiv'>Keywords</div>
        <div class='col-5'>
          <Multiselect v-model='selectedKeywords' :options='keywords' :multiple='true'  :taggable='true' @tag='customKeyword'></Multiselect>
        </div>
      </div>
      <div class='row'>
        <div class='col-1 my-auto labelDiv'>Sector</div>
        <div class='col-5'>
          <b-form-input id='inlineFormInputGroup' class='form-control' placeholder='Client' v-model='study.sector' />
        </div>
        <div class='col-1 my-auto labelDiv'>Project Type</div>
        <div class='col-5'>
          <b-form-input id='inlineFormInputGroup' class='form-control' placeholder='Client' v-model='study.projectApplicationType' />
        </div>
      </div>
      <div class='row'>
        <div class='col-1 my-auto labelDiv'>Services</div>
        <div class='col-5'>
          <Multiselect v-model='selectedServices' :options='services' :multiple='true'  :taggable='true' @tag='customService'></Multiselect>
        </div>
        <div class='col-1 my-auto labelDiv'>Image</div>
        <div class='col-5'>
          <b-form-input id='inlineFormInputGroup' class='form-control' placeholder='Client' v-model='study.images' />
        </div>
      </div>
      <div class='row'>
        <div class='col-1 my-auto labelDiv'>Challenges</div>
        <div class='col-5'>
          <b-form-textarea class="form-control" rows="5" v-model='study.challenges'></b-form-textarea>
        </div>
        <div class='col-1 my-auto labelDiv'>Situation</div>
        <div class='col-5'>
          <b-form-textarea class="form-control" rows="5" v-model='study.situation'></b-form-textarea>
        </div>
      </div>
      <div class='row'>
        <div class='col-1 my-auto labelDiv'>Results</div>
        <div class='col-5'>
          <b-form-textarea class="form-control" rows="5" v-model='study.provenResults'></b-form-textarea>
        </div>
        <div class='col-1 my-auto labelDiv'>Solution</div>
        <div class='col-5'>
          <b-form-textarea class="form-control" rows="5" v-model='study.solution'></b-form-textarea>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
  import Multiselect from 'vue-multiselect'
  import server from '@/js/server'

  export default {
    name: 'Study',
    components: {
      Multiselect
    },
    data() {
      return {
        selectedServices: [],
        selectedKeywords: [],
        selectedEngagementTypes: [],
        study: this.studyProp
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
      },
      study: {
        // note the use of handler and deep
        handler(newVal, oldVal) {
          this.$emit('onStudyUpdated', newVal)
          var canSubmit = !this.hasErrorClient && !this.hasErrorProjectName && !this.hasErrorBrand
          this.$emit('onCanSubmit', canSubmit)
        },
        deep: true // set deep to look for nested changes
      }
    },
    props: ['studyProp'],
    computed: {
      services() {
        return this.$store.state.services.map(a => a.name)
      },
      keywords() {
        return this.$store.state.keywords.map(a => a.name)
      },
      engagementTypes() {
        return this.$store.state.engagementTypes.map(a => a.name)
      },
      hasErrorClient() {
        return (!this.study.client || this.study.client.length <= 0) ? true : null
      },
      hasErrorProjectName() {
        return (!this.study.projectName || this.study.projectName.length <= 0) ? true : null
      },
      hasErrorBrand() {
        return (!this.study.brand || this.study.brand.length <= 0) ? true : null
      }
    },
    methods: {
      isNullOrEmpty(str) {
        return (!str || 0 === str.length);
      },
      customEngagement(liveEngagement) {
        server.createEngagementType(liveEngagement).then(resp => {
          if (resp.status == 200) {
            this.$store.commit('resfreshEngagementList')
            this.selectedEngagementTypes.push(liveEngagement)
          }
        })
      },
      customKeyword(liveKeyword) {
        server.createKeywordType(liveKeyword).then(resp => {
          if (resp.status == 200) {
            this.$store.commit('resfreshKeywordList')
            this.selectedKeywords.push(liveKeyword)
          }
        })
      },
      customService(liveService) {
        server.createServiceType(liveService).then(resp => {
          if (resp.status == 200) {
            this.$store.commit('resfreshServiceList')
            this.selectedServices.push(liveService)
          }
        })
      }
    },
    mounted() {
      // When this components is mounted, convert strings to the multiselect controls.
      this.selectedServices = this.studyProp.services.split(',')
      this.selectedKeywords = this.studyProp.keywords.split(',')
      this.selectedEngagementTypes = this.studyProp.engagementType.split(',')
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .labelDiv {
    text-align: right;
  }

  .form-control{
    color: #182628;
    background-color: #f2f2f2
  }
</style>