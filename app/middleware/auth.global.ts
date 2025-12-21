export default defineNuxtRouteMiddleware((to) => {
  if (to.path === "/admin-login") return;

  const isAuthed = process.client
    ? localStorage.getItem("admin-auth") === "true"
    : false;

  if (to.path.startsWith("/admin") && !isAuthed) {
    return navigateTo("/admin-login");
  }
});
