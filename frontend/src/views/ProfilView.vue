<template>
    <div>
        <v-app>
            <v-app-bar flat max-height="65">
                <HeaderIn />
            </v-app-bar>
        </v-app>
        <div class="profilBody">
            Profil user
        </div>
    </div>
</template>

<script>
import HeaderIn from "../components/HeaderInComponent.vue";

export default {
    name: 'Profil',
    components: {
        HeaderIn,
    },
    data: () => ({        
    }),
};

</script>