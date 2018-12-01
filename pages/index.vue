<template>
  <div class="wrapper">
    <div class="container">
      <div class="text-xs-center">
        <div style="margin-bottom: 10px">Popular speakers</div>
        <v-chip v-for='speaker in speakers' @click="filterBySpeaker(speaker)" @input="removeSpeaker(speaker)" :close="currentSpeakers.includes(speaker)">
          <v-avatar>
            <img :src="speaker.image" alt="trevor">
          </v-avatar>
          {{speaker.name}}
        </v-chip>
      </div>
    </div>
    <div class='container'>
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
              <div class="speaker-conf">
                <v-chip @click="filterBySpeaker(video.speaker)" @input="removeSpeaker(video.speaker)" :close="currentSpeakers.includes(video.speaker)">
                  <v-avatar>
                    <img :src="video.speaker.image" alt="trevor">
                  </v-avatar>
                  {{video.speaker.name}}
                </v-chip>
                <span>at <strong>{{ video.conference }}</strong></span>
              </div>
              <br>
              <span>{{video.description}}</span>
              <br><br>
              <div class="tags">
                 <v-chip v-for="tag in video.tags">#{{ tag }}</v-chip>
              </div>
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
      currentSpeakers: []
    }
  },
  computed: {
    speakers () {
      return this.$store.state.videos.map(video => video.speaker).filter((value, index, self) => self.indexOf(value) === index)
    },
    videos () {
      return this.$store.state.videos.filter(video => !this.currentSpeakers.length || this.currentSpeakers.includes(video.speaker))
    }
  },
  methods: {
    moment,
    filterBySpeaker (speaker) {
      this.currentSpeakers = this.currentSpeakers.concat(speaker)
    },
    removeSpeaker (speaker) {
      this.currentSpeakers = this.currentSpeakers.filter(s => s !== speaker)
    }
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
}

.container iframe {
  width: 80vw;
  height: calc(100vh - 200px);
}

.v-chip {
  cursor: pointer;
}

.speaker-conf{
  display: flex;
  align-items: center;
}

@media screen and (max-width: 720px) {
  .container, .v-content, .container iframe {
    padding: 0 !important;
    width: 100vw;
  }
}
</style>
