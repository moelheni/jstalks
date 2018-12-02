import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      videos: [],
      video: {}
    }),
    mutations: {
      setVideos (state, videos) {
        state.videos = videos
      },
      setVideo (state, video) {
        state.video = video
      }
    }
  })
}

export default createStore
