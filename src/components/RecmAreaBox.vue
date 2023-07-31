<template>
  <q-card class="q-px-lg q-py-lg">
    <q-banner class="bg-teal-2"> *1. sample Recm title </q-banner>
    <q-input type="textarea" class="q-px-xs" v-model="inputText" />
    <div class="row justify-end">
      <p>
        ㅁ최대 500자 중 <span class="text-cyan-7">{{ inputText.length }}</span
        >자 입력
      </p>
    </div>
  </q-card>
</template>

<script setup>
import { ref } from "vue";

const inputText = ref("");
</script>
