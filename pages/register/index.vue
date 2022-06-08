<template>
  <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="lastname"
            label="Lastname"
            required
          />
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="firstname"
            label="Firstname"
            required
          />
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="email"
            label="email"
            required
          />
        </v-col>
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
          <v-btn @click="registerUser">
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
  name: 'RegisterPage',
  data: () => ({
    valid: false,
    lastname: '',
    firstname: '',
    email: '',
    username: '',
    password: ''
  }),
  methods: {
    async registerUser () {
      return await unauthorizedApi()
        .post('/register', {
          lastname: this.lastname,
          firstname: this.firstname,
          email: this.email,
          username: this.username,
          password: this.password
        })
        .then(response => response.data)
    }
  }
}
</script>
