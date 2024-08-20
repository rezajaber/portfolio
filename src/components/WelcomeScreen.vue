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
let intervalId: number | null = null

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
  <div class="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0f1010]">
    <h1
      :class="[
        'text-center text-5xl font-extralight text-white',
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
</style>
