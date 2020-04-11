<template>
  <div class="container mx-auto mt-32">
    <Card width="25">
      <form>
        <Form-group id="LastName" placeholder="HERRERA" label="LastName" />
        <Form-group id="FirstName" placeholder="Swann" label="FirstName" />
        <Form-group
          id="email"
          type="email"
          placeholder="swann@devloup.dev"
          label="Email"
        />
        <p class="text-center mb-3">
          <button
            type="button"
            class="bg-transparent hover:bg-indigo-500 text-indigo-700 font-semibold hover:text-white py-2 px-4 border border-indigo-500 hover:border-transparent rounded"
          >
            Submit
          </button>
        </p>
      </form>
    </Card>
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
