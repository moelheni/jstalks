<template>
  <v-app dark>
    <div
      class="header"
    >
      {{ title }}
    </div>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  export default {
    data() {
      return {
        clipped: false,
        drawer: true,
        fixed: false,
        items: [
          { icon: 'apps', title: 'Welcome', to: '/' },
          { icon: 'bubble_chart', title: 'Inspire', to: '/inspire' }
        ],
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: '>_ JStalks.rocks()  🎸'
      }
    }
  }
</script>

<style>
  .header{
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 4em;
    font-family: monospace;
  }
</style>
