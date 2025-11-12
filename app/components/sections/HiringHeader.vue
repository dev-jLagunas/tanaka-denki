<script setup lang="tx"></script>

<template>
  <section class="lg:grid lg:grid-cols-2 lg:gap-reg lg:items-center">
    <ScrollNextBtn
      nextId="hiring-points"
      label="求める人物像へスクロール"
      class="mb-lg lg:hidden"
    />

    <img
      src="/images/hiring-img-1.jpg"
      alt=""
      class="-mt-reg w-[90%] mx-auto rounded-sm max-h-[350px] object-cover lg:hidden"
    />
    <div
      class="long-copy-text w-[90%] mx-auto mt-reg md:text-xl lg:space-y-sm lg:pr-lg lg:w-full lg:mx-reg lg:border-r-2 lg:border-brand-red/50"
    >
      <h4 class="font-black text-balance">
        常に考え、積極的に行動し、自ら提案できる人
      </h4>
      <div class="h-0.5 w-1/3 bg-brand-red/50 mt-1"></div>
      <p class="mt-sm leading-7">
        お客様の課題を解決していくためには、常日頃からさまざまなことに好奇心を持ち、知見を広げることが必要です
      </p>
      <p class="mt-lg font-black">
        そのため、何事も前向きに取り組む姿勢が大切と考えています。
      </p>
      <div class="h-0.5 w-1/3 bg-brand-red/50 mt-1"></div>

      <p class="mt-sm leading-7">
        技術は日々進化していくので大変ですが、責任を持って仕事を任せる環境をあなたのためにご用意しています。
      </p>
      <button class="red-cta-btn">お問い合わせ</button>
    </div>
    <img
      src="/images/hiring-img-1.jpg"
      alt=""
      class="hidden -mt-reg w-[90%] mx-auto rounded-sm max-h-[350px] object-cover lg:grid"
    />
  </section>
</template>
