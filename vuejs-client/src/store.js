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
    isBusy: false
  },
  mutations: {
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
        console.log(resp.data)
        context.state.studies = resp.data
      }).catch(err => {
        context.state.message = `Getting studies failed. ${err.message}`
        throw (err)
      })
    }
  }
})
