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
let extraImg1 = null;

function getAssetUrl(id) {
  const asset = data.includes.Asset.find((a) => a.sys.id === id);
  return asset ? `https:${asset.fields.file.url}` : null;
}

bodyImage = getAssetUrl(fields.blogMainImage?.sys?.id);
extraImg1 = getAssetUrl(fields.blogExtraImg1?.sys?.id);
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
      class="px-reg long-copy-text text-primary-dark space-y-sm pb-lg light-underline"
    >
      <img
        v-if="bodyImage"
        :src="bodyImage"
        class="w-auto rounded-md shadow-md my-8 mx-auto max-h-[500px] md:object-contain"
      />
      <div class="w-[75%] mx-auto">
        <p class="text-sm text-slate-400 -mb-1">{{ fields.blogDate }}</p>

        <h1 class="mb-sm text-lg font-bold lg:text-xl">
          {{ fields.blogHeading }}
        </h1>
        <!-- Rich Text Content -->
        <div class="mb-reg prose max-w-none blog-body" v-html="htmlBody"></div>
        <img
          v-if="extraImg1"
          :src="extraImg1"
          class="max-h-[400px] rounded-md shadow-md col-span-2 mx-auto h-1/2 my-lg"
        />
        <NuxtLink to="/blog" class="red-cta-btn">前のページに戻る</NuxtLink>
      </div>
    </section>
  </main>
</template>
