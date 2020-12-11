<template>
<div>
    <div class="max-w-2xl mx-auto bg-white overflow-hidden shadow-md rounded-lg">
       <!-- <img class="w-full h-64 object-cover" :src="`/images/blog/${blog.id}/_thumbnail.jpg`" alt="Article"> -->
       <!-- <img class="w-full h-64 object-cover" :src="`http://localhost:3000/images/blog/perkenalan/_thumbnail.jpg`" alt="Article"> -->
        <div class="p-6">
            <div>
                <span class="text-blue-600 text-xs font-medium uppercase">{{blog.year}}</span>
                <nuxt-link :to="localePath({ name: 'blog-slug', params: { slug: blog.name }})" class="block text-gray-800 font-semibold text-2xl mt-2 hover:text-gray-600 hover:underline">{{blog.title}}</nuxt-link>
                <p class="text-sm text-gray-600 mt-2">{{blog.description}}</p>
            </div>

            <div class="mt-4">
                <div class="flex items-center">
                    <div class="flex items-center">
                        <!-- <img class="h-10 object-cover rounded-full" src="https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60" alt="Avatar"> -->
                        <p  class="mx-2 text-gray-700 font-semibold">Muhamad Zainal Arifin</p>
                    </div>
                    <span class="mx-1 text-gray-600 text-xs">5 Minuted Read</span>
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

