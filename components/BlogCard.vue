<template>
  <div>
    <div class="max-w-2xl mx-auto mt-5 bg-transparant overflow-hidden  rounded-lg">
      <div class="p-7">
        <div>
          <span class="text-blue-100 float-left text-xs font-medium uppercase">{{blog.year}}</span>
           <div class="flex justify-center">
            <span class="font-medium ml-auto text-gray-100 text-xs">{{blog.time_read}}</span>
           </div>
          <nuxt-link :to="localePath({ name: 'blog-slug', params: { slug: blog.name }})"
            class="block text-gray-100 font-semibold text-2xl mt-3 hover:text-gray-300">{{blog.title}}
          </nuxt-link>
          <p class="text-sm text-gray-100 mt-3">{{blog.description}}</p>
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