<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
</script>

<template>
  <header class="max-w-[1400px] lg:mx-auto lg:my-14 lg:h-full">
    <Swiper
      :modules="[Autoplay, Pagination, Navigation]"
      :loop="true"
      :autoplay="{ delay: 9000 }"
      :pagination="true"
      :navigation="true"
      class="w-full h-[500px] mt-lg"
    >
      <SwiperSlide>
        <article class="hero-two-grid lg:px-lg xl:px-0">
          <section class="content-center space-y-4 px-reg">
            <p class="hero-desktop-slide-heading text-brand-blue">
              電気保安法人として
            </p>
            <p class="hero-desktop-slide-heading text-brand-blue">
              電気保安管理の
            </p>
            <p class="hero-desktop-slide-heading text-brand-red">
              ワンストップサービス
            </p>
            <p class="hero-desktop-slide-heading text-brand-blue">
              ぜひ、弊社にお任せください
            </p>

            <NuxtLink to="/contact" class="red-cta-btn hover-shadow"
              >お問い合わせ</NuxtLink
            >
          </section>
          <figure
            class="bg-[url('/images/hero/hero-slide-1.webp')] flex-col-center rounded-sm mx-reg background-img-cover"
          >
            <img
              src="/images/logo-only.png"
              alt="company logo"
              class="h-16 mx-auto"
            />
          </figure>
        </article>
      </SwiperSlide>
      <SwiperSlide>
        <article class="hero-two-grid lg:px-lg xl:px-0">
          <section class="content-center space-y-4 px-reg">
            <p class="hero-desktop-slide-heading text-brand-blue">
              開業以来、お客様に損はさせない仕事
            </p>
            <p class="hero-desktop-slide-heading text-brand-red">
              お客様の立場になって行う仕事で
            </p>
            <p class="hero-desktop-slide-heading text-brand-blue">
              自分たちの価値を証明してきました
            </p>
          </section>
          <figure
            class="bg-[url('/images/hero/hero-slide-2.jpg')] content-center rounded-sm mx-reg background-img-cover"
          ></figure>
        </article>
      </SwiperSlide>
      <SwiperSlide>
        <article class="hero-two-grid lg:px-lg xl:px-0">
          <section class="content-center space-y-6 px-reg">
            <p
              class="font-bold tracking-widest text-2xl lg:text-3xl text-brand-blue"
            >
              経営理念
            </p>

            <p class="hero-desktop-special-text text-brand-blue text-center">
              着実 <span class="text-brand-red pl-lg">丁寧</span>
            </p>
            <p class="hero-desktop-special-text text-brand-blue text-center">
              <span class="text-brand-red pr-lg">誠実</span> 安全
            </p>
          </section>
          <figure
            class="bg-[url('/images/hero/hero-slide-3.jpg')] content-center rounded-sm mx-reg background-img-cover"
          ></figure>
        </article>
      </SwiperSlide>
    </Swiper>
  </header>
</template>
