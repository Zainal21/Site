<template>
  <div>
    <section class="hero-section">
      <div class="container mx-auto px-6 py-8">
        <div class="lg:flex items-center">
          <div class="lg:w-1/2 mt-6">
            <h2 class="text-gray-100 text-2xl font-bold">Hi, I am Muhamad Zainal Arifin</h2>
            <p class="text-gray-400 text-base lg:max-w-md mt-4">
              Nickname as <a href="www.github.com/Zainal21" class="text-indigo-300 text-base">@PenulisDuduk</a>, I’m
              currently a Software Engineering student<a class="text-indigo-300 text-base font-bold"
                href="https://smkn2kra.sch.id"> at VHS 2 Karanganyar,</a>
              Vocational Student who is interested in the world of technology,
              especially in the world of web programming, and a web programmer who is quite experienced in creating,
              developing web-based applications, especially with backend development with PHP Technology & JavaScript Technology
            </p>
            <div class="flex mt-6">
              <a href="#"
                class="px-3 py-2 block  bg-gray-800 text-white text-xs font-semibold rounded hover:bg-gray-700">Download
                CV</a>
            </div>
          </div>
          <div class="mt-8 lg:mt-0 lg:w-1/2">
            <div class="flex items-center justify-center lg:justify-end">
              <div class="max-w-lg">
                <img class="w-full h-64 object-cover object-center rounded-md" src="images/Zainal.jpg"
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