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
      <img src="/images/message/1.png" class="pb-5" />
      <p class="text-5xl font-medium font-GrosTitre pb-2">
        À nos messages vocaux
      </p>
      <hr class="mb-4" />
      <p class="font-medium text-left text-black mb-2">
        Compilation à la vice de tous les messages reçus
      </p>
      <p class="font-ibm italic xl:w-1/2 text-base mb-10">
        Qui n’a jamais reçu de message vocal après avoir raté un appel ?
        Certains sont neutres, comme un rappel de rendez-vous. D’autre
        légèrement angoissant, tel une mère crispée qui nous demande de rentrer.
        Et certains (les meilleurs) de nos amis et de leur état d’ébriété, qui
        nous rappellent que la vie est belle et qu’on est chéri (de manière plus
        ou moins compréhensible). Les messages vocaux sont des trésors à
        conserver précieusement, des monologues rien que pour nous. Totalement
        sous-côtés et carrément exploitables pour des graphistes qui aiment
        jouer avec les émotions.
      </p>
      <img src="/images/message/2.gif" class="pb-5" />
      <p class="text-3xl font-medium pb-2">Identité graphique</p>
      <hr class="mb-4" />
      <p class="font-medium text-left text-black mb-2">Logo</p>
      <div class="grid grid-cols-2 gap-3 mb-5">
        <img src="/images/message/3.png" class="col-span-2" />
        <img src="/images/message/4.png" class="col-span-2 sm:col-span-1" />
        <img src="/images/message/5.png" class="col-span-2 sm:col-span-1" />
      </div>
      <hr class="mb-4" />
      <p class="font-medium text-left text-black mb-2">Typographie</p>
      <div class="col-span-2 bg-customBlack rounded-md mb-5 py-5 px-5">
        <p class="font-medium font-Title2 text-left text-customGray mb-2">
          Brief
        </p>
        <p class="font-ibm text-base text-customGray">
          Création d’une identité graphique pour une Opticienne « Optique Belle
          arrivée ». Son magasin vient d’être rénové dans des ton de verts,
          doré, avec du bois. Esprit chaleureux donc. Jeux sur le côté féminin
          et poétique du Lieu-dit Belle Arrivée afin de se démarquer de ses
          concurrents. Typographie Serif pour la prestence. Un gros travail sur
          les arrondis, le lien, l’imbriquation du « é » et du « i » pour avoir
          une signature délicate et juste.
        </p>
      </div>
      <hr class="mb-4" />
      <p class="font-medium text-left text-black mb-2">Post instagram</p>
      <div class="grid grid-cols-3 gap-3 mb-5">
        <img src="/images/message/6.png" class="col-span-2 sm:col-span-1" />
        <img src="/images/message/7.png" class="col-span-2 sm:col-span-1" />
        <img src="/images/message/8.png" class="col-span-2 sm:col-span-1" />
      </div>
      <p class="text-5xl font-medium font-GrosTitre pb-2">Vidéo</p>
      <hr class="mb-4" />
      <div class="grid grid-cols-2 gap-3 mb-5">
        <div class="col-span-2 sm:col-span-1">
          <p class="text-3xl font-medium pb-2">Nicolas</p>
          <hr class="mb-4" />
          <p class="font-medium text-left text-black mb-2">« Je suis une sous merde »</p>
          <div class="video-player">
            <video controls>
              <source src="/video/message/Comprends_rien.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
        <div class="col-span-2 sm:col-span-1">
          <p class="text-3xl font-medium pb-2">??</p>
          <hr class="mb-4" />
          <p class="font-medium text-left text-black mb-2">« Franchement je comprends rien »</p>
          <div class="video-player">
            <video controls>
              <source src="/video/message/Sous_merde.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
        <div class="col-span-2 sm:col-span-1">
          <p class="text-3xl font-medium pb-2">Maman</p>
          <hr class="mb-4" />
          <p class="font-medium text-left text-black mb-2">« Descends du train »</p>
          <div class="video-player">
            <video controls>
              <source src="/video/message/Descend_train.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
        <div class="col-span-2 sm:col-span-1">
          <p class="text-3xl font-medium pb-2">Swann</p>
          <hr class="mb-4" />
          <p class="font-medium text-left text-black mb-2">« J’ai pas fais exprès »</p>
          <div class="video-player">
            <video controls>
              <source src="/video/message/Swann.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
        <div class="col-span-2 sm:col-span-1">
          <p class="text-3xl font-medium pb-2">Nicolas</p>
          <hr class="mb-4" />
          <p class="font-medium text-left text-black mb-2">« Speed Mouse »</p>
          <div class="video-player">
            <video controls>
              <source src="/video/message/Speedmouse.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
        <div class="col-span-2 sm:col-span-1">
          <p class="text-3xl font-medium pb-2">Maman</p>
          <hr class="mb-4" />
          <p class="font-medium text-left text-black mb-2">« Je vais te gueuler dessus »</p>
          <div class="video-player">
            <video controls>
              <source src="/video/message/Te_gueuler_dessus.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
        <div class="col-span-2 sm:col-span-1">
          <p class="text-3xl font-medium pb-2">Nicolas</p>
          <hr class="mb-4" />
          <p class="font-medium text-left text-black mb-2">« Lien pour le truc »</p>
          <div class="video-player">
            <video controls>
              <source src="/video/message/Lien.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
        <div class="col-span-2 sm:col-span-1">
          <p class="text-3xl font-medium pb-2">Nicolas</p>
          <hr class="mb-4" />
          <p class="font-medium text-left text-black mb-2">« Les aventures»</p>
          <div class="video-player">
            <video controls>
              <source src="/video/message/Les_aventures.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </LayoutPageSection>
  </LayoutPageWrapper>
</template>
