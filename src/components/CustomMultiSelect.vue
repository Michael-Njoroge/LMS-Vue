<template>
  <div>
    <label :for="id" class="form-label">{{ label }}</label>
    <div class="multiselect-wrapper">
    <multiselect
      v-model="internalValue"
      :options="options"
      :multiple="multiple"
      :searchable="searchable"
      :placeholder="placeholder"
      :close-on-select="closeOnSelect"
      :clear-on-select="clearOnSelect"
      :allow-empty="allowEmpty"
      class="multiselect-full-width"
      @search-change="handleSearchChange"
    >
      <template #tag="{ option, remove }">
        <span class="custom__tag">
          <span>{{ option.text }}</span>
          <span class="custom__remove" @click="remove(option)">❌</span>
        </span>
      </template>
      <template #clear="props">
        <div class="multiselect__clear" v-if="internalValue.length" @mousedown.prevent.stop="clearAll(props.search)">
          Clear
        </div>
      </template>
      <template #noResult>
        <span>Oops! No elements found. Consider changing the search query.</span>
      </template>
    </multiselect>
  </div>
</div>
</template>

<script>
import Multiselect from 'vue-multiselect';

export default {
  name: 'CustomMultiSelect',
  components: { Multiselect },
  props: {
    modelValue: {
      type: Array,
      required: true,
    },
    options: {
      type: Array,
      required: true,
    },
    label: {
      type: String,
      default: '',
    },
    id: {
      type: String,
      default: 'custom-multiselect',
    },
    multiple: {
      type: Boolean,
      default: true,
    },
    searchable: {
      type: Boolean,
      default: true,
    },
    placeholder: {
      type: String,
      default: 'Select or type keywords',
    },
    closeOnSelect: {
      type: Boolean,
      default: false,
    },
    clearOnSelect: {
      type: Boolean,
      default: false,
    },
    allowEmpty: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      internalValue: this.modelValue,
    };
  },
  watch: {
    modelValue(val) {
      this.internalValue = val;
    },
  },
  methods: {
    handleSearchChange(query) {
      this.$emit('search-change', query);
    },
    clearAll(search) {
      this.$emit('update:modelValue', []);
      if (search) search('');
    },
  },
  emits: ['update:modelValue', 'search-change'],
};
</script>

<style scoped>
.custom__tag {
  display: inline-block;
  background-color: #3490dc;
  color: white;
  border-radius: 3px;
  padding: 5px;
  margin: 2px;
}

.custom__remove {
  margin-left: 5px;
  cursor: pointer;
  color: #e3342f;
}
.multiselect-full-width {
  width: 100%;
}

.multiselect-wrapper .multiselect {
  width: 100%;
}

.multiselect__input {
  width: 100% !important;
}
.multiselect-wrapper {
  width: 100%;
}

.multiselect__clear {
  cursor: pointer;
  color: #e3342f;
  padding: 0 5px;
}
</style>
