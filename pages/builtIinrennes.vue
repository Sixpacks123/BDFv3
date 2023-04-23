<script lang="ts" setup>
definePageMeta({ layout: 'page' })
</script>

<template>
  <LayoutPageWrapper>
    <LayoutPageSection>
      <div class="py-4 cursor-pointer">
        <img
          class="hover:animate-spin"
          src="/images/fleche2.png"
          @click="navigateTo('/')"
        />
      </div>
      <img src="/images/BUILT_IN_RENNES/1.png" class="pb-5" />
      <p class="text-5xl font-medium font-GrosTitre pb-2">Built In Rennes</p>
      <hr class="mb-4 dark:border-white" />
      <p class="font-medium text-left text-black mb-2">
        La menace du réchauffement climatique
      </p>
      <p class="font-ibm italic xl:w-1/2 text-base mb-10">
        BIR (Built In Rennes), est un concept visant à promouvoir l’architecture
        Rennaise via différentes photographies des lieux. Grâce à la réalitée
        augmentée, BIR propose de voir de chez sois les différentes maquettes 3D
        des bâtiments, de se projeter et d’en analyser les caractéristiques.
        Prenez votre téléphone et découvrez l’architecture de Rennes comme si
        vous y étiez.
      </p>
      <p class="text-3xl font-medium pb-2">Identité graphique</p>
      <hr class="mb-4 dark:border-white" />
      <p class="font-medium text-left text-black mb-2">
        Logotype
      </p>
      <img src="/images/BUILT_IN_RENNES/2.png" class="mb-5" />
      <hr class="mb-4 dark:border-white" />
      <p class="font-medium text-left text-black mb-2">
        Affiche promotionnelle
      </p>
      <img src="/images/BUILT_IN_RENNES/3.png" class="pb-5" />
      <p class="text-3xl font-medium pb-2">Application</p>
      <hr class="mb-4 dark:border-white" />
      <p class="font-medium text-left text-black mb-2">
        Mockup
      </p>
      <img src="/images/BUILT_IN_RENNES/4.png" class="mb-5" />
      <img src="/images/BUILT_IN_RENNES/5.png" class="mb-5" />
    </LayoutPageSection>
  </LayoutPageWrapper>
</template>
