<template>
  <div class="container mx-auto px-6 py-8">
    <div class="lg:w-1/7 mb-10">
      <h2 class="text-gray-100 text-2xl font-bold mb-8 mt-10">Skillset</h2>
    </div>
    <div class="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <div v-for="(skill, index) in skills" :key="index">
        <h1 class="mt-4 font-semibold text-lg text-white ">{{skill.name}}</h1>
        <p class="mt-2 text-gray-500 text-base" v-html="skill.description">
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name:'Skillset',
    data : () => {
      return {
        skills : [
          {
            name: 'Front-End Development',
            description : ' Currently I am studying several web technologies, the Frontend development section, I usually use <b>HTML</b>, <B>CSS</B>, <B>Javascript</B>, <b>Bootstrap</b>, <b>Tailwind</b>, <b>VueJS (on going)</b>,<b>React (but still a beginner)</b> to build User Interface'
          },
           {
            name: 'Back-End Development',
            description : 'For Backend development I am quite experienced with using <b>PHP</b> technology with Framework <b>(Laravel, Codeigniter3)</b> and <b> NodeJS</b> with Framework( <b>Express JS)</b>, and still learning'
          },
          {
            name: 'Desktop Apps Dev',
            description:'For Desktop app development. I once worked on a desktop application project using <b>VB.NET</b> and <b>C#</b> with <b>SQL Server Database</b>'
          }
        ]
      }
    }
  }
</script>

<style scoped>

</style>