<template>
  <div>
    <form class="container mx-auto mt-5">
      <Form-group id="LastName" placeholder="HERRERA" label="LastName" />
      <Form-group id="FirstName" placeholder="Swann" label="FirstName" />
      <Form-group
        id="email"
        type="email"
        placeholder="swann@devloup.dev"
        label="Email"
      />
    </form>
  </div>
</template>

<script>
import FormGroup from '~/components/molecules/FromGroup.vue'

export default {
  components: {
    'Form-group': FormGroup
  }
}
</script>
