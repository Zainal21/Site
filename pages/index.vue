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
              developing web-based applications, especially with backend development with PHP Technology & JavaScript
              Technology
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
                <img class="w-full h-80 object-cover object-center rounded-md" src="images/Me_and_Nana.jpg" alt="">
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

    <section class="recent-watch container p-6 mx-auto bg-transparant dark:bg-gray-800">
      <h2 class="text-gray-100 text-2xl font-bold mb-8  mt-8">My Recent Playlist</h2>
      <div class="flex items-center justify-center">
        <div class="grid gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <MusicPlaylistCard v-for="playlist in playlists" :key="playlist.id" :source="playlist.source" :title="playlist.title"/>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
  import Contribution from '../components/Sections/Contribution'
  import Skillset from "../components/Sections/Skillset"
  import MusicPlaylistCard from "../components/MusicPlaylistCard"
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
          content: "Personal Website Muhamad Zainal Arifin ,  "
        },
        {
          name: "keywords",
          content: "penulisdudukdev"
        },
        {
          name: "subject",
          content: "Personal of Muhamad Zainal Arifin"
        },
        {
          name: "identifier-URL",
          content: "https://muhammadzaindev.vercel.app/"
        },
        {
          name: "keywords",
          content: "Zainal21, Zainal, Muhamad Zainal Arifin, Zainal RPL, Muhamad Zain, Riana Eka Fidriyani, Riana"
        },
        {
          name: "designer",
          content: "Muhamad Zainal Arifin"
        },
        {
          name: "developer",
          content: "Muhamad Zainal Arifin"
        }
      ],
      
    },
    data : () => {
      return {
        playlists :[
        {
          id : 1,
          title : 'Martin Garrix & Dean Lewis - Used To Love (Official Video)',
          source : "https://www.youtube.com/embed/LEh9F67Z5n8"
        },
        {
          id : 2,
          title : 'HAPPY ASMARA - L D R | Layang Dungo Restu | (Official Musik Video)',
          source : "https://www.youtube.com/embed/-Gefi4sxZgM"
        },
        {
          id : 3,
          title : '24kgldn - mood (Gustixa Remix)',
          source : "https://www.youtube.com/embed/ISYfVEmBM-g"
        },
        {
          id : 4,
          title : 'LiSA 『炎』 -MUSiC CLiP-',
          source : "https://www.youtube.com/embed/4DxL6IKmXx4"
        }
      ]
      }
    },
    components: {
      Contribution,
      Skillset,MusicPlaylistCard
    }
  }
</script>

<style scoped>

</style>