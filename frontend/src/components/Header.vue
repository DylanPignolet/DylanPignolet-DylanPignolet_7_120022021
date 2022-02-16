<template>
    <v-container fluid>
        <v-toolbar color=#091F43 flat>

        <v-toolbar-side-icon id="logo">      
            <img src="@/assets/icon-left-font-monochrome-white.png" height="250px">
        </v-toolbar-side-icon>
        <v-toolbar-title class="title">daz</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-toolbar-items>  
            <v-btn color="white" text>
                Log in
            </v-btn>

            <v-btn color="white" text>
                Sign up
            </v-btn>
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
</style>
