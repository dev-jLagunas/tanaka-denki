<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay, Pagination } from "swiper/modules";
</script>

<template>
  <header class="mt-16">
    <Swiper
      :modules="[Autoplay, Pagination]"
      :loop="true"
      :autoplay="{ delay: 3500 }"
      :pagination="true"
      class="w-full h-[650px] mt-reg"
    >
      <SwiperSlide>
        <article
          class="bg-[url('/images/hero/hero-slide-1.webp')] background-img-cover flex-col-start-center"
        >
          <div class="hero-mobile-slide">
            <img
              src="/images/logo-only.png"
              alt="company logo"
              class="h-10 mx-auto"
            />
            <p class="hero-mobile-slide-heading text-primary-white">
              電気保安法人として
            </p>
            <p class="hero-mobile-slide-heading text-primary-white">
              電気保安管理の
            </p>
            <p class="hero-mobile-slide-heading text-brand-red">
              ワンストップサービス
            </p>
            <p class="hero-mobile-slide-heading text-primary-white">
              ぜひ、弊社にお任せください
            </p>
            <button class="red-cta-btn hover-shadow">お問い合わせ</button>
          </div>
        </article>
      </SwiperSlide>
      <SwiperSlide>
        <article
          class="bg-[url('/images/hero/hero-slide-2.webp')] background-img-cover flex-col-start-center"
        >
          <div class="hero-mobile-slide">
            <img
              src="/images/logo-only.png"
              alt="company logo"
              class="h-10 mx-auto"
            />
            <p class="hero-mobile-slide-heading text-primary-white">
              開業以来、お客様に損はさせない仕事
            </p>
            <p class="hero-mobile-slide-heading text-brand-red">
              お客様の立場になって行う仕事で
            </p>
            <p class="hero-mobile-slide-heading text-primary-white">
              自分たちの価値を証明してきました
            </p>
            <button class="red-cta-btn hover-shadow">お問い合わせ</button>
          </div>
        </article>
      </SwiperSlide>
      <SwiperSlide>
        <article
          class="bg-[url('/images/hero/hero-slide-3.jpg')] background-img-cover flex-col-start-center"
        >
          <div class="hero-mobile-slide">
            <img
              src="/images/logo-only.png"
              alt="company logo"
              class="h-10 mx-auto"
            />
            <p class="hero-mobile-slide-heading text-primary-white">経営理念</p>
            <p
              class="font-semibold text-4xl sm:text-5xl tracking-widest text-primary-white text-center mb-8"
            >
              着実 丁寧
            </p>
            <p
              class="font-semibold text-4xl sm:text-5xl tracking-widest text-primary-white text-center"
            >
              誠実 安全
            </p>
            <button class="red-cta-btn hover-shadow">お問い合わせ</button>
          </div>
        </article>
      </SwiperSlide>
    </Swiper>
  </header>
</template>
