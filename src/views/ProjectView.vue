<script setup lang="ts">
import { Linkedin, Github, Mail, PaintBucket } from 'lucide-vue-next'

import Button from '@/components/ui/button/Button.vue'
import Badge from '@/components/ui/badge/Badge.vue'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import CardFooter from '@/components/ui/card/CardFooter.vue'

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
  <div class="grid gap-4 p-6 lg:px-6">
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
      <div class="grid h-full w-full gap-3">
        <!-- PROJECT WWEGHER -->
        <div class="flex flex-col gap-3 sm:flex-row">
          <img
            v-motion
            :initial="{ opacity: 0, scale: 0.9 }"
            :enter="{ opacity: 1, scale: 1, transition: { duration: 700, delay: 225 } }"
            src="../assets/img/projects/wwehger.jpg"
            class="h-80 rounded-xl object-cover sm:w-1/2"
            alt="Profile Image"
          />

          <Card
            v-motion
            :initial="{ opacity: 0, y: 100 }"
            :enter="{ opacity: 1, y: 0, transition: { duration: 700, delay: 400 } }"
            class="glassy flex flex-col justify-between gap-2 sm:h-80"
          >
            <CardHeader>
              <PaintBucket class="card-icon h-5 w-5 stroke-white" />
              <CardTitle class="text-white">WWEGHER</CardTitle>
              <CardDescription class="text-white">A Website for Cleaning Services</CardDescription>
            </CardHeader>

            <CardContent class="no-scrollbar overflow-y-scroll text-xs leading-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur harum vero ad quasi
              eum architecto, maxime quae excepturi nihil commodi earum quia adipisci a ex officia,
              saepe esse libero? Ullam? Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Obcaecati quaerat doloribus cum nam reiciendis, eum ea recusandae architecto in
              veritatis ut voluptates id quo sit atque aut similique unde ab!
            </CardContent>

            <CardFooter class="flex gap-2.5 p-0">
              <Badge class="border-2 border-green-600">Vue</Badge>
              <Badge class="border-2 border-sky-500">Tailwind</Badge>
              <Badge class="border-2 border-green-800">ShadCN</Badge>
            </CardFooter>
          </Card>
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
