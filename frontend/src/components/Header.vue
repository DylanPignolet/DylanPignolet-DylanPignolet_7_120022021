<template>
    <v-container fluid>
        <v-toolbar color=#091F43 flat>
     
            <img src="@/assets/icon-left-font-monochrome-white.png" height="250px">
        
        <v-toolbar-title class="title">d</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-toolbar-items>  
            <router-link to="/login" class="button">
                Log in
            </router-link>

            <router-link to="/signup" class="button">
                Sign up
            </router-link>
        </v-toolbar-items>
        </v-toolbar>
    </v-container>
</template>

<script>
export default {
    name: 'Header',

    data: () => ({        
    }),
};
</script>

<style>
#logo {
    margin-top: 10px;
    margin-left: 20px;
}

.v-toolbar__content {
    margin: 0;
    padding: 0 !important;
}

.container {
    padding: 0 !important;
}

.title {
    color: #091F43;
}

.button {
    height: 36px;
    min-width: 64px;
    padding: 0 16px;
    border-radius: 0;
    height: 100% !important;
    max-height: none;
    font-size: 0.875rem;
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
    margin-left: 10px;
}
</style>
