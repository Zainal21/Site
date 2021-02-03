<template>
  <section class="blog-section pb-8 pt-50">
    <div class="container mx-auto px-6 py-8">
      <div class=" lg:py-12 lg:flex lg:justify-center">
        <div class=" text-white lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg lg:rounded-lg">
          <div class="lg:w-1/2">
            <div class="h-64 bg-cover lg:rounded-lg lg:h-full"
              style="background-image:url('images/photo-1483058712412-4245e9b90334.webp')">
            </div>
          </div>
          <div class="py-12 px-6 max-w-xl lg:max-w-5xl lg:w-1/2 ">
            <h2 class="text-2xl text-gray-100 font-bold md:text-3xl">Linktree</h2>
            <h3 class="mt-4 text-xl text-gray-100">" Talk about business ? can contact me on various platforms to discuss business with you "</h3>
          </div>
        </div>
      </div>
      <div v-for="(link,i) in links" :key="i">
        <div class="container mx-auto">
          <div class="w-full my-5 rounded-md text-white" :class="link.color">
            <div class="flex justify-between items-center container mx-auto py-4 px-6">
              <div class="flex">
                <a :href="link.redirect" class="text-xl font-medium">{{link.name}}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
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
            color: 'bg-red-600'
          },
          {
            name: 'instagram',
            redirect: 'https://www.instagram.com/Zainal_256bit',
            color: 'bg-yellow-500'
          },
          {
            name: 'Telegram',
            redirect: 'https://t.me/Muhammadzain_234',
            color: 'bg-indigo-500'
          },
          {
            name: 'Twitter',
            redirect: 'https://twitter.com/penulisduduk',
            color: 'bg-green-500'
          },
          {
            name: 'LinkedIn',
            redirect: 'https://www.linkedin.com/in/muhammad-zainal-arifin',
            color: 'bg-blue-800'
          }
        ]
      }
    },
    transition: {
      name: 'slide-fade'
    },
  }
</script>