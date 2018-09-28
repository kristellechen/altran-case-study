<template>
  <div class='ml-5 mr-5 mb-5'>
    <Toasted href='toasted' />
    <b-row>
      <button type="button" v-b-toggle.collapse1 class="btn btn-outline-primary ml-3 mt-2 mb-2">Search</button>
    </b-row>
    <b-collapse id='collapse1' class='mt-2'>
      <b-card>
        <Search v-on:onSearch='doSearch' />
      </b-card>
    </b-collapse>
    <table class='table table-striped'>
      <thead>
        <th>Client</th>
        <th>Project</th>
        <th>Keyword</th>
        <th>Engagement</th>
        <th>Industry</th>
        <th>Discipline</th>
        <th>Action</th>
      </thead>
      <tr v-for='(study, index) in studies' :key='index' @click='editStudy(study)'>
        <td>{{study.client}}</td>
        <td>{{study.projectName}}</td>
        <td>{{study.keywords}}</td>
        <td>{{study.engagementType}}</td>
        <td>{{study.industry}}</td>
        <td>{{study.discipline}}</td>
        <td>
          <div class='btn-group' role='group' aria-label='Basic example'>
            <button type='button' class='btn btn-outline-secondary' data-toggle='tooltip' data-placement='top' title='Edit'
              @click.stop='editStudy(study)'><i class='fas fa-edit'></i></button>
            <button type='button' class='btn btn-outline-danger' @click.stop='deleteStudy(study)'><i class='fas fa-trash-alt'></i></button>
            <button type='button' class='btn btn-outline-primary' data-toggle='tooltip' data-placement='top' title='Export'
              @click.stop='exportStudy(study)'><i class='fas fa-file-export'></i></button>
          </div>
        </td>
      </tr>
    </table>

    <!-- Delete Confirmation Modal -->
    <b-modal ref='deleteConfirmation' title='Delete confirmation' @ok='doDeleteStudy'>
      <p>This case study will be deleted permanently.</p>
    </b-modal>

  </div>
</template>

<script>
  import server from '@/js/server'
  import Search from '@/components/Search.vue'

  let toastrOpts = {
    duration: 3000,
    fullWidth: true,
    position: 'top-center'
  }

  export default {
    name: 'home',
    components: {
      Search
    },
    data() {
      return {
        selectedStudyId: null,
      }
    },
    computed: {
      studies() {
        return this.$store.state.studies
      }
    },
    methods: {
      doSearch: function (payload) {
        alert(JSON.stringify(payload))
      },
      editStudy: function (study) {
        const tmpStudy = JSON.parse(JSON.stringify(study))
        this.$router.push({
          name: 'updateproject',
          params: {
            study: tmpStudy // clone the object
          }
        })
      },
      deleteStudy: function (study) {
        this.selectedStudyId = study._id
        this.$refs['deleteConfirmation'].show()
      },
      exportStudy: function (study) {
        alert('export study')
      },
      doDeleteStudy: function () {
        alert(`doDeleteStudy - ${this.selectedStudyId}`)
        this.$store.dispatch('deleteStudy', this.selectedStudyId).then(resp => {
          this.$toasted.show(this.$store.getters.message, toastrOpts)
        }).catch(err => {
          this.$toasted.show(this.$store.getters.message, toastrOpts)
        })
      }
    }
  }
</script>