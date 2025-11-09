<script setup lang="ts">
// Router
const route = useRoute();
</script>

<template>
  <footer class="mobile-footer z-10">
    <ul class="flex-row-around">
      <!-- Home -->
      <li>
        <NuxtLink to="/" class="flex-col-center hover-animation">
          <Icon
            name="mdi:home"
            size="40"
            :class="
              route.path === '/' ? 'text-lightest-blue' : 'text-neutral-light'
            "
          />
          <span class="text-sm mt-1">ホーム</span>
        </NuxtLink>
      </li>

      <!-- Access: Google Maps -->
      <li>
        <a
          href="https://www.google.com/maps/place/"
          target="_blank"
          rel="noopener noreferrer"
          class="flex-col-center hover-animation"
        >
          <Icon name="mdi:map-marker" size="40" />
          <span class="text-sm mt-1">アクセス</span>
        </a>
      </li>

      <!-- Contact -->
      <li>
        <NuxtLink to="/contact" class="flex-col-center hover-animation">
          <Icon
            name="mdi:email-outline"
            size="40"
            :class="
              route.path === '/contact'
                ? 'text-lightest-blue'
                : 'text-neutral-light'
            "
          />
          <span class="text-sm mt-1">お問合せ</span>
        </NuxtLink>
      </li>

      <!-- Phone -->
      <li>
        <a href="tel:0000000000" class="flex-col-center hover-animation">
          <Icon name="mdi:phone" size="40" />
          <span class="text-sm mt-1">電話</span>
        </a>
      </li>
    </ul>
  </footer>
</template>
