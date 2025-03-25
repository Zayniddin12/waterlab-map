export const state = () => ({
  waterLocation: [],
})

export const mutations = {
  SET_WATER_LOCATION(state, item) {
    state.waterLocation = item
  },
}

export const actions = {
  async fetchWaterLocations({ commit }) {
    return await new Promise((resolve, reject) => {
      this.$axios
        .get('https://api.waterlab.uzsuv.uz/api/v1/enterprises/water_source/')
        .then((res) => {
          commit('SET_WATER_LOCATION', res.data)
          resolve(res)
        })
        .catch((err) => {
          reject(err)
        })
    })
  },
}
