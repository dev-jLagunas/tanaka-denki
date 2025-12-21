<script setup></script>

<template>
  <ul
    class="my-lg flex flex-col-center text-lg long-copy-text py-lg space-y-reg md:space-y-0 md:grid md:grid-cols-2 md:gap-lg md:text-xl md:mt-32 xl:text-2xl xl:gap-12"
  >
    <!-- Hours -->
    <li class="text-center">
      <Icon name="mdi:clock" size="28" class="text-slate-700" />
      <p class="mb-sm">営業時間 <span class="font-bold">8:30-17:00</span></p>
      <p class="font-bold">[ 土・日・祝日除く ]</p>
    </li>

    <!-- Address -->
    <li class="text-center">
      <Icon name="mdi:map-marker" size="28" class="text-slate-700" />
      <p class="mb-sm">〒924-0031</p>
      <p class="font-bold">石川県白山市村井東 2-4-3</p>
    </li>

    <!-- Telephone -->
    <li class="text-center">
      <Icon name="mdi:phone" size="28" class="text-slate-700" />
      <p>TEL <span class="font-bold">076-272-8492</span></p>
      <p>受付時間 9:00-17:00</p>
    </li>

    <!-- Fax -->
    <li class="text-center">
      <Icon name="mdi:fax" size="28" class="text-slate-700" />
      <p>FAX <span class="font-bold">076-272-8493</span></p>
    </li>

    <li class="md:col-span-2 mx-auto place-content-center text-center">
      <img
        src="/images/logo-only.png"
        alt="company logo"
        class="h-20 mt-lg mx-auto"
      />
      <p class="text-brand-blue">株式会社田中電気システムサービス</p>
    </li>
  </ul>
</template>
