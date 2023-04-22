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
      <img src="/images/PHOTOGRAPHIE/1.png" class="pb-5" />
      <p class="text-5xl font-medium font-GrosTitre pb-2">Photographies</p>
      <hr class="mb-4" />
      <p class="font-medium text-left text-black mb-2">
        Pellicule HP5, Objectif 50mm
      </p>
      <p class="font-ibm italic xl:w-1/2 text-base mb-10">
        Je ne suis pas très expansif, la photographie est pour moi un moyen
        tierce de m’exprimer. Je suis très analytique, j’observe plus que je
        n’interagis avec ce qui m’entoure. La photographie me permet de capturer
        mon environnement et ainsi, exprimer ce que je ressens à travers. Une
        matière qui attire mon attention, exploitable graphiquement, un intérêt
        sur tel ou tel objet, ou parfois juste une carde que je trouve beau. Mes
        photos sont de manière générale assez minimaliste, je privilégie le Noir
        et Blanc, mais pas tout le temps. Je dirais que mes photos sont assez
        poétiques, et à caractère personnel.
      </p>
      <p class="text-3xl font-medium pb-2">Bretagne Noire</p>
      <hr class="mb-4" />
      <p class="font-medium text-left text-black mb-2">
        Pellicule HP5, Objectif 50mm
      </p>
      <p class="font-ibm italic xl:w-1/2 text-base mb-10">
        Projet atour de la photographie argentique noir et blanc sur les terres
        bretonnes. Commencé au cours de l’année 2021. Ce projet sur 2 ans a pour
        objectif de faire voyager le lecteur dans différents recoins de la
        Bretagne et par le biais du noir et blanc et de l’argentique transmettre
        les émotions que la Bretagne elle seule à le secret.
      </p>
      <div class="grid grid-cols-2 gap-3 mb-5">
        <img
          src="/images/PHOTOGRAPHIE/2.png"
          class="col-span-2 sm:col-span-1"
        />
        <img
          src="/images/PHOTOGRAPHIE/3.png"
          class="col-span-2 sm:col-span-1"
        />
        <img
          src="/images/PHOTOGRAPHIE/4.png"
          class="col-span-2 sm:col-span-1"
        />
        <img
          src="/images/PHOTOGRAPHIE/5.png"
          class="col-span-2 sm:col-span-1"
        />
        <img
          src="/images/PHOTOGRAPHIE/6.png"
          class="col-span-2 sm:col-span-1"
        />
        <img
          src="/images/PHOTOGRAPHIE/7.png"
          class="col-span-2 sm:col-span-1"
        />
        <img
          src="/images/PHOTOGRAPHIE/8.png"
          class="col-span-2 sm:col-span-1"
        />
        <img
          src="/images/PHOTOGRAPHIE/9.png"
          class="col-span-2 sm:col-span-1"
        />
      </div>
      <p class="text-3xl font-GrosTitre pb-2">Automobil</p>
      <hr class="mb-4" />
      <p class="font-medium font-Title2 text-left mb-2">Porsche since 1931</p>
      <p class="font-ibm italic xl:w-1/2 text-base mb-10">
        Cette série de photo rend hommage à la célèbre marque automobile
        Porsche. Mise au point et focus sur les détails de ces véhicules
        légendaires qui ont marqué l’histoire de l’automobile et qui font encore
        aujourd’hui la fierté de l’Allemagne. Porsche c’est une histoire, une
        passion, née de l’ingénieur Ferdinand Porsche qui ferra de cette idée la
        marque de prestige d’aujourd’hui.
      </p>
      <div class="grid grid-cols-2 gap-3 mb-5">
        <img
          src="/images/PHOTOGRAPHIE/10.png"
          class="col-span-2 sm:col-span-1"
        />
        <img
          src="/images/PHOTOGRAPHIE/11.png"
          class="col-span-2 sm:col-span-1"
        />
      </div>
      <p class="text-3xl font-GrosTitre pb-2">Divers</p>
      <hr class="mb-4" />
      <p class="font-medium font-Title2 text-left mb-2">
        Pellicule HP5, Objectif 50mm
      </p>
      <div class="grid grid-cols-2 gap-3 mb-5">
        <img
          src="/images/PHOTOGRAPHIE/12.png"
          class="col-span-2 sm:col-span-1"
        />
        <img
          src="/images/PHOTOGRAPHIE/13.png"
          class="col-span-2 sm:col-span-1"
        />
        <img
          src="/images/PHOTOGRAPHIE/14.png"
          class="col-span-2 sm:col-span-1"
        />
        <img
          src="/images/PHOTOGRAPHIE/15.png"
          class="col-span-2 sm:col-span-1"
        />
        <img
          src="/images/PHOTOGRAPHIE/16.png"
          class="col-span-2 sm:col-span-1"
        />
        <img
          src="/images/PHOTOGRAPHIE/17.png"
          class="col-span-2 sm:col-span-1"
        />
      </div>
    </LayoutPageSection>
  </LayoutPageWrapper>
</template>
