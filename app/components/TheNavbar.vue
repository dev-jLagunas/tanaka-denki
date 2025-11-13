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
      <ul class="flex-row-evenly w-full">
        <li class="group relative">
          <NuxtLink
            to="/"
            :class="
              route.path === '/'
                ? 'text-brand-blue font-semibold'
                : 'text-primary-dark'
            "
            class="pb-2 hover-blue"
          >
            ホーム
          </NuxtLink>

          <!-- Hover Dropdown -->
          <div class="nav-dropdown hidden group-hover:block hover-dropdown">
            <NuxtLink
              to="/#main-work-info"
              class="block px-4 py-1 text-sm hover:bg-primary-white hover:text-brand-blue"
            >
              事業案内
            </NuxtLink>
            <NuxtLink
              to="/#accomplishments"
              class="block px-4 py-1 text-sm hover:bg-primary-white hover:text-brand-blue"
            >
              施工実績
            </NuxtLink>
          </div>
        </li>

        <li class="group relative">
          <NuxtLink
            to="/company-info"
            :class="
              route.path === '/company-info'
                ? 'text-brand-blue font-semibold'
                : 'text-primary-dark'
            "
            class="pb-2 hover-blue"
          >
            会社案内
          </NuxtLink>

          <!-- Hover Dropdown -->
          <div class="nav-dropdown hidden group-hover:block hover-dropdown">
            <NuxtLink
              to="/company-info#timeline-nav"
              class="block px-4 py-1 text-sm hover:bg-primary-white hover:text-brand-blue"
            >
              沿革
            </NuxtLink>
            <NuxtLink
              to="/company-info#certifications-nav"
              class="block px-4 py-1 text-sm hover:bg-primary-white hover:text-brand-blue"
            >
              資格
            </NuxtLink>
          </div>
        </li>

        <li>
          <NuxtLink
            to="/hiring-info"
            :class="
              route.path === '/hiring-info'
                ? 'text-brand-blue font-semibold'
                : 'text-primary-dark'
            "
            class="hover-blue"
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
            class="hover-blue"
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
            class="hover-blue"
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

.center.open::before {
  transform: translateY(12px) rotate(135deg);
  background: #ea5350;
}

.center.open::after {
  transform: translateY(-12px) rotate(-135deg);
  background: #ea5350;
}

.center.open div {
  transform: scale(0);
}

.nav-dropdown {
  position: absolute;
}

/* Caret up pointer */
.nav-dropdown::before {
  content: "";
  position: absolute;
  top: -6px;
  left: 12px;
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-bottom: 6px solid #004898;
}
</style>
