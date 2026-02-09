<script setup lang="ts">
</script>

<template>
  <UHeader>
    <template #left>
      <NuxtLink to="/">
        <AppLogo class="w-auto h-6 shrink-0" />
      </NuxtLink>
    </template>

    <template #right>
      <UColorModeButton />
    </template>

    <template #body>
      <USeparator class="my-6" />
    </template>
  </UHeader>
</template>
