<template>
    <div>
        <v-app>
            <v-app-bar flat max-height="65">
                <HeaderIn />
            </v-app-bar>
        </v-app>
        <div class="feedBody">
            Feed
        </div>
    </div>
</template>

<script>
import HeaderIn from "./HeaderInComponent.vue";

export default {
    name: 'Feed',
    components: {
        HeaderIn,
    },
    data: () => ({        
    }),
};

</script>