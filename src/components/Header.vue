<script setup lang="ts"></script>

<template>
  <!-- HEADER -->
  <div class="flex items-center justify-between">
    <div class="text-white">
      <p class="text-2xl font-semibold">Reza Jaber</p>
      <p class="text-xs">Frontend-Developer based in Hamburg, Germany</p>
    </div>

    <div class="flex gap-2">
      <Button variant="link">English</Button>
      <Button variant="outline" class="rounded-full border-white text-white">Contact</Button>
      <Button variant="outline" class="rounded-full border-white text-white"
        ><Linkedin class="h-4 w-4"
      /></Button>
      <Button variant="outline" class="rounded-full border-white text-white"
        ><Github class="h-4 w-4"
      /></Button>
      <Button variant="outline" class="rounded-full border-white text-white"
        ><Mail class="h-4 w-4"
      /></Button>
    </div>
  </div>
</template>
