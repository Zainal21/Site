<template>
  <div class="container mx-auto flex justify-between py-4">
    <div class="w-full mb-1 text-center ">
      <div class="text-white text-center lg:flex lg:max-w-5xl">
        <div class="py-3 text-center">
          <h3 class="text-2xl text-gray-100 font-bold md:text-3xl">{{sectionTitle}}</h3>
          <h4 class="mt-4 text-xl py-3 text-gray-100">{{SectionDescription}}</h4>
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
