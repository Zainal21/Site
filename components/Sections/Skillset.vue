<template>
  <div class="container mx-auto px-6 py-8">
    <div class="lg:w-1/2 mb-10">
      <h2 class="text-gray-100 text-2xl font-bold mb-8 mt-10 underline">
        Skillset
      </h2>
    </div>
    <div class="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <div v-for="(skill, index) in skills" :key="index">
        <h1 class="mt-4 font-semibold text-lg text-white ">{{ skill.name }}</h1>
        <p class="mt-2 text-gray-500 text-lg" v-html="skill.description"></p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Skillset",
  data: () => {
    return {
      skills: [
        {
          name: "Front-End Development",
          description:
            " Currently I am studying several web technologies, the Frontend development section, I usually use <b>HTML</b>, <B>CSS</B>, <B>Javascript</B>, <b>Bootstrap</b>, <b>Tailwind</b>, <b>VueJS</b>(on going),<b>ReactJS</b> (but still a beginner) to build User Interface",
        },
        {
          name: "Back-End Development",
          description:
            "For Backend development I am quite experienced with using <b>PHP</b> technology with Framework <b>(Laravel, Codeigniter3)</b> and <b> NodeJS Environment</b> with ( <b>Express JS Framework)</b>, and still learning",
        },
        {
          name: "Other (Skillset)",
          description:
            "<B>Git</B> and <B>Version Control System</B>, <B>Linux (basic command-line operations)</B>, Basic Usage <B>Docker</B> , Analytic System & Visualization with <B>Draw.io</B> and <B>Whimsical</B>",
        },
      ],
    };
  },
};
</script>

<style scoped></style>
