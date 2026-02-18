<script setup lang="ts">
const { initTheme } = useTheme()
onMounted(() => {
  initTheme()
})
</script>

<template>
  <div class="bg-dark-950">
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <UiAppToast />
  </div>
</template>
