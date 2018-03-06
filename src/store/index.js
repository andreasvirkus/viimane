import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  centralStops: []
}

const getters = {
  // uniqueStops: state => [...new Set(state.centralStops.map(obj => obj.stop_name))]
  uniqueStops: state => state.centralStops.map(stop => stop.stop_name)
    .filter((v, i, self) => self.indexOf(v) === i)
}

const actions = {
  setCentralStops: ({ commit }, payload) => commit('SET_CENTRAL_STOPS', payload)
}

const mutations = {
  SET_CENTRAL_STOPS (state, payload) {
    state.centralStops = payload
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
