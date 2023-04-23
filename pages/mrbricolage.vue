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
      <img src="/images/MCFLY&CARLITO/1.png" class="pb-5" />
      <p class="text-5xl font-medium font-GrosTitre pb-2">
        Mr Bricolage x Mcfly et Carlito
      </p>
      <hr class="mb-4 dark:border-white" />
      <p class="font-medium text-left text-black mb-2">Showreel</p>
      <p class="font-ibm italic xl:w-1/2 text-base mb-10">
        Ici, je vais vous présenter une collaboration entre internet et une
        entreprise. Le Projet à vu le jour lors d’un Mario Kart Bleu, celui qui
        perd à Mario kart doit donner ça carte bleu afin d’acheter quelque
        chose. Mcfly et Carlito ont acheté une maison à Bizeneuille après la
        défaite de Joyca. C’est ici que Mr Bricolage a décidé de les accompagner
        en fournissant des conseils et du matériel. Il m’a été demandé de faire
        deux publications pour le compte de Mr Bircolage. Une première pour
        mettre en avant la vidéo de Mcfly et Carlito sur Youtube. Puis la
        deuxième pour un jeu concours pour Mr Bricolage.
      </p>
      <p class="text-3xl font-medium pb-2">Storyboard</p>
      <hr class="mb-4 dark:border-white" />
      <p class="font-medium text-left text-black mb-2">N°1</p>
      <img src="/images/MCFLY&CARLITO/2.png" class="mb-5" />
      <hr class="mb-4 dark:border-white" />
      <p class="font-medium text-left text-black mb-2">N°2</p>
      <img src="/images/MCFLY&CARLITO/3.png" class="mb-5" />
      <hr class="mb-4 dark:border-white" />
      <p class="font-medium text-left text-black mb-2">Vidéo</p>
      <img src="/images/MCFLY&CARLITO/4.png" class="mb-5" />
      <div class="player-container">
        <div class="grid grid-cols-2 gap-3 mb-5">
          <div class="video-player col-span-2 sm:col-span-1">
            <video controls>
              <source src="/video/mcfly/1.mp4" type="video/mp4" />
            </video>
          </div>
          <div class="video-player col-span-2 sm:col-span-1">
            <video controls>
              <source src="/video/mcfly/2.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </LayoutPageSection>
  </LayoutPageWrapper>
</template>
<style>
video {
  width: 100%;
}
</style>
