<template>
  <div>
    <section class="header">
      <div class="font-sans antialiased" id="app">
        <div class="container mx-auto px-5 py-5">
          <nav class="flex items-center justify-between flex-wrap bg-teal">
            <div class="flex items-center flex-no-shrink text-white mr-6">
              <nuxt-link to="/" fetch class="font-semibold text-lg"
                >@Muhammadzain</nuxt-link
              >
            </div>
            <div class="block sm:hidden text-white">
              <button
                @click="toggle"
                class="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white"
              >
                <svg
                  class="fill-current h-3 w-3"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Menu</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                </svg>
              </button>
            </div>
            <div
              :class="open ? 'block' : 'hidden'"
              class="w-full sm:flex sm:items-center sm:w-auto text-white ml-auto"
            >
              <div class="text-base sm:flex-grow mt-1">
                <nuxt-link
                  to="/"
                  fetch
                  class="no-underline nav-link block mt-2 sm:inline-block sm:mt-0  text-sm hover:text-white mr-4  text-lg"
                >
                  Home
                </nuxt-link>
                <nuxt-link
                  to="/project"
                  fetch
                  class="no-underline nav-link block mt-2 sm:inline-block sm:mt-0 text-sm hover:text-white mr-4  text-lg"
                >
                  Recent Project
                </nuxt-link>
                <nuxt-link
                  to="/posts"
                  fetch
                  class="no-underline  nav-link block mt-2 sm:inline-block sm:mt-0 text-sm hover:text-white mr-4 text-lg"
                >
                  Blog
                </nuxt-link>
                <nuxt-link
                  to="/linktree"
                  fetch
                  class="no-underline block mt-2 sm:inline-block sm:mt-0 text-sm hover:text-white mr-4  text-lg"
                >
                  Linktree
                </nuxt-link>
                <a
                  href="https://color-chunking.vercel.app/"
                  target="_blank"
                  class="no-underline  nav-link block mt-2 sm:inline-block sm:mt-0 text-sm hover:text-white mr-4  text-lg"
                >
                  Color Chunking
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </section>
    <hr class="border border-gray-500" />
  </div>
</template>

<script>
export default {
  name: "Header",
  data: () => {
    return {
      open: false,
    };
  },
  methods: {
    toggle() {
      this.open = !this.open;
    },
  },
};
</script>

<style scoped>
.nav-link {
  font-family: "Poppins", sans-serif, Arial, Helvetica, sans-serif !important;
  font-weight: 400;
}
h1 {
  font-size: 2rem;
}</style
>ge
