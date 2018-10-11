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
  mutations: {
    resfreshEngagementList (state) {
      var callback = server.getEngagementList()
      callback.then(resp => {
        state.engagementTypes = resp.data
      })
    },
    resfreshKeywordList (state) {
      var callback = server.getKeywordList()
      callback.then(resp => {
        state.keywords = resp.data
      })
    },
    resfreshServiceList (state) {
      var callback = server.getServicesList()
      callback.then(resp => {
        state.services = resp.data
      })
    },
    refreshStudiesList (state) {
      var callback = server.getStudies()
      callback.then(resp => {
        state.studies = resp.data
      })
    }
  },
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
      server.deleteCaseStudy(studyId).then(resp => {
        var idx = context.state.studies.findIndex(s => s._id === studyId)
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
        context.state.message = 'New case study created successfully'
      }).catch(err => {
        context.state.message = `Creating new case study failed.  ${err.message}`
        throw (new Error(context.state.message))
      })
    }
  }
})
