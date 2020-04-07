<template>
  <div>
    <form class="container mx-auto mt-5">
      <From-group id="LastName" placeholder="HERRERA" label="LastName" />
      <From-group id="FirstName" placeholder="Swann" label="FirstName" />
      <From-group
        id="email"
        type="email"
        placeholder="swann@devloup.dev"
        label="Email"
      />
    </form>
  </div>
</template>

<script>
import FormGroup from '~/components/FromGroup.vue'

export default {
  components: {
    'From-group': FormGroup
  }
}
</script>
