<template>
  <div class='container'>
    <div class='card'>
      <div class='card-header'>Update Case Study</div>
      <div class='card-body'>
        <div class='row'>
          <div class='col-2'>Client</div>
          <div class='col-4'>
            <input type='text' id='inlineFormInputGroup' class='form-control' placeholder='Client' v-model='study.Client'>
          </div>
          <div class='col-2'>Engagement</div>
          <div class='col-4'>
            <input type='text' id='inlineFormInputGroup' class='form-control' placeholder='Client' v-model='study.Engagement'>
          </div>
        </div>
        <div class='row'>
          <div class='col-2'>Project</div>
          <div class='col-4'> <input type='text' id='inlineFormInputGroup' class='form-control' placeholder='Client'
              v-model='study.ProjectName'>
          </div>
          <div class='col-2'>Discipline</div>
          <div class='col-4'> <input type='text' id='inlineFormInputGroup' class='form-control' placeholder='Client'
              v-model='study.Discipline'>
          </div>
        </div>
        <div class='row'>
          <div class='col-2'>Year</div>
          <div class='col-4'> <input type='text' id='inlineFormInputGroup' class='form-control' placeholder='Client'
              v-model='study.Year'>
          </div>
          <div class='col-2'>Summary</div>
          <div class='col-4'> <input type='text' id='inlineFormInputGroup' class='form-control' placeholder='Client'
              v-model='study.ProjectSummary'>
          </div>
        </div>
        <div class='row'>
          <div class='col-2'>Brand</div>
          <div class='col-4'> <input type='text' id='inlineFormInputGroup' class='form-control' placeholder='Client'
              v-model='study.Brand'>
          </div>
          <div class='col-2'>Project Team</div>
          <div class='col-4'> <input type='text' id='inlineFormInputGroup' class='form-control' placeholder='Client'
              v-model='study.ProjectTeam'>
          </div>
        </div>
        <div class='row'>
          <div class='col-2'>Industry</div>
          <div class='col-4'> <input type='text' id='inlineFormInputGroup' class='form-control' placeholder='Client'
              v-model='study.Industry'>
          </div>
          <div class='col-2'>Keywords</div>
          <div class='col-4'> <input type='text' id='inlineFormInputGroup' class='form-control' placeholder='Client'
              v-model='study.Keywords'>
          </div>
        </div>
        <div class='row'>
          <div class='col-2'>Sector</div>
          <div class='col-4'> <input type='text' id='inlineFormInputGroup' class='form-control' placeholder='Client'
              v-model='study.Sector'>
          </div>
          <div class='col-2'>Situation</div>
          <div class='col-4'> <input type='text' id='inlineFormInputGroup' class='form-control' placeholder='Client'
              v-model='study.Situation'>
          </div>
        </div>
        <div class='row'>
          <div class='col-2'>Services</div>
          <div class='col-4'> <input type='text' id='inlineFormInputGroup' class='form-control' placeholder='Client'
              v-model='study.Services'>
          </div>
          <div class='col-2'>Solution</div>
          <div class='col-4'> <input type='text' id='inlineFormInputGroup' class='form-control' placeholder='Client'
              v-model='study.Solution'>
          </div>
        </div>
         <div class='row'>
          <div class='col-2'>Challenges</div>
          <div class='col-4'> <input type='text' id='inlineFormInputGroup' class='form-control' placeholder='Client'
              v-model='study.Challenges'>
          </div>
          <div class='col-2'>Project Type</div>
          <div class='col-4'> <input type='text' id='inlineFormInputGroup' class='form-control' placeholder='Client'
              v-model='study.ProjectApplicationType'>
          </div>
        </div>
         <div class='row'>
          <div class='col-2'>Proven Results</div>
          <div class='col-4'> <input type='text' id='inlineFormInputGroup' class='form-control' placeholder='Client'
              v-model='study.ProvenResults'>
          </div>
          <div class='col-2'>Image</div>
          <div class='col-4'> <input type='text' id='inlineFormInputGroup' class='form-control' placeholder='Client'
              v-model='study.Images'>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Study',
    props: ['study'],
    methods: {
      updateStudy: function () {
        alert('update the case study')
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>