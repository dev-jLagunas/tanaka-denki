<script setup lang="ts">
// Props and Emits
const props = defineProps({ open: Boolean });
const emit = defineEmits(["close"]);

// Router
const route = useRoute();
const router = useRouter();
// Methods
function go(path: string) {
  emit("close");
  router.push(path);
}
</script>

<template>
  <Transition
    enter-active-class="slide-in-left"
    leave-active-class="slide-out-left"
  >
    <div v-if="open" class="mobile-sidebar slide-in-left flex-col-center">
      <img src="/images/logo-white.png" class="w-auto h-32" />

      <ul class="mobile-sidebar-copy space-y-6">
        <li>
          <button
            class="hover-animation"
            @click="go('/')"
            to="/"
            :class="
              route.path === '/' ? 'text-brand-red' : 'text-primary-white'
            "
          >
            ホーム
          </button>
          <ul class="mt-sm nested">
            <li>
              <button class="hover-animation" @click="go('/#main-work-info')">
                事業案内
              </button>
            </li>
            <li>
              <button class="hover-animation" @click="go('/#accomplishments')">
                施工実績
              </button>
            </li>
          </ul>
        </li>

        <li>
          <button
            class="hover-animation"
            @click="go('/company-info')"
            :class="
              route.path === '/company-info'
                ? 'text-brand-red'
                : 'text-primary-white'
            "
          >
            会社案内
          </button>
          <ul class="mt-sm nested">
            <li>
              <button
                class="hover-animation"
                @click="go('/company-info#timeline-nav-mobile')"
              >
                沿革
              </button>
            </li>
            <li>
              <button
                class="hover-animation"
                @click="go('/company-info#certifications-mobile')"
              >
                資格
              </button>
            </li>
          </ul>
        </li>

        <li>
          <button
            class="hover-animation"
            @click="go('/hiring-info')"
            :class="
              route.path === '/hiring-info'
                ? 'text-brand-red'
                : 'text-primary-white'
            "
          >
            採用情報
          </button>
        </li>
        <li>
          <button
            class="hover-animation"
            @click="go('/blog')"
            :class="
              route.path === '/blog' ? 'text-brand-red' : 'text-primary-white'
            "
          >
            お知らせ
          </button>
        </li>
        <li>
          <button
            class="hover-animation"
            @click="go('/contact')"
            :class="
              route.path === '/contact'
                ? 'text-brand-red'
                : 'text-primary-white'
            "
          >
            お問合せ
          </button>
        </li>
      </ul>

      <button class="mt-10 mx-auto hover-animation" @click="emit('close')">
        <Icon name="mdi:close" size="45" class="text-brand-red" />
      </button>
    </div>
  </Transition>
</template>

<style scoped>
@keyframes slide-in-left {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
}

@keyframes slide-out-left {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}

.slide-in-left {
  animation: slide-in-left 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

.slide-out-left {
  animation: slide-out-left 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

.nested {
  position: relative;
  padding-left: 1.25rem;
}

.nested::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0.25rem;
  bottom: 0;
  width: 1px;
  background: #f5f5f0;
  opacity: 0.2;
}

.nested > li {
  position: relative;
  padding-left: 0.75rem;
}

.nested > li::before {
  content: "";
  position: absolute;
  left: -1.25rem;
  top: 0.8rem;
  width: 1.25rem;
  height: 1px;
  background: #f5f5f0;
  opacity: 0.2;
}
</style>
