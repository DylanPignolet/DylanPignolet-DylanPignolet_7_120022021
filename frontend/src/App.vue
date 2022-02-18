<template>
<v-app>
    <v-app-bar 
      app 
      flat
    >
      <Header />
      <Home/>
    </v-app-bar>
    <router-view/>
    </v-app>
</template>

<script>
import Header from "./components/Header.vue";
import Home from "./views/Home.vue"

export default {
  name: "App",
  components: {
    Header,
    Home,
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

