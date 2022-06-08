<template>
  <v-card class="overflow-hidden">
    <v-app-bar
      relative
      color="#6A76AB"
      dark
      shrink-on-scroll
      prominent
      src="https://picsum.photos/1920/1080?random"
      fade-img-on-scroll
      scroll-target="#scrolling-techniques-3"
    >
      <v-app-bar-title class="text-no-wrap">
        {{ title }}
      </v-app-bar-title>

      <v-spacer />

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>

      <template #extension>
        <v-tabs align-with-title>
          <v-tab to="/">
            Home
          </v-tab>
          <v-tab to="/login">
            Login
          </v-tab>
          <v-tab to="/register">
            Register
          </v-tab>
        </v-tabs>
      </template>
    </v-app-bar>
  </v-card>
</template>

<script>
export default {
  name: 'HeaderLayout',
  data () {
    return {
      title: 'test'
    }
  }
}
</script>
