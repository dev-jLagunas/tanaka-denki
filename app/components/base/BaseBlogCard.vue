<script setup>
// Props
const props = defineProps({
  id: { type: String, required: true },
  image: { type: String, required: true },
  date: { type: String, required: true },
  title: { type: String, required: true },
  subtitle: { type: String, required: true },
});

function formatDate(isoString) {
  return isoString.split("T")[0];
}
</script>

<template>
  <article
    class="rounded-sm mx-auto bg-brand-blue pb-reg shadow-lg h-full w-[90%]"
  >
    <figure class="h-[300px]">
      <img
        :src="image"
        alt="blog image"
        class="object-cover h-full w-full rounded-t-sm"
      />
    </figure>

    <p class="text-lightest-blue text-xs tracking-widest my-sm pl-reg">
      {{ formatDate(date) }}
    </p>

    <div class="px-reg text-primary-white">
      <h3 class="tracking-wide text-xl">{{ title }}</h3>
      <p class="text-lightest-blue mb-reg">{{ subtitle }}</p>

      <NuxtLink :to="`/blog/${id}`" class="red-cta-btn"> 続きを読む </NuxtLink>
    </div>
  </article>
</template>
