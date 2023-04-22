<template>
  <div class="relative">
    <img :src="props.img" alt="img" />
    <div
      class="absolute top-0 bottom-0 left-0 right-0 opacity-0 transition duration-200 ease-in-out bg-customYellow rounded-lg hover:opacity-100"
    >
      <div
        class="text-black font-black text-2xl absolute inset-0 flex items-center justify-center"
      >
        Voir le projet
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  img: {
    type: String,
  },
})
</script>
