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
    <div class="mobile-navbar-header">
      <NuxtLink to="/">
        <img
          src="/images/logo-text.png"
          alt="company logo"
          class="w-[95%] h-auto max-w-[325px]"
        />
      </NuxtLink>

      <button @click="open = !open" class="relative hover:opacity-90">
        <div class="center" :class="{ open }">
          <div></div>
        </div>
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
                : 'text-primary-dark'
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
                : 'text-primary-dark'
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
                : 'text-primary-dark'
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
                : 'text-primary-dark'
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
                : 'text-primary-dark'
            "
            >お問合せ</NuxtLink
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
.center {
  width: 50px;
  cursor: pointer;
}

.center::before,
.center::after,
.center div {
  background: #004898;
  content: "";
  display: block;
  height: 6px;
  border-radius: 3px;
  margin: 7px 0;
  transition: 0.4s;
}

/* Remove hover logic entirely — now controlled by Vue */
.center.open::before {
  transform: translateY(12px) rotate(135deg);
  background: #ea5350; /* red when open */
}

.center.open::after {
  transform: translateY(-12px) rotate(-135deg);
  background: #ea5350;
}

.center.open div {
  transform: scale(0);
}
</style>
