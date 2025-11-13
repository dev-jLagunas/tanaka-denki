<script setup lang="ts">
const props = defineProps({
  title: { type: String, required: true },
  icon: { type: String, required: false }, // e.g. "mdi:home"
  align: { type: String, default: "center" },
  color: { type: String, default: "text-primary-white" },
  topMargin: { type: String, default: "mt-10" },
  sectionId: { type: String, required: false },
  bgColor: {
    type: String,
    default: "bg-lightest-blue",
  },
});
</script>

<template>
  <header
    :id="sectionId"
    :class="`${bgColor} ${topMargin}}`"
    class="flex-row-center my-8 py-2 md:rounded-sm md:w-1/2 gap-8"
  >
    <h2 class="text-xl font-medium tracking-widest" :class="`${color}`">
      {{ title }}
    </h2>
    <Icon
      v-if="icon"
      :name="icon"
      size="44"
      class="-mb-1"
      :class="`${color}`"
    />
  </header>
</template>
