<script lang="ts" setup>
definePageMeta({ layout: 'page' })
useHead({ titleTemplate: 'Mirage' })
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
              class="col-span-12 sm:col-span-6 lg:col-span-8 xl:col-span-9 text-4xl md:text-5xl xl:text-8xl font-title font-medium tracking-normal sm:pb-20"
            >
              Mirage, une édition
              <br />
              en hymne aux rêves
            </h1>
            <div class="col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-3">
              <div class="sm:mt-24">
                <hr class="mb-4 bg-black" />
                <p class="font-ibm text-left text-sm sm:text-base">
                  Projet d’étude de Master 2 Direction Artistique & Numérique.
                  Ambition de prolonger le rêve graphiquement via
                  l’illustration, le motion et le sound
                  <br />
                  design.
                </p>
              </div>
            </div>
          </div>
          <div class="pb-24">
            <div
              class="flex flew-row w-full justify-between pb-20 pt-20 flex-end"
            >
              <img class="h-30 w-60" src="/images/domicile/1.png" />
              <img class="h-30 w-60" src="/images/domicile/2.png" />
              <img class="h-30 w-60" src="/images/domicile/3.png" />
              <img class="h-30 w-60" src="/images/domicile/4.png" />
              <img class="h-30 w-60" src="/images/domicile/5.png" />
              <img class="h-30 w-60" src="/images/domicile/6.png" />
            </div>
          </div>
        </div>
        <div
          class="absolute bottom-0 left-0 right-0 w-full flex flex-row justify-center p-4 bg-customGray"
        >
          <p class="font-ibm text-xs text-center">
            Le rêve est une projection objective de la réalité, la seule qui
            puisse nous permettre de discerner le mensonge intrinsèque à la
            perception subjective de la réalité.
          </p>
        </div>
      </div>
      <p class="text-3xl font-medium pb-2">Le projet</p>
      <hr class="mb-4" />
      <p class="font-ibm italic xl:w-2/3 text-base mb-10">
        Dans le cadre de notre projet de fin d’étude Mastère 2 Direction
        Artistique et Numérique à Lisaa Rennes, Gauthier, Guillaume et moi-même
        avons décidé de travailler sur les rêves. C’est leur caractère éphémère
        et à première vue folklorique qui nous ont séduit. Nous voulions un
        sujet qui sorte du cadre, et qui fasse “rêver” (où du moins réfléchir).
      </p>
      <p class="font-bold">Mission</p>
      <p class="font-ibm italic xl:w-2/3 text-base mb-10">
        Mission Notre mission est de prolonger les rêves par une interprétation
        graphique et immersive de celui-ci. Pour y arriver nous utilisons
        l’illustration, le motion design et le sound-design. Ces illustrations
        sont sur la base d’un rêve que nous recevons (nous avons mis en place un
        appel à rêves sur les réseaux-sociaux). Rêves et illustrations sont
        intégrées dans une édition graphique “Mirage” qui rassemble au total 15
        rêves sélectionnés. À l’aide du téléphone, les images pourront être
        scannées et alors l’animation apparaîtra.
      </p>
      <p class="font-bold">Objectif</p>

      <p class="font-ibm italic xl:w-2/3 text-base mb-10">
        Objectif Cette édition graphique est réalisée dans le but de
        sensibiliser à l’importance du rêve. En effet, nous avons eu la chance
        de nous entretenir avec Tristan Moir, psychanalyste spécialiste du rêve,
        qui traite ses patients par l’analyse de leur rêve. Par une analyse de
        chacun de nos rêves récurrents d’enfant, nous avons été saisis par la
        justesse de ses propos. Nous avons alors découvert l’importance des
        rêves sur la vie quotidienne du rêveur, et qu’il était primordial pour
        lui d’avoir sa signification
      </p>
      <p class="font-bold">Plus Loin</p>

      <p class="font-ibm italic xl:w-2/3 text-base mb-10">
        Plus loin Si le projet est amené à être commercialisé et pour aller plus
        loin : alors travailler en partenariat avec Tristan Moir. Nous aurions
        des témoignages de rêve, ceux-ci analysés par Tristan Moir (au cours
        d’une séance), et notre interprétation graphique : le tout dans une
        série d’éditions. Cela permettrait donc de sensibiliser davantage les
        lecteurs, et d’initier à l’analyse des rêves.
      </p>

      <p class="text-3xl font-medium pb-2">Les valeurs du studio</p>
      <hr class="mb-4" />
      <div class="flex flex-row flex-wrap mb-5">
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
