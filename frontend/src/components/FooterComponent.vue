<template>
  <v-container class="footerContainer">
    <v-footer class="footer" padless>
      <v-card flat tile color="#091F43" class="text-center icon">
        <v-card-text class="footerText">
          <v-btn v-for="icon in icons" :key="icon" class="mx-4 white" icon>
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-text>
        <v-card-text class="groupomania footerText">
          {{ new Date().getFullYear() }} — <strong>Groupomania</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-container>
</template>

<script>
export default {
  name: "Footer",
  data: () => ({
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
  }),
};
</script>

<style>
.white {
  color: white !important;
}

.footer {
  display: flex;
  justify-content: center;
}

.v-footer {
  background: #091f43 !important;
}

.footerText {
  padding: 0 !important;
  display: flex;
  justify-content: center;
  color: white !important;
  position: relative;
  right: 60px;
}

.pt-0 {
  color: #091f43 !important;
  padding: 0 !important;
}

.v-btn {
  margin: 0 7px !important;
}

v-button__content {
  color: white;
}

.icon {
  margin-top: 10px;
}

.groupomania {
  margin-bottom: 10px;
}

.text {
  margin: -10px 0;
}

.container {
  margin-right: 0;
  margin-left: 0;
  max-width: 100% !important;
}
</style>
