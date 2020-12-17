<template>
 <section class="header bg-gray-800">
    <div class="font-sans antialiased" id="app">
     <div class="container mx-auto px-5 py-8 bg-gray-800">
      <nav class="flex items-center justify-between flex-wrap bg-teal">
        <div class="flex items-center flex-no-shrink text-white mr-6">
          <span class="font-semibold text-lg tracking-tight">PenulisDuduk.Dev</span>
        </div>
        <div class="block sm:hidden text-white">
          <button @click="toggle"
            class="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white">
            <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div :class="open ? 'block': 'hidden'"
          class="w-full flex-grow sm:flex sm:items-center sm:w-auto text-white mr-auto">
          <div class="text-base sm:flex-grow">
            <nuxt-link to="/" class="no-underline block mt-4 sm:inline-block sm:mt-0  hover:text-white mr-4">
              Home
            </nuxt-link>
            <nuxt-link to="/posts" class="no-underline block mt-4 sm:inline-block sm:mt-0  hover:text-white mr-4">
              Post
            </nuxt-link>
          </div>
        </div>
      </nav>
    </div>
  </div>
 </section>
</template>

<script>
  export default {
    name: 'Header',
    data: () => {
      return {
        open: false,
      }
    },
    methods: {
      toggle() {
        this.open = !this.open
      }
    }
  }

</script>

<style scoped>

</style>