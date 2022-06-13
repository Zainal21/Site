<template>
  <section class="blog-section pb-20 pt-50">
    <SubContainer
      sectionTitle="Linktree"
      SectionDescription=" Talk about business or something else ? can contact me on various platforms to discuss with you "
    />
    <div v-for="(link, i) in links" :key="i">
      <div class="container mx-auto">
        <div
          class="w-full my-3 rounded-md shadow-xl hover:shadow-2xl text-white hover:shadow-2xl hover:border-2 hover:border-gray-200"
          :class="link.color"
        >
          <div
            class="flex justify-between items-center container mx-auto py-4 px-6"
          >
            <div class="flex">
              <a
                :href="link.redirect"
                class="text-xl font-bold hover:underline"
                target="_blank"
                >{{ link.name }}</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <ButtonToTop />
  </section>
</template>

<script>
import SubContainer from "~/components/Sections/SubContainer";
import ButtonToTop from "../components/ButtonToTop";
export default {
  name: "linktree",
  data: () => {
    return {
      links: [
        {
          name: "E-mail",
          redirect: "mailto:Muhammadzaindev@gmail.com",
          color: "bg-indigo-800",
        },
        {
          name: "Github",
          redirect: "https://github.com/Zainal21",
          color: "bg-gray-700",
        },
        {
          name: "Gitlab",
          redirect: "https://gitlab.com/Zainal21",
          color: "bg-yellow-600",
        },
        {
          name: "Whatsapp",
          redirect: "https://api.whatsapp.com/send?phone=+6288216756214",
          color: "bg-green-800",
        },
        {
          name: "instagram",
          redirect: "https://www.instagram.com/muhamadzain.tsx",
          color: "bg-red-600",
        },
        {
          name: "Telegram",
          redirect: "https://t.me/muhamadzaindev",
          color: "bg-indigo-500",
        },
        {
          name: "Twitter",
          redirect: "https://twitter.com/Penulisduduk",
          color: "bg-blue-600",
        },
        {
          name: "LinkedIn",
          redirect: "https://www.linkedin.com/in/muhammad-zainal-arifin",
          color: "bg-blue-800",
        },
        {
          name: "Facebook",
          redirect: "https://www.facebook.com/muhammadzaenalariefin.ariefin.7/",
          color: "bg-blue-900",
        },
        {
          name: "Discord Server",
          redirect: "https://discord.gg/kuP3VsJemP",
          color: "bg-blue-600",
        },
        {
          name: "Download My Curriculum vitae",
          redirect: "https://muhammadzaindev.vercel.app/muhammadzain-cv.pdf",
          color: "bg-red-800",
        },
      ],
    };
  },
  components: {
    SubContainer,
    ButtonToTop,
  },
  transition: {
    name: "slide-fade",
  },
};
</script>
