<template>
    <v-container>
        <v-footer padless>
            <v-card
            flat
            tile
            color=#091F43
            class="text-center icon"
            >
            <v-card-text class="footerText">
                <v-btn
                v-for="icon in icons"
                :key="icon"
                class="mx-4 white"
                icon
                >
                <v-icon size="24px">
                    {{ icon }}
                </v-icon>
                </v-btn>
            </v-card-text>

            <v-card-text class="pt-0 text">
                Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </v-card-text>

            <v-divider></v-divider>

            <v-card-text class="groupomania footerText">
                {{ new Date().getFullYear() }} — <strong>Groupomania</strong>
            </v-card-text>
         </v-card>
        </v-footer>
    </v-container>
</template>

<script>
export default {
    name: 'Footer',
    data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }),
};
</script>

<style>

.white {
    color: white !important;
}

    .v-footer {
  background: #091F43 !important;
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
      color: #091F43 !important;
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
        max-width: 100%;
    }

</style>