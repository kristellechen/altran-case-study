import Vue from 'vue'
import Vuex from 'vuex'
import server from '@/js/server.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    services: [],
    engagementTypes: [],
    keywords: [],
    studies: [],
    isBusy: false,
    message: ''
  },
  mutations: {},
  actions: {
    // Get the services, engagement-type and keywords from the server once.
    // We assume that these changes very infrequently
    initialize (context) {
      var p1 = server.getServicesList()
      var p2 = server.getEngagementList()
      var p3 = server.getKeywordList()
      var p4 = server.getStudies()

      context.state.isBusy = true

      return p1.then(resp => {
        context.state.services = resp.data
      })
        .then(p2.then(resp => {
          context.state.engagementTypes = resp.data
        }))
        .then(p3.then(resp => {
          context.state.keywords = resp.data
        })).then(p4.then(resp => {
          context.state.studies = resp.data
        })).then(resp => {
          context.state.isBusy = false
        }).catch(err => {
          context.state.isBusy = false
          console.log(err)
          throw (err)
        })
    },
    getStudies (context) {
      server.getStudies().then(resp => {
        console.log(resp.data)
        context.state.studies = resp.data
      }).catch(err => {
        context.state.message = `Getting studies failed. ${err.message}`
        throw (new Error(`Getting studies failed. ${err.message}`))
      })
    },
    updateStudy (context, study) {
      context.state.message = 'Begin Invoke updateStudy'
      server.updateCaseStudy(study).then(resp => {
        // the update was successful so we will replace data in the studies list.
        context.state.studies.forEach((item, idx) => {
          if (item._id === study._id) {
            context.state.message = 'Invoke updateStudy successful'
            context.state.studies[idx] = resp.data
          }
        })
      }).catch(err => {
        context.state.message = `Updating study failed.  ${err.message}`
        throw (new Error(context.state.message))
      })
    },
    deleteStudy (context, studyId) {
      context.state.message = 'vuex-deleteStudy'
      server.deleteCaseStudy(studyId).then(resp => {
        var idx = context.state.studies.indexOf(s => s._id === studyId)
        if (idx > -1) {
          context.state.studies.splice(idx, 1)
          context.state.message = `${studyId} has been deleted.`
        } else {
          throw (new Error('Study was not found'))
        }
      }).catch(err => {
        context.state.message = `Deleting study failed.  ${err.message}`
        throw (new Error(context.state.message))
      })
    },
    createStudy (context, newStudy) {
      server.createCaseStudy(newStudy).then(resp => {
      }).catch(err => {
        context.state.message = `Creating new case study failed.  ${err.message}`
        throw (new Error(context.state.message))
      })
    }
  }
})
