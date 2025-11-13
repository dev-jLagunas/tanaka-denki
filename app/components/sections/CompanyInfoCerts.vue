<template>
  <section>
    <BaseSectionHeader
      bgColor="bg-lightest-blue"
      title="資格"
      icon="mdi:timeline"
      sectionId="certifications"
      class="lg:hidden"
      id="certifications-mobile"
    />
    <img
      src="/images/certs-img.jpg"
      alt=""
      class="-mt-reg w-[90%] mx-auto rounded-sm h-[300px] object-cover object-center lg:w-full lg:pr-8"
    />
    <ScrollNextBtn
      nextId="certifications"
      label="資格へスクロール"
      class="mt-reg lg:hidden"
    />
    <ul
      class="space-y-reg text-primary-dark px-sm rounded-sm mt-lg mx-reg md:pr-lg"
    >
      <!-- Item -->
      <li class="flex items-center justify-between">
        <span class="flex items-center gap-3">
          <span
            class="bg-brand-blue text-white text-sm w-6 h-6 rounded-sm flex items-center justify-center"
          >
            1
          </span>
          <span class="">第１種電気主任技術者</span>
        </span>
        <span class="font-bold text-primary-dark">1名</span>
      </li>
      <div class="h-0.5 w-1/3 bg-brand-red/50 ml-9"></div>

      <!-- Item -->
      <li class="flex items-center justify-between">
        <span class="flex items-center gap-3">
          <span
            class="bg-brand-blue text-white text-sm w-6 h-6 rounded-sm flex items-center justify-center"
          >
            2
          </span>
          <span class="">第２種電気主任技術者</span>
        </span>
        <span class="font-bold text-primary-dark">1名</span>
      </li>
      <div class="h-0.5 w-1/3 bg-brand-red/50 ml-9"></div>

      <!-- Item -->
      <li class="flex items-center justify-between">
        <span class="flex items-center gap-3">
          <span
            class="bg-brand-blue text-white text-sm w-6 h-6 rounded-sm flex items-center justify-center"
          >
            3
          </span>
          <span class="">第３種電気主任技術者</span>
        </span>
        <span class="font-bold text-primary-dark">3名</span>
      </li>
      <div class="h-0.5 w-1/3 bg-brand-red/50 ml-9"></div>

      <!-- Item -->
      <li class="flex items-center justify-between">
        <span class="flex items-center gap-3">
          <span
            class="bg-brand-blue text-white text-sm w-6 h-6 rounded-sm flex items-center justify-center"
          >
            4
          </span>
          <span class="">エネルギー管理士</span>
        </span>
        <span class="font-bold text-primary-dark">1名</span>
      </li>
      <div class="h-0.5 w-1/3 bg-brand-red/50 ml-9"></div>

      <!-- Item -->
      <li class="flex items-center justify-between">
        <span class="flex items-center gap-3">
          <span
            class="bg-brand-blue text-white text-sm w-6 h-6 rounded-sm flex items-center justify-center"
          >
            5
          </span>
          <span class="">第一種電気工事士</span>
        </span>
        <span class="font-bold text-primary-dark">4名</span>
      </li>
      <div class="h-0.5 w-1/3 bg-brand-red/50 ml-9"></div>

      <!-- Item -->
      <li class="flex items-center justify-between">
        <span class="flex items-center gap-3">
          <span
            class="bg-brand-blue text-white text-sm w-6 h-6 rounded-sm flex items-center justify-center"
          >
            6
          </span>
          <span class="">第二種電気工事士</span>
        </span>
        <span class="font-bold text-primary-dark">6名</span>
      </li>
      <div class="h-0.5 w-1/3 bg-brand-red/50 ml-9"></div>
    </ul>
  </section>
</template>
