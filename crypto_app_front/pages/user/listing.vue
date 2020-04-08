<template>
  <div class="m-24">
    <Table :data="data" />
  </div>
</template>

<script>
import Table from '~/components/Table.vue'

export default {
  components: {
    Table
  },
  data: () => {
    return {
      data: {
        email: [
          'swann@devloup.dev',
          'swann@graines-octets.com',
          'wilk65537@gmail.com'
        ],
        FirstName: ['Swann', 'Swann GO', 'Wilk'],
        LastName: ['HERRERA', "Graines d'octets"]
      }
    }
  }
}
</script>
