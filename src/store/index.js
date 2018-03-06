import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  centralStops: []
}

const getters = {}

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
