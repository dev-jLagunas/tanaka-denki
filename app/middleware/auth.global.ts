export default defineNuxtRouteMiddleware((to) => {
  const user = useSupabaseUser();

  if (to.path === "/admin-login") return;

  if (to.path.startsWith("/admin") && !user.value) {
    return navigateTo("/admin-login");
  }
});
