<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay, Pagination } from "swiper/modules";
</script>

<template>
  <header>
    <Swiper
      :modules="[Autoplay, Pagination]"
      :loop="true"
      :autoplay="{ delay: 3000 }"
      :pagination="true"
      class="w-full h-[700px] mt-reg"
    >
      <SwiperSlide>
        <article
          class="bg-[url('/images/hero/hero-slide-1.webp')] background-img-cover flex-col-start-center"
        >
          <div
            class="bg-brand-blue/70 mt-lg rounded-sm mx-reg px-reg h-[500px] gap-sm content-center w-[90%] max-w-[450px] text-start space-y-2"
          >
            <img
              src="/images/logo-only.png"
              alt="company logo"
              class="h-10 mx-auto mb-20"
            />
            <p
              class="font-semibold text-3xl sm:text-4xl text-neutral-light tracking-widest"
            >
              電気保安法人として
            </p>
            <p
              class="font-semibold text-3xl sm:text-4xl text-neutral-light tracking-widest"
            >
              電気保安管理の
            </p>
            <p
              class="font-semibold text-3xl sm:text-4xl text-brand-red tracking-widest"
            >
              ワンストップサービス
            </p>
            <p
              class="font-semibold text-3xl sm:text-4xl text-neutral-light tracking-widest"
            >
              ぜひ、弊社にお任せください
            </p>
          </div>
          <button
            class="bg-brand-red text-neutral-light px-4 py-1 mt-reg rounded-sm hover:font-bold"
          >
            お問い合わせ
          </button>
        </article>
      </SwiperSlide>
      <SwiperSlide>
        <article
          class="bg-[url('/images/hero/hero-slide-2.webp')] background-img-cover flex-col-start-center"
        >
          <div
            class="bg-brand-blue/70 mt-lg rounded-sm mx-reg px-reg h-[500px] gap-sm content-center w-[90%] max-w-[450px] text-start space-y-2"
          >
            <img
              src="/images/logo-only.png"
              alt="company logo"
              class="h-10 mx-auto mb-20"
            />
            <p
              class="font-semibold text-3xl sm:text-4xl text-neutral-light tracking-widest"
            >
              開業以来、お客様に損はさせない仕事
            </p>
            <p
              class="font-semibold text-3xl sm:text-4xl text-brand-red tracking-widest"
            >
              お客様の立場になって行う仕事で
            </p>
            <p
              class="font-semibold text-3xl sm:text-4xl text-neutral-light tracking-widest"
            >
              自分たちの価値を証明してきました
            </p>
          </div>
          <button
            class="bg-brand-red text-neutral-light px-4 py-1 mt-reg rounded-sm hover:font-bold"
          >
            お問い合わせ
          </button>
        </article>
      </SwiperSlide>
      <SwiperSlide>
        <article
          class="bg-[url('/images/hero/hero-slide-3.jpg')] background-img-cover flex-col-start-center"
        >
          <div
            class="bg-brand-blue/70 mt-lg rounded-sm mx-reg px-reg h-[500px] gap-sm content-center w-[90%] max-w-[450px] text-start space-y-2"
          >
            <img
              src="/images/logo-only.png"
              alt="company logo"
              class="h-10 mx-auto mb-20"
            />
            <p
              class="font-semibold text-3xl sm:text-4xl text-neutral-light tracking-widest"
            >
              経営理念
            </p>
            <p
              class="font-semibold text-6xl text-neutral-light tracking-widest text-center mb-8"
            >
              着実 <span class="opacity-0">---</span>丁寧
            </p>
            <p
              class="font-semibold text-6xl text-neutral-light tracking-widest text-center"
            >
              誠実<span class="opacity-0">----</span>安全
            </p>
          </div>
          <button
            class="bg-brand-red text-neutral-light px-4 py-1 mt-reg rounded-sm hover:font-bold"
          >
            お問い合わせ
          </button>
        </article>
      </SwiperSlide>
    </Swiper>
  </header>
</template>
