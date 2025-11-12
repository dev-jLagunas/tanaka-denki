<template>
  <main class="mt-20">
    <BaseSectionHeader
      bgColor="bg-brand-blue"
      title="お知らせ"
      icon="mdi:info"
      sectionId="company-information"
      topMargin="mt-18"
    />
    <section
      class="space-y-lg sm:grid sm:items-center sm:grid-cols-2 lg:grid-cols-3 lg:space-y-0"
    >
      <BaseBlogCard />
      <BaseBlogCard />
      <BaseBlogCard />
    </section>
  </main>
</template>
