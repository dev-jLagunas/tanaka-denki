<script setup></script>

<template>
  <nav>
    <!-- Mobile Side Panel -->
    <MobileSideNav class="hidden" />

    <!-- Mobile Header Panel -->
    <div class="md:hidden">
      <p>LOGO HERE</p>
      <p>HAMBURGER MENU</p>
      <Icon name="mdi:menu" size="24" />
    </div>

    <!-- Desktop Navbar -->
    <div class="hidden md:flex">
      <p>LOGO HERE</p>
      <ul>
        <li>home</li>
        <li>about</li>
        <li>services</li>
        <li>contact</li>
      </ul>
    </div>
  </nav>
</template>

<style scoped></style>
