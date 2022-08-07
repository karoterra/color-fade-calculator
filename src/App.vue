<script setup lang="ts">
import { ref, computed } from "vue";

import ColorPicker from "./components/ColorPicker.vue";
import FadeAmount from "./components/FadeAmount.vue";
import ColorPreview from "./components/ColorPreview.vue";

import { Color } from "@/color";

const fadeAmount = ref(20);
const srcColor = ref(Color.fromHex("#3366CC"));
const dstColor = computed(() => srcColor.value.fade(fadeAmount.value / 100));
</script>

<template>
  <header>ColorFade Calculator</header>
  <main>
    <div class="row">
      <div class="label">source color</div>
      <ColorPicker v-model="srcColor" />
      <ColorPreview :color="srcColor" />
    </div>
    <div class="row">
      <div class="label">fade amount</div>
      <FadeAmount v-model="fadeAmount" />
    </div>
    <div class="row">
      <div class="label">dest color</div>
      <ColorPicker :modelValue="dstColor" :readonly="true" />
      <ColorPreview :color="dstColor" />
    </div>
  </main>
</template>

<style scoped>
.row {
  display: flex;
  margin-bottom: 10px;
}

.label {
  width: 110px;
}
</style>
