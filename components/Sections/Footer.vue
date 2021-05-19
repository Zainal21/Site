<template>
  <div>
    <hr class="border border-gray-500">
    <section class="footer">
      <footer class="bg-transparant">
          <div class="container px-6 py-9 mx-auto">
              <div>
                  <p class="text-center text-sm text-gray-200">Copyright © {{year}}  Build with <strong>NuxtJs</strong> & <strong>Meraki UI </strong></p>
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