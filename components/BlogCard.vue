<template>
<div>
  
    <div class="max-w-2xl mx-auto bg-white overflow-hidden shadow-md rounded-lg">
       <ImageResponsive
        :imageURL="`blog/${blog.id}/_thumbnail.jpg`"
        :classes="'cardThumbnail'"
        :width="'952'"
        :height="'509'"
        :alt="blog.cardAlt" />

        <div class="p-6">
            <div>
                <span class="text-blue-600 text-xs font-medium uppercase">Product</span>
                <nuxt-link :to="localePath({ name: 'blog-slug', params: { slug: blog.name }})" class="block text-gray-800 font-semibold text-2xl mt-2 hover:text-gray-600 hover:underline">I Built A Successful Blog In One Year</nuxt-link>
                <p class="text-sm text-gray-600 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie parturient et sem ipsum volutpat vel. Natoque sem et aliquam mauris egestas quam volutpat viverra. In pretium nec senectus erat. Et malesuada lobortis.</p>
            </div>

            <div class="mt-4">
                <div class="flex items-center">
                    <div class="flex items-center">
                        <img class="h-10 object-cover rounded-full" src="https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60" alt="Avatar">
                        <p  class="mx-2 text-gray-700 font-semibold">Muhamad Zainal Arifin</p>
                    </div>
                    <span class="mx-1 text-gray-600 text-xs">2 Minuted Read</span>
                </div>
            </div>
        </div>
    </div>
    <!-- <div class="max-w-2xl mx-auto px-8 py-4 bg-white rounded-lg shadow-md">
        <div class="flex justify-between items-center">
            <span class="font-light text-gray-600 text-sm">Mar 10, 2019</span>
            <p class="px-3 py-1 bg-gray-600 text-gray-100 text-sm font-bold rounded hover:bg-gray-500">Design</p>
        </div>

        <div class="mt-2">
            <nuxt-link  :to="localePath({ name: 'blog-slug', params: { slug: blog.name }})" class="text-2xl text-gray-700 font-bold hover:text-gray-600 hover:underline">A {{ blog.title }}</nuxt-link>
            <p class="mt-2 text-gray-600">{{ blog.description }}</p>
        </div>
        
        <div class="flex justify-between items-center mt-4">
            <nuxt-link  :to="localePath({ name: 'blog-slug', params: { slug: blog.name }})" class="text-blue-600 hover:underline">Read more</nuxt-link>

            <div class="flex items-center">
                <img class="mx-4 w-10 h-10 object-cover rounded-full hidden sm:block" src="https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=40&q=80" alt="avatar">
                <a class="text-gray-700 font-bold cursor-pointer">Khatab wedaa</a>
            </div>
        </div>
    </div> -->
</div>
  <!-- <li class="blog">
    <nuxt-link 
      :to="localePath({ name: 'blog-slug', params: { slug: blog.name }})"
    >
      <ImageResponsive
        :imageURL="`blog/${blog.id}/_thumbnail.jpg`"
        :classes="'cardThumbnail'"
        :width="'952'"
        :height="'509'"
        :alt="blog.cardAlt" />
      <h3 class="blog__title">
        {{ blog.title }}
      </h3>
      <p class="blog__description">
        {{ blog.description }}
      </p>
    </nuxt-link>

  </li> -->
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

