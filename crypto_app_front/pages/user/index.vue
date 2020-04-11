<template>
  <div class="m-24">
    <Table :data="users" :header="tableHeader" />
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
      tableHeader: ['email', 'FirstName', 'LastName']
    }
  },
  async mounted() {
    const response = await ServiceUser.getAll()
    this.users = response.data.users
  }
}
</script>
