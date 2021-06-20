<template>
  <section class="blog-section pb-8 pt-50 ">
    <SubContainer 
        sectionTitle="Blog" 
        SectionDescription=" Talk about business or sharing about with me? can contact me on various platforms to discuss business with you "
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