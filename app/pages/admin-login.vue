<script setup lang="ts">
const email = ref("");
const password = ref("");
const errorMessage = ref("");
const isLoading = ref(false);

const config = useRuntimeConfig();

const handleLogin = async () => {
  errorMessage.value = "";
  isLoading.value = true;

  const allowedEmail = config.public.adminEmail;
  const allowedPassword = config.public.adminPassword;

  if (
    email.value.trim() === String(allowedEmail).trim() &&
    password.value.trim() === String(allowedPassword).trim()
  ) {
    localStorage.setItem("admin-auth", "true");
    await navigateTo("/admin");
  } else {
    errorMessage.value = "ログインに失敗しました。";
  }
  isLoading.value = false;

  console.log(
    `"${email.value}"`,
    `"${password.value}"`,
    `"${allowedEmail}"`,
    `"${allowedPassword}"`
  );
};
</script>

<template>
  <main class="min-h-screen flex items-center justify-center bg-primary-white">
    <div class="max-w-md bg-white shadow-md rounded-md p-6 w-[90%] mx-auto">
      <h1 class="text-xl text-primary-dark font-semibold mb-4 text-center">
        管理者ログイン
      </h1>

      <form @submit.prevent="handleLogin" class="space-y-4 text-primary-dark">
        <div>
          <label class="block text-sm mb-1">メールアドレス</label>
          <input
            v-model="email"
            type="email"
            required
            class="w-full border rounded px-3 py-2 text-sm"
          />
        </div>

        <div>
          <label class="block text-sm mb-1">パスワード</label>
          <input
            v-model="password"
            type="password"
            required
            class="w-full border rounded px-3 py-2 text-sm"
          />
        </div>

        <p v-if="errorMessage" class="text-sm text-red-600">
          {{ errorMessage }}
        </p>

        <button
          type="submit"
          :disabled="isLoading"
          class="w-full py-2 rounded bg-brand-blue text-primary-white text-sm disabled:opacity-60"
        >
          {{ isLoading ? "ログイン中..." : "ログイン" }}
        </button>
      </form>
    </div>
  </main>
</template>
