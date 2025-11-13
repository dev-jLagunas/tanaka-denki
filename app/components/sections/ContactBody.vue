<script setup>
import { ref } from "vue";

const showPolicy = ref(false);

// watch the modal state and toggle body scroll
watch(showPolicy, (isOpen) => {
  if (process.client) {
    document.body.style.overflow = isOpen ? "hidden" : "";
  }
});
</script>

<template>
  <main>
    <BaseSectionHeader
      bgColor="bg-lightest-blue"
      title="メールフォームからのお問合せ"
      icon="mdi:form"
      sectionId="company-information"
      topMargin="mt-18"
      color="text-primary-dark"
    />
    <div class="text-center">
      <button
        @click="showPolicy = true"
        class="text-brand-blue underline hover:opacity-80 -mb-lg text-sm"
      >
        プライバシーポリシーを読む
      </button>
    </div>
    <div class="long-copy-text px-reg text-lg leading-7 text-center">
      <p class="mt-reg text-balance">
        担当者がすぐにお答えできない場合があります。お急ぎの方はお電話にてお問合せ下さいませ。
      </p>
      <p>以下の項目に必要事項をご記入の上、ご送信ください。</p>
      <p class="text-brand-red text-sm text-center">(＊は必須項目です)。</p>
      <img
        src="/images/logo-only.png"
        alt="company logo"
        class="h-20 mx-auto my-lg"
      />
    </div>
    <ContactForm />
    <PolicyModal :show="showPolicy" @close="showPolicy = false" />
  </main>
</template>
