<script lang="ts" setup>
import { defineComponent } from 'vue'
import { Carousel, Navigation, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'

definePageMeta({ layout: 'page' })
useHead({ titleTemplate: 'Mirage' })

const settings = {
  itemsToShow: 1,
  snapAlign: 'center',
}

const breakpoints = {
  200: {
    itemsToShow: 1.5,
    snapAlign: 'center',
  },
  700: {
    itemsToShow: 3.5,
    snapAlign: 'center',
  },
  1024: {
    itemsToShow: 6,
    snapAlign: 'start',
  },
}

defineComponent({
  name: 'Breakpoints',
  components: {
    Carousel,
    Slide,
    Navigation,
  },
})
</script>
<template>
  <LayoutPageWrapper>
    <LayoutPageSection>
      <div class="h-screen w-full py-10 sm:py-0 flex items-center sm:items-end">
        <div class="mb-2">
          <div class="grid grid-cols-12 gap-4">
            <h1
              class="col-span-12 sm:col-span-6 lg:col-span-8 xl:col-span-9 text-4xl md:text-5xl xl:text-8xl font-title font-medium tracking-normal sm:pb-20"
            >
              Studio expérimental <br />
              & design graphique
            </h1>
            <div class="col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-3">
              <div class="sm:mt-24">
                <hr class="mb-4 dark:border-white" />
                <p class="font-ibm text-left text-sm sm:text-base">
                  DBF, c’est un studio qui est parti d’un projet sur les rêves
                  (Voir Mirage). Et puis on s’est dit : «pourquoi pas faire un
                  studio ?» alors on l’a fait. Venez découvrir DBF. La flèche
                  <br />
                  juste ici là. Là.
                </p>
              </div>
            </div>
          </div>

          <div class="pb-24 mt-10 relative">
            <Carousel
              v-bind="settings"
              :breakpoints="breakpoints"
              class="sm:pb-20 sm:pt-20"
            >
              <Slide v-for="slide in 6" :key="slide">
                <div class="carousel__item">
                  <img
                    class="h-30 w-60 px-2"
                    :src="`/images/domicile/${slide}.png`"
                  />
                </div>
              </Slide>

            </Carousel>

            <img src="/images/SVG/Flèche.svg" class="w-[52px] h-[52px] sm:w-[122px] sm:h-[122px] absolute top-0 sm:-right-12 -right-2 arrow-animation hover:animate-hoverArrow" />
          </div>
        </div>
        <div
          class="absolute bottom-0 left-0 right-0 w-full flex flex-row justify-center p-4 bg-customGray"
        >
          <p class="font-ibm sm:text-xs text-[8px] text-center text-black">
            Studio fondé en 2022 à Rennes par Gauthier Dumont, Guillaume Bour &
            Mathilde Faure, dans le cadre du Master 2 Directeur Artistique et
            Numérique LISAA de Rennes.
          </p>
        </div>
      </div>
      <p class="text-3xl font-medium pb-2">Petite Histoire</p>
      <hr class="mb-4 dark:border-white" />
      <p class="font-ibm italic xl:w-1/2 text-base mb-10">
        Gauthier a fait une licence gagna à Angers. Guillaume a multiplié les
        expériences et formations à Nior, Bordeaux, Nantes et Metz. Mathilde,
        fantôme à LISAA Rennes depuis 5 ans. Ils n’étaient pas destinés à se
        rencontrer, et pourtant les voici tous trois réunis à travailler pour
        obtenir leur diplôme final : le Mastère. Travailler ensemble coule de
        source, c’est pourquoi le studio graphique est né. Né d’une idée
        saugrenue de prolonger l’expérience du rêve, avant de rencontrer Tristan
        Moir et de se rendre compte que l’idée n’est pas saugrenue du tout. Elle
        est même carrément révolutionnaire (mais là, on s’emballe peut-être un
        peu). Pourquoi donc s’arrêter à un seul projet, lorsque l’on peut créer
        Studio DBF ?"
      </p>
      <p class="text-3xl font-medium pb-2">Les valeurs du studio</p>
      <hr class="mb-4 dark:border-white" />
      <div class="flex flex-row mb-5">
        <div>
          <p class="font-bold">Déconstruire</p>
          <p class="font-ibm text-left">
            Chaque sujet est décortiqué et analysé, afin de prendre du recul sur
            celui-ci et de choisir un axe innovant. Objectif de se démarquer en
            proposant une nouvelle approche, auquel on ne pense pas forcément.
          </p>
        </div>
        <div>
          <p class="font-bold">Bousculer</p>
          <p class="font-ibm text-left">
            On aime bousculer, cela ne fait aucun doute. Notre mantra est de
            toujours innover, proposer de nouvelles choses, et faire comprendre
            au client que le graphisme n’a aucune limite.
          </p>
        </div>
        <div>
          <p class="font-bold">Façonner</p>
          <p class="font-ibm text-left">
            Terme artisanal. Le studio est composé de passionnées qui aiment
            toucher à tout. Mais surtout, qui ne délaissera jamais le print au
            profit du web. Ça, JAMAIS : le graphiste est avant tout un artisan.
          </p>
        </div>
      </div>
      <p class="text-3xl font-medium pb-2">L'equipe</p>
      <hr class="mb-4 dark:border-white" />
      <div class="flex flex-row mb-5">
        <div>
          <div class="flex flex-row items-end pb-4">
            <p class="font-bold">Guillaume Bour, 25 ans</p>
            <img src="/images/TÊTE/guillaume.png" class="h-[181px]" alt="guillaume" />
          </div>
          <p class="font-ibm text-left">
            Guillaume est l’homme de la situation pour tout vos
            montages/Motion/illustration 3D. Toujours de bonne humeur, c’est un
            vrai rayon de soleil.
          </p>
        </div>
        <div>
          <div class="flex flex-row items-end pb-4">
            <p class="font-bold">Gauthier Dumont, 26 ans</p>
            <img src="/images/TÊTE/gauthier.png" class="h-[181px]" alt="gauthier" />
          </div>

          <p class="font-ibm text-left">
            Gauthier, llustrateur fou, aime la photographie et l’introspection.
            Son rêve ? Être en première ligne pour photographier les 24H du Man
            muni de son appareil argentique.
          </p>
        </div>
        <div>
          <div class="flex flex-row items-end pb-4">
            <p class="font-bold">Mathilde Faure, 23 ans</p>
            <img src="/images/TÊTE/mathilde.png" class="h-[181px]" alt="mathilde" />
          </div>
          <p class="font-ibm text-left">
            Mathilde voue un culte au minimalisme. Elle aime donner du sens à
            ses projets. Sa passion ? Se casser la tête avec la mise en page
            (print&web), elle ne s’arrête que quand elle est pleinement
            satisfaite.
          </p>
        </div>
      </div>
      <p class="text-3xl pb-2">Nos projets</p>
      <hr class="mb-4 dark:border-white" />
      <div class="flex flex-col w-full">
        <div class="flex flex-row w-full py-2 gap-3">
          <NuxtLink class="w-1/3" to="/teeshirt">
            <AwesomeImages img="/images/domicile/7.png" />
          </NuxtLink>
          <NuxtLink class="w-2/3" to="/logofolio">
            <AwesomeImages img="/images/domicile/8.png" />
          </NuxtLink>
        </div>
        <div class="flex flex-row w-full py-2 gap-3">
          <NuxtLink class="w-1/2" to="/mphotograohies">
            <AwesomeImages img="/images/domicile/9.png" />
          </NuxtLink>
          <NuxtLink class="w-1/2" to="/builtIinrennes">
            <AwesomeImages img="/images/domicile/10.png" />
          </NuxtLink>
        </div>
        <div class="flex flex-row w-full py-2 gap-3">
          <NuxtLink class="w-1/3" to="/message">
            <AwesomeImages img="/images/domicile/11.png" />
          </NuxtLink>
          <NuxtLink class="w-1/3" to="/chronos">
            <AwesomeImages img="/images/domicile/12.png" />
          </NuxtLink>
          <NuxtLink class="w-1/3" to="/mrbricolage">
            <AwesomeImages img="/images/domicile/13.png" />
          </NuxtLink>
        </div>
        <div class="flex flex-row w-full py-2 gap-3">
          <NuxtLink class="w-2/3" to="/photographies">
            <AwesomeImages img="/images/domicile/14.png" />
          </NuxtLink>
          <NuxtLink class="w-1/3" to="/showreel">
            <AwesomeImages img="/images/domicile/15.png" />
          </NuxtLink>
        </div>
      </div>
    </LayoutPageSection>
  </LayoutPageWrapper>
</template>
<style>
@keyframes hoverPathAnimation {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-hoverPathAnimation {
  animation-name: hoverPathAnimation;
  animation-duration: 1s; /* Adjust the duration as needed */
  animation-fill-mode: forwards;
}

.hover\:animate-hoverPathAnimation:hover {
  animation-name: hoverPathAnimation;
  animation-duration: 1s; /* Adjust the duration as needed */
  animation-fill-mode: forwards;
}
</style>
