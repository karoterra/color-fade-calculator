<script setup lang="ts">
const props = defineProps<{
  modelValue: number;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", amount: number): void;
}>();

function onChange(e: Event) {
  const input = e.target as HTMLInputElement;
  emit("update:modelValue", input.valueAsNumber);
}
</script>

<template>
  <div>
    <input
      type="range"
      min="-100"
      max="100"
      :value="props.modelValue"
      @input="onChange"
    />
    <input
      type="number"
      min="-100"
      max="100"
      :value="props.modelValue"
      @change="onChange"
    />
  </div>
</template>

<style scoped></style>
