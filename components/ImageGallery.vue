<template>
  <div class="flex flex-row flex-wrap -mx-2">
    <div class="w-full md:w-1/2 h-64 md:h-auto mb-4 px-2">
      <span
        class="block w-full h-full bg-grey-dark bg-no-repeat bg-center bg-cover cursor-pointer overflow-hidden  hover:shadow-lg hover:border-1 hover:border-gray-700 border-4 border-gray-800 rounded-lg"
        style="background-image: url(images/gallery/Me_and_Nana.jpg);"
        v-lazy-load
      >
      </span>
    </div>
    <div class="w-full md:w-1/2 mb-4 px-2">
      <div class="flex flex-col sm:flex-row md:flex-col -mx-2">
        <div
          class="w-full sm:w-1/2 md:w-full h-48 xl:h-64 mb-4 sm:mb-0 md:mb-4 px-2"
        >
          <span
            class="block w-full h-full bg-grey-dark bg-no-repeat bg-center bg-cover cursor-pointer overflow-hidden  hover:shadow-lg hover:border-1 hover:border-gray-700 border-4 border-gray-800 rounded-lg"
            style="background-image: url(images/gallery/RA-photo-1.jpg);"
            v-lazy-load
          >
          </span>
        </div>
        <div class="w-full sm:w-1/2 md:w-full h-48 xl:h-64 px-2">
          <span
            class="block w-full h-full bg-grey-dark bg-no-repeat bg-center bg-cover cursor-pointeroverflow-hidden  hover:shadow-lg hover:border-1 hover:border-gray-700 border-4 border-gray-800 rounded-lg"
            style="background-image: url(images/gallery/RA-photo-2.jpg);"
            v-lazy-load
          >
          </span>
        </div>
      </div>
    </div>
    <div class="w-full sm:w-1/3 h-32 md:h-48 mb-4 sm:mb-0 px-2">
      <span
        class="block w-full h-full bg-grey-dark bg-no-repeat bg-center bg-cover cursor-pointeroverflow-hidden  hover:shadow-lg hover:border-1 hover:border-gray-700 border-4 border-gray-800 rounded-lg"
        style="background-image: url(images/gallery/RA-photo-3.jpg);"
        v-lazy-load
      >
      </span>
    </div>
    <div class="w-full sm:w-1/3 h-32 md:h-48 mb-4 sm:mb-0 px-2">
      <span
        class="block w-full h-full bg-grey-dark bg-no-repeat bg-center bg-cover cursor-pointeroverflow-hidden  hover:shadow-lg hover:border-1 hover:border-gray-700 border-4 border-gray-800 rounded-lg"
        style="background-image: url(images/gallery/karang-taruna.jpg);"
        v-lazy-load
      >
      </span>
    </div>
    <div class="w-full sm:w-1/3 h-32 md:h-48 px-2">
      <span
        class="block w-full h-full bg-grey-dark bg-no-repeat bg-center bg-cover cursor-pointeroverflow-hidden  hover:shadow-lg hover:border-1 hover:border-gray-700 border-4 border-gray-800 rounded-lg"
        style="background-image: url(images/gallery/karang-taruna-2.jpg);"
      >
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "ImageGallery",
  props: ["source-image"],
};
</script>

<style scoped></style>
