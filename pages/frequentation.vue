<script lang="ts" setup>
definePageMeta({ layout: 'page' })
useHead({ titleTemplate: 'Mirage' })
</script>
<template>
  <LayoutPageWrapper>
    <LayoutPageSection>
      <div class="w-full flex">
        <div class="mb-2">
          <div class="grid grid-cols-2 grid-rows-2 gap-0">
            <div class="div2 col-span-1 row-span-1">
              <div class="flex flex-col">
                <h1
                  class="text-4xl md:text-5xl xl:text-8xl font-title font-medium tracking-normal sm:pb-20"
                >
                  Un Projet ?<br />
                  Une Idée ?
                </h1>
                <div class="px-24 ">
                  <hr class="mb-4 dark:border-white" />
                  <p class="font-ibm text-left text-sm sm:text-base ">
                    DBF, c’est un studio qui est parti d’un projet sur les rêves
                    (Voir Mirage). Et puis on s’est dit : «pourquoi pas faire un
                    studio ?» alors on l’a fait. Venez découvrir DBF. La flèche
                    <br />
                    juste ici là. Là.
                  </p>
                </div>
              </div>

            </div>
            <AwesomeContact/>

          </div>
        </div>
      </div>
    </LayoutPageSection>
  </LayoutPageWrapper>
</template>
