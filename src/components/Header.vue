<script setup lang="ts">
import { Linkedin, Github, Mail } from 'lucide-vue-next'

import Button from '@/components/ui/button/Button.vue'
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'

const isSmallScreen = ref(false)

const checkScreenSize = () => {
  isSmallScreen.value = window.innerWidth < 1024
}

onMounted(() => {
  checkScreenSize()
  window.addEventListener('resize', checkScreenSize)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkScreenSize)
})

const { t, locale } = useI18n()

const toggleLanguage = () => {
  locale.value = locale.value === 'de' ? 'en' : 'de'
}
</script>

<template>
  <!-- HEADER -->
  <div class="flex w-full justify-between">
    <div
      v-motion
      :initial="{ opacity: 0, x: -100 }"
      :enter="{ opacity: 1, x: 0, transition: { duration: 700, delay: 500 } }"
      class="hidden text-white lg:block"
    >
      <p class="text-xl">{{ t('name') }}</p>
      <p class="text-xs">{{ t('jobTitle') }}</p>
    </div>

    <div class="flex w-full items-center justify-between lg:w-fit">
      <div
        v-motion
        :initial="{ opacity: 0, x: -100 }"
        :enter="{ opacity: 1, x: 0, transition: { duration: 700, delay: 500 } }"
        class="text-white lg:hidden"
      >
        <p class="text-xl">{{ t('name') }}</p>
        <p class="text-xs">{{ t('jobTitleShort') }}</p>
      </div>

      <div
        v-motion
        :initial="{ opacity: 0, x: 100 }"
        :enter="{ opacity: 1, x: 0, transition: { duration: 700, delay: 750 } }"
        class="justify-bewtween flex gap-2.5"
      >
        <Button
          @click="toggleLanguage"
          size="sm"
          variant="outline"
          class="rounded-full border-gray-600 hover:bg-white"
        >
          {{ t('languageButton') }}
        </Button>

        <a href="https://www.linkedin.com/in/rezajaber/" target="_blank">
          <Button size="sm" class="rounded-full text-background">
            <Linkedin class="h-4 w-4" />
          </Button>
        </a>

        <a href="https://github.com/rezajaber" target="_blank">
          <Button size="sm" class="rounded-full text-background">
            <Github class="h-4 w-4" />
          </Button>
        </a>

        <a href="mailto:amirrezajaber@gmail.com" target="_blank">
          <Button size="sm" class="rounded-full text-background">
            <Mail class="h-4 w-4" />
          </Button>
        </a>
      </div>
    </div>
  </div>
</template>
