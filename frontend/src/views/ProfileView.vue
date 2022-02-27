<template>
    <div>
        <div>
            <v-app>
                <v-app-bar flat max-height="65">
                    <HeaderIn />
                </v-app-bar>
            </v-app>
        </div>
        <div class="profilBody">
                <Profile/>
        </div>
    </div>
</template>

<script>
import HeaderIn from "../components/HeaderInComponent.vue";
import Profile from "../components/ProfileComponent.vue";

export default {
    name: 'Profil',
    components: {
        HeaderIn,
        Profile,
    },
    data: () => ({        
    }),
};

</script>

<style>

.profilBody {
    margin-top: 20px;
}

</style>