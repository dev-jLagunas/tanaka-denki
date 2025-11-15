<script setup>
// Props
const props = defineProps({
  id: { type: String, required: true },
  image: { type: String, required: true },
  date: { type: String, required: true },
  title: { type: String, required: true },
  subtitle: { type: String, required: true },
});
</script>

<template>
  <article class="rounded-sm w-[90%] mx-auto bg-brand-blue pb-reg shadow-lg">
    <figure>
      <img :src="image" alt="blog image" class="rounded-sm" />
    </figure>

    <p class="text-lightest-blue text-sm tracking-widest my-sm pl-reg">
      {{ date }}
    </p>

    <div class="text-center text-primary-white">
      <h3 class="tracking-wide text-xl">{{ title }}</h3>
      <p class="text-lightest-blue">{{ subtitle }}</p>

      <NuxtLink
        :to="`/blog/${id}`"
        class="px-3 bg-primary-white text-primary-dark mt-sm rounded-sm inline-block"
      >
        Read More
      </NuxtLink>
    </div>
  </article>
</template>
