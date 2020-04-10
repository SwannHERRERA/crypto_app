<template>
  <div class="container mx-auto h-screen">
    <div class="flex justify-center items-center h-screen">
      <Card>
        <h1 class="font-title font-light text-4xl title">Login</h1>
        <form>
          <Form-group
            id="email"
            type="email"
            placeholder="swann@devloup.dev"
            label="Email"
          />
          <Form-group
            id="password"
            type="password"
            placeholder="********"
            label="Password"
          />
          <nuxt-link
            to="/user/password-lost"
            class="text-blue-600 underline hover:text-blue-400 mb-3 block"
            >Password lost ?</nuxt-link
          >
          <p class="text-center mb-3">
            <button
              type="button"
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
import FormGroup from '~/components/molecules/FromGroup.vue'
import Card from '~/components/atomes/Card.vue'

export default {
  components: {
    'Form-group': FormGroup,
    Card
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
