<script setup>
import { ref, onMounted } from "vue";

const contactForm = ref(null);

onMounted(() => {
  if (!contactForm.value) return;

  const fields = contactForm.value.querySelectorAll(
    "input[required], textarea[required]"
  );

  fields.forEach((field) => {
    field.addEventListener("invalid", (e) => {
      const target = e.target;
      target.setCustomValidity("この項目は必須です");
    });

    field.addEventListener("input", (e) => {
      e.target.setCustomValidity("");
    });
  });
});
</script>

<template>
  <form
    ref="contactForm"
    name="contact"
    method="POST"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
    action="/pages/success"
    class="border-2 bg-brand-blue text-primary-white h-full py-10 w-[90%] mx-auto px-reg long-copy-text text-lg space-y-sm rounded-md md:w-[80%] max-w-[1200px]"
  >
    <!-- Netlify required hidden field -->
    <input type="hidden" name="form-name" value="contact" />
    <input type="hidden" name="redirect" value="/success" />

    <!-- Honeypot (spam prevention) -->
    <p class="hidden">
      <label>
        <input name="bot-field" />
      </label>
    </p>

    <!-- Name -->
    <section class="md:grid md:grid-cols-2 md:gap-lg">
      <div class="form-group flex flex-col-start-start">
        <label for="name" class="mb-sm text-base">* お名前</label>
        <input
          type="text"
          id="name"
          name="お名前"
          placeholder="例） 山田 太郎"
          required
          autocomplete="name"
          class="bg-primary-white w-full rounded-sm py-1 placeholder-primary-dark/40 px-reg text-primary-dark"
        />
      </div>

      <!-- Furigana -->
      <div class="form-group flex flex-col-start-start">
        <label for="furigana" class="mb-sm text-base">* ふりがな</label>
        <input
          type="text"
          id="furigana"
          name="ふりがな"
          placeholder="例） やまだ たろう"
          required
          title="ひらがなでご入力ください"
          class="bg-primary-white w-full rounded-sm py-1 placeholder-primary-dark/40 px-reg text-primary-dark"
        />
      </div>
    </section>

    <!-- Company Name -->
    <div class="form-group flex flex-col-start-start">
      <label for="company" class="mb-sm text-base">法人名</label>
      <input
        type="text"
        id="company"
        name="法人名"
        oninvalid="this.setCustomValidity('この項目は必須です')"
        oninput="this.setCustomValidity('')"
        placeholder="例）株式会社田中電気システムサービス"
        autocomplete="organization"
        class="bg-primary-white w-full rounded-sm py-1 placeholder-primary-dark/40 px-reg text-primary-dark"
      />
    </div>

    <!-- Email -->
    <div class="form-group flex flex-col-start-start">
      <label for="email" class="mb-sm text-base">* メールアドレス</label>
      <input
        type="email"
        id="email"
        name="メールアドレス"
        placeholder="例）example@example.com"
        required
        autocomplete="email"
        class="bg-primary-white w-full rounded-sm py-1 placeholder-primary-dark/40 px-reg text-primary-dark"
      />
    </div>

    <!-- Phone & Postal -->
    <div class="space-y-reg md:grid md:grid-cols-2 md:gap-lg">
      <div class="form-group flex flex-col-start-start">
        <label for="phone" class="mb-sm text-base">* 電話番号</label>
        <input
          type="tel"
          id="phone"
          name="電話番号"
          placeholder="例）076-272-8492"
          required
          pattern="^[0-9０-９\-]+$"
          title="半角数字またはハイフンをご使用ください"
          class="bg-primary-white w-full rounded-sm py-1 placeholder-primary-dark/40 px-reg text-primary-dark"
        />
      </div>

      <div class="form-group flex flex-col-start-start">
        <label for="postal" class="mb-sm text-base">* 郵便番号</label>
        <input
          type="text"
          id="postal"
          name="郵便番号"
          placeholder="例）924-0031"
          required
          title="例：123-4567 の形式で入力してください"
          class="bg-primary-white w-full rounded-sm py-1 placeholder-primary-dark/40 px-reg text-primary-dark"
        />
      </div>
    </div>

    <!-- Message -->
    <p class="-mb-2 text-base">* 問合せ内容</p>
    <div
      class="border-2 bg-primary-white rounded-sm mt-reg flex flex-col-start-start"
    >
      <textarea
        id="message"
        name="お問い合わせ内容"
        placeholder="お問合せ内容をご記入ください。"
        rows="6"
        required
        class="placeholder-primary-dark/40 w-full pl-sm text-primary-dark min-h-[300px]"
      ></textarea>
    </div>

    <!-- Submit -->
    <button type="submit" class="red-cta-btn hover:cursor-pointer">送信</button>
  </form>
</template>

<style scoped>
input:invalid {
  border-color: red;
}
</style>
