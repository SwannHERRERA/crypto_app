<template>
  <div class="m-24">
    <Table :data="tableData" />
  </div>
</template>

<script>
import Table from '~/components/molecules/Table.vue'

export default {
  components: {
    Table
  },
  data: () => {
    return {
      tableData: {
        header: ['email', 'FirstName', 'LastName'],
        body_data: [
          {
            email: 'swann@devloup.dev',
            FirstName: 'Swann',
            LastName: 'HERRERA'
          },
          {
            email: 'swann@graines-octets.com',
            FirstName: 'Swann GO',
            LastName: 'HERRERA'
          },
          {
            email: 'wilk65537@gmail.com',
            FirstName: 'wilk',
            LastName: '65537'
          }
        ]
      }
    }
  }
}
</script>
