<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'

const greetings = [
  { text: 'Hello', lang: 'en' },
  { text: 'Bonjour', lang: 'fr' },
  { text: 'Hola', lang: 'es' },
  { text: 'Ciao', lang: 'it' },
  { text: 'こんにちは', lang: 'ja' },
  { text: '你好', lang: 'zh' },
  { text: '안녕하세요', lang: 'ko' },
  { text: 'Guten Tag', lang: 'de' },
  { text: 'Olá', lang: 'pt' },
  { text: 'नमस्ते', lang: 'hi' },
  { text: 'سلام', lang: 'fa' }
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
  // Wait 1 second before starting the rotation
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
  <div class="welcome-screen flex items-center justify-center">
    <h1 class="text-center text-3xl font-extralight text-white" :class="fontClass">
      · {{ currentGreeting.text }}
    </h1>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto&family=Lora&family=Playfair+Display&family=Montserrat&family=Noto+Sans+JP&family=Noto+Sans+SC&family=Noto+Sans+KR&family=Source+Sans+Pro&family=Open+Sans&family=Poppins&family=Vazirmatn&display=swap');

.welcome-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #0f1010; /* Fully opaque black */
  z-index: 9999;
}

/* Font classes remain the same */
.font-en {
  font-family: 'Roboto', sans-serif;
}
.font-fr {
  font-family: 'Lora', serif;
}
.font-es {
  font-family: 'Playfair Display', serif;
}
.font-it {
  font-family: 'Montserrat', sans-serif;
}
.font-ja {
  font-family: 'Noto Sans JP', sans-serif;
}
.font-zh {
  font-family: 'Noto Sans SC', sans-serif;
}
.font-ko {
  font-family: 'Noto Sans KR', sans-serif;
}
.font-de {
  font-family: 'Source Sans Pro', sans-serif;
}
.font-pt {
  font-family: 'Open Sans', sans-serif;
}
.font-hi {
  font-family: 'Poppins', sans-serif;
}
.font-fa {
  font-family: 'Vazirmatn', sans-serif;
}
</style>
