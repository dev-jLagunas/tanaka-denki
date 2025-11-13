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
            size="30"
            :class="
              route.path === '/' ? 'text-lightest-blue' : 'text-primary-white'
            "
          />
          <span class="text-sm mt-1">ホーム</span>
        </NuxtLink>
      </li>

      <!-- Access: Google Maps -->
      <li>
        <a
          href="https://www.google.com/maps/place/%EF%BC%88%E6%A0%AA%EF%BC%89%E7%94%B0%E4%B8%AD%E9%9B%BB%E6%B0%97%E3%82%B7%E3%82%B9%E3%83%86%E3%83%A0%E3%82%B5%E3%83%BC%E3%83%93%E3%82%B9/@36.515993,136.560615,15z/data=!4m6!3m5!1s0x5ff84bd76a123423:0xd59ffc76a848421a!8m2!3d36.5159588!4d136.5606577!16s%2Fg%2F11fjzwq077?hl=ja&entry=ttu&g_ep=EgoyMDI1MTExMC4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          class="flex-col-center hover-animation"
        >
          <Icon name="mdi:map-marker" size="30" />
          <span class="text-sm mt-1">アクセス</span>
        </a>
      </li>

      <!-- Contact -->
      <li>
        <NuxtLink to="/contact" class="flex-col-center hover-animation">
          <Icon
            name="mdi:email-outline"
            size="30"
            :class="
              route.path === '/contact'
                ? 'text-lightest-blue'
                : 'text-primary-white'
            "
          />
          <span class="text-sm mt-1">お問合せ</span>
        </NuxtLink>
      </li>

      <!-- Phone -->
      <li>
        <a href="tel:0762728492" class="flex-col-center hover-animation">
          <Icon name="mdi:phone" size="30" />
          <span class="text-sm mt-1">電話</span>
        </a>
      </li>
    </ul>
  </footer>
</template>
