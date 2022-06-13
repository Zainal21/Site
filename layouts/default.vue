<template>
  <div class="layout">
    <Header />
    <nuxt class="nuxt-content" />
    <Footer />
  </div>
</template>
<script>
import Footer from "~/components/Sections/Footer";
import Header from "~/components/Sections/Header";

export default {
  components: {
    Footer,
    Header,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,600;1,100;1,200;1,300;1,400;1,500&display=swap");
body {
  background-color: rgba(31, 41, 55, 1);
  font-family: "Poppins", sans-serif;
}
</style>
