<template>
  <div class='ml-5 mr-5 mb-5'>
    <b-row>
      <b-button @click.prevent='refresh' class='ml-5 mt-2 mb-2'>Refresh</b-button>
    </b-row>
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
      </tr>
    </table>
  </div>
</template>

<script>
  import server from '@/js/server'

  export default {
    name: 'home',
    data() {
      return {
        studies: []
      }
    },
    methods: {
      refresh: function () {
        this.studies = server.getStudies()
      },
      update: function(study){
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