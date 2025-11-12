<script setup></script>

<template>
  <form
    action="/send"
    method="POST"
    novalidate
    class="border-2 bg-brand-blue text-primary-white h-full py-10 w-[90%] mx-auto px-reg long-copy-text text-lg space-y-sm rounded-md md:w-[80%] max-w-[1200px]"
  >
    <!-- Name -->
    <section class="md:grid md:grid-cols-2 md:gap-lg">
      <div class="form-group flex flex-col-start-start">
        <label for="name" class="mb-sm text-base">* お名前</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="例） 山田 太郎"
          required
          autocomplete="name"
          class="bg-primary-white w-full rounded-sm py-1 placeholder-primary-dark/40 px-reg text-primary-dark"
        />
        <span class="error-message" aria-live="polite"></span>
      </div>

      <!-- Furigana -->
      <div class="form-group flex flex-col-start-start">
        <label for="furigana" class="mb-sm text-base">* ふりがな</label>
        <input
          type="text"
          id="furigana"
          name="furigana"
          placeholder="例） やまだ たろう"
          required
          pattern="^[ぁ-んー\s]+$"
          title="ひらがなでご入力ください"
          class="bg-primary-white w-full rounded-sm py-1 placeholder-primary-dark/40 px-reg text-primary-dark"
        />
        <span class="error-message" aria-live="polite"></span>
      </div>
    </section>
    <!-- Company Name -->
    <div class="form-group flex flex-col-start-start">
      <label for="company" class="mb-sm text-base">法人名</label>
      <input
        type="text"
        id="company"
        name="company"
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
        name="email"
        placeholder="例）example@example.com"
        required
        autocomplete="email"
        class="bg-primary-white w-full rounded-sm py-1 placeholder-primary-dark/40 px-reg text-primary-dark"
      />
      <span class="error-message" aria-live="polite"></span>
    </div>

    <!-- Phone & Postal -->
    <div class="space-y-reg md:grid md:grid-cols-2 md:gap-lg">
      <div class="form-group flex flex-col-start-start">
        <label for="phone" class="mb-sm text-base">* 電話番号</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="例）076-272-8492"
          required
          pattern="^[0-9０-９\-]+$"
          title="半角数字またはハイフンをご使用ください"
          class="bg-primary-white w-full rounded-sm py-1 placeholder-primary-dark/40 px-reg text-primary-dark"
        />
        <span class="error-message" aria-live="polite"></span>
      </div>

      <div class="form-group flex flex-col-start-start">
        <label for="postal" class="mb-sm text-base">* 郵便番号</label>
        <input
          type="text"
          id="postal"
          name="postal"
          placeholder="例）924-0031"
          required
          pattern="^\d{3}-\d{4}$"
          title="例：123-4567 の形式で入力してください"
          class="bg-primary-white w-full rounded-sm py-1 placeholder-primary-dark/40 px-reg text-primary-dark"
        />
        <span class="error-message" aria-live="polite"></span>
      </div>
    </div>
    <p class="-mb-2 text-base">* 問合せ内容</p>
    <!-- Message -->
    <div
      class="border-2 bg-primary-white rounded-sm mt-reg flex flex-col-start-start"
    >
      <label for="message" class="text-primary-dark hidden">* 問合せ内容</label>
      <textarea
        id="message"
        name="message"
        placeholder="お問合せ内容をご記入ください。"
        rows="6"
        required
        class="placeholder-primary-dark/40 w-full pl-sm text-primary-dark min-h-[300px]"
      ></textarea>
      <span class="error-message" aria-live="polite"></span>
    </div>

    <!-- Submit -->
    <div class="form-submit">
      <button type="submit" class="red-cta-btn">送信</button>
    </div>
  </form>
</template>
