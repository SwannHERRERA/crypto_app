<template>
  <div class="mb-3">
    <validation-provider v-slot="{ errors }" :rules="rules">
      <label
        :for="id"
        class="block text-sm leading-5 font-medium text-gray-700"
        >{{ label }}</label
      >
      <input
        :id="id"
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        :placeholder="placeholder"
        :type="type"
        @input="$emit('input', $event.target.value)"
      />
      <p class="text-red-500 text-xs italic">{{ errors[0] }}</p>
    </validation-provider>
  </div>
</template>
<script>
import { ValidationProvider } from 'vee-validate'

export default {
  components: {
    'validation-provider': ValidationProvider
  },
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
    rules: {
      type: String,
      required: false,
      default: ''
    }
  }
}
</script>
