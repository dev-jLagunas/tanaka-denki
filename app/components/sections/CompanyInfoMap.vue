<script setup></script>

<template>
  <section>
    <BaseSectionHeader
      bgColor="bg-lightest-blue"
      title="地図"
      icon="mdi:map"
      sectionId="google-maps"
      class="lg:hidden"
    />

    <div class="w-[90%] mx-auto rounded-sm shadow-md lg:w-full">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3206.5815018644585!2d136.55808277626008!3d36.51596308366977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5ff84bd76a123423%3A0xd59ffc76a848421a!2z77yI5qCq77yJ55Sw5Lit6Zu75rCX44K344K544OG44Og44K144O844OT44K5!5e0!3m2!1sen!2sjp!4v1762910135814!5m2!1sen!2sjp"
        width="100%"
        height="450"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
    <h3 class="long-copy-text text-xl my-reg text-center">
      〒924-0031石川県白山市村井東2-4-3
    </h3>
  </section>
</template>

<style scoped></style>
