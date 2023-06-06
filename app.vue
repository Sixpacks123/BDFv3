<script lang="ts" setup>
const { awesome } = useAppConfig()

useHead({
  title: awesome.name,
  titleTemplate: `%s - ${awesome.name}`,
})
</script>

<template>
  <Body
    class="antialiased duration-300 transition-colors text-gray-800 bg-white "
  >
    <NuxtLayout>
      <NuxtLoadingIndicator />
      <NuxtPage />
    </NuxtLayout>
  </Body>
</template>
