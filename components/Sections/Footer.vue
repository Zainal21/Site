<template>
  <div>
    <hr class="border border-gray-500">
    <section class="footer">
      <div class="container mx-auto px-5 py-8">
        <footer class="flex flex-col justify-center items-center px-6 py-2  sm:flex-row">
          <p class="py-2 text-md text-center text-gray-100 sm:py-0">Copyright © {{year}}  Build with <strong>NuxtJs</strong> & <strong>Meraki UI</strong></p>
        </footer>
      </div>
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