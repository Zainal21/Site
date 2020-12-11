<template>
  <section class="bg-gray-800 pb-8 pt-50">
    <div class="container mx-auto px-6 py-8">
    <section class="bg-gray-800 lg:py-12 lg:flex lg:justify-center">
        <div class="bg-gray-800 text-white lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg lg:rounded-lg">
            <div class="lg:w-1/2">
                <div class="h-64 bg-cover lg:rounded-lg lg:h-full" style="background-image:url('https://images.unsplash.com/photo-1497493292307-31c376b6e479?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80')"></div>
            </div>

            <div class="py-12 px-6 max-w-xl lg:max-w-5xl lg:w-1/2 ">
                <h2 class="text-2xl text-gray-100 font-bold md:text-3xl">Build Your New <span class="text-indigo-600">Idea</span></h2>
                <p class="mt-4 text-gray-100">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem modi reprehenderit vitae exercitationem aliquid dolores ullam temporibus enim expedita aperiam mollitia iure consectetur dicta tenetur, porro consequuntur saepe accusantium consequatur.</p>
            </div>
        </div>
    </section> 
      <div class="blogs__top">
        <div class="lg:w-1/7 mb-8">
          <h2 class="text-gray-100 text-3xl lg:text-center font-bold mb-8  mt-10">Recent Post</h2>
        </div>
      </div>
      <ul class="blogs">
        <blog-card v-for="blog in blogs" :key="blog.name" :blog="blog" />
      </ul>
    </div>
  </section>
</template>
<script>
  import BlogCard from "~/components/BlogCard.vue";

  export default {
    components: {
      BlogCard
    },
    props: {
      blogs: {
        type: Array
      }
    }
  }
</script>
