<template>
  <div class="m-24">
    <Table :data="tableData" />
  </div>
</template>

<script>
import Table from '~/components/molecules/Table.vue'
import ServiceUser from '~/services/user'

export default {
  components: {
    Table
  },
  data: () => {
    return {
      users: null,
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
  },
  async mounted() {
    this.user = await ServiceUser.getAll()
  }
}
</script>
