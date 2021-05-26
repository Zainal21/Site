<template>
  <div id="to-top" class="to-top"><a aria-label="To Top" href="#__nuxt" class="to-top__link">▲</a></div>
</template>

<style scoped>
  .to-top{
    position: fixed;
    z-index: 20;
    bottom: 1rem;
    right: 1.5rem;
  }
  .to-top__link{
    display: block;
    height: 3rem;
    width: 3rem;
    border-radius: 9999px;
    text-align: center;
    font-size: 1.3rem;
    line-height: 2.3rem;
    text-decoration: none;
    --tw-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1),0 1px 2px 0 rgba(0, 0, 0, 0.06);
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1),0 1px 2px 0 rgba(0, 0, 0, 0.06);
    border: 1px solid rgb(61, 61, 61);
    line-height: 1.8;
    background-color:rgb(22, 22, 29) ;
    color: #ddd;
    scroll-behavior: smooth !important;
  }
</style>

<script>
export default {
  name : 'ButtonToTop',
}
</script>