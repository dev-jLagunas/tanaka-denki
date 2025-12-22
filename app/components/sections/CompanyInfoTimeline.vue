<template>
  <section class="mt-8" data-aos="fade-up">
    <BaseSectionHeader
      bgColor="bg-lightest-blue"
      title="沿革"
      icon="mdi:timeline"
      sectionId="timeline"
      class="lg:hidden"
      id="timeline-nav-mobile"
    />
    <img
      src="/images/company-info-img.png"
      alt=""
      class="-mt-reg w-[90%] mx-auto rounded-sm h-[300px] object-cover object-center lg:w-full lg:pr-8"
    />
    <ScrollNextBtn
      nextId="certifications-nav-mobile"
      label="資格へスクロール"
      class="mt-reg lg:hidden"
    />
    <ul
      class="relative border-l-2 border-brand-blue pl-6 space-y-12 ml-reg mt-lg"
    >
      <!-- Item -->
      <li class="relative">
        <span
          class="absolute -left-[31px] top-1 h-3 w-3 bg-brand-blue rounded-full"
        ></span>
        <p class="text-sm text-primary-dark">2009年12月01日</p>
        <p class="font-bold text-lg text-primary-dark">
          タナカ電気管理事務所が設立される。
        </p>
        <div class="border-brand-red/50 w-1/3 mt-2 border"></div>
      </li>
      <li class="relative">
        <!-- Dot -->
        <span
          class="absolute -left-[31px] top-1 h-3 w-3 bg-brand-blue rounded-full"
        ></span>

        <p class="text-sm text-primary-dark">2017年11月17日</p>
        <p class="font-bold text-lg text-primary-dark">
          株式会社田中電気システムサービスと合併する。
        </p>
        <div class="border-brand-red/50 w-1/3 mt-2 border"></div>
      </li>

      <li class="relative">
        <span
          class="absolute -left-[31px] top-1 h-3 w-3 bg-brand-blue rounded-full"
        ></span>
        <p class="text-sm text-primary-dark">2023年04月01日</p>
        <p class="font-bold text-lg text-primary-dark">
          電気保安法人に認定される。
        </p>
        <div class="border-brand-red/50 w-1/3 mt-2 border"></div>
      </li>

      <li class="relative">
        <span
          class="absolute -left-[31px] top-1 h-3 w-3 bg-brand-blue rounded-full"
        ></span>
        <p class="text-sm text-primary-dark">2023年10月30日</p>
        <p class="font-bold text-lg text-primary-dark">事務所が移転する。</p>
        <div class="border-brand-red/50 w-1/3 mt-2 border"></div>
      </li>
    </ul>
  </section>
</template>
