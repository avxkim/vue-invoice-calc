<template>
  <div class="mt-5 d-flex">
    <b-button :disabled="!buttonState" variant="danger" @click="deleteProducts">
      Delete
    </b-button>
    <div class="ml-auto">
      Total:
      <strong>${{ $store.getters['product/totalSum'] }}</strong>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'TableFooter',

  computed: {
    buttonState(): boolean {
      return !!this.$store.state.product.selected.length
    },
  },

  methods: {
    deleteProducts(): void {
      this.$store.dispatch('product/deleteProduct')
    },
  },
})
</script>
