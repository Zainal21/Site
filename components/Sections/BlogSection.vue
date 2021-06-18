<template>
  <section class="blog-section pb-8 pt-50 ">
    <SubContainer 
        sectionTitle="Blog" 
        SectionDescription="  Short story excerpts to fill my spare time about Coding, Work, Your life is everything I want "
      />
      <ul class="blogs">
        <blog-card 
            v-for="blog in blogs" 
            :key="blog.name" 
            :blog="blog" 
        />
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