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
  <article :class="`work-info-card ${bgColor} flex flex-col`">
    <header class="space-y-sm px-sm grow">
      <div class="work-info-card-heading">
        <p class="font-bold text-brand-blue text-3xl">{{ number }}</p>
      </div>

      <h3 class="work-info-card-subheading">
        {{ subheading }}
      </h3>

      <p v-if="longCopy" class="long-copy-text text-2xl my-sm md:text-lg">
        {{ longCopy }}
      </p>
    </header>

    <!-- If more than one image → Swiper -->
    <div
      v-if="images.length > 1"
      class="w-full h-[350px] mt-8 rounded-b-sm overflow-hidden shrink-0 relative"
    >
      <Swiper
        :modules="[Autoplay, Pagination, Navigation]"
        :loop="true"
        :autoplay="{ delay: 5000 }"
        :pagination="true"
        :navigation="true"
        class="h-full w-full"
      >
        <SwiperSlide
          v-for="(src, i) in images"
          :key="i"
          class="h-full w-full relative"
        >
          <img :src="src" class="h-full w-full object-cover" />
          <p
            v-if="slideCopy[i]"
            class="absolute bottom-0 w-full text-neutral-dark text-center bg-neutral-light/90 py-1"
          >
            {{ slideCopy[i] }}
          </p>
        </SwiperSlide>
      </Swiper>
    </div>

    <!-- If only one image → normal figure -->
    <figure
      v-else
      class="w-full h-[350px] mt-8 rounded-b-sm overflow-hidden shrink-0 relative"
    >
      <img :src="images[0]" class="h-full w-full object-cover" />
      <p
        v-if="slideCopy[0]"
        class="absolute bottom-0 w-full text-neutral-dark text-center bg-neutral-light/90 py-1 px-reg"
      >
        {{ slideCopy[0] }}
      </p>
    </figure>
  </article>
</template>

<style scoped>
.swiper-button-next,
.swiper-button-prev {
  color: white;
  width: 10px;
  height: 40px;
}

.swiper-button-next::after,
.swiper-button-prev::after {
  font-size: 10px;
}
</style>
