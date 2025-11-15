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
  <div class="min-h-screen flex flex-col">
    <TheNavbar />

    <main class="grow">
      <NuxtPage />
    </main>
    <TheFooter />
    <button v-show="showBtn" @click="scrollTop" class="back-top-btn">↑</button>
  </div>
</template>
