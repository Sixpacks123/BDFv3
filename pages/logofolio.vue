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
      <img src="/images/LOGOFOLIO/1.png" class="pb-5" />
      <p class="text-5xl font-medium font-GrosTitre pb-2">Logofolio</p>
      <hr class="mb-4" />
      <p class="font-medium text-left text-black mb-2">
        Logo créés dans le cadre de sujets de cours, d’entreprise et de projets
        personnels
      </p>
      <p class="font-ibm italic xl:w-1/2 text-base mb-10">
        J’entretiens depuis peu une grande passion pour la conception des
        Logotypes. Représenter de la manière la plus juste et simple qui soit
        une identité. Simplifier, peaufiner les formes, la taille, leur
        intégration… Le logotype est pour moi le meilleur challenge qui soit :
        viser juste, et tirer bien.
      </p>
      <p class="text-3xl font-medium pb-2">À nos messages vocaux</p>
      <hr class="mb-4" />
      <p class="font-medium text-left text-black mb-2">Compte Instagram</p>

      <div class="grid grid-cols-2 gap-3 mb-5">
        <img src="/images/LOGOFOLIO/2.png" class="col-span-2" />
        <img src="/images/LOGOFOLIO/3.png" class="col-span-2 sm:col-span-1" />
        <img src="/images/LOGOFOLIO/4.png" class="col-span-2 sm:col-span-1" />
        <div class="col-span-2 bg-customBlack rounded-md py-5 px-5">
          <p class="font-medium font-Title2 text-left text-customGray mb-2">
            Brief
          </p>
          <p class="font-ibm text-base text-customGray">
            Logo à partir d’une identité graphique bien établie (voir projet
            ANMV). Le défi ici était de représenter les messages vocaux de
            manière humoristique et brute. Refléter à travers le concept un logo
            fort et reconnaissable. Choix du logo typographique qui peut
            paraître au premier regard à un logomark.
          </p>
        </div>
      </div>
      <p class="text-3xl font-medium pb-2">Datalab</p>
      <hr class="mb-4" />
      <p class="font-medium text-left text-black mb-2">
        Logo du Datalab de Crédit Agricole ECO
      </p>
      <div class="grid grid-cols-2 gap-3 mb-5">
        <img src="/images/LOGOFOLIO/5.png" class="col-span-2" />
        <img src="/images/LOGOFOLIO/6.png" class="col-span-2 sm:col-span-1" />
        <img src="/images/LOGOFOLIO/7.png" class="col-span-2 sm:col-span-1" />
        <div class="col-span-2 bg-customBlack rounded-md py-5 px-5">
          <p class="font-medium font-Title2 text-left text-customGray mb-2">
            Brief
          </p>
          <p class="font-ibm text-base text-customGray">
            Demande du client de réaliser un logotype pour le Datalab de Crédit
            Agricole ECO : une équipe constituée de deux Data Analyst, et d’une
            alternante. La demande était de réaliser quelque chose qui les
            ressemblait, tout en restant dans la charte graphique de Crédit
            Agricole. Je suis donc partie sur le « logomark » dans la même
            lignée que le logo du groupe, de même pour la typographie. Le but
            étant qu’il se fonde au mieux dans la signature.
          </p>
        </div>
      </div>

      <p class="text-3xl font-medium pb-2">Datalab</p>
      <hr class="mb-4" />
      <p class="font-medium text-left text-black mb-2">
        Logo du Datalab de Crédit Agricole ECO
      </p>
      <div class="grid grid-cols-2 gap-3 mb-5">
        <img src="/images/LOGOFOLIO/8.png" class="col-span-2" />
        <img src="/images/LOGOFOLIO/9.png" class="col-span-2 sm:col-span-1" />
        <img src="/images/LOGOFOLIO/10.png" class="col-span-2 sm:col-span-1" />
        <div class="col-span-2 bg-customBlack rounded-md py-5 px-5">
          <p class="font-medium font-Title2 text-left text-customGray mb-2">
            Brief
          </p>
          <p class="font-ibm text-base text-customGray">
            Projet de fin d’année de G4 à LISAA Rennes, en collaboration avec le
            TNB. Le principe était de créer un parcours interne au théâtre, pour
            permettre aux visiteurs de découvrir le TNB sans médium. Le logotype
            de ce parcours interne devait donc se fondre dans la charte
            graphique du TNB, tout an ayant une forte identité. À partir de la
            typographie choisie pour notre projet, j’ai réalisé un logo
            typographique dans le même principe que celui du TNB : jeu de
            rotation et d’une seule ligne.
          </p>
        </div>
      </div>

      <p class="text-3xl font-medium pb-2">Magali qu’est ce que tu fais ?</p>
      <hr class="mb-4" />
      <p class="font-medium text-left text-black mb-2">Taxes vertes</p>
      <div class="grid grid-cols-5 gap-3 mb-5">
        <img src="/images/LOGOFOLIO/11.png" class="col-span-5" />
        <img src="/images/LOGOFOLIO/12.png" class="col-span-1" />
        <img src="/images/LOGOFOLIO/13.png" class="col-span-1" />
        <img src="/images/LOGOFOLIO/14.png" class="col-span-1" />
        <img src="/images/LOGOFOLIO/15.png" class="col-span-1" />
        <img src="/images/LOGOFOLIO/16.png" class="col-span-1" />
        <div class="col-span-5 bg-customBlack rounded-md py-5 px-5">
          <p class="font-medium font-Title2 text-left text-customGray mb-2">
            Brief
          </p>
          <p class="font-ibm text-base text-customGray">
            Projet en collaboration avec des étudiants journalistes de Rennes.
            Le principe était de faire un article accessible sur les taxes
            vertes. Proposition de logo non retenu autour de Magali : personnage
            principal qui découvre le sujet avec nous. Pictogramme qui
            représente le personnage de manière humoristique, retranscrit
            également avec le cercle la terre qui l’entoure.
          </p>
        </div>
      </div>

      <p class="text-3xl font-medium pb-2">Capensolo</p>
      <hr class="mb-4" />
      <p class="font-medium text-left text-black mb-2">
        Identité graphique pour un Skipper
      </p>
      <div class="grid grid-cols-4 gap-3 mb-5">
        <img src="/images/LOGOFOLIO/17.png" class="col-span-5" />
        <img src="/images/LOGOFOLIO/18.png" class="col-span-1" />
        <img src="/images/LOGOFOLIO/19.png" class="col-span-1" />
        <img src="/images/LOGOFOLIO/20.png" class="col-span-1" />
        <img src="/images/LOGOFOLIO/21.png" class="col-span-1" />
        <div class="col-span-5 bg-customBlack rounded-md py-5 px-5">
          <p class="font-medium font-Title2 text-left text-customGray mb-2">
            Brief
          </p>
          <p class="font-ibm text-base text-customGray">
            Créer une identité graphique autour d’un Skipper
            « Transatlantikensolo » qui cherche des sponsors pour sa course. Le
            logo est combiné de plusieurs éléments typiques du métier ainsi que
            de son bateau. Le naming "Capensolo » est né de ces éléments là.
            Transatlantikensolo était premièrement complexe tant dans la
            pronomciation que visuellement, mais aussi était déstiné qu’à un
            évènement, ici, avec capensolo, cela devient la marque de farbique
            du skipper, il est donc intemporel.
          </p>
        </div>
      </div>
      <p class="text-3xl font-medium pb-2">Hugo Aloche</p>
      <hr class="mb-4" />
      <p class="font-medium text-left text-black mb-2">
        Identité graphique pour un développeur web
      </p>
      <div class="grid grid-cols-2 gap-3 mb-5">
        <img src="/images/LOGOFOLIO/22.png" class="col-span-2" />
        <img src="/images/LOGOFOLIO/23.png" class="col-span-2 sm:col-span-1" />
        <img src="/images/LOGOFOLIO/24.png" class="col-span-2 sm:col-span-1" />
        <div class="col-span-2 bg-customBlack rounded-md py-5 px-5">
          <p class="font-medium font-Title2 text-left text-customGray mb-2">
            Brief
          </p>
          <p class="font-ibm text-base text-customGray">
            Créer une identité graphique pour un studio de designers Print et
            Web. Représentation du mouvement par le motions, mais aussi de
            l’encre qui coule pour le côté Print. Le logo est construit à la
            manière dont un graphiste reçoit un brief. Il le travaille, le
            façonne, jusqu’à en tirer le meilleur, cadré par son expertise.
            Apect presque poétique du logo, chacun y trouve son interprétation.
          </p>
        </div>
      </div>

      <p class="text-3xl font-medium pb-2">Fantabuleux Studio</p>
      <hr class="mb-4" />
      <p class="font-medium text-left text-black mb-2">
        Identité graphique pour un studio graphique
      </p>
      <div class="grid grid-cols-2 gap-3 mb-5">
        <img src="/images/LOGOFOLIO/25.png" class="col-span-2" />
        <img src="/images/LOGOFOLIO/26.png" class="col-span-2 sm:col-span-1" />
        <img src="/images/LOGOFOLIO/27.png" class="col-span-2 sm:col-span-1" />
        <div class="col-span-2 bg-customBlack rounded-md py-5 px-5">
          <p class="font-medium font-Title2 text-left text-customGray mb-2">
            Brief
          </p>
          <p class="font-ibm text-base text-customGray">
            Créer une identité graphique pour un studio de designers Print et
            Web. Représentation du mouvement par le motions, mais aussi de
            l’encre qui coule pour le côté Print. Le logo est construit à la
            manière dont un graphiste reçoit un brief. Il le travaille, le
            façonne, jusqu’à en tirer le meilleur, cadré par son expertise.
            Apect presque poétique du logo, chacun y trouve son interprétation.
          </p>
        </div>
      </div>
      <p class="text-3xl font-medium pb-2">Belle arrivée</p>
      <hr class="mb-4" />
      <p class="font-medium text-left text-black mb-2">
        IIdentité graphique pour une opticienne
      </p>
      <div class="grid grid-cols-2 gap-3 mb-5">
        <img src="/images/LOGOFOLIO/28.png" class="col-span-2" />
        <img src="/images/LOGOFOLIO/29.png" class="col-span-2 sm:col-span-1" />
        <img src="/images/LOGOFOLIO/30.png" class="col-span-2 sm:col-span-1" />
        <div class="col-span-2 bg-customBlack rounded-md py-5 px-5">
          <p class="font-medium font-Title2 text-left text-customGray mb-2">
            Brief
          </p>
          <p class="font-ibm text-base text-customGray">
            Création d’une identité graphique pour une Opticienne « Optique Belle arrivée ». Son magasin vient d’être rénové dans des ton de verts, doré, avec du bois. Esprit chaleureux donc. Jeux sur le côté féminin et poétique du Lieu-dit Belle Arrivée afin de se démarquer de ses concurrents. Typographie Serif pour la prestence. Un gros travail sur les arrondis, le lien, l’imbriquation du « é » et du « i » pour avoir une signature délicate et juste.
          </p>
        </div>
      </div>
    </LayoutPageSection>
  </LayoutPageWrapper>
</template>
