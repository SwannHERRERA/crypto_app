<template>
  <div class="mb-3">
    <label
      :for="id"
      class="block text-sm leading-5 font-medium text-gray-700"
      >{{ label }}</label
    >
    <input
      :id="id"
      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      :class="{ 'border-red-500': error.$error }"
      :placeholder="placeholder"
      :type="type"
      @input="$emit('input', $event.target.value)"
    />
    <p
      v-if="error.$error && !error.required"
      class="text-red-500 text-xs italic"
    >
      Field is required
    </p>
  </div>
</template>
<script>
export default {
  components: {},
  props: {
    id: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      required: false,
      default: ''
    },
    label: {
      type: String,
      required: false,
      default: ''
    },
    type: {
      type: String,
      required: false,
      default: 'text'
    },
    error: {
      type: [String, Boolean, Object],
      required: false,
      default: false
    }
  }
}
</script>
