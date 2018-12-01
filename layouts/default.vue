<template>
  <v-app dark>
    <v-toolbar
      :clipped-left="clipped"
      fixed
      app
    >
      <v-toolbar-title v-text="title"/>

    </v-toolbar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer
      :fixed="fixed"
      app
    >
      <span style="margin-left: 10px">jstalks.rocks &copy; 2087</span>
    </v-footer>
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
        title: 'JStalks.rocks  🎸'
      }
    }
  }
</script>
