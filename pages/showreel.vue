<script lang="ts" setup>
definePageMeta({ layout: 'page',colorMode: 'light'})
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
      <img src="/images/SHOWREEL/1.png" class="pb-5" />
      <p class="text-5xl font-medium font-GrosTitre pb-2">Showreel</p>
      <hr class="mb-4 dark:border-white" />
      <p class="font-medium text-left text-black mb-2">Showreel</p>
      <p class="font-ibm italic xl:w-1/2 text-base mb-10">
        Un showreel est une courte vidéo qui présente une sélection des meilleures réalisations d’un professionnel ou d’une entreprise dans un domaine créatif, comme le cinéma, la télévision, la publicité, le design graphique, etc. Le but du showreel est de démontrer les compétences et le style de travail de la personne ou de l’entreprise pour convaincre des clients potentiels ou des employeurs de leur faire confiance pour un projet. C’est un outil de marketing très utilisé dans les industries créatives pour se faire remarquer et se démarquer de la concurrence.
      </p>
      <p class="text-3xl font-medium pb-2">Stylefram</p>
      <hr class="mb-4 dark:border-white" />
      <p class="font-medium text-left text-black mb-2">Showreel</p>
      <img src="/images/SHOWREEL/2.png" class="mb-5" />
      <hr class="mb-4 dark:border-white" />
      <p class="font-medium text-left text-black mb-2">
        Showreel
      </p>
      <!-- video -->
      <div class="video-player">
        <video controls>
          <source src="/video/shoreel/1.mp4" type="video/mp4" />
        </video>
      </div>

    </LayoutPageSection>
  </LayoutPageWrapper>
</template>
