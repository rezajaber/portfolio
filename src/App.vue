<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { RouterView } from 'vue-router'
import WelcomeScreen from './components/WelcomeScreen.vue'

const showWelcome = ref(true)

onMounted(() => {
  setTimeout(() => {
    showWelcome.value = false
  }, 2000) // 2 seconds to allow time for greetings to cycle
})
</script>

<template>
  <div class="dark relative min-h-screen overflow-hidden bg-background p-6 lg:p-0 lg:px-6">
    <!-- Background elements -->
    <div class="absolute inset-0">
      <div class="glow-orb glow-purple"></div>
      <div class="glow-orb glow-gold"></div>
      <div class="glow-orb glow-turquoise"></div>
    </div>

    <!-- Welcome Screen -->
    <Transition name="spring-up" appear>
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

/* Updated transition styles */
.spring-up-enter-active {
  transition: opacity 0.5s ease;
}

.spring-up-leave-active {
  transition: transform 0.3s cubic-bezier(0.17, 0.67, 0.83, 0.67);
}

.spring-up-enter-from {
  opacity: 0;
}

.spring-up-leave-to {
  transform: translateY(-100%);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
