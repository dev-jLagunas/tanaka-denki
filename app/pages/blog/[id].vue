<script setup>
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

const { getEntries } = useContentful();
const route = useRoute();

const data = await getEntries();
const id = route.params.id;

const post = data.items.find((item) => item.sys.id === id);

if (!post) {
  throw createError({
    statusCode: 404,
    statusMessage: "Blog post not found",
  });
}

const fields = post.fields;

// Convert rich text JSON into HTML
const htmlBody = documentToHtmlString(fields.blogBody);

// Extract image
let bodyImage = null;

if (fields.blogMainImage?.sys?.id) {
  const imgId = fields.blogMainImage.sys.id;
  const asset = data.includes.Asset.find((a) => a.sys.id === imgId);

  if (asset) {
    bodyImage = `https:${asset.fields.file.url}`;
  }
}
</script>

<template>
  <main class="mx-auto my-20 lg:w-full">
    <BaseSectionHeader
      bgColor="bg-brand-blue"
      title="ブログ記事"
      icon="mdi:blog"
      sectionId="blog-contents"
    />
    <section
      class="px-reg long-copy-text text-primary-dark space-y-sm pb-lg light-underline lg:grid lg:grid-cols-2 lg:items-center lg:gap-lg"
    >
      <img
        v-if="bodyImage"
        :src="bodyImage"
        class="w-auto rounded-md shadow-md my-8 mx-auto max-h-[600px] md:object-contain"
      />
      <div>
        <p class="text-sm text-slate-400 -mb-1">{{ fields.blogDate }}</p>

        <h1 class="mb-sm text-lg font-bold lg:text-xl">
          {{ fields.blogHeading }}
        </h1>
        <!-- Rich Text Content -->
        <div class="mb-reg prose max-w-none blog-body" v-html="htmlBody"></div>
        <NuxtLink to="/blog" class="red-cta-btn">前のページに戻る</NuxtLink>
      </div>
    </section>
  </main>
</template>
