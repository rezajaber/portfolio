<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { RouterView } from 'vue-router'
import WelcomeScreen from './components/WelcomeScreen.vue'

const showWelcome = ref(true)

onMounted(() => {
  setTimeout(() => {
    showWelcome.value = false
  }, 1500)
})
</script>

<template>
  <div class="dark relative min-h-screen overflow-hidden bg-background p-6">
    <!-- Background elements -->
    <div class="absolute inset-0">
      <div class="glow-orb glow-purple"></div>
      <div class="glow-orb glow-gold"></div>
      <div class="glow-orb glow-turquoise"></div>
    </div>

    <!-- Welcome Screen -->
    <Transition name="fade">
      <WelcomeScreen v-if="showWelcome" />
    </Transition>

    <!-- Main content -->
    <Transition name="fade" mode="out-in">
      <div
        v-if="!showWelcome"
        class="relative z-10 mx-auto flex min-h-screen max-w-[1280px] items-center justify-center"
      >
        <RouterView />
      </div>
    </Transition>
  </div>
</template>

<style>
/* ... (keep existing styles) ... */

/* Add new transition styles */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
