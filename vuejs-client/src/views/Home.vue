<template>
  <div>
    <b-row>
      <b-button @click.prevent='refresh' class='ml-5 mt-2 mb-2'>Refresh</b-button>
    </b-row>
    <table class='table table-striped ml-5 mt-2 mb-2'>
      <thead>
        <th>Client</th>
        <th>Project</th>
        <th>Keyword</th>
        <th>Engagement Type</th>
        <th>Industry</th>
        <th>Discipline</th>
        <th>Action</th>
      </thead>
      <tr v-for='study in studies' :key='study.ID'>
        <td>{{study.Client}}</td>
        <td>{{study['Project Name']}}</td>
        <td>{{study.Keywords}}</td>
        <td>{{study['Engagement Type']}}</td>
        <td>{{study.Industry}}</td>
        <td>{{study.Discipline}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
  let server = require('@/js/server')

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
      }
    }
  }
</script>