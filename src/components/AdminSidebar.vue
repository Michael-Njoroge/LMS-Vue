<template>
  <sidebar-menu :menu="visibleMenuItems" />

  <div v-if="!showAllItems" class="see-more" @click="toggleShowAll">
      See More
    </div>
    <div v-else class="see-less" @click="toggleShowAll">
      See Less
    </div>

</template>

<script setup lang="js">
import { ref, computed } from 'vue';
import { defineProps } from 'vue';

const props = defineProps({
  menu: {
    type: Array,
    required: true,
  }
});

const showAllItems = ref(false);

const toggleShowAll = () => {
  showAllItems.value = !showAllItems.value;
};

const visibleMenuItems = computed(() => {
  return showAllItems.value ? props.menu : props.menu.slice(0, 4);
});
</script>
<style scoped>
.v-sidebar-menu {
  max-width: 200px !important;
}

.see-more, .see-less {
  cursor: pointer;
  color: #007bff;
  text-align: center;
  margin: 10px 0;
}

.see-more:hover, .see-less:hover {
  text-decoration: underline;
}
</style>