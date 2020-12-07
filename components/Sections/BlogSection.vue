<template>
  <section class="bg-gray-800 pb-8 pt-8">
    <div class="container mx-auto px-6 py-8">
      <div class="blogs__top">
        <div class="lg:w-1/7 mb-8">
          <h2 class="text-gray-100 text-3xl lg:text-center font-bold mb-8  mt-10">Recent Post</h2>
        </div>
      </div>
      <ul class="blogs ">
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

// <style lang="scss">
  // .blogs {
  //   margin: 0;

  //   @media (min-width: $screen-sm){
  //     grid-template-columns: 1fr 1fr;
  //     grid-gap: 50px;
  //     display: grid;
  //   }

  //   &__top {
  //     display: flex;
  //     justify-content: space-between;
  //     align-items: flex-start;
  //     margin-top: 4rem;
  //   }
  // }
  // 
</style>