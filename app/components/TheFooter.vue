<script setup lang="ts">
// Router
const route = useRoute();
</script>

<template>
  <div>
    <MobileFooter class="md:hidden" />
    <!-- Desktop Footer -->
    <footer class="desktop-footer hidden md:block">
      <div>
        <div class="flex-row-between w-full px-reg relative">
          <address class="not-italic space-y-1 w-1/2">
            <p>〒 924-0031</p>
            <p>石川県白山市村井東 2-4-3</p>
            <p>TEL：076-272-8492</p>
            <p>FAX：076-272-8493</p>
            <p>営業時間／8：30〜17：00</p>
          </address>
          <NuxtLink
            to="/admin-login"
            class="absolute bottom-1 right-12 lg:right-16"
            >ログイン</NuxtLink
          >
          <ul class="flex-row-evenly w-full">
            <li>
              <NuxtLink
                to="/"
                :class="
                  route.path === '/'
                    ? 'text-lightest-blue'
                    : 'text-primary-white'
                "
                class="hover-blue"
                >ホーム</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/company-info"
                :class="
                  route.path === '/company-info'
                    ? 'text-lightest-blue'
                    : 'text-primary-white'
                "
                class="hover-blue"
                >会社案内</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/hiring-info"
                :class="
                  route.path === '/hiring-info'
                    ? 'text-lightest-blue'
                    : 'text-primary-white'
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
                    ? 'text-lightest-blue'
                    : 'text-primary-white'
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
                    ? 'text-lightest-blue'
                    : 'text-primary-white'
                "
                class="hover-blue"
                >お問合せ</NuxtLink
              >
            </li>
          </ul>
        </div>

        <!-- Divider -->
        <div class="footer-divider">
          Copyright © 株式会社田中電気システムサービス All Rights Reserved.
        </div>
      </div>
    </footer>
  </div>
</template>
