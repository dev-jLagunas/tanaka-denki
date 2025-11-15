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
  <main class="max-w-3xl mx-auto my-20 px-4">
    <h1>{{ fields.blogHeading }}</h1>
    <p class="text-gray-400">{{ fields.blogSubheading }}</p>
    <p class="text-gray-500 text-sm">{{ fields.blogDate }}</p>

    <img v-if="bodyImage" :src="bodyImage" class="w-full rounded-md my-8" />

    <div class="prose max-w-none" v-html="htmlBody"></div>
  </main>
</template>
