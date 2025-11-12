<script setup></script>

<template>
  <section>
    <BaseSectionHeader
      bgColor="bg-brand-blue"
      title="お知らせ"
      icon="mdi:blog"
      sectionId="blog-section"
      class="mt-20"
    />
    <div
      class="space-y-lg sm:grid sm:items-center sm:grid-cols-2 lg:grid-cols-3 lg:space-y-0"
    >
      <BaseBlogCard />
    </div>
  </section>
</template>
