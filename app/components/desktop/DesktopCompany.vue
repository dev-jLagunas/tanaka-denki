<template>
  <div>
    <main class="grid grid-cols-[25%_75%]">
      <aside class="relative border-r-2 border-brand-red/50 mr-8">
        <figure>
          <img
            src="/images/logo-only.png"
            alt="company logo"
            class="h-20 mx-auto"
          />
        </figure>
        <div class="absolute bottom-0 right-5">
          <button class="red-cta-btn mb-reg">お問い合わせ</button>
          <ScrollNextBtn nextId="timeline" label="沿革へスクロール" />
        </div>
      </aside>
      <section class="">
        <img
          src="/images/info-img.jpg"
          alt=""
          class="-mt-reg w-[90%] mx-auto rounded-sm h-[300px] object-cover object-bottom lg:w-full lg:pr-8"
        />
        <h3 class="long-copy-text text-xl my-reg">
          お客様の発電をしっかりと維持管理し、安定したエネルギーの供給を守ります。
        </h3>
        <h3 class="long-copy-text text-xl">
          さらに、自家用電気設備（受変電設備の保守管理をお引き受けします。　
        </h3>
        <CompanyInfoTable />
      </section>
    </main>
    <BaseSectionHeader
      bgColor="bg-lightest-blue"
      title="沿革"
      icon="mdi:timeline"
      sectionId="timeline"
    />
    <div class="grid grid-cols-[25%_75%] mt-lg">
      <aside class="relative border-r-2 border-brand-red/50 mr-8">
        <figure>
          <img
            src="/images/logo-only.png"
            alt="company logo"
            class="h-20 mx-auto"
          />
        </figure>
        <div class="absolute bottom-0 right-5">
          <button class="red-cta-btn mb-reg">お問い合わせ</button>
          <ScrollNextBtn nextId="certifications" label="資格へスクロール" />
        </div>
      </aside>
      <section>
        <CompanyInfoTimeline />
      </section>
    </div>
    <BaseSectionHeader
      bgColor="bg-lightest-blue"
      title="沿革"
      icon="mdi:timeline"
      sectionId="timeline"
    />
    <section class="grid grid-cols-[25%_75%] mt-lg">
      <aside class="relative border-r-2 border-brand-red/50 mr-8">
        <figure>
          <img
            src="/images/logo-only.png"
            alt="company logo"
            class="h-20 mx-auto"
          />
        </figure>
        <div class="absolute bottom-0 right-5">
          <button class="red-cta-btn mb-reg">お問い合わせ</button>
          <ScrollNextBtn nextId="certifications" label="資格へスクロール" />
        </div>
      </aside>
      <section>
        <CompanyInfoCerts />
      </section>
    </section>
  </div>
</template>
