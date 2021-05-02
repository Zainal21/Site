<template>
  <section class="blog-section pb-8 pt-48">
    <SubContainer sectionTitle="Linktree"
      SectionDescription=" Talk about business ? can contact me on various platforms to discuss business with you " />
    <div v-for="(link,i) in links" :key="i">
      <div class="container mx-auto">
        <div class="w-full my-3 rounded-md text-white" :class="link.color">
          <div class="flex justify-between items-center container mx-auto py-4 px-6">
            <div class="flex">
              <a :href="link.redirect" class="text-xl font-medium">{{link.name}}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import SubContainer from "~/components/Sections/SubContainer"
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
            name: 'Whatsapp',
            redirect: 'https://api.whatsapp.com/send?phone=+6288216756214',
            color: 'bg-green-500'
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
            color: 'bg-blue-500'
          },
          {
            name: 'LinkedIn',
            redirect: 'https://www.linkedin.com/in/muhammad-zainal-arifin',
            color: 'bg-blue-800'
          }
        ]
      }
    },
    components: {
      SubContainer,
    },
    transition: {
      name: 'slide-fade'
    },
  }
</script>