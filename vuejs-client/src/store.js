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
    refreshEngagementList (state) {
      var callback = server.getEngagementList()
      callback.then(resp => {
        state.engagementTypes = resp.data
      })
    },
    refreshKeywordList (state) {
      var callback = server.getKeywordList()
      callback.then(resp => {
        state.keywords = resp.data
      })
    },
    refreshServiceList (state) {
      var callback = server.getServicesList()
      callback.then(resp => {
        console.log(resp)
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
      var p1 = function () { return server.getServicesList() }
      var p2 = function () { return server.getEngagementList() }
      var p3 = function () { return server.getKeywordList() }
      var p4 = function () { return server.getStudies() }

      context.state.isBusy = true

      p1().then(resp => {
        context.state.services = resp.data
      })
        .then(p2).then(resp => {
          context.state.engagementTypes = resp.data
        })
        .then(p3).then(resp => {
          context.state.keywords = resp.data
        })
        .then(p4).then(resp => {
          context.state.studies = resp.data
        }).then(resp => {
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
      return server.updateCaseStudy(study).then(resp => {
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
      return server.deleteCaseStudy(studyId).then(resp => {
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
      return server.createCaseStudy(newStudy).then(resp => {
        context.state.message = 'New case study created successfully'
      }).catch(err => {
        context.state.message = `Creating new case study failed.  ${err.message}`
        throw (new Error(context.state.message))
      })
    },
    addService (context, newService) {
      var p1 = function () { return server.createServiceType(newService) }
      var p2 = function () { return server.getServicesList() }

      return p1().then(resp => {
        context.state.message = 'New service created successfully'
        return resp
      })
        .then(p2).then(resp => {
          context.state.services = resp.data
        })
        .catch(err => {
          console.log(err)
          throw (err)
        }).catch(err => {
          context.state.message = err.message
        })
    },
    addKeyword (context, newKeyword) {
      var p1 = function () { return server.createKeywordType(newKeyword) }
      var p2 = function () { return server.getKeywordList() }

      return p1().then(resp => {
        context.state.message = 'New keyword created successfully'
        return resp
      })
        .then(p2).then(resp => {
          context.state.keywords = resp.data
        })
        .catch(err => {
          console.log(err)
          throw (err)
        }).catch(err => {
          context.state.message = err.message
        })
    },
    addEngagementType (context, newEngagementType) {
      var p1 = function () { return server.createEngagementType(newEngagementType) }
      var p2 = function () { return server.getEngagementList() }

      return p1().then(resp => {
        context.state.message = 'New engagement type created successfully'
        return resp
      }).then(p2)
        .then(resp => {
          context.state.engagementTypes = resp.data
        })
        .catch(err => {
          console.log(err)
          throw (err)
        }).catch(err => {
          context.state.message = err.message
        })
    },
    deleteService (context, id) {
      var p1 = function () { return server.deleteService(id) }
      var p2 = function () { return server.getServicesList() }

      return p1().then(resp => {
        context.state.message = 'Deleted successfully'
        return resp
      }).then(p2)
        .then(resp => {
          context.state.services = resp.data
        })
        .catch(err => {
          console.log(err)
          throw (err)
        }).catch(err => {
          context.state.message = err.message
        })
    },
    deleteKeyword (context, id) {
      var p1 = function () { return server.deleteKeyword(id) }
      var p2 = function () { return server.getKeywordList() }

      return p1().then(resp => {
        context.state.message = 'Deleted successfully'
        return resp
      })
        .then(p2).then(resp => {
          context.state.keywords = resp.data
        })
        .catch(err => {
          console.log(err)
          throw (err)
        }).catch(err => {
          context.state.message = err.message
        })
    },
    deleteEngagementType (context, id) {
      var p1 = function () { return server.deleteEngagementType(id) }
      var p2 = function () { return server.getEngagementList() }

      return p1().then(resp => {
        context.state.message = 'Deleted successfully'
        return resp
      })
        .then(p2).then(resp => {
          context.state.engagementTypes = resp.data
        })
        .catch(err => {
          console.log(err)
          throw (err)
        }).catch(err => {
          context.state.message = err.message
        })
    }
  }
})
