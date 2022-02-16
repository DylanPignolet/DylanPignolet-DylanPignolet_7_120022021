<template>
  <v-app>
    <v-app-bar 
      app 
      flat
    >
      <Header />
    </v-app-bar>
  </v-app>
</template>

<script>
import Header from "../components/Header.vue";

export default {
  name: "App",
  components: {
    Header,
  },
  data: () => ({
    //
  })
};
</script>