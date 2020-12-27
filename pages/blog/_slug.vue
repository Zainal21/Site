<template>
  <section class="single-pos">
    <hr class="border border-gray-500">
    <div class="lg:container lg:mx-auto mt-4 md:container mx-1 py-20">
      <div class="container mx-auto">
        <div class="flex justify-between items-center">
          <nuxt-link to="/posts" class="px-2 py-1 bg-gray-200 text-black text-sm font-bold rounded hover:bg-gray-200">
            Back</nuxt-link>
          <p class="font-semibold text-center text-gray-100 text-sm">{{ year }}</p>
          <p class="px-2 py-1 text-black bg-gray-100 text-sm font-bold rounded hover:bg-gray-200">{{category}}</p>
        </div>
      </div>
      <div class="mt-2">
        <div class="blogSelected">
          <div class="intro">
            <div class="elevate-cover">
              <div class="elevate-cover__textOffset">
                <div class="elevate-cover__left">
                  <h1 class="elevate-cover__title text-4xl text-white font-bold hover:text-gray-100">
                    {{ title }}
                  </h1>
                  <p class="elevate-cover__description text-xl text-white">{{ description }}</p>
                </div>
              </div>
              <!-- <img :src="`/images/blog/${id}/_thumbnail.jpg`" alt="" width="100%"> -->
              <!-- <ImageResponsive :imageURL="'blog/' + id + '/_thumbnail.jpg'" v-if="!noMainImage" width="20%"
                  class="elevate-cover__img" :alt="'Blog picture'" />
                <component v-else class="elevate-cover__img" :is="extraComponentLoader" /> -->
            </div>
          </div>
          <div class="container small text-lg text-gray-600">
            <client-only>
              <DynamicMarkdown :render-func="renderFunc" :static-render-funcs="staticRenderFuncs"
                :extra-component="extraComponent" />
            </client-only>
          </div>
        </div>
      </div>
      <div class="flex justify-between items-center mt-8">
        <div class="container mx-auto">
          <nuxt-link to="/posts" class="px-2 py-1 float-left bg-gray-200 text-black text-sm font-bold rounded hover:bg-gray-200">
            Back</nuxt-link>
          <a href="https://github.com/Zainal21"
            class="px-2 py-1 bg-gray-200 text-black float-right text-sm font-bold rounded hover:bg-gray-200">Muhamad Zain</a>
        </div>
      </div>
    </div>
    <hr class="border border-gray-500">
  </section>

</template>

<script lang="js">
  import DynamicMarkdown from "~/components/Markdown/DynamicMarkdown.vue"
  const baseUrl = '#';

  export default {

    data: () => {
      return {
        baseUrl: baseUrl
      }
    },

    async asyncData({
      params,
      app
    }) {
      const fileContent = await import(`~/contents/en/blog/${params.slug}.md`)
      const attr = fileContent.attributes
      return {
        name: params.slug,
        title: attr.title,
        trans: attr.trans,
        year: attr.year,
        id: attr.id,
        category: attr.category,
        time_read: attr.time_read,
        cardAlt: attr.cardAlt,
        noMainImage: attr.noMainImage,
        description: attr.description,
        extraComponent: attr.extraComponent,
        renderFunc: `(${fileContent.vue.render})`,
        staticRenderFuncs: `[${fileContent.vue.staticRenderFns}]`,
        image: {
          main: attr.image && attr.image.main,
          og: attr.image && attr.image.og
        }
      }
    },

    nuxtI18n: {
      seo: false
    },

    components: {
      DynamicMarkdown
    },

    head() {
      return {
        title: this.pageTitle,
        htmlAttrs: {
          lang: this.$i18n.locale,
        },
        meta: [{
            name: "author",
            content: "Muhamad Zainal Arifin"
          },
          {
            name: "description",
            property: "og:description",
            content: this.description,
            hid: "description"
          },
          {
            property: "og:title",
            content: this.pageTitle
          },
          // {
          //   property: "og:image",
          //   content: this.ogImage
          // },
          // {
          //   name: "twitter:description",
          //   content: this.description
          // },
          // {
          //   name: "twitter:image",
          //   content: this.ogImage
          // }
        ],
        link: [
          this.hreflang
        ]
      };
    },

    transition: {
      name: 'slide-fade'
    },

    computed: {
      ogImage() {
        return `${process.env.baseUrl}/images/blog/${this.id}/_thumbnail.jpg`;
      },
      pageTitle() {
        return this.title + ' – Muhamad Zainal Arifin';
      },
      showLocales() {
        return this.$i18n.locales.filter(locale => locale.code !== this.$i18n.locale)
      },
      hreflang() {
        if (!this.trans) {
          return ''
        }
        return {
          hid: 'alternate-hreflang-' + this.showLocales[0].iso,
          rel: 'alternate',
          href: `${process.env.baseUrl + (this.showLocales[0].code === 'en' ? '' : '/en')}/blog/${this.trans}`,
          hreflang: this.showLocales[0].code
        }
      },

      extraComponentLoader() {
        if (!this.extraComponent) {
          return null
        }
        return () => import(`~/components/blog/${this.extraComponent}.vue`)
      }
    }
  }
</script>


<style lang="scss">
  .overflowhidden {
    overflow: hidden;
  }

  .blogSelected-horizontalImage {
    height: 56rem;
    background-size: contain;
    transition: all ease .35s;
    opacity: 0;

    &[lazy='loading'] {
      filter: blur(15px);
      background-repeat: no-repeat !important;
      background-size: contain !important;
    }

    &[lazy='loaded'] {
      opacity: 1;
      background-repeat: no-repeat !important;
      background-size: contain !important;
    }

    .intro {
      display: flex;
    }
  }

  .elevate-cover {
    display: flex;
    flex-direction: column;
    // min-height: 459px;

    &__img,
    &__textOffset {
      width: 100%;
    }

    &__left {
      max-width: 500px;
      width: 100%;
      padding: 2.4rem;
      margin-bottom: auto;
    }

    &__textOffset {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    &__title {
      font-size: 2rem;
      font-family: 'Tiempos Headline', Arial, sans-serif;
    }

    &__description {
      margin: 0;
      opacity: 0;
      animation: fadeinmove .5s ease;
      animation-delay: .5s;
      animation-fill-mode: forwards;
    }
  }

  .dynamicMarkdown {
    padding: 3.1rem 0;
    font-size: 16px;
    line-height: 1.7;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    color: #e0d5d5;
    background-color: rgb(22, 22, 29);
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);

    >*:not(.datagrid):not(.image-placeholder) {
      max-width: 700px;
      margin-left: auto;
      margin-right: auto;
      display: block;
    }


    h2 {
      padding-bottom: 3.2rem;
      padding-bottom: 2rem;
    }

    h3 {
      font-size: 2.2rem;
      padding-bottom: 2rem;
    }

    li {
      list-style-type: initial;
    }

    pre {
      box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.05);
      padding: 2.4rem;
      border-radius: 4px;
      background-color: #f6f8fa;
      overflow-x: scroll;
      display: block;
      margin-bottom: 5rem;

      code {
        background-color: #f6f8fa;
      }
    }

    code {
      background: #f3f4f4;
      border-radius: 4px;
      display: inline;
      color: #030303;
      font-size: 14px;
      padding: .2em .4em;
    }
  }
</style>