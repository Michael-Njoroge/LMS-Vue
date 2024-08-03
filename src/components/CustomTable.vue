<template>
  <div class="card p-0 elevation-3">
    <div class="card-header">
      <h6 class="card-title">
        <b>{{captionTop}}</b>
      </h6>
    </div>
  <div class="card-body p-0 table-responsive">
    <table class="table table-bordered">
    <thead class="thead-light">
      <tr>
        <th>#</th>
        <th v-for="column in columns" :key="column.key" @click="sortColumn(column.key)" style="cursor:pointer;">
          <div class="d-flex justify-content-between align-items-center">
            <strong>{{ column.label }}</strong>
            <div class="d-flex flex-column ml-2">
              <i class="material-icons" v-if="sortedColumn === column.key && sortedOrder === 'asc'">arrow_drop_up</i>
              <i class="material-icons" v-if="sortedColumn === column.key && sortedOrder === 'desc'">arrow_drop_down</i>
            </div>
          </div>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in sortedItems" :key="item.id">
        <td>{{ index + 1 }}</td>
        <td v-for="column in columns" :key="column.key">
          <template v-if="column.key === 'action'">
            <slot name="actions" :item="item"></slot>
          </template>
          <template v-else>
            {{ item[column.key] }}
          </template>
        </td>
      </tr>
    </tbody>
  </table>
  </div>
</div>
</template>

<script setup>
import { ref, computed, defineProps } from 'vue';

const props = defineProps({
  items: {
    type: Array,
    required: true
  },
  columns: {
    type: Array,
    required: true
  },
  captionTop: {
    type: String,
    required: true
  }
});

const sortedColumn = ref(null);
const sortedOrder = ref(null);

const sortColumn = (column) => {
  if (sortedColumn.value === column) {
    sortedOrder.value = sortedOrder.value === 'asc' ? 'desc' : 'asc';
  } else {
    sortedColumn.value = column;
    sortedOrder.value = 'asc';
  }
};

const sortedItems = computed(() => {
  if (!sortedColumn.value) {
    return props.items;
  }

  return [...props.items].sort((a, b) => {
    if (sortedOrder.value === 'asc') {
      return a[sortedColumn.value] > b[sortedColumn.value] ? 1 : -1;
    } else {
      return a[sortedColumn.value] < b[sortedColumn.value] ? 1 : -1;
    }
  });
});
</script>

<style>
/* Add any custom styles for the table here */
</style>
