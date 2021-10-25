<template>
  <div class="main-content">
    <section class="hero-section">
      <div class="container mx-auto px-6 py-8">
        <div class="lg:flex items-center">
          <div class="lg:w-1/2 mt-6">
            <h2 class="text-gray-100 text-2xl font-bold">Hi, I am Muhamad Zainal Arifin 👋</h2>
            <p class="text-gray-400 text-base lg:max-w-md mt-4">
              Nickname as <a href="www.github.com/Zainal21" class="text-indigo-300 text-base">@PenulisDuduk</a>, I’m
              graduated Software Engineering student from<a class="text-indigo-300 text-base"
                href="https://smkn2kra.sch.id"> VHS 2 Karanganyar,</a> Now work as a Software Engineer at CV. Cipta Karya Abadi (Cikajogja) ,
              Software Engineering graduated who is interested in the world of technology,
              especially in the world of web programming, and a web programmer who is quite experienced in creating,
              developing web-based applications.
            </p>
            <div class="flex mt-6">
              <nuxt-link to="/linktree"
                class="px-3 py-2 block  bg-gray-800 text-white text-xs font-semibold rounded hover:bg-gray-700">Hire Me
              </nuxt-link>
            </div>
          </div>
          <div class="mt-8 lg:mt-0 lg:w-1/2">
            <div class="flex items-center justify-center lg:justify-end">
              <div class="max-w-lg">
                <img class="w-full h-80 object-cover object-center rounded-md" v-lazy-load
                  src="images/gallery/photo3211868340741056440.jpg" alt="muhamad zainal arifin">
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
    <!-- git conttibution -->
    <section class="git-contribution">
      <Contribution />
    </section>
    <!-- playlist  -->
    <section class="recent-watch container p-6 mx-auto bg-transparant dark:bg-gray-800">
      <h2 class="text-gray-100 text-2xl font-bold mb-8  mt-8">My Recent Playlist</h2>
      <div class="flex items-center justify-center">
        <div class="grid gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <MusicPlaylistCard 
            v-for="playlist in playlists" 
            :key="playlist.id" 
            :source="playlist.source"
            :title="playlist.title" 
          />
        </div>
      </div>
    </section>
    <!-- Recent Read  -->
    <section class="recent-watch container p-9 mb-6 mx-auto bg-transparant dark:bg-gray-800">
      <h2 class="text-gray-100 text-2xl font-bold mb-8  mt-8">My Recent Reading list</h2>
      <ReadingCard  
        v-for="readlist in readlists" 
        :key="readlist.id"
        :authors="readlist.authors"
        :time_read="readlist.time_read"
        :sourceLink="readlist.sourceLink"
        :excerpt="readlist.excerpt"
        :category="readlist.category"
        :title="readlist.title"
      />
    </section>
    <!-- galery photo -->
    <section class="recent-watch container p-9 mb-6 mx-auto bg-transparant dark:bg-gray-800">
      <h2 class="text-gray-100 text-2xl font-bold mb-8  mt-8">My Photos gallery</h2>
      <div class="container mx-auto p-8">
        <ImageGallery />
      </div>
    </section>
    <ButtonToTop />
  </div>
</template>
<script>
  import Contribution from '../components/Sections/Contribution'
  import Skillset from "../components/Sections/Skillset"
  import MusicPlaylistCard from "../components/MusicPlaylistCard"
  import ReadingCard from "../components/ReadingCard"
  import ImageGallery from "../components/ImageGallery"
  import ButtonToTop from "../components/ButtonToTop"
  import playlist from './data/playlist.json'
  import readlists from './data/readlists.json'
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
        }
      ],

    },
    data: () => {
      return {
        playlists : playlist,
        readlists: readlists
      }
    },
    components: {
      Contribution,
      Skillset,
      ImageGallery,
      MusicPlaylistCard,
      ButtonToTop,
      ReadingCard
    }
  }
</script>

<style scoped>
  
</style>
