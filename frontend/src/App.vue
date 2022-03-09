<template>
  <div>
    <div>
      <div>
        <router-view />
      </div>
    </div>
    <v-footer>
      <Footer />
    </v-footer>
  </div>
</template>

<script>
import Footer from "./components/FooterComponent.vue";
export default {
  name: "App",
  components: {
    Footer,
  },
  data: () => ({
    //
  }),
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

.v-footer {
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
}

footer {
  width: 100%;
  height: 100px;
}

@media screen and (max-width: 760px) {
  footer {
    height: 75px;
  }
}
</style>
