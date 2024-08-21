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
</script>

<template>
  <div class="grid gap-4">
    <!-- MAIN PAGE -->
    <div class="flex w-full justify-between">
      <div class="hidden text-white lg:block">
        <p class="text-xl">Reza Jaber</p>
        <p class="text-xs">Frontend-Entwickler aus Hamburg, Deutschland</p>
      </div>

      <div class="flex w-full items-center justify-between lg:w-fit">
        <div class="text-white lg:hidden">
          <p class="text-xl">Reza Jaber</p>
          <p class="text-xs">Frontend-Entwickler | Hamburg</p>
        </div>

        <div class="justify-bewtween flex gap-2.5">
          <Button size="sm" class="hidden lg:block" variant="link">English</Button>

          <a href="https://www.linkedin.com/in/rezajaber/" target="_blank">
            <Button size="sm" class="rounded-full border-white text-background"
              ><Linkedin class="h-4 w-4" /></Button
          ></a>

          <a href="https://github.com/rezajaber" target="_blank">
            <Button size="sm" class="rounded-full border-white text-background"
              ><Github class="h-4 w-4" /></Button
          ></a>

          <a href="mailto:amirrezajaber@gmail.com" target="_blank">
            <Button size="sm" class="rounded-full border-white text-background"
              ><Mail class="h-4 w-4" /></Button
          ></a>
        </div>
      </div>
    </div>

    <div class="flex flex-col items-center gap-4 lg:flex-row">
      <div class="grid h-full gap-3">
        <!-- WAS ICH MACHE -->
        <div class="flex w-full flex-col gap-3 sm:flex-row lg:h-40">
          <Card
            v-motion
            :initial="{ opacity: 0, y: 100 }"
            :enter="{ opacity: 1, y: 0, transition: { duration: 700, delay: 200 } }"
            class="glassy flex flex-col justify-between gap-2 lg:justify-end"
          >
            <CardHeader>
              <Brush class="card-icon h-5 w-5 stroke-purple" />
              <CardTitle class="text-purple">UI & UX Design</CardTitle>
            </CardHeader>
            <CardDescription class="text-xs leading-[18px]">
              Gestaltung intuitiver Benutzeroberflächen. Optimierung der User Experience durch
              klares Design.
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
              <CardTitle class="text-gold">Web & Mobile App</CardTitle>
            </CardHeader>
            <CardDescription class="text-xs leading-[18px]">
              Entwicklung skalierbarer Web- und Mobile-Apps. Ideen in funktionale Produkte
              umwandeln.
            </CardDescription>
          </Card>

          <Card
            v-motion
            :initial="{ opacity: 0, y: 100 }"
            :enter="{ opacity: 1, y: 0, transition: { duration: 700, delay: 300 } }"
            class="glassy flex flex-col justify-between gap-2 lg:justify-end"
          >
            <CardHeader>
              <Code class="card-icon h-5 w-5 stroke-turquoise" />
              <CardTitle class="text-turquoise">Entwicklung</CardTitle>
            </CardHeader>
            <CardDescription class="text-xs leading-[18px]">
              Erstellung von leistungsstarkem, sauberem und effizientem Code für Ihre
              Projektvorstellungen .
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
              <CardTitle class="text-turquoise">Projekte</CardTitle>
            </CardHeader>
            <CardDescription class="text-xs leading-[18px] md:w-3/4">
              Von persönlichen Nebenprojekten bis hin zu maßgeschneiderten Kundenlösungen - jedes
              Projekt ist eine Gelegenheit, Kreativität mit Funktionalität zu verbinden und
              innovative Ideen zum Leben zu erwecken.
            </CardDescription>

            <div class="animated-cursor absolute right-10 top-20 flex">
              <MousePointer2 class="fill-turquoise" />
              <Badge class="mt-5 w-fit bg-turquoise text-white">Projekte</Badge>
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
              <CardTitle class="text-gold">Tech Stack</CardTitle>
            </CardHeader>
            <CardDescription class="text-xs">
              Mein Go-To Techstack, womit ich meine, aber auch eure Projektwünsche umsetze.
            </CardDescription>
          </Card>
        </div>

        <!-- CV & CONTACT -->
        <div class="mb-3.5 flex flex-col gap-5 sm:flex-row sm:gap-3 lg:mb-0 lg:h-44">
          <Card
            v-motion
            :initial="{ opacity: 0, y: 100 }"
            :enter="{ opacity: 1, y: 0, transition: { duration: 700, delay: 250 } }"
            class="glassy relative flex cursor-pointer flex-col justify-between gap-2 sm:w-1/4"
            @click="toggleCV"
          >
            <CardHeader>
              <ScrollText class="card-icon h-5 w-5 stroke-gold" />
              <CardTitle class="text-gold">Lebenslauf</CardTitle>
            </CardHeader>
            <CardDescription class="text-xs leading-[18px]">
              Anbei findet ihr meinen Werdegang.
            </CardDescription>

            <div class="absolute inset-x-0 -bottom-3 flex w-full justify-center">
              <Badge class="w-fit justify-end border">Öffnen</Badge>
            </div>
          </Card>

          <Card
            v-motion
            :initial="{ opacity: 0, y: 100 }"
            :enter="{ opacity: 1, y: 0, transition: { duration: 700, delay: 500 } }"
            class="glassy flex justify-between gap-2.5 sm:w-3/4 lg:justify-end"
          >
            <div class="grid gap-2.5">
              <CardHeader>
                <Mails class="card-icon h-5 w-5 stroke-purple" />
                <CardTitle class="text-purple">Kontakt</CardTitle>
              </CardHeader>
              <CardDescription class="text-xs leading-[18px] md:w-3/4">
                Erwecke deine Vision mit neuester Technologie und aktuellen Design-Trends zum Leben.
                Nutze einfach das Kontaktformular, um mich zu erreichen - ich freue mich darauf, dir
                bei deinem Projekt zu helfen und es gemeinsam zum Erfolg zu führen.
              </CardDescription>
            </div>

            <div class="grid place-items-end gap-2.5">
              <a href="mailto:amirrezajaber@gmail.com" target="_blank">
                <Button size="sm" class="rounded-full border-white text-background">
                  Mail <Mail class="ml-1.5 h-4 w-4" />
                </Button>
              </a>

              <a href="https://github.com/rezajaber" target="_blank">
                <Button size="sm" class="rounded-full border-white text-background">
                  Github <Github class="ml-1.5 h-4 w-4" />
                </Button>
              </a>

              <a href="https://www.linkedin.com/in/rezajaber/" target="_blank">
                <Button
                  size="sm"
                  class="flex items-center rounded-full border-white text-background"
                >
                  Linkedin <Linkedin class="ml-1.5 h-4 w-4" />
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
              <CardTitle class="text-purple">About me</CardTitle>
            </CardHeader>
            <CardDescription class="no-scrollbar overflow-y-scroll text-xs leading-5">
              <div class="grid text-xs leading-relaxed">
                <span class="mb-2">Hey 👋</span>

                <span class="mb-2">
                  Ich bin <i>Reza Jaber</i>, 22 Jahre alt, <i>Softwareentwickler</i> aus
                  <i>Hamburg</i> 🇩🇪. <br />Meine Leidenschaft: <i>Webentwicklung</i> 💻
                </span>

                <span class="mb-2">
                  Neben meinem Hauptjob liebe ich <i>eigene Projekte</i> und
                  <i>Herausforderungen</i> 🚀. Ich verwandle Ideen in <i>feine Produkte</i> und
                  erwecke Visionen zum Leben!
                </span>

                <span class="mb-2">
                  Abseits vom Coding bin ich ein großer Fan von <i>Musik</i> 🎵 und <i>Sport</i> 🏋️‍♂️.
                  <br />Neuerdings aber auch Reisebegeistert und meine nächste Ziele sind:
                  <i>Spanien</i> 🇪🇸 und <i>Japan</i> 🇯🇵.

                  <br />
                  <br />
                  Wer weiß? Vielleicht starte ich hier einen kleinen Blog 📸
                </span>
              </div>
            </CardDescription>
          </Card>
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
              <span class="mb-2">Hey 👋</span>

              <span class="mb-2 xl:mb-4">
                Ich bin <i>Reza Jaber</i>, 22 Jahre alt, <i>Softwareentwickler</i> aus
                <i>Hamburg</i> 🇩🇪. <br />Meine Leidenschaft: <i>Webentwicklung</i> 💻
              </span>

              <span class="mb-2 xl:mb-4">
                Neben meinem Hauptjob liebe ich <i>eigene Projekte</i> und
                <i>Herausforderungen</i> 🚀. Ich verwandle Ideen in <i>feine Produkte</i> und
                erwecke Visionen zum Leben!
              </span>

              <span class="mb-2 xl:mb-4">
                Abseits vom Coding bin ich ein großer Fan von <i>Musik</i> 🎵 und <i>Sport</i> 🏋️‍♂️.
                <br />Neuerdings aber auch Reisebegeistert und meine nächste Ziele sind:
                <i>Spanien</i> 🇪🇸 und <i>Japan</i> 🇯🇵.

                <br />
                <br />
                Wer weiß? Vielleicht starte ich hier einen kleinen Blog 📸
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
