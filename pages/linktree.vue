<template>
  <section class="blog-section pb-20 pt-50">
    <SubContainer 
      sectionTitle="Linktree"
      SectionDescription=" Talk about business ? can contact me on various platforms to discuss business with you " 
    />
    <div v-for="(link,i) in links" :key="i">
      <div class="container mx-auto">
        <div class="w-full my-3 rounded-md shadow-xl hover:shadow-2xl text-white" :class="link.color">
          <div class="flex justify-between items-center container mx-auto py-4 px-6">
            <div class="flex">
              <a :href="link.redirect" class="text-xl font-bold hover:underline" target="_blank">{{link.name}}</a>
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
  import linktree from './data/linktree.json'
  export default {
    name: 'linktree',
    data: () => {
      return {
        links: linktree
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