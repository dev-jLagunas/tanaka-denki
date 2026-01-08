<script setup>
useHead({
  title: "(株)田中電気システムサービス｜お問い合わせ",
  meta: [
    {
      name: "description",
      content:
        "株式会社田中電気システムサービスへのお問い合わせはこちら。太陽光発電・需要設備の点検やメンテナンスのご相談を承ります。",
    },
  ],
});
</script>

<template>
  <main class="my-20">
    <BaseSectionHeader
      bgColor="bg-brand-blue"
      title="お問合せ"
      icon="mdi:email"
      sectionId="company-information"
      topMargin="mt-18"
    />
    <ContactMobile class="lg:hidden" />
    <ContactDesktop class="hidden lg:block" />
  </main>
</template>
