<template>
  <div
    class="max-w-4xl mx-auto mt-5 bg-transparant overflow-hidden hover:shadow-lg hover:border-1 hover:border-gray-700 border-2 border-gray-800 rounded-lg"
  >
    <div class="p-5">
      <div>
        <span class="text-blue-100 float-left text-xs font-bold uppercase">{{
          authors
        }}</span>
        <div class="flex justify-center">
          <span class="font-medium ml-auto text-gray-100 text-sm">{{
            time_read
          }}</span>
        </div>
        <a
          :href="sourceLink"
          class="block text-gray-100  font-semibold hover:underline text-2xl mt-3 hover:text-gray-300 hover:text-underline"
          target="_blank"
          >{{ title }}
        </a>
        <p class="text-md text-gray-100 mt-3">{{ excerpt }}</p>
        <span
          class="px-3 py-1 mt-5 mb-5 float-left  text-sm text-white font-bold rounded bg-gray-800 hover:bg-gray-600"
          >{{ category }}</span
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ReadingCard",
  props: ["authors", "time_read", "sourceLink", "excerpt", "title", "category"],
};
</script>

<style scoped></style>
