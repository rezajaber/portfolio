<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { Linkedin, Github, Mail } from 'lucide-vue-next'
import Button from '@/components/ui/button/Button.vue'

// Reactive state
const isSmallScreen = ref(false)
const { t, locale } = useI18n()

// Computed properties
const jobTitle = computed(() => (isSmallScreen.value ? t('jobTitleShort') : t('jobTitle')))

// Methods
const checkScreenSize = () => {
  isSmallScreen.value = window.innerWidth < 1024
}

const toggleLanguage = () => {
  locale.value = locale.value === 'de' ? 'en' : 'de'
}

// Lifecycle hooks
onMounted(() => {
  checkScreenSize()
  window.addEventListener('resize', checkScreenSize)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkScreenSize)
})

// Social links data
const socialLinks = [
  { href: 'https://www.linkedin.com/in/rezajaber/', icon: Linkedin },
  { href: 'https://github.com/rezajaber', icon: Github },
  { href: 'mailto:amirrezajaber@gmail.com', icon: Mail }
]
</script>

<template>
  <div class="flex w-full items-center justify-between">
    <!-- Responsive header content -->
    <div
      v-motion
      :initial="{ opacity: 0, x: -100 }"
      :enter="{ opacity: 1, x: 0, transition: { duration: 700, delay: 500 } }"
      class="text-white"
    >
      <p class="text-xl">{{ t('name') }}</p>
      <p class="text-xs">{{ jobTitle }}</p>
    </div>

    <!-- Language toggle and social links -->
    <div
      v-motion
      :initial="{ opacity: 0, x: 100 }"
      :enter="{ opacity: 1, x: 0, transition: { duration: 700, delay: 750 } }"
      class="flex gap-2.5"
    >
      <Button
        @click="toggleLanguage"
        size="sm"
        variant="outline"
        class="rounded-full border-gray-600 hover:bg-white"
      >
        {{ t('languageButton') }}
      </Button>

      <div v-for="link in socialLinks" :key="link.href">
        <a :href="link.href" target="_blank">
          <Button size="sm" class="rounded-full text-background">
            <component :is="link.icon" class="h-4 w-4" />
          </Button>
        </a>
      </div>
    </div>
  </div>
</template>
