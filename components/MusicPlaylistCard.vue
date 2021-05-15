<template>
  <div class="w-full max-w-xs text-center">
    <iframe width="560" height="315" class="object-cover object-center w-full h-48 mx-auto rounded-lg"
     :src="source" title="YouTube video player" frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen></iframe>
    <div class="mt-2">
      <span class="text-lg font-medium text-gray-200 dark:text-gray-200">{{title}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name : 'MusicPlaylistCard',
  props :['source', 'title']
}
</script>