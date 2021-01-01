<template>
  <div>
    <section class="hero-section">
      <div class="container mx-auto px-6 py-8">
        <div class="lg:flex items-center">
          <div class="lg:w-1/2 mt-6">
            <h2 class="text-gray-100 text-2xl font-bold">Hi, I am Muhamad Zainal Arifin</h2>
            <p class="text-gray-400 text-base lg:max-w-md mt-4">
              Nickname as <a href="www.github.com/Zainal21" class="text-indigo-300 text-base">@PenulisDudukDev </a>, I’m
              currently a Software Engineering student at <a class="text-indigo-300 text-base font-bold"
                href="https://smkn2kra.sch.id">at VHS 2 Karanganyar,</a>
              Vocational Student who is interested in the world of technology,
              especially in the world of web programming, and a web programmer who is quite experienced in creating,
              developing web-based applications, especially with backend development with PHP Technology & JS Technology
            </p>
            <div class="flex mt-6">
              <a href="#"
                class="px-3 py-2 block  bg-gray-800 text-white text-xs font-semibold rounded hover:bg-gray-700">Download
                CV</a>
              <a href="#"
                class="px-3 py-2 block mx-2 bg-gray-800 text-white text-xs font-semibold rounded hover:bg-gray-700">Hire
                Me</a>
            </div>
          </div>
          <div class="mt-8 lg:mt-0 lg:w-1/2">
            <div class="flex items-center justify-center lg:justify-end">
              <div class="max-w-lg">
                <img class="w-full h-64 object-cover object-center rounded-md" src="images/photo3211868340741056440.jpg"
                  alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- section skill -->
    <section class="skill-section">
      <Skillset />
    </section>
    <section class="git-contribution">
      <Contribution />
    </section>
    <!-- <section class="experience"></section> -->
    <!-- <section class="support-me"></section> -->
    <!-- section project -->
    <section class="get-in-touch">
      <div class="container mx-auto">
        <div class="lg:w-1/7 mb-10">
          <h2 class="text-gray-100 text-2xl font-bold mb-8 mt-10">Let's Talk</h2>
          <div class="flex items-center -mx-2 mt-6">
            <a class="mx-2  text-lg" href="https://twitter.com/penulisduduk" aria-label="Twitter">
              <svg class="fill-current text-gray-300 hover:text-gray-500 h-10 w-10" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512">
                <path
                  d="M492 109.5c-17.4 7.7-36 12.9-55.6 15.3 20-12 35.4-31 42.6-53.6-18.7 11.1-39.4 19.2-61.5 23.5C399.8 75.8 374.6 64 346.8 64c-53.5 0-96.8 43.4-96.8 96.9 0 7.6.8 15 2.5 22.1-80.5-4-151.9-42.6-199.6-101.3-8.3 14.3-13.1 31-13.1 48.7 0 33.6 17.2 63.3 43.2 80.7-16-.4-31-4.8-44-12.1v1.2c0 47 33.4 86.1 77.7 95-8.1 2.2-16.7 3.4-25.5 3.4-6.2 0-12.3-.6-18.2-1.8 12.3 38.5 48.1 66.5 90.5 67.3-33.1 26-74.9 41.5-120.3 41.5-7.8 0-15.5-.5-23.1-1.4C62.8 432 113.7 448 168.3 448 346.6 448 444 300.3 444 172.2c0-4.2-.1-8.4-.3-12.5C462.6 146 479 129 492 109.5z" />
              </svg>
            </a>

            <a class="mx-2 text-lg" href="#" aria-label="Facebook">
              <svg class="fill-current text-gray-300 hover:text-gray-500 h-10 w-10" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512">
                <path
                  d="M426.8 64H85.2C73.5 64 64 73.5 64 85.2v341.6c0 11.7 9.5 21.2 21.2 21.2H256V296h-45.9v-56H256v-41.4c0-49.6 34.4-76.6 78.7-76.6 21.2 0 44 1.6 49.3 2.3v51.8h-35.3c-24.1 0-28.7 11.4-28.7 28.2V240h57.4l-7.5 56H320v152h106.8c11.7 0 21.2-9.5 21.2-21.2V85.2c0-11.7-9.5-21.2-21.2-21.2z" />
              </svg>
            </a>

            <a class="mx-2 text-lg" href="https://www.linkedin.com/in/muhammad-zainal-arifin-3092a1198"
              aria-label="Linkden">
              <svg class="fill-current text-gray-300 hover:text-gray-500 h-10 w-10" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512">
                <path
                  d="M417.2 64H96.8C79.3 64 64 76.6 64 93.9V415c0 17.4 15.3 32.9 32.8 32.9h320.3c17.6 0 30.8-15.6 30.8-32.9V93.9C448 76.6 434.7 64 417.2 64zM183 384h-55V213h55v171zm-25.6-197h-.4c-17.6 0-29-13.1-29-29.5 0-16.7 11.7-29.5 29.7-29.5s29 12.7 29.4 29.5c0 16.4-11.4 29.5-29.7 29.5zM384 384h-55v-93.5c0-22.4-8-37.7-27.9-37.7-15.2 0-24.2 10.3-28.2 20.3-1.5 3.6-1.9 8.5-1.9 13.5V384h-55V213h55v23.8c8-11.4 20.5-27.8 49.6-27.8 36.1 0 63.4 23.8 63.4 75.1V384z" />
              </svg>
            </a>

            <a class="mx-2 text-lg" href="https://www.github.com/Zainal21" aria-label="Github">
              <svg class="fill-current text-gray-300 hover:text-gray-500 h-10 w-10" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512">
                <path
                  d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9 1.4.3 2.6.4 3.8.4 8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1-8.4 1.9-15.9 2.7-22.6 2.7-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1 10.5 0 20-3.4 25.6-6 2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8 0 0 1.6-.5 5-.5 8.1 0 26.4 3.1 56.6 24.1 17.9-5.1 37-7.6 56.1-7.7 19 .1 38.2 2.6 56.1 7.7 30.2-21 48.5-24.1 56.6-24.1 3.4 0 5 .5 5 .5 12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5 1.2 0 2.6-.1 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z" />
              </svg>
            </a>
            <a href="">
              <svg viewBox="0 0 32 32" class="fill-current text-gray-300 hover:text-gray-500 h-12 w-12">
                <path
                  d=" M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.478-1.318.13-.33.244-.73.244-1.088 0-.058 0-.144-.03-.215-.1-.172-2.434-1.39-2.678-1.39zm-2.908 7.593c-1.747 0-3.48-.53-4.942-1.49L7.793 24.41l1.132-3.337a8.955 8.955 0 0 1-1.72-5.272c0-4.955 4.04-8.995 8.997-8.995S25.2 10.845 25.2 15.8c0 4.958-4.04 8.998-8.998 8.998zm0-19.798c-5.96 0-10.8 4.842-10.8 10.8 0 1.964.53 3.898 1.546 5.574L5 27.176l5.974-1.92a10.807 10.807 0 0 0 16.03-9.455c0-5.958-4.842-10.8-10.802-10.8z"
                  fill-rule="evenodd"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
  import Contribution from '../components/Sections/Contribution'
  import Skillset from "../components/Sections/Skillset"
  export default {
    head: {
      title: 'Muhamad Zainal Arifin',
      meta: [{
          charset: 'utf-8'
        },
        {
          name: 'viewport',
          content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no'
        },
        {
          name: 'msapplication-TileColor',
          content: '#ffffff'
        },
        {
          name: 'description',
          content: "Personal Website Muhamad Zainal Arifin , Penulis Duduk Dev"
        },
        {
          name: "keywords",
          content: "penulisdudukdev"
        },
        {
          name: "keywords",
          content: "Muhamad Zainal Arifin"
        },
        {
          name: "keywords",
          content: "Zainal21"
        },
        {
          name: "keywords",
          content: "ZainaRPLDEV"
        },
        {
          name: "keywords",
          content: "Junior Full Stack Developer"
        },
        {
          name: "Author",
          content: "Muhamad Zainal Arifin"
        }
      ]
    },
    components: {
      Contribution,
      Skillset
    }
  }
</script>

<style scoped>

</style>