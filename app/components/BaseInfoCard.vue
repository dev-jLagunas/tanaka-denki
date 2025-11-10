<script setup>
const props = defineProps({
  bgColor: {
    type: String,
    default: "bg-lightest-blue",
  },
  number: {
    type: [String, Number],
    required: true,
  },
  subheading: {
    type: String,
    required: true,
  },
  longCopy: {
    type: String,
    default: "", // optional text
  },
  imgSrc: {
    type: String,
    required: true,
  },
  imgAlt: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <article :class="`work-info-card ${bgColor}`">
    <header class="space-y-sm px-sm grow">
      <div class="work-info-card-heading">
        <p class="font-bold text-brand-blue text-3xl">{{ number }}</p>
      </div>
      <h3 class="work-info-card-subheading">
        {{ subheading }}
      </h3>
      <!-- optional long copy -->
      <p v-if="longCopy" class="long-copy-text text-2xl my-sm">
        {{ longCopy }}
      </p>
    </header>

    <figure class="w-full h-[350px] mt-8 rounded-b-sm overflow-hidden shrink-0">
      <img :src="imgSrc" :alt="imgAlt" class="h-full w-full object-cover" />
    </figure>
  </article>
</template>
