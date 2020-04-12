<template>
  <div :class="classe">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    width: {
      type: String,
      required: false,
      default: 'auto'
    }
  },
  computed: {
    classe() {
      let str =
        'card bg-white rounded-md overflow-hidden shadow-lg px-6 py-6 mb-16 sm:mb-64'
      if (this.width !== 'auto') {
        str += ' ' + this.width + ' '
      }
      return str
    }
  }
}
</script>
