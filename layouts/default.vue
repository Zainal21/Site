<template>
  <div class="layout">
    <Header/>
    <nuxt class="nuxt-content"/>
    <Footer/>
  </div>
</template>
<script>
  import Footer from '~/components/Sections/Footer'
  import Header from '~/components/Sections/Header'

  export default {
    components: { Footer,Header }
  }
</script>


<style scoped>
body{
  background-color: rgba(31,41,55,1);
}
</style>