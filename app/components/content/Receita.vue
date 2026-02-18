<script setup lang="ts">
const items = [
  { label: 'Ingredientes', slot: 'ingredientes', icon: 'i-lucide-flame' },
  { label: 'Instruções', slot: 'instrucoes', icon: 'i-lucide-list' }
]
</script>

<template>
  <div>
    <UTabs :items="items" variant="link">
      <template #ingredientes>
        <div class="prose dark:prose-invert max-w-none">
          <slot name="ingredientes" />
        </div>
      </template>

      <template #instrucoes>
        <div class="prose dark:prose-invert max-w-none">
          <div>
            <slot name="instrucoes" />
          </div>
        </div>
      </template>
    </UTabs>
  </div>
</template>
