<template>
  <div class="card p-0 elevation-3">
    <div class="card-header">
      <h6 class="card-title">
        <b>{{ captionTop }}</b>
      </h6>
    </div>
    <div class="card-body p-0 table-responsive">
      <table class="table table-striped">
        <thead class="thead-light">
          <tr>
            <th>#</th>
            <th
              v-for="column in columns"
              :key="column.key"
              @click="sortColumn(column.key)"
              style="cursor: pointer;"
            >
              <div class="d-flex justify-content-between align-items-center">
                <strong>{{ column.label }}</strong>
                <div class="d-flex flex-column ms-2">
                  <i
                    v-if="sortedColumn === column.key && sortedOrder === 'asc'"
                    class="bi bi-arrow-up"
                  ></i>
                  <i
                    v-if="sortedColumn === column.key && sortedOrder === 'desc'"
                    class="bi bi-arrow-down"
                  ></i>
                </div>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <template v-for="(item, index) in sortedItems" :key="item.id">
            <tr>
              <td>{{ index + 1 }}</td>
              <td v-for="column in columns" :key="column.key">
                <template v-if="column.key === 'action'">
                  <slot name="actions" :item="item" :index="index"></slot>
                </template>
                <template v-else-if="column.slot">
                  <slot :name="column.slot" :item="item">
                    {{ item[column.key] }}
                  </slot>
                </template>
                <template v-else>
                  {{ item[column.key] }}
                </template>
              </td>
            </tr>
            <tr v-if="details.includes(item.id)" :key="item.id + '-details'" class="detail-row">
              <td colspan="100%">
                <slot name="details" :item="item"></slot>
              </td>
            </tr>
          </template>
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
  },
  details: {
    type: Array,
    required: false,
    default: () => []
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

<style scoped>
.badge {
  font-size: 0.75em !important;
  width: 100px; /* Fixed width for uniform look */
  text-align: center;
  color: #fff !important;
}
.bg-success {
  background-color: #28a745 !important;
}
.bg-secondary {
  background-color: #6c757d !important;
}
.bg-warning {
  background-color: #ffc107 !important;
}
.bg-danger {
  background-color: #dc3545 !important;
}
.bg-primary {
  background-color: #007bff !important;
}
.detail-row td {
  padding: 0 !important;
  margin: 0 !important;
  border-top: none;
}
</style>
