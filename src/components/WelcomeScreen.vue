<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'

const greetings = [
  { text: 'Hello', lang: 'en' },
  { text: 'Guten Tag', lang: 'de' },
  { text: 'こんにちは', lang: 'ja' },
  { text: 'Hola', lang: 'es' },
  { text: 'سلام', lang: 'fa' },
  { text: '你好', lang: 'zh' },
  { text: 'Ciao', lang: 'it' },
  { text: 'Bonjour', lang: 'fr' },
  { text: '안녕하세요', lang: 'ko' },
  { text: 'Olá', lang: 'pt' },
  { text: 'नमस्ते', lang: 'hi' }
]

const currentGreeting = ref(greetings[0])
let currentIndex = 0
let intervalId: any | null = null

const changeGreeting = () => {
  currentIndex = (currentIndex + 1) % greetings.length
  currentGreeting.value = greetings[currentIndex]
}

const fontClass = computed(() => `font-${currentGreeting.value.lang}`)

onMounted(() => {
  setTimeout(() => {
    intervalId = setInterval(changeGreeting, 175)
  }, 250)
})

onUnmounted(() => {
  if (intervalId !== null) {
    clearInterval(intervalId)
  }
})
</script>

<template>
  <div class="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-[#0f1010]">
    <!-- Background elements -->
    <div class="absolute inset-0">
      <div class="shape shape-1"></div>
      <div class="shape shape-2"></div>
      <div class="shape shape-3"></div>
      <div class="shape shape-4"></div>
    </div>

    <h1
      :class="[
        'relative z-10 text-center text-5xl font-extralight text-white',
        fontClass,
        {
          'font-roboto': currentGreeting.lang === 'en',
          'font-lora': currentGreeting.lang === 'fr',
          'font-playfair': currentGreeting.lang === 'es',
          'font-montserrat': currentGreeting.lang === 'it',
          'font-noto-sans-jp': currentGreeting.lang === 'ja',
          'font-noto-sans-sc': currentGreeting.lang === 'zh',
          'font-noto-sans-kr': currentGreeting.lang === 'ko',
          'font-source-sans-pro': currentGreeting.lang === 'de',
          'font-open-sans': currentGreeting.lang === 'pt',
          'font-poppins': currentGreeting.lang === 'hi',
          'font-vazirmatn': currentGreeting.lang === 'fa'
        }
      ]"
    >
      · {{ currentGreeting.text }}
    </h1>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto&family=Lora&family=Playfair+Display&family=Montserrat&family=Noto+Sans+JP&family=Noto+Sans+SC&family=Noto+Sans+KR&family=Source+Sans+Pro&family=Open+Sans&family=Poppins&family=Vazirmatn&display=swap');

/* Styles for fluid shapes */
.shape {
  position: absolute;
  filter: blur(70px);
  opacity: 0.6;
  mix-blend-mode: screen;
}

.shape-1 {
  top: -30%;
  left: -20%;
  width: 70%;
  height: 70%;
  background: radial-gradient(circle, #ff6b6b, #4ecdc4);
  animation: floatShape1 20s ease-in-out infinite;
}

.shape-2 {
  bottom: -25%;
  right: -15%;
  width: 60%;
  height: 60%;
  background: radial-gradient(circle, #6a0dad, #ffa07a);
  animation: floatShape2 25s ease-in-out infinite;
}

.shape-3 {
  top: 20%;
  left: 60%;
  width: 40%;
  height: 40%;
  background: radial-gradient(circle, #00bfff, #32cd32);
  animation: floatShape3 18s ease-in-out infinite;
}

.shape-4 {
  bottom: 10%;
  left: 5%;
  width: 30%;
  height: 30%;
  background: radial-gradient(circle, #ffd700, #ff69b4);
  animation: floatShape4 22s ease-in-out infinite;
}

@keyframes floatShape1 {
  0%,
  100% {
    transform: translate(0, 0) rotate(0deg) scale(1);
  }
  33% {
    transform: translate(5%, 5%) rotate(5deg) scale(1.1);
  }
  66% {
    transform: translate(-5%, 10%) rotate(-5deg) scale(0.9);
  }
}

@keyframes floatShape2 {
  0%,
  100% {
    transform: translate(0, 0) rotate(0deg) scale(1);
  }
  33% {
    transform: translate(-8%, -3%) rotate(-8deg) scale(1.05);
  }
  66% {
    transform: translate(8%, -6%) rotate(8deg) scale(0.95);
  }
}

@keyframes floatShape3 {
  0%,
  100% {
    transform: translate(0, 0) scale(1);
  }
  50% {
    transform: translate(-10%, 5%) scale(1.1);
  }
}

@keyframes floatShape4 {
  0%,
  100% {
    transform: translate(0, 0) scale(1) rotate(0deg);
  }
  50% {
    transform: translate(8%, -8%) scale(1.15) rotate(10deg);
  }
}
</style>
