<template>
  <div class="section posts-list">
    <div class="content p-9 mb-6 mx-auto">
      <BlogSection :blogs="blogs" />
    </div>
    <ButtonToTop />
  </div>
</template>

<script>
  import BlogSection from "~/components/Sections/BlogSection"
  import blogsEn from '~/contents/en/blogsEn.js'
  import ButtonToTop from "../components/ButtonToTop"
  export default {
   
    async asyncData({
      app
    }) {
      const blogs = app.i18n.locale === 'en' ? blogsEn : blogsEn
      async function asyncImport(blogName) {
        const wholeMD = await import(`~/contents/en/blog/${blogName}.md`)
        return wholeMD.attributes
      }
      return Promise.all(blogs.map(blog => asyncImport(blog)))
        .then((res) => {
          return {
            blogs: res
          }
        })
    },
    components: {
      BlogSection,ButtonToTop
    },

    transition: {
      name: 'slide-fade'
    },

    head() {
      return {
        title: 'Muhamad Zainal Arifin - Post',
        htmlAttrs: {
          lang: 'en',
        },
        script: [{
          src: 'https://identity.netlify.com/v1/netlify-identity-widget.js'
        }],
        meta: [{
            name: "author",
            content: "Muhamad Zainal Arifin"
          }, 
          {
            name: "description",
            property: "og:description",
            content: this.$t('indexPageHead.description'),
            hid: "description"
          },
          {
            property: "og:title",
            content: this.$t('indexPageHead.title')
          },
          {
            name: "content:description",
            content: this.$t('indexPageHead.description')
          },
        ]
      };
    },
  }
</script>