import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      videos: [],
      video: {},
      speakers: []
    }),
    mutations: {
      setVideos (state, videos) {
        state.videos = videos
      },
      addVideos (state, videos) {
        state.videos = state.videos.concat(videos)
      },
      setVideo (state, video) {
        state.video = video
      },
      setSpeakers (state, speakers) {
        state.speakers = speakers;
      }
    }
  })
}

export default createStore
