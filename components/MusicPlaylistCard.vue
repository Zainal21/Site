<template>
  <div class="w-full max-w-xs hover:shadow-lg py-3 hover:border-1bg-gray-800 hover:bg-gray-700 rounded-lg text-center">
    <iframe width="560" height="315" class="object-cover object-center w-full h-48 mx-auto rounded-lg"
     :src="source" title="YouTube video player" frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen v-lazy-load></iframe>
    <div class="mt-2">
      <span class="text-md font-normal px-3 py-3 text-gray-300  dark:text-gray-200">{{title}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name : 'MusicPlaylistCard',
  props :['source', 'title']
}
</script>