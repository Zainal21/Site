<template>
  <section class="single-pos">
    <div class="lg:container lg:mx-auto mt-4 md:container mx-2 py-18">
      <div class="container mx-auto">
        <div class="flex justify-between items-center mt-10">
          <nuxt-link
            to="/posts"
            class="px-2 py-1 bg-gray-200 text-black text-sm font-bold rounded hover:bg-gray-200"
          >
            Back</nuxt-link
          >
          <p class="font-semibold text-center text-gray-100 text-sm">
            {{ year }}
          </p>
          <p
            class="px-2 py-1 text-black bg-gray-100 text-sm font-bold rounded hover:bg-gray-200"
          >
            {{ category }}
          </p>
        </div>
      </div>
      <div class="mt-3">
        <div class="blogSelected">
          <div class="intro">
            <div class="content-cover">
              <div class="content-cover__textOffset">
                <div class="content-cover__left">
                  <h1
                    class="content-cover__title text-4xl text-white font-bold hover:text-gray-100"
                  >
                    {{ title }}
                  </h1>
                  <p class="content-cover__description text-xl text-white">
                    {{ description }}
                  </p>
                </div>
              </div>
              <div class="container mx-auto">
                <img
                  v-lazy-load
                  :src="`/images/blog/${id}/_thumbnail.jpg`"
                  alt=""
                  width="100%"
                />
              </div>
            </div>
          </div>
          <div class="container small text-lg text-gray-600">
            <client-only>
              <DynamicMarkdown
                :render-func="renderFunc"
                :static-render-funcs="staticRenderFuncs"
                :extra-component="extraComponent"
              />
            </client-only>
          </div>
        </div>
      </div>
    </div>
    <div class="container mx-auto mb-10">
      <div class="comment">
        <Disqus />
      </div>
    </div>
    <ButtonToTop />
  </section>
</template>
<script>
import DynamicMarkdown from "~/components/Markdown/DynamicMarkdown.vue";
import ButtonToTop from "~/components/ButtonToTop";
const baseUrl = "#";
export default {
  data: () => {
    return {
      baseUrl: baseUrl,
    };
  },
  async asyncData({ params, app }) {
    const fileContent = await import(`~/contents/en/blog/${params.slug}.md`);
    const attr = fileContent.attributes;
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
    };
  },

  nuxtI18n: {
    seo: false,
  },

  components: {
    DynamicMarkdown,
    ButtonToTop,
  },

  head() {
    return {
      title: this.pageTitle,
      htmlAttrs: {
        lang: this.$i18n.locale,
      },
      meta: [
        {
          name: "author",
          content: "Muhamad Zainal Arifin",
        },
        {
          name: "description",
          property: "og:description",
          content: this.description,
          hid: "description",
        },
        {
          property: "og:title",
          content: this.pageTitle,
        },
        {
          name: "msapplication-TileColor",
          content: "#ffffff",
        },
        {
          name: "description",
          content: "Personal Website Muhamad Zainal Arifin ,  ",
        },
        {
          name: "keywords",
          content: "penulisdudukdev",
        },
        {
          name: "subject",
          content: "Personal of Muhamad Zainal Arifin",
        },
        {
          name: "identifier-URL",
          content: "https://muhammadzaindev.vercel.app/",
        },
        {
          name: "keywords",
          content:
            "Zainal21, Zainal, Muhamad Zainal Arifin, Zainal RPL, Muhamad Zain, Riana Eka Fidriyani, Riana",
        },
        {
          name: "designer",
          content: "Muhamad Zainal Arifin",
        },
        {
          name: "developer",
          content: "Muhamad Zainal Arifin",
        },
      ],
      link: [this.hreflang],
    };
  },

  transition: {
    name: "slide-fade",
  },

  computed: {
    ogImage() {
      return `${process.env.baseUrl}/images/blog/${this.id}/_thumbnail.jpg`;
    },
    pageTitle() {
      return this.title + " – Muhamad Zainal Arifin";
    },
    showLocales() {
      return this.$i18n.locales.filter(
        (locale) => locale.code !== this.$i18n.locale
      );
    },
    hreflang() {
      if (!this.trans) {
        return "";
      }
      return {
        hid: "alternate-hreflang-" + this.showLocales[0].iso,
        rel: "alternate",
        href: `${process.env.baseUrl +
          (this.showLocales[0].code === "en" ? "" : "/en")}/blog/${this.trans}`,
        hreflang: this.showLocales[0].code,
      };
    },
    extraComponentLoader() {
      if (!this.extraComponent) {
        return null;
      }
      return () => import(`~/components/blog/${this.extraComponent}.vue`);
    },
  },
};
</script>

<style lang="scss">
img {
  border-radius: 6px;
  width: 100%;
}

.overflowhidden {
  overflow: hidden;
}

.blogSelected-horizontalImage {
  height: 56rem;
  background-size: contain;
  transition: all ease 0.35s;
  opacity: 0;

  &[lazy="loading"] {
    filter: blur(15px);
    background-repeat: no-repeat !important;
    background-size: contain !important;
  }

  &[lazy="loaded"] {
    opacity: 1;
    background-repeat: no-repeat !important;
    background-size: contain !important;
  }

  .intro {
    display: flex;
  }
}

.content-cover {
  display: flex;
  flex-direction: column;

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
  }

  &__description {
    margin: 0;
    opacity: 0;
    animation: fadeinmove 0.5s ease;
    animation-delay: 0.5s;
    animation-fill-mode: forwards;
  }
}

.dynamicMarkdown {
  font-size: 1.125rem;
  line-height: 1.6;
  color: rgb(229, 231, 235);
  // background-color: rgb(22, 22, 29);

  > *:not(.datagrid):not(.image-placeholder) {
    margin-left: auto;
    margin-right: auto;
    display: block;
  }

  h2 {
    font-weight: 600;
    margin: 0.8rem 0;
    font-size: inherit;
  }

  h3 {
    font-weight: 600;
    margin: 1rem 0;
    font-size: inherit;
  }

  li {
    list-style-type: initial;
  }

  pre {
    box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.05);
    padding: 2.4rem;
    border-radius: 4px;
    background-color: #27272e;
    overflow-x: scroll;
    display: block;
    margin-bottom: 5rem;

    code {
      background-color: #27272e;
    }
  }

  code {
    border-radius: 4px;
    display: inline;
    font-size: 0.8em;
  }

  p {
    margin: 0.8rem 0 !important;
  }
  @media (max-width: 600px) {
    img {
      border-radius: 9px;
      width: 80%;
    }
  }
}
</style>
