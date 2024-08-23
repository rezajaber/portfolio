<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'

import Header from '@/components/Header.vue'

import Button from '@/components/ui/button/Button.vue'
import Badge from '@/components/ui/badge/Badge.vue'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Linkedin,
  Github,
  Mail,
  Mails,
  MonitorSmartphone,
  Code,
  Brush,
  ScrollText,
  Layers3,
  Projector,
  CircleUser
} from 'lucide-vue-next'

import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const isHovered = ref(false)
const showCVIframe = ref(false)
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

const toggleCV = () => {
  if (isSmallScreen.value) {
    window.open('/cv.pdf', '_blank')
  } else {
    showCVIframe.value = !showCVIframe.value
  }
}

const closeIfOutside = (event: MouseEvent) => {
  if (event.target === event.currentTarget) {
    showCVIframe.value = false
  }
}

const cards = computed(() => [
  {
    title: t('uiUxDesign.title'),
    description: t('uiUxDesign.description'),
    icon: Brush,
    colorClass: 'text-purple',
    iconClass: 'stroke-purple'
  },
  {
    title: t('webMobileApp.title'),
    description: t('webMobileApp.description'),
    icon: MonitorSmartphone,
    colorClass: 'text-gold',
    iconClass: 'stroke-gold'
  },
  {
    title: t('development.title'),
    description: t('development.description'),
    icon: Code,
    colorClass: 'text-turquoise',
    iconClass: 'stroke-turquoise'
  }
])

// Memoize the about me content
const aboutMeContent = computed(() => [
  t('aboutMe.greeting'),
  t('aboutMe.intro'),
  t('aboutMe.passion'),
  `${t('aboutMe.hobbies')}\n\n${t('aboutMe.future')}`
])
</script>

<template>
  <div class="grid gap-4">
    <Header />

    <!-- MAIN PAGE -->
    <div class="flex flex-col items-center gap-4 lg:flex-row">
      <div class="grid h-full gap-3">
        <!-- Mobile layout components -->
        <div class="flex flex-col gap-3 sm:flex-row lg:hidden">
          <img
            v-motion
            :initial="{ opacity: 0, scale: 0.9 }"
            :enter="{ opacity: 1, scale: 1, transition: { duration: 700, delay: 225 } }"
            src="../assets/img/friends.webp"
            class="h-80 rounded-xl object-cover sm:w-1/2"
            alt="Profile Image"
          />

          <Card
            v-motion
            :initial="{ opacity: 0, y: 100 }"
            :enter="{ opacity: 1, y: 0, transition: { duration: 700, delay: 400 } }"
            class="glassy flex flex-col gap-2 sm:h-80 sm:w-1/2"
          >
            <CardHeader>
              <CircleUser class="card-icon h-5 w-5 stroke-purple" />
              <CardTitle class="text-purple">{{ t('aboutMe.title') }}</CardTitle>
            </CardHeader>
            <CardDescription class="no-scrollbar overflow-y-scroll text-xs leading-5">
              <div class="grid text-xs leading-relaxed">
                <span v-for="(content, index) in aboutMeContent" :key="index" class="mb-2">
                  {{ content }}
                </span>
              </div>
            </CardDescription>
          </Card>
        </div>

        <!-- SKILLS SECTION -->
        <div class="flex w-full flex-col gap-3 sm:flex-row lg:h-40">
          <h3
            v-motion
            :initial="{ opacity: 0, y: 50 }"
            :enter="{ opacity: 1, y: 0, transition: { duration: 700, delay: 1000 } }"
            class="-mb-2 text-lg font-medium text-white sm:hidden"
          >
            {{ t('other.skills') }}
          </h3>

          <Card
            v-for="(card, index) in cards"
            :key="index"
            v-motion
            :initial="{ opacity: 0, y: 100 }"
            :enter="{ opacity: 1, y: 0, transition: { duration: 700, delay: 200 + index * 100 } }"
            class="glassy flex flex-col justify-between gap-2"
          >
            <CardHeader>
              <component :is="card.icon" :class="['card-icon h-5 w-5', card.iconClass]" />
              <CardTitle :class="card.colorClass">{{ card.title }}</CardTitle>
            </CardHeader>
            <CardDescription class="text-xs leading-[18px]">
              {{ card.description }}
            </CardDescription>
          </Card>
        </div>

        <!-- PROJECTS & TECH STACK -->
        <div class="flex flex-col gap-3 sm:flex-row lg:h-56">
          <Card
            v-motion
            :initial="{ opacity: 0, y: 100 }"
            :enter="{ opacity: 1, y: 0, transition: { duration: 700, delay: 400 } }"
            class="glassy relative flex cursor-pointer flex-col justify-between gap-2 sm:w-3/4 lg:justify-end"
          >
            <CardHeader>
              <Projector class="card-icon h-5 w-5 stroke-turquoise" />
              <CardTitle class="text-turquoise">{{ t('projects.title') }}</CardTitle>
            </CardHeader>
            <CardDescription class="text-xs leading-[18px] md:w-3/4">
              {{ t('projects.description') }}
            </CardDescription>
          </Card>

          <Card
            v-motion
            :initial="{ opacity: 0, y: 100 }"
            :enter="{ opacity: 1, y: 0, transition: { duration: 700, delay: 600 } }"
            class="glassy flex flex-col justify-between gap-2 sm:w-1/4 lg:justify-end"
          >
            <CardHeader>
              <Layers3 class="card-icon h-5 w-5 stroke-gold" />
              <CardTitle class="text-gold">{{ t('techStack.title') }}</CardTitle>
            </CardHeader>
            <CardDescription class="text-xs">
              {{ t('techStack.description') }}
            </CardDescription>
          </Card>
        </div>

        <!-- CV & CONTACT -->
        <div class="mb-3.5 flex flex-col gap-5 sm:flex-row sm:gap-3 lg:mb-0 lg:h-44">
          <Card
            v-motion
            :initial="{ opacity: 0, y: 100 }"
            :enter="{ opacity: 1, y: 0, transition: { duration: 700, delay: 250 } }"
            class="glassy relative flex cursor-pointer flex-col justify-start gap-2 sm:w-1/4"
            @click="toggleCV"
          >
            <CardHeader>
              <ScrollText class="card-icon h-5 w-5 stroke-gold" />
              <CardTitle class="text-gold">{{ t('cv.title') }}</CardTitle>
            </CardHeader>
            <CardDescription class="text-xs leading-[18px]">
              {{ t('cv.description') }}
            </CardDescription>

            <div class="absolute inset-x-0 -bottom-3 flex w-full justify-center">
              <Badge class="w-fit justify-end border">{{ t('cv.openButton') }}</Badge>
            </div>
          </Card>

          <Card
            v-motion
            :initial="{ opacity: 0, y: 100 }"
            :enter="{ opacity: 1, y: 0, transition: { duration: 700, delay: 500 } }"
            class="glassy flex flex-col justify-between gap-2.5 sm:w-3/4 sm:flex-row lg:justify-end"
          >
            <div class="grid gap-2.5">
              <CardHeader>
                <Mails class="card-icon h-5 w-5 stroke-purple" />
                <CardTitle class="text-purple">{{ t('contact.title') }}</CardTitle>
              </CardHeader>
              <CardDescription class="text-xs leading-[18px] md:w-3/4">
                {{ t('contact.description') }}
              </CardDescription>
            </div>

            <div class="flex place-items-end gap-2.5 sm:grid">
              <a
                href="mailto:amirrezajaber@gmail.com"
                target="_blank"
                :aria-label="t('contact.mailAriaLabel')"
              >
                <Button size="sm" class="rounded-full border-white text-background">
                  {{ t('contact.mailButton') }} <Mail class="ml-1.5 h-4 w-4" aria-hidden="true" />
                </Button>
              </a>

              <a
                href="https://github.com/rezajaber"
                target="_blank"
                :aria-label="t('contact.githubAriaLabel')"
              >
                <Button size="sm" class="rounded-full border-white text-background">
                  {{ t('contact.githubButton') }}
                  <Github class="ml-1.5 h-4 w-4" aria-hidden="true" />
                </Button>
              </a>

              <a
                href="https://www.linkedin.com/in/rezajaber/"
                target="_blank"
                :aria-label="t('contact.linkedinAriaLabel')"
              >
                <Button
                  size="sm"
                  class="flex items-center rounded-full border-white text-background"
                >
                  {{ t('contact.linkedinButton') }}
                  <Linkedin class="ml-1.5 h-4 w-4" aria-hidden="true" />
                </Button>
              </a>
            </div>
          </Card>
        </div>

        <!-- CV iframe (only shown on larger screens) -->
        <Teleport to="body">
          <div
            v-if="showCVIframe && !isSmallScreen"
            class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
            @click="closeIfOutside"
          >
            <div class="h-1/2 w-full max-w-[360px] rounded-xl px-6 sm:h-5/6 sm:max-w-4xl lg:px-0">
              <iframe src="/cv.pdf" class="h-full w-full rounded-lg" title="CV PDF"></iframe>
            </div>
          </div>
        </Teleport>
      </div>

      <!-- Large screen about me section -->
      <div class="relative hidden w-1/2 gap-3 lg:grid">
        <div class="relative" @mouseenter="isHovered = true" @mouseleave="isHovered = false">
          <img
            v-motion
            :initial="{ opacity: 0, scale: 0.9 }"
            :enter="{ opacity: 1, scale: 1, transition: { duration: 400, delay: 200 } }"
            src="../assets/img/me-side.webp"
            :class="[
              'h-[584px] w-full rounded-xl object-cover transition-all duration-300',
              { 'brightness-[0.25]': isHovered }
            ]"
            alt="Profile image"
          />

          <div
            v-if="isHovered"
            class="no-scrollbar absolute inset-0 flex items-center justify-center p-6 text-white"
          >
            <div class="grid text-xs leading-relaxed xl:text-sm">
              <span v-for="(content, index) in aboutMeContent" :key="index" class="mb-2 xl:mb-4">
                {{ content }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.glassy {
  background: rgba(255, 255, 255, 0.12);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(12.4px);
  -webkit-backdrop-filter: blur(12.4px);
  border: 1px solid rgba(181, 176, 176, 0.25);
  transition: box-shadow 0.3s ease-in-out;
}

.glassy:hover {
  box-shadow: 0 0 12px rgba(225, 225, 225, 0.25);
}

@keyframes cursorMove {
  0% {
    transform: translate(0, 0);
  }
  25% {
    transform: translate(15px, 5px);
  }
  50% {
    transform: translate(-5px, 25px);
  }
  75% {
    transform: translate(-25px, -35px);
  }
  100% {
    transform: translate(0, 0);
  }
}

@keyframes quickFlip {
  0% {
    transform: rotateY(0deg);
  }
  100% {
    transform: rotateY(360deg);
  }
}

.card-icon {
  transition: transform 0.3s ease-in-out;
  transform-style: preserve-3d;
}

.glassy:hover .card-icon {
  animation: quickFlip 0.5s ease-in-out;
}
</style>
