<template>
  <div class="container mx-auto flex justify-center py-8">
    <div class="w-full mb-10">
      <div class="text-white text-center lg:flex lg:max-w-5xl">
        <div class="py-12  text-center">
          <h2 class="text-2xl text-gray-100 font-bold md:text-3xl">{{sectionTitle}}</h2>
          <h3 class="mt-4 text-2xl text-gray-100">{{SectionDescription}}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SubContainer',
  props:['sectionTitle', 'SectionDescription']
}
</script>
