<template>
  <section class="blog-section pb-20 pt-50">
    <SubContainer sectionTitle="Linktree"
      SectionDescription=" Talk about business ? can contact me on various platforms to discuss business with you " />
    <div v-for="(link,i) in links" :key="i">
      <div class="container mx-auto">
        <div class="w-full my-3 rounded-md text-white" :class="link.color">
          <div class="flex justify-between items-center container mx-auto py-4 px-6">
            <div class="flex">
              <a :href="link.redirect" class="text-xl  font-bold hover:underline" target="_blank">{{link.name}}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ButtonToTop />
  </section>
</template>

<script>
  import SubContainer from "~/components/Sections/SubContainer"
  import ButtonToTop from "../components/ButtonToTop"
  export default {
    name: 'linktree',
    data: () => {
      return {
        links: [{
            name: 'Github',
            redirect: 'https://github.com/Zainal21',
            color: 'bg-gray-800'
          },
          {
            name: 'Gitlab',
            redirect: 'https://gitlab.com/Zainal21',
            color: 'bg-yellow-500'
          },
          {
            name: 'Whatsapp',
            redirect: 'https://api.whatsapp.com/send?phone=+6288216756214',
            color: 'bg-green-800'
          },
          {
            name: 'instagram',
            redirect: 'https://www.instagram.com/Zainal_256bit',
            color: 'bg-red-600'
          },
          {
            name: 'Telegram',
            redirect: 'https://t.me/Muhammadzain_234',
            color: 'bg-indigo-500'
          },
          {
            name: 'Twitter',
            redirect: 'https://twitter.com/penulisduduk',
            color: 'bg-blue-600'
          },
          {
            name: 'LinkedIn',
            redirect: 'https://www.linkedin.com/in/muhammad-zainal-arifin',
            color: 'bg-blue-800'
          },
          {
            name: 'Facebook',
            redirect: '#',
            color: 'bg-blue-900'
          }
        ]
      }
    },
    components: {
      SubContainer,ButtonToTop
    },
    transition: {
      name: 'slide-fade'
    },
  }
</script>