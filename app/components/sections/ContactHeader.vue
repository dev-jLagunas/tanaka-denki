<script setup></script>

<template>
  <section class="md:grid md:grid-cols-2 md:items-center">
    <img
      src="/images/tanaka-character.png"
      alt="tanaka worker character"
      class="h-52 mx-auto pr-10 md:hidden"
    />
    <div
      class="long-copy-text text-lg text-center space-y-sm px-reg md:space-y-reg md:text-2xl lg:text-3xl lg:h-full lg:content-center"
    >
      <p>弊社へのお問合せ・お見積は、</p>
      <p>お電話 <span class="font-bold text-brand-blue">076-272-8492</span></p>
      <p>又は</p>
      <p class="font-bold text-brand-blue">メールフォーム</p>
      <p>よりお問合せいただけます</p>
      <p class="text-brand-red text-sm">
        なお、売込み・営業目的でのお問合せはご遠慮ください。
      </p>
      <div
        class="long-copy-text text-center px-reg text-lg space-y-sm leading-7 md:text-2xl"
      >
        <Icon name="mdi:phone" size="40" class="text-brand-blue -mb-1 mt-lg" />

        <p class="lg:text-balance lg:leading-8">
          お電話からのお問合せは営業時間内でしたらいつでもご連絡いただけます。
        </p>

        <p class="font-bold">
          営業時間 <span class="text-brand-blue">8:30-17:00</span>
        </p>
      </div>
    </div>

    <img
      src="/images/tanaka-character.png"
      alt="tanaka worker character"
      class="h-full max-h-[500px] w-auto object-cover mx-auto pr-10 hidden md:grid"
    />
  </section>
</template>
