<script setup>
//  Props
const props = defineProps({
  number: {
    type: [String, Number],
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <article
    class="border-2 border-brand-blue px-reg py-lg mx-reg rounded-sm mt-reg"
    data-aos="fade-up"
  >
    <div class="flex-row-between">
      <p class="bg-brand-blue text-primary-white w-fit px-6 py-1 rounded-sm">
        ポイント {{ number }}
      </p>
      <Icon name="mdi:check" size="60" class="text-brand-green" />
    </div>
    <p
      class="font-bold text-primary-dark tracking-wider mt-reg text-2xl md:text-4xl lg:text-5xl"
    >
      {{ text }}
    </p>
  </article>
</template>
