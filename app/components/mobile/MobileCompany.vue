<template>
  <main class="">
    <header>
      <img
        src="/images/info-img.jpg"
        alt=""
        class="-mt-reg w-[90%] mx-auto rounded-sm h-[300px] object-cover object-bottom lg:w-full lg:pr-8"
      />
      <figure>
        <img
          src="/images/logo-only.png"
          alt="company logo"
          class="h-20 mx-auto mt-lg"
        />
        <figcaption></figcaption>
      </figure>
      <h3
        class="text-xl text-primary-dark tracking-wider mt-lg px-sm text-center"
      >
        お客様の発電をしっかりと維持管理し、安定したエネルギーの供給を守ります。
      </h3>
      <h3
        class="text-xl text-primary-dark tracking-wider mt-sm px-sm mb-4 text-center"
      >
        さらに、自家用電気設備（受変電設備の保守管理をお引き受けします。　
      </h3>
      <ScrollNextBtn nextId="timeline" label="沿革へスクロール" />
    </header>

    <CompanyInfoTable class="mb-reg" />
    <NuxtLink to="/contact" class="red-cta-btn hover-shadow ml-reg"
      >お問い合わせ</NuxtLink
    >

    <CompanyInfoTimeline id="timeline-nav" class="mb-lg" />
    <NuxtLink to="/contact" class="red-cta-btn hover-shadow ml-reg"
      >お問い合わせ</NuxtLink
    >
    <CompanyInfoCerts class="mb-lg" id="certifications-nav-mobile" />
    <NuxtLink to="/contact" class="red-cta-btn hover-shadow ml-reg"
      >お問い合わせ</NuxtLink
    >
    <CompanyInfoMap id="map" />
  </main>
</template>
