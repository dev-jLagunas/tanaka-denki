<script setup>
const props = defineProps({
  nextId: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    default: "次へスクロール",
  },
});

const scrollToNext = () => {
  const target = document.getElementById(props.nextId);
  if (!target) return;

  const offset = -80;
  const y = target.getBoundingClientRect().top + window.scrollY + offset;

  window.scrollTo({
    top: y,
    behavior: "smooth",
  });
};
</script>

<template>
  <button @click="scrollToNext" class="scroll-next-btn">
    <Icon name="mdi:chevron-down" size="16" />
    <span>{{ label }}</span>
  </button>
</template>
