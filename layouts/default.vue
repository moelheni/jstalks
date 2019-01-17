<template>
  <v-app dark>
    <div
      class="header"
    >
      <nuxt-link to="/">{{ title }}</nuxt-link>
      
    </div>
    <v-content>
      <v-container>
        <script type="text/javascript" src="//downloads.mailchimp.com/js/signup-forms/popup/unique-methods/embed.js" data-dojo-config="usePlainJson: true, isDebug: false"></script><script type="text/javascript"></script>
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
        title: '>_ JStalks.rocks()  🎸',
        email: ''
      }
    },
    methods: {
      subscribe () {
        console.log(this.email)
      }
    },
    mounted () {
      setTimeout(() => {
        console.log(window.dojoRequire)
        window.dojoRequire(["mojo/signup-forms/Loader"], function(L) {
          console.log(L)
          L.start({
            "baseUrl":"mc.us20.list-manage.com",
            "uuid":"8b9e0ecd8563dda69d0144366",
            "lid":"3629dac8bc",
            "uniqueMethods":true
          })
        })
      }, 5000)
    }
  }
</script>

<style>
  .header{
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 4em;
    font-family: monospace;
  }
  .newsletter{
    display: flex;
    justify-content: center;
  }

  .newsletter .v-input__slot{
      min-width: 350px;
      max-width: 100%;
      position: relative;
      top: 5px;
    }

  .newsletter button{
    height: 56px;
  }

  .container-videos a,.header a{
    color: inherit;
    text-decoration: inherit;
  }

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
    height: calc(80vw / 16 * 9);
  }

  .v-chip * {
    cursor: pointer !important;
  }

  .speaker-conf{
    display: flex;
    align-items: center;
  }

  .section-title{
      font-family: monospace;
      font-size: 1.3em;
      margin-bottom: 16px;
  }

  .loading, .thatsAll {
    font-family: monospace;
    font-size: 1.3em;
    display: flex;
    justify-content: center;
    padding: 20px 0;
    text-align: center;
    align-items: center;
  }

  @media screen and (max-width: 720px) {
    .header{
      font-size: 2em;
    }
    .container-videos{
      margin-top: 30px;
    }
    .container, .v-content, .container iframe {
      padding: 0 !important;
      width: 100vw;
    }
    .container iframe{
      height: calc(100vw / 16 * 9);
    }
  }
</style>
