<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="dark relative min-h-screen overflow-hidden bg-background">
    <!-- Background elements with 4 smaller orbs -->
    <div class="absolute inset-0">
      <div class="glow-orb glow-purple-strong"></div>
      <div class="glow-orb glow-gold-soft"></div>
      <div class="glow-orb glow-turquoise-medium"></div>
      <div class="glow-orb glow-coral-bright"></div>
    </div>

    <!-- Main content -->
    <div class="relative z-10 flex min-h-screen items-center justify-center">
      <RouterView />
    </div>
  </div>
</template>

<style>
.glow-orb {
  position: absolute;
  border-radius: 50%;
  mix-blend-mode: screen;
}

.glow-purple-strong {
  top: -5%;
  right: -2%;
  width: 300px;
  height: 300px;
  background-color: rgba(128, 0, 128, 0.5);
  filter: blur(80px);
}

.glow-gold-soft {
  bottom: -7%;
  left: -5%;
  width: 250px;
  height: 250px;
  background-color: rgba(255, 215, 0, 0.3);
  filter: blur(70px);
}

.glow-turquoise-medium {
  top: 60%;
  left: 70%;
  width: 200px;
  height: 200px;
  background-color: rgba(64, 224, 208, 0.4);
  filter: blur(60px);
}

.glow-coral-bright {
  top: 15%;
  left: 20%;
  width: 180px;
  height: 180px;
  background-color: rgba(255, 127, 80, 0.4);
  filter: blur(50px);
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
