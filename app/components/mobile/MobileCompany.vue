<template>
  <main class="">
    <header>
      <img
        src="/images/info-img.png"
        alt=""
        class="-mt-reg w-[90%] mx-auto rounded-sm h-[300px] object-cover object-bottom lg:w-full lg:pr-8"
      />
      <figure>
        <img
          src="/images/logo-only.png"
          alt="company logo"
          class="h-20 mx-auto mt-lg"
        />
      </figure>
      <h3
        class="text-xl text-primary-dark tracking-wider mt-lg px-sm text-center"
      >
        電気設備の維持管理を通して、安定したエネルギー供給をサポートします。
      </h3>
      <h3
        class="text-xl text-primary-dark tracking-wider mt-sm px-sm mb-4 text-center"
      >
        自家用電気設備・受変電設備の保守・点検も、専門技術でしっかりと対応いたします。　
      </h3>
      <ScrollNextBtn nextId="area-nav" label="対応エリアへスクロール" />
    </header>

    <CompanyInfoTable class="mb-reg" />

    <CompanyInfoArea id="area-nav" class="mb-lg" />
    <CompanyInfoTimeline id="timeline-nav" class="mb-lg" />
    <CompanyInfoCerts class="mb-lg" id="certifications-nav-mobile" />

    <CompanyInfoMap id="map" />
    <NuxtLink to="/contact" class="red-cta-btn hover-shadow ml-reg"
      >お問い合わせ</NuxtLink
    >
  </main>
</template>
