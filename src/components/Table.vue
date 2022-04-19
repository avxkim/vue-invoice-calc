<template>
  <b-table
    ref="table"
    v-bind="$attrs"
    :fields="fields"
    :items="items"
    @row-selected="addToSelected"
  >
    <template #head(selected)>
      <b-form-checkbox v-model="allCheckboxes" />
    </template>

    <template #cell(selected)="{ rowSelected }">
      <b-form-checkbox disabled :checked="rowSelected" />
    </template>
    <template #cell(price)="row">${{ row.item.price }}</template>
    <template #cell(sum)="row">${{ row.item.sum }}</template>
  </b-table>
</template>

<script lang="ts">
import Vue, { PropType, VueConstructor } from 'vue'

// interfaces
import { Product } from '@/store/product/types'

export default (
  Vue as VueConstructor<
    Vue & {
      $refs: {
        table: any
      }
    }
  >
).extend({
  name: 'Table',

  props: {
    items: {
      type: Array as PropType<any[]>,
      default: () => [],
    },
    fields: {
      type: Array as PropType<any[]>,
      default: () => [],
    },
  },

  data() {
    return {
      allCheckboxes: false,
    }
  },

  watch: {
    allCheckboxes(val: boolean): void {
      if (val) {
        this.selectAllRows()
      } else {
        this.clearSelected()
      }
    },
  },

  methods: {
    addToSelected(product: Product): void {
      this.$store.dispatch('product/addSelectedProduct', product)
    },
    selectAllRows() {
      this.$refs.table.selectAllRows()
    },
    clearSelected() {
      this.$refs.table.clearSelected()
    },
  },
})
</script>
