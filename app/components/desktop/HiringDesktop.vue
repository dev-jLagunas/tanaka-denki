<script setup lang="tx"></script>

<template>
  <main>
    <HiringHeader />
    <BaseSectionHeader
      bgColor="bg-lightest-blue"
      title="私たちが求める人物像"
      icon="mdi:person"
      sectionId="hiring-points"
      topMargin="mt-10 lg:mt-20"
    />
    <HiringBody />
    <BaseSectionHeader
      bgColor="bg-lightest-blue"
      title="募集要項"
      icon="mdi:work"
      sectionId="hiring-description"
      topMargin="mt-10"
      class=""
    />
    <HiringFooter />
  </main>
</template>
