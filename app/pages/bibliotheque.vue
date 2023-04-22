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
              Notre bibliothèque <br />
              DBF garnie
            </h1>
            <div class="col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-3">
              <div class="mt-12">
                <hr class="mb-4 text-blackÒ" />
                <p class="font-ibm text-left">
                  Nos projets les plus qualitatifs signé DBF. Projets de classe,
                  professionnel ou personnel, vous ne manquerez pas de vous
                  extasier devant la diversité des expertises.
                </p>
              </div>
            </div>
          </div>
          <div
            class="flex flew-row w-full justify-between flex-end pb-20 pt-20"
          >
            <img class="" src="/images/BIBLI/1.png" />
            <img class="h-30 w-60" src="/images/BIBLI/2.png" />
            <img class="h-30 w-60" src="/images/BIBLI/3.png" />
            <img class="h-30 w-60" src="/images/BIBLI/4.png" />
            <img class="h-30 w-60" src="/images/BIBLI/5.png" />
            <img class="h-30 w-60" src="/images/BIBLI/6.png" />
          </div>
        </div>
        <div
          class="absolute bottom-0 left-0 right-0 w-full flex flex-row justify-center font-ibm p-4 bg-customGray"
        >
          Motion design / Vidéo / logotype / Identités graphiques /
          Photographies / 3D / Mise en page / Arts plastiques
        </div>
      </div>
      <p class="text-3xl font-medium font-GrosTitre pb-2">D</p>
      <hr class="mb-4" />
      <div class="flex flex-row justify-between mb-3">
        <p class="text-left font-Title3 mb-2">Dumont Gauthier</p>
        <p class="text-left font-ibm mb-2">1.</p>
      </div>
      <div class="grid grid-cols-3 gap-x-4">
        <div>
          <NuxtLink to="/teeshirt">
            <AwesomeImages img="/images/BIBLI/7.png" class="mb-5" />
          </NuxtLink>
          <p class="text-left font-Title2 mb-2">Tee-shirt</p>
          <hr class="mb-4" />
        </div>
        <div>
          <NuxtLink to="/teeshirt">
            <AwesomeImages img="/images/BIBLI/8.png" class="mb-5" />
          </NuxtLink>
          <p class="text-left font-Title2 mb-2">Photographie</p>
          <hr class="mb-4" />
        </div>
        <div>
          <NuxtLink to="/teeshirt">
            <AwesomeImages img="/images/BIBLI/9.png" class="mb-5" />
          </NuxtLink>
          <p class="text-left font-Title2 mb-2">Built In Rennes</p>
          <hr class="mb-4" />
        </div>
      </div>
      <p class="text-3xl font-medium font-GrosTitre pb-2">B</p>
      <hr class="mb-4" />
      <div class="flex flex-row justify-between mb-3">
        <p class="text-left font-Title3 mb-2">Bour Guillaume</p>
        <p class="text-left font-ibm mb-2">2.</p>
      </div>
      <div class="grid grid-cols-3 gap-x-4">
        <div>
          <NuxtLink to="/teeshirt">
            <AwesomeImages img="/images/BIBLI/10.png" class="mb-5" />
          </NuxtLink>
          <p class="text-left font-Title2 mb-2">Chronos</p>
          <hr class="mb-4" />
        </div>
        <div>
          <NuxtLink to="/teeshirt">
            <AwesomeImages img="/images/BIBLI/11.png" class="mb-5" />
          </NuxtLink>
          <p class="text-left font-Title2 mb-2">Showreel</p>
          <hr class="mb-4" />

        </div>
        <div>
          <NuxtLink to="/teeshirt">
            <AwesomeImages img="/images/BIBLI/12.png" class="mb-5" />
          </NuxtLink>
          <p class="text-left font-Title2 mb-2">Titre du projet</p>
          <hr class="mb-4" />
        </div>
      </div>
      <p class="text-3xl font-medium font-GrosTitre pb-2">F</p>
      <hr class="mb-4" />
      <div class="flex flex-row justify-between mb-3">
        <p class="text-left font-Title3 mb-2">Faure Mathilde</p>
        <p class="text-left font-ibm mb-2">3.</p>
      </div>
      <div class="grid grid-cols-3 gap-x-4">
        <div>
          <NuxtLink to="/teeshirt">
            <AwesomeImages img="/images/BIBLI/13.png" class="mb-5" />
          </NuxtLink>
          <p class="text-left font-Title2 mb-2">Photographies</p>
          <hr class="mb-4" />
        </div>
        <div>
          <NuxtLink to="/teeshirt">
            <AwesomeImages img="/images/BIBLI/14.png" class="mb-5" />
          </NuxtLink>
          <p class="text-left font-Title2 mb-2">À nos messages vocaux</p>
          <hr class="mb-4" />
        </div>
        <div>
          <NuxtLink to="/teeshirt">
            <AwesomeImages img="/images/BIBLI/15.png" class="mb-5" />
          </NuxtLink>
          <p class="text-left font-Title2 mb-2">Logofolio</p>
          <hr class="mb-4" />
        </div>
      </div>
    </LayoutPageSection>
  </LayoutPageWrapper>
</template>
