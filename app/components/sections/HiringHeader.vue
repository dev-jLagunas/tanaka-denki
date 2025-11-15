<script setup lang="tx"></script>

<template>
  <section class="lg:grid lg:grid-cols-2 lg:gap-reg lg:items-center relative">
    <div class="lg:hidden">
      <ScrollNextBtn
        nextId="hiring-points"
        label="求める人物像へスクロール"
        class="mb-lg"
      />

      <img
        src="/images/hiring-img-1.jpg"
        alt=""
        class="w-[90%] mx-auto rounded-sm max-h-[350px] object-cover"
      />
    </div>

    <div class="hiring-header-copy-wrapper">
      <h4 class="font-black text-balance">
        常に考え、積極的に行動し、自ら提案できる人
      </h4>
      <div class="red-underline"></div>
      <p class="mt-sm leading-7">
        お客様の課題を解決していくためには、常日頃からさまざまなことに好奇心を持ち、知見を広げることが必要です
      </p>
      <p class="mt-lg font-black">
        そのため、何事も前向きに取り組む姿勢が大切と考えています。
      </p>
      <div class="red-underline"></div>

      <p class="mt-sm leading-7 mb-lg">
        技術は日々進化していくので大変ですが、責任を持って仕事を任せる環境をあなたのためにご用意しています。
      </p>
      <NuxtLink to="/contact" class="red-cta-btn hover-shadow"
        >お問い合わせ</NuxtLink
      >
    </div>

    <img
      src="/images/hiring-img-1.jpg"
      alt=""
      class="hidden -mt-reg w-[90%] mx-auto rounded-sm max-h-[350px] object-cover lg:grid"
    />
  </section>
</template>
