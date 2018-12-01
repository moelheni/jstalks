import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      videos: []
    }),
    mutations: {
      setVideos (state, videos) {
        state.videos = videos
      }
    }
  })
}

export default createStore
