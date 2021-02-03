<template>
  <div class="section posts-list">
    <div class="content">
      <BlogSection :blogs="blogs" />
    </div>
  </div>
</template>

<script>
  import BlogSection from "~/components/Sections/BlogSection"

  import blogsEn from '~/contents/en/blogsEn.js'

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
      BlogSection
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
            name: "twitter:description",
            content: this.$t('indexPageHead.description')
          },
        ]
      };
    },

    computed: {
      ogImage: function () {
        return;
      }
    }
  }
</script>