<script setup lang="ts">
// Router
const route = useRoute();
</script>

<template>
  <div>
    <MobileFooter class="md:hidden" />
    <footer class="hidden desktop-footer mx-auto">
      <div>
        <div class="flex-row-between w-full px-reg">
          <div class="space-y-1">
            <p>〒 924-0031　石川県白山市村井東 2-4-3</p>
            <p>TEL：076-272-8492</p>
            <p>FAX：076-272-8493</p>
            <p>営業時間／8：30〜17：00</p>
          </div>
          <ul class="flex-row-evenly w-full">
            <li class="hover-animation">
              <NuxtLink
                to="/"
                :class="
                  route.path === '/'
                    ? 'text-lightest-blue'
                    : 'text-neutral-light'
                "
                >ホーム</NuxtLink
              >
            </li>
            <li class="hover-animation">
              <NuxtLink
                to="/company-info"
                :class="
                  route.path === '/company-info'
                    ? 'text-lightest-blue'
                    : 'text-neutral-light'
                "
                >会社案内</NuxtLink
              >
            </li>
            <li class="hover-animation">
              <NuxtLink
                to="/hiring-info"
                :class="
                  route.path === '/hiring-info'
                    ? 'text-lightest-blue'
                    : 'text-neutral-light'
                "
                >採用情報</NuxtLink
              >
            </li>
            <li class="hover-animation">
              <NuxtLink
                to="/blog"
                :class="
                  route.path === '/blog'
                    ? 'text-lightest-blue'
                    : 'text-neutral-light'
                "
                >お知らせ</NuxtLink
              >
            </li>
            <li class="hover-animation">
              <NuxtLink
                to="/contact"
                :class="
                  route.path === '/contact'
                    ? 'text-lightest-blue'
                    : 'text-neutral-light'
                "
                >お問合せ</NuxtLink
              >
            </li>
          </ul>
        </div>

        <!-- Divider -->
        <div
          class="border-t border-white/20 mt-lg pt-reg text-center text-xs tracking-wide opacity-80"
        >
          Copyright © 株式会社田中電気システムサービス All Rights Reserved.
        </div>
      </div>
    </footer>
  </div>
</template>
