import { createStore } from 'vuex'
import { getLocation } from '@/utils/BMap'

export default createStore({
  state: {
    location: {
      address: {
        city: '',
        province: ''
      },
      latitude: '',
      longitude: '',
      point: {
        lat: 0,
        lng: 0,
        of: ''
      }
    }
  },
  getters: {
    city(state) {
      return state.location.address.city
    }
  },
  mutations: {
    setLocation(state, payload) {
      state.location = payload
    }
  },
  actions: {
    async getLocation(ctx) {
      const location = await getLocation()
      ctx.commit('setLocation', location)
    }
  }
})
