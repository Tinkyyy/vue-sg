<template>
  <v-footer
    dark
    padless
  >
    <v-card
      flat
      tile
      class="indigo lighten-1 white--text text-center"
      min-width="100%"
    >
      <div class="row">
        <v-card-text
          class="col-5"
        >
          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mr-6 white--text"
            icon
          >
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-text>

        <v-card-text class="white--text col-5">
          This is my footer
        </v-card-text>

        <v-divider />

        <v-card-text class="white--text col-2">
          {{ new Date().getFullYear() }} — <strong>EasyWare</strong>
        </v-card-text>
      </div>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: 'FooterLayout',
  data: () => ({
    icons: [
      'mdi-facebook',
      'mdi-twitter',
      'mdi-linkedin',
      'mdi-instagram'
    ]
  })
}
</script>
