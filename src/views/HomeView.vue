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
  MousePointer2
} from 'lucide-vue-next'

import Button from '@/components/ui/button/Button.vue'
import Badge from '@/components/ui/badge/Badge.vue'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
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
        <Button size="sm" class="text-lg lg:hidden" variant="link">Reza Jaber</Button>

        <div class="justify-bewtween flex gap-2.5">
          <Button size="sm" class="hidden lg:block" variant="link">English</Button>

          <Button size="sm" class="rounded-full border-white text-background"
            ><Linkedin class="h-4 w-4"
          /></Button>
          <Button size="sm" class="rounded-full border-white text-background"
            ><Github class="h-4 w-4"
          /></Button>
          <Button size="sm" class="rounded-full border-white text-background"
            ><Mail class="h-4 w-4"
          /></Button>
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
            <CardDescription class="w-3/4 text-xs leading-[18px]">
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
        <div class="mb-3.5 flex flex-col gap-5 sm:flex-row lg:mb-0 lg:h-40">
          <Card
            v-motion
            :initial="{ opacity: 0, y: 100 }"
            :enter="{ opacity: 1, y: 0, transition: { duration: 700, delay: 250 } }"
            class="glassy relative flex flex-col justify-between gap-2 sm:w-1/4 lg:justify-end"
          >
            <CardHeader>
              <ScrollText class="card-icon h-5 w-5 stroke-gold" />
              <CardTitle class="text-gold">Lebenslauf</CardTitle>
            </CardHeader>
            <CardDescription class="text-xs leading-[18px]">
              Anbei findet ihr meinen Werdegang.
            </CardDescription>

            <div class="absolute inset-x-0 -bottom-3 flex w-full justify-center">
              <Badge class="w-fit justify-end border">Klicken</Badge>
            </div>
          </Card>

          <Card
            v-motion
            :initial="{ opacity: 0, y: 100 }"
            :enter="{ opacity: 1, y: 0, transition: { duration: 700, delay: 500 } }"
            class="glassy sm:3/4 flex flex-col justify-between gap-2.5 lg:justify-end"
          >
            <CardHeader>
              <Mails class="card-icon h-5 w-5 stroke-purple" />
              <CardTitle class="text-purple">Kontakt</CardTitle>
            </CardHeader>
            <CardDescription class="w-3/4 text-xs leading-[18px]">
              Erwecke deine Vision mit neuester Technologie und aktuellen Design-Trends zum Leben.
              Nutze einfach das Kontaktformular, um mich zu erreichen - ich freue mich darauf, dir
              bei deinem Projekt zu helfen und es gemeinsam zum Erfolg zu führen.
            </CardDescription>

            <div class="absolute inset-x-0 -bottom-3 flex w-full justify-center">
              <Badge class="w-fit justify-end border">Klicken</Badge>
            </div>
          </Card>
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
              <Mails class="card-icon h-5 w-5 stroke-purple" />
              <CardTitle class="text-purple">About me</CardTitle>
            </CardHeader>
            <CardDescription class="text-xs leading-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga deleniti vel sint
              dolores quos accusamus, sed harum reprehenderit. Iure aspernatur molestias, et
              voluptas unde vel nulla suscipit eos at adipisci? Lorem ipsum dolor sit amet
            </CardDescription>
          </Card>
        </div>
      </div>

      <div class="hidden w-1/2 gap-3 lg:grid">
        <img
          v-motion
          :initial="{ opacity: 0, scale: 0.9 }"
          :enter="{ opacity: 1, scale: 1, transition: { duration: 700, delay: 400 } }"
          src="../assets/img/me.jpg"
          class="h-[568px] w-full rounded-xl object-cover"
          alt="Profile image"
        />
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
