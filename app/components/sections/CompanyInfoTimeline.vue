<template>
  <section class="mt-8">
    <BaseSectionHeader
      bgColor="bg-lightest-blue"
      title="沿革"
      icon="mdi:timeline"
      sectionId="work-info"
    />
    <img src="/images/logo-only.png" alt="company logo" class="h-20 mb-8" />
    <ul class="relative border-l-2 border-brand-blue pl-6 space-y-12 ml-reg">
      <!-- Item -->
      <li class="relative">
        <!-- Dot -->
        <span
          class="absolute -left-[31px] top-1 h-3 w-3 bg-brand-blue rounded-full"
        ></span>

        <p class="text-sm text-primary-dark">2017年11月17日</p>
        <p class="font-bold text-lg text-primary-dark">
          株式会社田中電気システムサービスが設立される。
        </p>
        <div class="h-[0.5] bg-brand-red w-1/3 mt-2"></div>
      </li>

      <li class="relative">
        <span
          class="absolute -left-[31px] top-1 h-3 w-3 bg-brand-blue rounded-full"
        ></span>
        <p class="text-sm text-primary-dark">2023年04月01日</p>
        <p class="font-bold text-lg text-primary-dark">
          株式会社田中電気システムサービスが電気保安法人になる。
        </p>
        <div class="h-[0.5] bg-brand-red w-1/3 mt-2"></div>
      </li>

      <li class="relative">
        <span
          class="absolute -left-[31px] top-1 h-3 w-3 bg-brand-blue rounded-full"
        ></span>
        <p class="text-sm text-primary-dark">2023年10月30日</p>
        <p class="font-bold text-lg text-primary-dark">事務所が移転する。</p>
        <div class="h-[0.5] bg-brand-red w-1/3 mt-2"></div>
      </li>
    </ul>
  </section>
</template>
