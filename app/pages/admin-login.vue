<script setup lang="ts">
const email = ref("");
const password = ref("");
const errorMessage = ref("");
const isLoading = ref(false);

const supabase = useSupabaseClient();

const handleLogin = async () => {
  errorMessage.value = "";
  isLoading.value = true;

  const { error } = await supabase.auth.signInWithPassword({
    email: email.value,
    password: password.value,
  });

  if (error) {
    errorMessage.value = "ログインに失敗しました。";
  } else {
    await navigateTo("/admin");
  }

  isLoading.value = false;
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
          <label class="block text-sm mb-1" for="email">メールアドレス</label>
          <input
            id="email"
            v-model="email"
            type="email"
            required
            class="w-full border rounded px-3 py-2 text-sm"
          />
        </div>

        <div>
          <label class="block text-sm mb-1" for="password">パスワード</label>
          <input
            id="password"
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
          class="w-full py-2 rounded text-primary-white bg-brand-blue disabled:opacity-60 text-sm"
        >
          {{ isLoading ? "ログイン中..." : "ログイン" }}
        </button>
      </form>
    </div>
  </main>
</template>
