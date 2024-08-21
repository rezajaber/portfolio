<script setup lang="ts">
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
  MousePointer2,
  CircleUser
} from 'lucide-vue-next'

import Button from '@/components/ui/button/Button.vue'
import Badge from '@/components/ui/badge/Badge.vue'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'

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

const { t, locale } = useI18n()

const toggleLanguage = () => {
  locale.value = locale.value === 'de' ? 'en' : 'de'
}
</script>

<template>
  <div class="grid gap-4">
    <!-- MAIN PAGE -->
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
            class="rounded-full border-gray-600 px-2 hover:bg-white"
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

    <div class="flex flex-col items-center gap-4 lg:flex-row">
      <div class="grid h-full gap-3">
        <div class="flex flex-col gap-3 sm:flex-row lg:hidden">
          <img
            v-motion
            :initial="{ opacity: 0, scale: 0.9 }"
            :enter="{ opacity: 1, scale: 1, transition: { duration: 700, delay: 225 } }"
            src="../assets/img/friends.jpg"
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
                <span class="mb-2">{{ t('aboutMe.greeting') }}</span>

                <span class="mb-2">{{ t('aboutMe.intro') }}</span>

                <span class="mb-2">{{ t('aboutMe.passion') }}</span>

                <span class="mb-2">
                  {{ t('aboutMe.hobbies') }}
                  <br />
                  <br />
                  {{ t('aboutMe.future') }}
                </span>
              </div>
            </CardDescription>
          </Card>
        </div>

        <!-- WAS ICH MACHE -->
        <div class="flex w-full flex-col gap-3 sm:flex-row lg:h-40">
          <h3 class="-mb-2 text-center text-lg font-medium text-white sm:hidden">MY SKILLS</h3>

          <Card
            v-motion
            :initial="{ opacity: 0, y: 100 }"
            :enter="{ opacity: 1, y: 0, transition: { duration: 700, delay: 200 } }"
            class="glassy flex flex-col justify-between gap-2 lg:justify-end"
          >
            <CardHeader>
              <Brush class="card-icon h-5 w-5 stroke-purple" />
              <CardTitle class="text-purple">{{ t('uiUxDesign.title') }}</CardTitle>
            </CardHeader>
            <CardDescription class="text-xs leading-[18px]">
              {{ t('uiUxDesign.description') }}
            </CardDescription>
          </Card>

          <Card
            v-motion
            :initial="{ opacity: 0, y: 100 }"
            :enter="{ opacity: 1, y: 0, transition: { duration: 700, delay: 400 } }"
            class="glassy flex flex-col justify-between gap-2 lg:justify-end"
          >
            <CardHeader>
              <MonitorSmartphone class="card-icon h-5 w-5 stroke-gold" />
              <CardTitle class="text-gold">{{ t('webMobileApp.title') }}</CardTitle>
            </CardHeader>
            <CardDescription class="text-xs leading-[18px]">
              {{ t('webMobileApp.description') }}
            </CardDescription>
          </Card>

          <Card
            v-motion
            :initial="{ opacity: 0, y: 100 }"
            :enter="{ opacity: 1, y: 0, transition: { duration: 700, delay: 300 } }"
            class="glassy flex flex-col justify-start gap-2"
          >
            <CardHeader>
              <Code class="card-icon h-5 w-5 stroke-turquoise" />
              <CardTitle class="text-turquoise">{{ t('development.title') }}</CardTitle>
            </CardHeader>
            <CardDescription class="text-xs leading-[18px]">
              {{ t('development.description') }}
            </CardDescription>
          </Card>
        </div>

        <!-- PROJECTS & TECH STACK -->
        <div class="flex flex-col gap-3 sm:flex-row lg:h-56">
          <Card
            v-motion
            :initial="{ opacity: 0, y: 100 }"
            :enter="{ opacity: 1, y: 0, transition: { duration: 700, delay: 400 } }"
            class="glassy relative flex flex-col justify-between gap-2 sm:w-3/4 lg:justify-end"
          >
            <CardHeader>
              <Projector class="card-icon h-5 w-5 stroke-turquoise" />
              <CardTitle class="text-turquoise">{{ t('projects.title') }}</CardTitle>
            </CardHeader>
            <CardDescription class="text-xs leading-[18px] md:w-3/4">
              {{ t('projects.description') }}
            </CardDescription>

            <div class="animated-cursor absolute right-10 top-20 flex">
              <MousePointer2 class="fill-turquoise" />
              <Badge class="mt-5 w-fit bg-turquoise text-white">{{ t('projects.badge') }}</Badge>
            </div>
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
              <a href="mailto:amirrezajaber@gmail.com" target="_blank">
                <Button size="sm" class="rounded-full border-white text-background">
                  {{ t('contact.mailButton') }} <Mail class="ml-1.5 h-4 w-4" />
                </Button>
              </a>

              <a href="https://github.com/rezajaber" target="_blank">
                <Button size="sm" class="rounded-full border-white text-background">
                  {{ t('contact.githubButton') }} <Github class="ml-1.5 h-4 w-4" />
                </Button>
              </a>

              <a href="https://www.linkedin.com/in/rezajaber/" target="_blank">
                <Button
                  size="sm"
                  class="flex items-center rounded-full border-white text-background"
                >
                  {{ t('contact.linkedinButton') }} <Linkedin class="ml-1.5 h-4 w-4" />
                </Button>
              </a>
            </div>
          </Card>
        </div>

        <!-- CV iframe (only shown on larger screens) -->
        <div
          v-if="showCVIframe && !isSmallScreen"
          class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          @click="closeIfOutside"
        >
          <div class="h-1/2 w-full max-w-[360px] rounded-xl px-6 sm:h-5/6 sm:max-w-4xl lg:px-0">
            <iframe src="/cv.pdf" class="h-full w-full rounded-lg" title="CV PDF"></iframe>
          </div>
        </div>
      </div>

      <div class="relative hidden w-1/2 gap-3 lg:grid">
        <div class="relative" @mouseenter="isHovered = true" @mouseleave="isHovered = false">
          <img
            v-motion
            :initial="{ opacity: 0, scale: 0.9 }"
            :enter="{ opacity: 1, scale: 1, transition: { duration: 400, delay: 200 } }"
            src="../assets/img/me.jpg"
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
              <span class="mb-2">{{ t('aboutMe.greeting') }}</span>

              <span class="mb-2 xl:mb-4">{{ t('aboutMe.intro') }}</span>

              <span class="mb-2 xl:mb-4">{{ t('aboutMe.passion') }}</span>

              <span class="mb-2 xl:mb-4">
                {{ t('aboutMe.hobbies') }}
                <br />
                <br />
                {{ t('aboutMe.future') }}
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

.animated-cursor {
  animation: cursorMove 8s ease-in-out infinite;
}
@keyframes flipIcon {
  0% {
    transform: rotateY(0deg);
  }
  100% {
    transform: rotateY(360deg);
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
