<template>
  <div class="wrapper">
    <div class='container'>
      <h1>The best Javascript talks in the web</h1>

      <div style="margin-bottom: 40px" v-for="video in videos">
        <v-card>
          <iframe
            width=""
            height=""
            :src="video.url"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
            <v-card-title>
            <div>
              <span class="grey--text">{{moment(video.date).fromNow()}}</span><br>
              <span>{{video.description}}</span>
            </div>
          </v-card-title>
        </v-card>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import axios from 'axios'
export default {
  fetch ({ store }) {
    return axios.get('http://demo3322001.mockable.io/videos')
      .then((res) => {
        store.commit('setVideos', res.data)
    })
  },
  data() {
    return {
      videos: this.$store.state.videos
    }
  },
  methods: {
    moment
  }
}
</script>

<style>
.wrapper {
    width: 100%;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
}

.container h1 {
  margin-bottom: 40px;
}

.container iframe {
  width: 80vw;
  height: calc(100vh - 200px);
}
</style>
