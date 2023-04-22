<script lang="ts" setup>
definePageMeta({ layout: 'page' })
</script>

<template>
  <LayoutPageWrapper>
    <LayoutPageSection>
      <div
        class="h-screen w-full py-10 sm:py-20 flex items-center sm:items-end"
      >
        <div class="mb-2">
          <div class="grid grid-cols-12 gap-4">
            <h1
              class="col-span-12 sm:col-span-6 lg:col-span-8 xl:col-span-9 text-4xl md:text-5xl xl:text-8xl font-title font-medium tracking-normal pb-20"
            >
              Studio expérimental <br />
              & design graphique
            </h1>
            <div class="col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-3">
              <div class="mt-12">
                <hr class="mb-4 text-blackÒ" />
                <p class="font-ibm text-left">
                  DBF, c’est un studio qui est parti d’un projet sur les rêves (Voir Mirage). Et puis on s’est dit : «pourquoi pas faire un studio ?» alors on l’a fait. Venez découvrir DBF. La flèche <br/> juste ici là. Là.
                </p>
              </div>
            </div>
          </div>
          <div
            class="flex flew-row w-full justify-between flex-end pb-20 pt-20"
          >
            <img class="" src="/images/domicile/1.png" />
            <img class="h-30 w-60" src="/images/domicile/2.png" />
            <img class="h-30 w-60" src="/images/domicile/3.png" />
            <img class="h-30 w-60" src="/images/domicile/4.png" />
            <img class="h-30 w-60" src="/images/domicile/5.png" />
            <img class="h-30 w-60" src="/images/domicile/6.png" />
          </div>
        </div>
        <div
          class="absolute bottom-0 left-0 right-0 w-full flex flex-row justify-center p-4 bg-customGray"
        >
          Studio fondé en 2022 à Rennes par Gauthier Dumont, Guillaume Bour &
          Mathilde Faure, dans le cadre du Master 2 Directeur Artistique et
          Numérique LISAA de Rennes.
        </div>
      </div>
      <p class="text-3xl font-medium pb-2">Petite Histoire</p>
      <hr class="mb-4" />
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
      <hr class="mb-4" />
      <div class="flex flex-row wrap mb-5">
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
      <p class="text-3xl pb-2">Nos projets</p>
      <hr class="mb-4" />
      <div class="flex flex-col w-full">
        <div class="flex flex-row w-full py-2 gap-3">
          <AwesomeImages class="w-1/3" img="/images/domicile/7.png" />
          <AwesomeImages class="w-2/3" img="/images/domicile/8.png" />
        </div>
        <div class="flex flex-row w-full py-2 gap-3">
          <AwesomeImages class="w-1/2" img="/images/domicile/9.png" />
          <AwesomeImages class="w-1/2" img="/images/domicile/10.png" />
        </div>
        <div class="flex flex-row w-full py-2 gap-3">
          <AwesomeImages class="w-1/3" img="/images/domicile/11.png" />
          <AwesomeImages class="w-1/3" img="/images/domicile/12.png" />
          <AwesomeImages class="w-1/3" img="/images/domicile/13.png" />
        </div>
        <div class="flex flex-row w-full py-2 gap-3">
          <AwesomeImages class="w-2/3" img="/images/domicile/14.png" />
          <AwesomeImages class="w-1/3" img="/images/domicile/15.png" />
        </div>
      </div>
    </LayoutPageSection>
  </LayoutPageWrapper>
</template>
