<template>
  <div>
    <section class="footer">
      <footer class="bg-transparant border-gray-500 border-t-2">
          <div class="container px-6 py-6 mx-auto">
              <div>
                  <p class="text-center text-md text-gray-200">Copyright © {{year}} <nuxt-link to="/linktree"  class="text-gray-200 font-normal hover:underline">@muhammadzaindev</nuxt-link> Build with <strong>Nuxt JS</strong> & <strong>Meraki UI</strong></p>
              </div>
          </div>
      </footer>
    </section>
  </div>
</template>
<script>
  export default {
    computed: {
      year() {
        return new Date().getFullYear()
      }
    }
  }
</script>
