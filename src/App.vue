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
  <div class="dark relative overflow-hidden bg-background p-6 lg:p-0 lg:px-6">
    <!-- Background elements -->
    <div class="absolute inset-0">
      <!-- Optimized fluid shapes -->
      <div class="shape shape-1"></div>
      <div class="shape shape-2"></div>
      <div class="shape shape-3"></div>
    </div>

    <!-- Welcome Screen -->
    <Transition name="spring-up" appear>
      <WelcomeScreen v-show="showWelcome" />
    </Transition>

    <!-- Main content -->
    <Transition name="fade" mode="out-in">
      <div
        v-show="!showWelcome"
        class="relative z-10 mx-auto flex min-h-screen max-w-[1280px] items-center justify-center"
      >
        <RouterView />
      </div>
    </Transition>
  </div>
</template>

<style>
:root {
  --shape-blur: 55px;
  --shape-opacity: 0.4;
  --transition-duration: 0.5s;
}

/* TRANSITION */
.spring-up-enter-active,
.spring-up-leave-active,
.fade-enter-active,
.fade-leave-active {
  transition: all var(--transition-duration) ease;
  will-change: opacity, transform;
}

.spring-up-enter-from,
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.spring-up-leave-to {
  transform: translateY(-100%);
}

/* Optimized styles for fluid shapes */
.shape {
  position: absolute;
  border-radius: 50%;
  filter: blur(var(--shape-blur));
  opacity: var(--shape-opacity);
  will-change: transform;
}

.shape-1 {
  top: -15%;
  left: -10%;
  width: 50%;
  height: 50%;
  background: linear-gradient(to right, #a855f7, #3b82f6);
  animation: moveShape1 8s infinite alternate;
}

.shape-2 {
  bottom: -20%;
  right: -15%;
  width: 60%;
  height: 60%;
  background: linear-gradient(to left, #ec4899, #8b5cf6);
  animation: moveShape2 12s infinite alternate;
}

.shape-3 {
  top: 40%;
  left: 25%;
  width: 40%;
  height: 40%;
  background: linear-gradient(to top, #6366f1, #0ea5e9);
  animation: moveShape3 5s infinite alternate;
}

@keyframes moveShape1 {
  to {
    transform: translate(5%, 5%) rotate(10deg);
  }
}

@keyframes moveShape2 {
  to {
    transform: translate(-5%, -5%) rotate(-10deg);
  }
}

@keyframes moveShape3 {
  to {
    transform: translate(-3%, 3%) scale(1.1);
  }
}
</style>
