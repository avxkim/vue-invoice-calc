<template>
  <div id="app">
    <Navbar />

    <b-container class="mt-5">
      <b-row>
        <b-col>
          <Form class="mb-5" />
          <Table striped selectable :fields="fields" :items="items" />
          <TableFooter />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

// components
import Navbar from '@/components/Navbar.vue'
import Form from '@/components/Form.vue'
import Table from '@/components/Table.vue'
import TableFooter from '@/components/TableFooter.vue'

export default Vue.extend({
  name: 'App',

  components: {
    Navbar,
    Form,
    Table,
    TableFooter,
  },

  computed: {
    fields() {
      return [
        {
          key: 'selected',
          label: 'Selected',
          class: 'width-60px',
        },
        {
          key: 'name',
          label: 'Product name',
        },
        {
          key: 'price',
          label: 'Price',
        },
        {
          key: 'qty',
          label: 'Qty',
        },
        {
          key: 'sum',
          label: 'Sum',
        },
      ]
    },
    items() {
      return this.$store.getters['product/productsList']
    },
  },
})
</script>

<style lang="scss">
@import '~@/assets/scss/vendors/bootstrap-vue/index';

.width-60px {
  width: 60px;
}
</style>
