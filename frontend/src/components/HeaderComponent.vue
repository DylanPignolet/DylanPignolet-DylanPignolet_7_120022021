<template>
  <v-container fluid>
    <v-toolbar color="#091F43" flat>
      <router-link to="/" class="home">
        <v-app-bar-nav-icon id="logo">
          <img
            src="@/assets/icon-left-font-monochrome-white.png"
            height="50px"
            width="250px"
          />
        </v-app-bar-nav-icon>
      </router-link>
      <v-toolbar-title class="title">d</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items>
        <router-link to="/" class="button"> Log in </router-link>

        <router-link to="/signup" class="button"> Sign up </router-link>
      </v-toolbar-items>
    </v-toolbar>
  </v-container>
</template>

<script>
export default {
  name: "Header",
  data: () => ({}),
};
</script>

<style>
#logo {
  margin-top: 10px !important;
  margin-left: 20px !important;
}
.v-toolbar__content {
  margin: 0;
  padding: 0 !important;
}
.container {
  padding: 0 !important;
}
.title {
  color: #091f43;
}
.button {
  height: 36px;
  min-width: 64px;
  padding: 0 16px;
  border-radius: 0;
  height: 100% !important;
  max-height: none;
  font-size: 1rem;
  color: white !important;
  align-items: center;
  border-radius: 4px;
  display: inline-flex;
  flex: 0 0 auto;
  font-weight: 500;
  letter-spacing: 0.0892857143em;
  justify-content: center;
  outline: 0;
  position: relative;
  text-decoration: none;
  text-indent: 0.0892857143em;
  text-transform: uppercase;
  transition-duration: 0.28s;
  transition-property: box-shadow, transform, opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  vertical-align: middle;
  white-space: nowrap;
}
img {
  margin-left: 200px;
  margin-top: -10px;
  object-fit: cover;
}

.v-btn__content {
  height: 50px;
}

.v-application--wrap {
  min-height: 0 !important;
}
</style>
