<template>
  <div>
    <Toasted href='toasted' />
    <b-collapse id='collapse1' class='mt-2'>
      <b-card>
        <Search @onSearch='doSearch' />
      </b-card>
    </b-collapse>
    <table class='table table-striped'>
      <thead class='text-left'>
        <th>Client</th>
        <th>Project</th>
        <th>Keyword</th>
        <th>Engagement</th>
        <th>Industry</th>
        <th>Discipline</th>
        <th>Action</th>
      </thead>
      <tr class='text-left' v-for='(study, index) in studies' :key='index' @click='editStudy(study)'>
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
        searchPayload: null
      }
    },
    computed: {
      studies() {
        if (this.searchPayload) {
          var ptr = this
          return this.$store.state.studies.filter(this.filterFunc)
        } else {
          return this.$store.state.studies
        }
      }
    },
    methods: {
      doSearch: function (payload) {
        this.searchPayload = payload
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
        server.getPresentation(study._id).then(resp => {
          const url = window.URL.createObjectURL(new Blob([resp.data]));
          const link = document.createElement('a');
          link.href = url;
          link.setAttribute('download', `${study.client}_generated.ppt`); //or any other extension
          document.body.appendChild(link);
          link.click();
        }).catch(err => {
          alert(err.message)
        })
      },
      doDeleteStudy: function () {
        this.$store.dispatch('deleteStudy', this.selectedStudyId).then(resp => {
          this.$toasted.show(this.$store.getters.message, toastrOpts)
        }).catch(err => {
          this.$toasted.show(this.$store.getters.message, toastrOpts)
        })
      },
      filterFunc: function (item) {
        return item.client.toLowerCase().includes(this.searchPayload.clientname.toLowerCase()) &&
          item.projectName.toLowerCase().includes(this.searchPayload.projectname.toLowerCase()) &&
          item.industry.toLowerCase().includes(this.searchPayload.industry.toLowerCase()) &&
          item.discipline.toLowerCase().includes(this.searchPayload.discipline.toLowerCase()) &&
          this.arrayContainsAnotherArray(item.keywords, this.searchPayload.selectedKeywords) &&
          this.arrayContainsAnotherArray(item.engagementType, this.searchPayload.selectedEngagementTypes)
      },
      arrayContainsAnotherArray (arraySource, arrayFilter) {
        var isExists = true
        arrayFilter.forEach(element => {
          isExists &= arraySource.includes(element)
        });

        return isExists
      }
    }
  }
</script>

<style scoped>

table tr:nth-child(even) {
    background-color: #eee;
}
table tr:nth-child(odd) {
   background-color: #fff;
}
table th {
    background-color: #BC3123;
    color: white;
}

</style>