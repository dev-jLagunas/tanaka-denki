<script setup>
//  Props
const props = defineProps({
  location: { type: String, required: true },
  name: { type: String, required: true },
  watts: { type: String, required: true },
  img: { type: String, requird: true },
});
</script>

<template>
  <article
    class="border-2 border-brand-blue w-[90%] mx-auto rounded-sm p-reg space-y-4 h-full relative max-w-[450px]"
    data-aos="fade-up"
  >
    <figure class="absolute top-4 right-2">
      <img src="/images/logo-only.png" alt="" class="h-10 md:h-6" />
    </figure>
    <div class="space-y-1">
      <p class="blue-bg-wrapper">所在地</p>
      <h4 class="font-bold text-primary-dark tracking-wider text-2xl">
        {{ location }}
      </h4>
    </div>
    <div class="space-y-1">
      <p class="blue-bg-wrapper">発電所名</p>
      <h4 class="font-bold text-primary-dark tracking-wider text-2xl">
        {{ name }}
      </h4>
    </div>
    <div class="space-y-1">
      <p class="blue-bg-wrapper">発電容量</p>
      <h4 class="font-bold text-primary-dark tracking-wider text-2xl">
        {{ watts }}kW
      </h4>
    </div>

    <figure class="rounded-sm">
      <img :src="img" alt="solar panel display" class="rounded-sm" />
    </figure>
  </article>
</template>
