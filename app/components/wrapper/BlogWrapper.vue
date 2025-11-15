<script setup>
const { getEntries } = useContentful();
const data = await getEntries();

// Filter only this content type
const posts = data.items.filter(
  (item) => item.sys.contentType.sys.id === "denkiBlogPost"
);

// Sort by date (descending)
const sorted = posts.sort(
  (a, b) => new Date(b.fields.blogDate) - new Date(a.fields.blogDate)
);

// Pick only 3
const latestThree = sorted.slice(0, 3);

// Extract assets
const assets = data.includes.Asset;

// Format for BlogCard
const formatted = latestThree.map((post) => {
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
  <section>
    <BaseSectionHeader
      bgColor="bg-brand-blue"
      title="お知らせ"
      icon="mdi:blog"
      sectionId="blog-section"
      class="mt-20"
    />

    <div class="space-y-lg sm:two-grid-upsize md:space-y-0">
      <BaseBlogCard
        v-for="post in formatted"
        :key="post.id"
        :id="post.id"
        :image="post.image"
        :date="post.date"
        :title="post.title"
        :subtitle="post.subtitle"
      />
    </div>
    <div class="text-end mt-lg pr-lg">
      <NuxtLink
        to="/blog"
        class="border px-4 py-1 rounded-sm hover-shadow text-primary-dark items-end"
      >
        ブログ一覧を見る
      </NuxtLink>
    </div>
  </section>
</template>
