<script setup>
useHead({
  title: "(株)田中電気システムサービス｜採用情報",
  meta: [
    {
      name: "description",
      content:
        "株式会社田中電気システムサービスの採用情報。太陽光発電・需要設備の点検や施工を行う技術職を募集しています。",
    },
  ],
});
</script>

<template>
  <main class="my-20">
    <BaseSectionHeader
      bgColor="bg-brand-blue"
      title="採用情報"
      icon="mdi:people"
      sectionId="hiring-information"
    />
    <HiringMobile class="lg:hidden" />
    <HiringDesktop class="hidden lg:block" />
    <BusinessInfo />
  </main>
</template>
