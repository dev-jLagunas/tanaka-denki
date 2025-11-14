<script setup>
const { getEntries } = useContentful();
const data = await getEntries();

console.log(data);
</script>

<template>
  <main class="my-20">
    <BaseSectionHeader
      bgColor="bg-brand-blue"
      title="お知らせ"
      icon="mdi:info"
      sectionId="company-information"
    />
    <section class="space-y-lg sm:two-grid-center lg:grid-cols-3 lg:space-y-0">
      <BaseBlogCard />
      <BaseBlogCard />
      <BaseBlogCard />
    </section>
  </main>
</template>
