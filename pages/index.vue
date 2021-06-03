<template>
  <div>
    <section class="hero-section">
      <div class="container mx-auto px-6 py-8">
        <div class="lg:flex items-center">  
          <div class="lg:w-1/2 mt-6">
            <h2 class="text-gray-100 text-2xl font-bold">Hi, I am Muhamad Zainal Arifin 👋</h2>
            <p class="text-gray-400 text-base lg:max-w-md mt-4">
              Nickname as <a href="www.github.com/Zainal21" class="text-indigo-300 text-base">@PenulisDuduk</a>, I’m
               graduated Software Engineering student from<a class="text-indigo-300 text-base"
                href="https://smkn2kra.sch.id">  VHS 2 Karanganyar,</a> Now as a Freelance Web Developer,
               Software Engineering graduated who is interested in the world of technology,
              especially in the world of web programming, and a web programmer who is quite experienced in creating,
              developing web-based applications, 
            </p>
            <div class="flex mt-6">
              <nuxt-link to="/linktree"
                class="px-3 py-2 block  bg-gray-800 text-white text-xs font-semibold rounded hover:bg-gray-700">Hire Me</nuxt-link>
            </div>
          </div>
          <div class="mt-8 lg:mt-0 lg:w-1/2">
            <div class="flex items-center justify-center lg:justify-end">
              <div class="max-w-lg">
                <img class="w-full h-80 object-cover object-center rounded-md" v-lazy-load src="images/gallery/photo3211868340741056440.jpg"
                  alt="muhamad zainal arifin">
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
          <MusicPlaylistCard v-for="playlist in playlists" :key="playlist.id" :source="playlist.source"
            :title="playlist.title" />
        </div>
      </div>
    </section>
    <!-- Recent Read  -->
    <section class="recent-watch container p-9 mb-6 mx-auto bg-transparant dark:bg-gray-800">
      <h2 class="text-gray-100 text-2xl font-bold mb-8  mt-8">My Recent Reading list</h2>
      <div
        class="max-w-4xl mx-auto mt-5 bg-transparant overflow-hidden hover:shadow-lg hover:border-1 hover:border-gray-700 border-2 border-gray-800 rounded-lg"
        v-for="readlist in readlists" :key="readlist.id">
        <div class="p-5">
          <div>
            <span class="text-blue-100 float-left text-xs font-bold uppercase">{{readlist.authors}}</span>
            <div class="flex justify-center">
              <span class="font-medium ml-auto text-gray-100 text-sm">{{readlist.time_read}}</span>
            </div>
            <a :href="readlist.sourceLink"
              class="block text-gray-100 font-semibold hover:underline text-2xl mt-3 hover:text-gray-300 hover:text-underline"
              target="_blank">{{readlist.title}}
            </a>
            <p class="text-sm text-gray-100 mt-3">{{readlist.excerpt}}</p>
            <span
              class="px-3 py-1 mt-5 mb-5 float-left  text-sm text-white font-bold rounded bg-gray-800 hover:bg-gray-600">{{readlist.category}}</span>
          </div>
        </div>
      </div>
    </section>
    <!-- galery photo -->
    <!-- component -->
    <section class="recent-watch container p-9 mb-6 mx-auto bg-transparant dark:bg-gray-800">
      <h2 class="text-gray-100 text-2xl font-bold mb-8  mt-8">My Photos gallery</h2>
      <div class="container mx-auto p-8">
        <ImageGallery/>
      </div>
    </section>
    <ButtonToTop />
  </div>
  
</template>
<script>
  import Contribution from '../components/Sections/Contribution'
  import Skillset from "../components/Sections/Skillset"
  import MusicPlaylistCard from "../components/MusicPlaylistCard"
  import ImageGallery from "../components/ImageGallery"
  import ButtonToTop from "../components/ButtonToTop"
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
    data: () => {
      return {
        playlists: [{
            id: 1,
            title: 'Martin Garrix & Dean Lewis - Used To Love (Official Video)',
            source: "https://www.youtube.com/embed/LEh9F67Z5n8"
          },
          {
            id: 2,
            title: 'HAPPY ASMARA - L D R | Layang Dungo Restu | (Official Musik Video)',
            source: "https://www.youtube.com/embed/-Gefi4sxZgM"
          },
          {
            id: 3,
            title: '24kgldn - mood (Gustixa Remix)',
            source: "https://www.youtube.com/embed/ISYfVEmBM-g"
          },
          {
            id: 4,
            title: 'LiSA 『炎』 -MUSiC CLiP-',
            source: "https://www.youtube.com/embed/4DxL6IKmXx4"
          }
        ],
        readlists: [{
            id: 1,
            title: 'Docker, Rancher, & Laravel: Easy & Safe Scalability!',
            authors: 'Will Bowman',
            time_read: '9 Minutes',
            excerpt: 'I attended Laracon US ’16 and met Luca Critelli who shared how he manages his businesses backend with Docker & Rancher. We both agreed to work on an article to help introduce Rancher to the Laravel community ',
            sourceLink: 'https://medium.com/@asked_io/docker-rancher-laravel-easy-safe-scalability-4e6eb8758232',
            category: 'Programming'
          },
          {
            id: 2,
            title: 'I Almost Got Fired for Choosing React in Our Enterprise App',
            authors: 'Razvan Dragomir',
            time_read: '8 Minutes',
            excerpt: 'I love React. I use it for all my personal projects and would love to recommend it for new work initiatives. However, after the unpleasant experience I had, I will not encourage using it for enterprise applications. Not again. ',
            sourceLink: 'https://betterprogramming.pub/i-almost-got-fired-for-choosing-react-in-our-enterprise-app-846ea840841c',
            category: 'Programming'
          },
          {
            id: 3,
            title: 'Intentional Career Building',
            authors: 'Kent C. Dodds ',
            time_read: '9 Minutes',
            excerpt: 'A challenge and ideas for you to do something to build your career.One thing I want to do is provide you with some specific ideas of things you can do to improve your skills and get what you want out of your career.  ',
            sourceLink: 'https://kentcdodds.com/blog/intentional-career-building',
            category: 'career'
          }
        ]
      }
    },
    components: {
      Contribution,
      Skillset,ImageGallery,
      MusicPlaylistCard,ButtonToTop
    }
  }
</script>

<style scoped>

</style>