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
      <img src="/images/CHRONOS/1.png" class="pb-5" />
      <p class="text-5xl font-medium font-GrosTitre pb-2">Chronos</p>
      <hr class="mb-4" />
      <p class="font-medium text-left text-black mb-2">Chronos</p>
      <p class="font-ibm italic xl:w-1/2 text-base mb-10">
        Je suis ravi de vous présenter un appel à projet de création du naming
        et d’identité visuelle pour l’entreprise de bière millésimée premium. La
        particularité de cette bière est qu’elle peut vieillir grâce à un
        procédé secret. Il était demandé de faire le packaging de 2 type de
        bière, la version classique avec une étiquette simple et la version plus
        luxueuse avec un packaging différent. Mon projet a été choisi parmi 22
        projets différents.
      </p>
      <p class="text-3xl font-medium pb-2">Identité graphique</p>
      <hr class="mb-4" />
      <p class="font-medium text-left text-black mb-2">Logotype</p>
      <img src="/images/CHRONOS/2.png" class="mb-5" />
      <hr class="mb-4" />
      <p class="font-medium text-left text-black mb-2">
        Affiche promotionnelle
      </p>
      <img src="/images/CHRONOS/7.png" class="pb-5" />
      <p class="text-3xl font-medium pb-2">Bouteille</p>

      <hr class="mb-4" />
      <p class="font-medium text-left text-black mb-2">Classique</p>
      <img src="/images/CHRONOS/3.png" class="pb-5" />
      <hr class="mb-4" />
      <p class="font-medium text-left text-black mb-2">Tchanquée</p>
      <img src="/images/CHRONOS/4.png" class="mb-5" />
      <hr class="mb-4" />
      <p class="font-medium text-left text-black mb-2">Boite en bois</p>
      <img src="/images/CHRONOS/5.png" class="mb-5" />
      <hr class="mb-4" />
      <p class="font-medium text-left text-black mb-2">Boite en bois</p>
      <img src="/images/CHRONOS/6.png" class="mb-5" />
    </LayoutPageSection>
  </LayoutPageWrapper>
</template>
