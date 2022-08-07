<script setup lang="ts">
import type { Color } from "@/color";

const props = defineProps<{
  color: Color;
}>();
</script>

<template>
  <div :style="{ backgroundColor: props.color.toHex() }"></div>
</template>

<style scoped>
div {
  width: 100px;
  height: 48px;
  border: 1px solid black;
}
</style>
