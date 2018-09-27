import Vue from 'vue'
import Vuex from 'vuex'
import server from '@/js/server.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    services: [],
    engagementTypes: [],
    keywords: []
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

      return p1.then(resp => {
        context.state.services = resp.data
      })
        .then(p2.then(resp => {
          context.state.engagementTypes = resp.data
        }))
        .then(p3.then(resp => {
          context.state.keywords = resp.data
        })).catch(err => {
          console.log(err)
          throw (err)
        })
    }
  }
})
