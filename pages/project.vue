<template>
  <div>
    <section class="recent-project">
      <div class="container mx-auto py-8">
        <div class="lg:w-1/7 mb-10">
          <div class=" text-white lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg lg:rounded-lg">
            <div class="lg:w-1/2">
              <div class="h-64 bg-cover lg:rounded-lg lg:h-full"
                style="background-image:url('images/photo-1483058712412-4245e9b90334.webp')">
              </div>
            </div>
            <div class="py-12 px-6 max-w-xl lg:max-w-5xl lg:w-1/2 ">
              <h2 class="text-2xl text-gray-100 font-bold md:text-3xl">Recent Project</h2>
              <h3 class="mt-4 text-xl text-gray-100">" A recent project to fill my spare time and to learn some new web technologies as well as my portfolio "
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div class="container mx-auto mb-5">
        <div class="flex flex-wrap justify-center">
          <div class="lg:w-2/4 md:w-1/2 p-1 mt-2 w-full" v-for="item in portfolio" :key="item.id">
            <div
              class="h-full bg-skill card-skills shadow-md rounded-lg overflow-hidden relative p-8 flex flex-wrap flex-col items-center justify-center">
              <div>
                <img alt="Image Skill"
                  class="lg:w-full h-auto md:w-full mb-5 rounded object-cover object-center mx-auto" :src="item.image"
                  lazy="loaded" width="200px" height="200px"></div>
              <a :href="item.link" class="text-lg md:text-lg text-center font-bold mb-2 text-gray-200">
                {{item.project_name}} <br><span class="font-bold">({{item.stack}})</span>
              </a>
              <p class="text-base text-center font-light mb-4">
                {{item.description}}
              </p>
              <a :href="item.link"
                class="flex items-center py-2 px-2 capitalize tracking-wide bg-btn text-white font-medium rounded hover:bg-gray-700 dark:hover:bg-gray-700 focus:outline-none focus:bg-gray-400 dark:focus:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mx-1" viewBox="0 0 24 24">
                  <path
                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                <span class="mx-1">See Project</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
  .bg-skill {
    background-color: rgb(39, 39, 46);
  }

  .bg-btn {
    background-color: rgb(77, 77, 83);
  }
</style>

<script>
  export default {
    transition: {
      name: 'slide-fade'
    },
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
          name: 'description',
          content: "Project terkakhir yang dibuat oleh Muhamad Zainal Arifin"
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
    data: () => {
      return {
        portfolio: [{
            id: 1,
            project_name: 'Teman Belajar',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum voluptates praesentium fuga vel neque! Possimus',
            stack: 'Laravel + VueJS',
            link: 'https://github.com/Zainal21',
            image: 'Portfolio/image1.png'
          },
          {
            id: 2,
            project_name: 'Teman Belajar Dashboard',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum voluptates praesentium fuga vel neque! Possimus',
            stack: 'Laravel + VueJS',
            link: 'https://github.com/Zainal21',
            image: 'Portfolio/image2.png'
          },
          {
            id: 3,
            project_name: 'Guest Book E-Wedding',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum voluptates praesentium fuga vel neque! Possimus',
            stack: 'Laravel',
            link: 'https://github.com/Zainal21',
            image: 'Portfolio/image4.png'
          },
          {
            id: 5,
            project_name: 'Kabar Desa',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum voluptates praesentium fuga vel neque! Possimus',
            stack: 'Laravel',
            link: 'https://github.com/Zainal21',
            image: 'Portfolio/image6.png'
          },
          {
            id: 6,
            project_name: 'Movie Catalog',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum voluptates praesentium fuga vel neque! Possimus',
            stack: 'VueJS',
            link: 'https://github.com/Zainal21',
            image: 'Portfolio/image7.png'
          },
          {
            id: 7,
            project_name: 'Food Delivery',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum voluptates praesentium fuga vel neque! Possimus',
            stack: 'Wordpress',
            link: 'https://github.com/Zainal21',
            image: 'Portfolio/2.png'
          },
          {
            id: 7,
            project_name: 'Complaint Management System',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum voluptates praesentium fuga vel neque! Possimus',
            stack: 'Laravel + Tailwind + React + Blade',
            link: 'https://github.com/Zainal21',
            image: 'Portfolio/image8.png'
          },
           {
            id: 7,
            project_name: 'KadangKoding official website (Redesign)',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum voluptates praesentium fuga vel neque! Possimus',
            stack: 'Laravel',
            link: 'https://github.com/Zainal21',
            image: 'Portfolio/image9.png'
          },
        ]
      }
    }
  }
</script>