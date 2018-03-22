import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  centralStops: [],
  stops: [],
  stop: {},
  vehicles: ['bus', 'tram', 'troll'],
  vehicle: ''
}

const getters = {
  // uniqueStops: state => [...new Set(state.centralStops.map(obj => obj.stop_name))]
  // uniqueStops: state => state.centralStops
  //   .filter((v, i, self) => self.indexOf(v) === i)
  activeStop: (state, id) => state.centralStops.filter(stop => stop.stop_id === id)
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
