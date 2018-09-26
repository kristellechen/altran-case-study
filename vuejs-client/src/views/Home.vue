<template>
  <div class='ml-5 mr-5 mb-5'>
    <b-row>
      <b-button @click.prevent='refresh' class='ml-5 mt-2 mb-2'>Refresh</b-button>
      <b-btn v-b-toggle.collapse1 variant="primary">Toggle Collapse</b-btn>
    </b-row>
    <b-collapse id="collapse1" class="mt-2">
      <b-card>
        <Search />
      </b-card>
    </b-collapse>
    <table class='table table-striped'>
      <thead>
        <th>Client</th>
        <th>Project</th>
        <th>Keyword</th>
        <th>Engagement Type</th>
        <th>Industry</th>
        <th>Discipline</th>
        <th>Action</th>
      </thead>
      <tr v-for='study in studies' :key='study.ID' @click='update(study)'>
        <td>{{study.Client}}</td>
        <td>{{study.ProjectName}}</td>
        <td>{{study.Keywords}}</td>
        <td>{{study.Engagement}}</td>
        <td>{{study.Industry}}</td>
        <td>{{study.Discipline}}</td>
        <td>
          <div class="btn-group" role="group" aria-label="Basic example">
            <button type="button" class="btn btn-secondary"><i class="fas fa-edit"></i></button>
            <button type="button" class="btn btn-secondary"><i class="fas fa-trash-alt"></i></button>
            <button type="button" class="btn btn-secondary"><i class="fas fa-file-export"></i></button>
          </div>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
  import server from '@/js/server'
  import Search from '@/components/Search.vue'

  export default {
    name: 'home',
    data() {
      return {
        studies: []
      }
    },
    components: {
      Search
    },
    methods: {
      refresh: function () {
        this.studies = server.getStudies()
      },
      update: function (study) {
        const tmpStudy = JSON.parse(JSON.stringify(study))
        this.$router.push({
          name: 'updateproject',
          params: {
            study: tmpStudy // clone the object
          }
        })
      }
    }
  }
</script>