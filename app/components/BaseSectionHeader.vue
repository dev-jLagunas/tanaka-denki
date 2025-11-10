<script setup lang="ts">
const props = defineProps({
  title: { type: String, required: true },
  icon: { type: String, required: false }, // e.g. "mdi:home"
  align: { type: String, default: "center" },
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
    :class="`${bgColor}`"
    class="flex-row-center gap-10 text-neutral-light my-10 py-5 md:w-1/2 lg:mt-28"
  >
    <h2 class="text-3xl font-medium tracking-widest text-balance">
      {{ title }}
    </h2>
    <Icon v-if="icon" :name="icon" size="44" class="-mb-1" />
  </header>
</template>
