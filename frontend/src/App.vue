<template>
  <div>
      <v-app>
      <v-app-bar flat max-height="65">
        <Header />
      </v-app-bar>
      <div>
        <router-view/>
      </div>
      </v-app>
      <v-footer>
        <Footer/>
      </v-footer>
  </div>
</template>

<script>
import Header from "./components/HeaderComponent.vue";
import Footer from "./components/FooterComponent.vue";
export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
  data: () => ({
    //
  })
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

