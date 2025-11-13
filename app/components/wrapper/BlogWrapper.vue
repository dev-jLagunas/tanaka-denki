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
    <div class="space-y-lg sm:two-grid-upsize lg:space-y-0">
      <BaseBlogCard />
      <BaseBlogCard />
      <BaseBlogCard />
    </div>
  </section>
</template>
