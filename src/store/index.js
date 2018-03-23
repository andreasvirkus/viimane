import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  centralStops: [],
  stops: [],
  stop: null,
  vehicles: ['bus', 'tram', 'troll'],
  vehicle: ''
}

const getters = {
  centralStops: state => state.stops.filter(stop => stop.stop_area === 'Kesklinn' && stop.zone_name.startsWith('Harju')),
  activeStop: (state, id) => state.stops.filter(stop => stop.stop_id === state.stop)[0]
}

const actions = {
  setCentralStops: ({ commit }, payload) => commit('SET_CENTRAL_STOPS', payload),
  setStops: ({ commit }, payload) => commit('SET_STOPS', payload),
  setActiveStop: ({ commit }, payload) => {
    // TODO: Query times here
    commit('SET_ACTIVE_STOP', payload)
  }
}

const mutations = {
  SET_CENTRAL_STOPS (state, payload) {
    state.centralStops = payload
  },
  SET_STOPS (state, payload) {
    state.stops = payload
  },
  SET_ACTIVE_STOP (state, payload) {
    state.stop = payload
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
