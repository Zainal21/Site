<template>
  <div>
    <section class="recent-project">
      <SubContainer
        sectionTitle="Recent Project"
        SectionDescription="  A recent project to fill my spare time and to learn some new web technologies as well as my portfolio "
      />
      <div class="container mx-auto mb-5">
        <div class="flex flex-wrap justify-center">
          <div
            class="lg:w-2/4 md:w-1/2 p-1 mt-2 w-full"
            v-for="item in portfolio"
            :key="item.id"
          >
            <div
              class="h-full bg-gray-700 card-skills shadow-md  overflow-hidden relative p-8 flex flex-wrap flex-col items-center justify-center hover:shadow-2xl hover:border-1 hover:border-gray-700 border-2 border-gray-700 rounded-lg"
            >
              <div>
                <img
                  alt="Image Skill"
                  class="lg:w-full h-auto md:w-full mb-5 rounded object-cover object-center mx-auto"
                  :src="item.image"
                  lazy="loaded"
                  width="200px"
                  height="200px"
                  v-lazy-load
                />
              </div>

              <a
                :href="item.link"
                class="text-lg md:text-lg text-center font-bold mb-2 text-gray-200"
              >
                {{ item.project_name }} <br /><span class="font-bold"
                  >({{ item.stack }})</span
                >
              </a>
              <p class="text-base text-center font-light mb-4">
                {{ item.description }}
              </p>
              <a
                :href="item.link"
                target="_blank"
                class="flex items-center py-2 px-2 capitalize tracking-wide bg-btn text-white font-medium rounded hover:bg-gray-700 dark:hover:bg-gray-700 focus:outline-none focus:bg-gray-400 dark:focus:bg-gray-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 mx-1"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                  />
                </svg>
                <span class="mx-1">See Project</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <ButtonToTop />
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
import SubContainer from "~/components/Sections/SubContainer";
import ButtonToTop from "../components/ButtonToTop";
import project from "./data/project.json";
export default {
  transition: {
    name: "slide-fade",
  },
  components: {
    SubContainer,
    ButtonToTop,
  },
  head: {
    title: "Muhamad Zainal Arifin",
    meta: [
      {
        charset: "utf-8",
      },
      {
        name: "viewport",
        content:
          "width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no",
      },
      {
        name: "msapplication-TileColor",
        content: "#ffffff",
      },
      {
        name: "description",
        content:
          "Personal Website Muhamad Zainal Arifin,Project terkakhir yang dibuat oleh Muhamad Zainal Arifin",
      },
      {
        name: "keywords",
        content: "penulisdudukdev,Muhamad Zainal Arifin,Zainal21",
      },
      {
        name: "Author",
        content: "Muhamad Zainal Arifin",
      },
    ],
  },
  data: () => {
    return {
      portfolio: project,
    };
  },
};
</script>
