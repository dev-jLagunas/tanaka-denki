<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const showBtn = ref(false);

const toggleButton = () => {
  showBtn.value = window.scrollY > 300;
};

const scrollTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

onMounted(() => {
  window.addEventListener("scroll", toggleButton);
});

onUnmounted(() => {
  window.removeEventListener("scroll", toggleButton);
});
</script>

<template>
  <div>
    <TheNavbar />
    <NuxtPage />
    <TheFooter />
    <button
      v-show="showBtn"
      @click="scrollTop"
      class="fixed bottom-20 right-6 z-50 bg-brand-blue/75 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:bg-brand-blue hover:cursor-pointer md:bottom-10 lg:right-10"
    >
      ↑
    </button>
  </div>
</template>
