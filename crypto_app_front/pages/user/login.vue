<template>
  <div class="container mx-auto h-screen">
    <div class="flex justify-center items-center h-screen">
      <Card width="w-5/12">
        <h1 class="font-title font-light text-4xl title">Login</h1>
        <form @submit.prevent="submit">
          <Form-group
            id="email"
            v-model.trim="$v.email.$model"
            type="email"
            placeholder="swann@devloup.dev"
            label="Email"
            :error="$v.email"
          />
          <Form-group
            id="password"
            v-model="$v.password.$model"
            type="password"
            placeholder="********"
            label="Password"
            :error="$v.password"
          />
          <nuxt-link
            to="/user/password-lost"
            class="text-blue-600 underline hover:text-blue-400 mb-3 block"
            >Password lost ?</nuxt-link
          >
          <p class="text-center mb-3">
            <button
              type="submit"
              class="bg-transparent hover:bg-indigo-500 text-indigo-700 font-semibold hover:text-white py-2 px-4 border border-indigo-500 hover:border-transparent rounded"
            >
              Login
            </button>
          </p>
        </form>
      </Card>
    </div>
  </div>
</template>

<script>
import Axios from 'axios'

import { required, email } from 'vuelidate/lib/validators'
import FormGroup from '~/components/molecules/FromGroup.vue'
import Card from '~/components/atomes/Card.vue'

export default {
  components: {
    'Form-group': FormGroup,
    Card
  },
  data() {
    return {
      email: '',
      password: ''
    }
  },
  validations: {
    email: {
      required,
      email
    },
    password: {
      required
    }
  },
  methods: {
    async submit(e) {
      const response = await Axios.post('/api/user/login', {
        email: this.email,
        password: this.password
      })
      console.log(response)
    }
  }
}
</script>

<style scoped>
.title::after {
  content: '';
  display: block;
  height: 4px;
  width: 50px;
  background: #305b91;
  margin-bottom: 1rem;
}
</style>
