<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

// Props
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
  slideCopy: {
    type: Array,
    default: () => [],
  },
  images: {
    type: Array,
    required: true, // ['/img1.jpg', '/img2.jpg', ...]
  },
  imgAlt: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <article
    :class="`${bgColor}`"
    class="w-[90%] mx-auto rounded-sm md:h-[350px] md:grid md:grid-cols-2 lg:h-[300px]"
  >
    <div class="py-reg content-center">
      <header class="flex-row-center gap-reg px-sm">
        <p class="work-info-card-number">{{ number }}</p>
        <h3 class="card-heading-text text-balance">
          {{ subheading }}
        </h3>
      </header>
      <p class="long-copy-text px-sm py-reg">
        {{ longCopy }}
      </p>
    </div>
    <!-- If more than one image → Swiper -->
    <div v-if="images.length > 1" class="">
      <Swiper
        :modules="[Autoplay, Pagination, Navigation]"
        :loop="true"
        :autoplay="{ delay: 5000 }"
        :pagination="true"
        :navigation="true"
      >
        <SwiperSlide v-for="(src, i) in images" :key="i" class="relative">
          <figure class="md:h-[300px]">
            <img :src="src" class="h-full w-full object-cover rounded-sm" />
          </figure>
          <p
            v-if="slideCopy[i]"
            class="absolute bg-brand-blue/90 text-primary-white py-2 bottom-0 z-10 w-full text-center text-sm"
          >
            {{ slideCopy[i] }}
          </p>
        </SwiperSlide>
      </Swiper>
    </div>

    <!-- If only one image → normal figure -->
    <figure v-else class="sm:h-[350px] lg:h-[300px]">
      <img :src="images[0]" class="h-full w-full object-cover rounded-sm" />
    </figure>
  </article>
</template>

<style scoped></style>
