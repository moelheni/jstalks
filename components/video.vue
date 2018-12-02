<template>
  <nuxt-link :to="'/video/'+ video._id">
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
  </nuxt-link>
</template>

<script>
import moment from 'moment'

export default {
  props: ["video", "currentSpeakers", "filterBySpeaker", "removeSpeaker"],
  methods: {
    moment
  }
}
</script>
