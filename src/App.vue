<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="dark relative min-h-screen overflow-hidden bg-background p-6">
    <!-- Background elements -->
    <div class="absolute inset-0">
      <div class="glow-orb glow-purple"></div>
      <div class="glow-orb glow-gold"></div>
      <div class="glow-orb glow-turquoise"></div>
    </div>

    <!-- Main content -->
    <div class="relative z-10 mx-auto flex min-h-screen max-w-[1280px] items-center justify-center">
      <RouterView />
    </div>
  </div>
</template>

<style>
.glow-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.5;
}

.glow-purple {
  top: -100px;
  right: -100px;
  width: 300px;
  height: 300px;
  background-color: rgba(128, 0, 128, 0.5);
}

.glow-gold {
  bottom: -50px;
  left: -50px;
  width: 200px;
  height: 200px;
  background-color: rgba(255, 215, 0, 0.5);
}

.glow-turquoise {
  top: 50%;
  left: 50%;
  width: 250px;
  height: 250px;
  background-color: rgba(64, 224, 208, 0.5);
}

/* Global styles for glassy effect */
.glassy {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

/* Ensure text is readable on the new background */
.card-title,
.card-description {
  color: white;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
}

/* Adjust button styles for better visibility */
.button {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border-color: rgba(255, 255, 255, 0.3);
}

.button:hover {
  background: rgba(255, 255, 255, 0.3);
}
</style>
