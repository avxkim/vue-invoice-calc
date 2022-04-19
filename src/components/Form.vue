<template>
  <b-form inline @submit.prevent="submit" v-if="show">
    <div v-for="(input, idx) in inputsSchema" :key="input.id">
      <label class="sr-only" :for="`inline-form-input-${input.id}`">
        {{ input.label }}
      </label>
      <b-form-input
        required
        :type="input.type"
        :id="`inline-form-input-${input.id}`"
        :class="{
          'mr-2': idx < inputsSchema.length - 1,
          'w-30': idx === 0,
        }"
        :placeholder="input.label"
        v-model="input.value"
      />
    </div>

    <b-button type="submit" class="ml-auto" variant="primary">Add</b-button>
  </b-form>
</template>

<script lang="ts">
import Vue from 'vue'

// ext libs
import { v4 as uuidv4 } from 'uuid'

// interfaces
import { Input } from '@/interfaces/Form'

export default Vue.extend({
  name: 'Form',

  data() {
    return {
      show: true,
    }
  },

  computed: {
    inputsSchema(): Input[] {
      return [
        {
          id: 1,
          label: 'Product name',
          type: 'text',
          value: null,
        },
        {
          id: 2,
          label: 'Price',
          type: 'number',
          value: null,
        },
        {
          id: 3,
          label: 'Qty',
          type: 'number',
          value: null,
        },
      ]
    },
  },

  methods: {
    submit(): void {
      this.$store
        .dispatch('product/addProduct', {
          id: uuidv4(),
          name: this.inputsSchema[0].value,
          price: this.inputsSchema[1].value,
          qty: this.inputsSchema[2].value,
          sum:
            Number(this.inputsSchema[1].value) *
            Number(this.inputsSchema[2].value),
        })
        .then(() => {
          this.inputsSchema[0].value = null
          this.inputsSchema[1].value = null
          this.inputsSchema[2].value = null

          this.show = false
          this.$nextTick(() => {
            this.show = true
          })
        })
    },
  },
})
</script>

<style scoped>
input[type='number']::-webkit-outer-spin-button,
input[type='number']::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input[type='number'] {
  -moz-appearance: textfield;
}

.w-30 {
  width: 30vw !important;
}
</style>
