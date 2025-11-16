<script setup></script>

<template>
  <main
    class="min-h-screen flex flex-col items-center justify-center px-6 text-center long-copy-text"
  >
    <img src="/images/logo-only.png" alt="company log" class="h-20 mb-lg" />
    <h1 class="text-2xl font-bold">送信が完了しました</h1>
    <p class="text-lg mb-reg">
      お問い合わせいただき、誠にありがとうございます。<br />
      内容を確認の上、できるだけ早くご連絡いたします。
    </p>

    <NuxtLink to="/" class="red-cta-btn text-xl hover:opacity-90 transition">
      ホームに戻る
    </NuxtLink>
  </main>
</template>
