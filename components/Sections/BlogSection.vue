<template>
  <section class="blog-section pb-8 pt-50 ">
    <SubContainer
      sectionTitle="Blog"
      SectionDescription=" Some of the tweets in the form of stories, experiences and knowledge that I can share "
    />
    <ul class="blogs">
      <blog-card v-for="blog in blogs" :key="blog.name" :blog="blog" />
    </ul>
  </section>
</template>
<script>
import BlogCard from "~/components/BlogCard.vue";
import SubContainer from "~/components/Sections/SubContainer";
export default {
  components: {
    BlogCard,
    SubContainer,
  },
  props: {
    blogs: {
      type: Array,
    },
  },
};
</script>
