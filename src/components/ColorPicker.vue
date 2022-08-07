<script setup lang="ts">
import { computed } from "vue";
import { Color } from "@/color";

const props = defineProps<{
  modelValue: Color;
  readonly?: boolean;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", color: Color): void;
}>();

const computedReadonly = computed(() => {
  return props.readonly ?? false;
});

function onChangeR(e: Event) {
  const input = e.target as HTMLInputElement;
  emit(
    "update:modelValue",
    new Color(input.valueAsNumber, props.modelValue.g, props.modelValue.b)
  );
}

function onChangeG(e: Event) {
  const input = e.target as HTMLInputElement;
  emit(
    "update:modelValue",
    new Color(props.modelValue.r, input.valueAsNumber, props.modelValue.b)
  );
}

function onChangeB(e: Event) {
  const input = e.target as HTMLInputElement;
  emit(
    "update:modelValue",
    new Color(props.modelValue.r, props.modelValue.g, input.valueAsNumber)
  );
}

function onChangeHex(e: Event) {
  const input = e.target as HTMLInputElement;
  emit("update:modelValue", Color.fromHex(input.value));
}
</script>

<template>
  <div class="color-picker">
    <div>
      <label>
        R
        <input
          type="number"
          min="0"
          max="255"
          :value="props.modelValue.r"
          @change="onChangeR"
          :readonly="computedReadonly"
        />
      </label>
      <label>
        G
        <input
          type="number"
          min="0"
          max="255"
          :value="props.modelValue.g"
          @change="onChangeG"
          :readonly="computedReadonly"
        />
      </label>
      <label>
        B
        <input
          type="number"
          min="0"
          max="255"
          :value="props.modelValue.b"
          @change="onChangeB"
          :readonly="computedReadonly"
        />
      </label>
    </div>
    <div>
      <label>
        #
        <input
          type="text"
          :value="props.modelValue.toHex(false)"
          @change="onChangeHex"
          :readonly="computedReadonly"
        />
      </label>
    </div>
  </div>
</template>

<style scoped>
.color-picker {
  margin-right: 8px;
}

input[type="number"] {
  width: 50px;
}
</style>
