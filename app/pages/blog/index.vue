<script setup>
const { getEntries } = useContentful();
const data = await getEntries();

// Filter for your content type
const posts = data.items.filter(
  (item) => item.sys.contentType.sys.id === "denkiBlogPost"
);

// Extract assets (images)
const assets = data.includes.Asset;

// Map into clean objects for the cards
const formatted = posts.map((post) => {
  const imgId = post.fields.blogCardImage?.sys?.id;
  const asset = assets.find((a) => a.sys.id === imgId);

  return {
    id: post.sys.id,
    title: post.fields.blogHeading,
    subtitle: post.fields.blogSubheading,
    date: post.fields.blogDate,
    image: asset ? `https:${asset.fields.file.url}` : "/images/default.jpg",
  };
});
</script>

<template>
  <main class="my-20">
    <BaseSectionHeader
      bgColor="bg-brand-blue"
      title="お知らせ"
      icon="mdi:info"
      sectionId="company-information"
    />
    <section
      class="space-y-lg sm:two-grid-center sm:gap-reg lg:grid-cols-3 sm:space-y-0"
    >
      <BaseBlogCard
        v-for="post in formatted"
        :key="post.id"
        :id="post.id"
        :image="post.image"
        :date="post.date"
        :title="post.title"
        :subtitle="post.subtitle"
      />
    </section>
    <BusinessInfo />
  </main>
</template>
