<template>
  <main>
    <HeroMobile class="md:hidden" />
    <HeroDesktop class="hidden md:block" />
    <WorkInfoWrapper />
    <BaseSectionHeader
      bgColor="bg-brand-blue"
      title="特記事項"
      icon="mdi:thumbs-up"
      sectionId="work-info"
    />
    <h3 class="long-copy-text px-reg md:leading-9 text-2xl md:text-3xl">
      お客様のメリット
    </h3>
    <BaseMeritCard number="1" text="一体的保守管理による経費節減" />
    <BaseMeritCard number="2" text="異常の早期発見による損失の縮減" />
    <BaseMeritCard number="3" text="メンテナンス不足による損失の縮減" />
    <AccompWrapper />
    <BlogWrapper />
  </main>
</template>
