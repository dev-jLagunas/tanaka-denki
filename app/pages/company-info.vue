<script setup>
useHead({
  title: "(株)田中電気システムサービス｜会社概要",
  meta: [
    {
      name: "description",
      content:
        "株式会社田中電気システムサービスの会社概要。石川県白山市を拠点に、太陽光発電と需要設備の点検・保守・施工を行っています。",
    },
  ],
});
</script>

<template>
  <main class="my-20">
    <BaseSectionHeader
      bgColor="bg-brand-blue"
      title="会社案内"
      icon="mdi:office-building"
    />
    <MobileCompany class="lg:hidden" />
    <DesktopCompany class="hidden lg:grid" />
    <BusinessInfo />
  </main>
</template>
