<script setup>
// Reactive State
const open = ref(false);

// Router
const route = useRoute();
</script>

<template>
  <nav>
    <!-- Mobile Side Panel -->
    <MobileSideNav :open="open" @close="open = false" />

    <!-- Mobile Header Panel -->
    <div class="flex-row-between mt-reg px-reg md:hidden">
      <NuxtLink to="/">
        <img
          src="/images/logo-text.png"
          alt="company logo"
          class="w-auto max-w-[80%] xs:max-w-[50%]"
        />
      </NuxtLink>

      <button class="hover-animation" @click="open = !open">
        <Icon name="mdi:menu" size="55" class="text-brand-blue" />
      </button>
    </div>

    <!-- Desktop Navbar -->
    <div class="hidden md:flex md:px-reg md:mt-lg lg:text-lg">
      <NuxtLink to="/">
        <img
          src="/images/logo-text.png"
          alt="company logo"
          class="w-auto max-w-xs"
        />
      </NuxtLink>
      <ul class="flex-row-evenly font-sans w-full">
        <li>
          <NuxtLink
            to="/"
            :class="
              route.path === '/'
                ? 'text-brand-blue font-semibold'
                : 'text-neutral-dark'
            "
            >ホーム</NuxtLink
          >
        </li>
        <li>
          <NuxtLink
            to="/company-info"
            :class="
              route.path === '/company-info'
                ? 'text-brand-blue font-semibold'
                : 'text-neutral-dark'
            "
            >会社案内</NuxtLink
          >
        </li>
        <li>
          <NuxtLink
            to="/hiring-info"
            :class="
              route.path === '/hiring-info'
                ? 'text-brand-blue font-semibold'
                : 'text-neutral-dark'
            "
            >採用情報</NuxtLink
          >
        </li>
        <li>
          <NuxtLink
            to="/blog"
            :class="
              route.path === '/blog'
                ? 'text-brand-blue font-semibold'
                : 'text-neutral-dark'
            "
            >お知らせ</NuxtLink
          >
        </li>
        <li>
          <NuxtLink
            to="/contact"
            :class="
              route.path === '/contact'
                ? 'text-brand-blue font-semibold'
                : 'text-neutral-dark'
            "
            >お問合せ</NuxtLink
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped></style>
