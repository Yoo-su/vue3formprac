<template>
  <q-table :columns="computedCols" :rows="[_]" hide-bottom>
    <template v-slot:body>
      <q-tr>
        <q-td v-for="(item, idx) of props.cols" :key="idx" align="center">
          <input
            type="radio"
            :value="item"
            :name="props.domain"
            @change="handleChange($event)"
          />
        </q-td>
      </q-tr>
    </template>
  </q-table>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  domain: {
    type: String,
    default: ""
  },
  cols: {
    type: Array,
    default: () => []
  },
  update: {
    type: Function
  }
});

const computedCols = computed(() =>
  Array.from(props.cols, (col) => ({
    name: col,
    required: true,
    label: col,
    align: "center"
  }))
);

const handleChange = (event) => {
  props.update(event.target.value);
};
</script>

<style>
thead {
  background-color: rgba(0, 0, 0, 0.3);
}
</style>
