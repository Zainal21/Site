<template>
  <section class="blog-section pb-8 pt-50">
    <SubContainer sectionTitle="Blog" SectionDescription=" ' Short story excerpts to fill my spare time about Coding, Work, Your life is everything I want' "/>
      <ul class="blogs">
          <h2 class="text-gray-100 text-3xl lg:text-center font-bold mb-8  mt-10">- Content Not Found -</h2>
        <blog-card v-for="blog in blogs" :key="blog.name" :blog="blog" />
      </ul>
  </section>
</template>
<script>
  import BlogCard from "~/components/BlogCard.vue";
  import SubContainer from "~/components/Sections/SubContainer";
  export default {
    components: {
      BlogCard,SubContainer
    },
    props: {
      blogs: {
        type: Array
      }
    }
  }
</script>