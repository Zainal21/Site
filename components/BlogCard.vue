<template>
  <div>
    <div class="max-w-2xl mx-auto mt-5 bg-white overflow-hidden shadow-md rounded-lg">
      <div class="p-7">
        <div>
          <span class="text-blue-600 float-left text-xs font-medium uppercase">{{blog.year}}</span>
           <div class="flex">
              <span class="mx-auto flex font-semibold text-gray-600 text-xs">{{blog.time_read}}</span>
           </div>
          <nuxt-link :to="localePath({ name: 'blog-slug', params: { slug: blog.name }})"
            class="block text-gray-800 font-semibold text-2xl mt-3 hover:text-gray-600 hover:underline">{{blog.title}}
          </nuxt-link>
          <p class="text-sm text-gray-600 mt-3">{{blog.description}}</p>
          <span class="px-3 py-1 mt-5 mb-5 float-left bg-gray-800 text-sm text-white font-bold rounded hover:bg-gray-600">{{blog.category}}</span>
        </div>
        <div class="mt-4">
          <div class="flex items-center">
            <div class="float-right">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="js">
  export default {
    props: {
      blog: {
        type: Object
      }
    }
  }
</script>