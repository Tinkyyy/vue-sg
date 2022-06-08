<template>
  <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="username"
            label="Username"
            required
          />
        </v-col>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="password"
            label="Password"
            type="password"
            required
          />
        </v-col>
        <v-col>
          <v-btn @click="authenticate">
            Submit
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
import { unauthorizedApi } from '~/components/request.helper'

export default {
  name: 'AuthenticationPage',
  data: () => ({
    valid: false,
    username: '',
    password: ''
  }),
  methods: {
    async authenticate () {
      return await unauthorizedApi()
        .post('/authenticate', {
          username: this.username,
          password: this.password
        })
        .then((response) => {
          console.log(response.data)
        })
    }
  }
}
</script>
