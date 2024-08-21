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
import { ref } from 'vue'

const isHovered = ref(false)
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
        <div class="text-white">
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
        <div class="mb-3.5 flex flex-col gap-5 sm:flex-row lg:mb-0 lg:h-44">
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
            class="glassy flex flex-col justify-between gap-2.5 sm:w-3/4 lg:justify-end"
          >
            <CardHeader>
              <Mails class="card-icon h-5 w-5 stroke-purple" />
              <CardTitle class="text-purple">Kontakt</CardTitle>
            </CardHeader>
            <CardDescription class="text-xs leading-[18px] md:w-3/4">
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
              <CircleUser class="card-icon h-5 w-5 stroke-purple" />
              <CardTitle class="text-purple">About me</CardTitle>
            </CardHeader>
            <CardDescription class="no-scrollbar overflow-y-scroll text-xs leading-5">
              <p class="text-xs leading-relaxed">
                Hallo! Ich bin <strong>Reza Jaber</strong>, ein
                <strong>22-jähriger Softwareentwickler</strong> aus der Weltstadt
                <strong>Hamburg, Deutschland</strong>. Meine Leidenschaft liegt in der
                <strong>Webentwicklung</strong>, in der ich meine Fähigkeiten seit
                <strong>zwei Jahren</strong> verfeinere. Wenn ich nicht gerade für meinen Hauptjob
                Code schreibe, findest du mich bei spannenden <strong>Nebenprojekten</strong>. Ich
                liebe <strong>Herausforderungen</strong> und es begeistert mich,
                <strong>Ideen in Produkte</strong> umzusetzen. Es geht nicht nur darum, Code zu
                schreiben; es geht darum, Visionen zum Leben zu erwecken! Außerhalb der Codingwelt
                bin ich ein großer Fan von <strong>Musik</strong> und <strong>Sport</strong>.
                Kürzlich habe ich mit dem Reisen angefangen! Mein nächstes großes Abenteuer? Ich
                reise in den kommenden Monaten nach <strong>Spanien und Japan</strong>. Ich kann es
                kaum erwarten, Vielleicht starte ich hier sogar einen kleinen Blog!
              </p>
            </CardDescription>
          </Card>
        </div>
      </div>

      <div class="relative hidden w-1/2 gap-3 lg:grid">
        <div class="relative" @mouseenter="isHovered = true" @mouseleave="isHovered = false">
          <img
            v-motion
            :initial="{ opacity: 0, scale: 0.9 }"
            :enter="{ opacity: 1, scale: 1, transition: { duration: 700, delay: 400 } }"
            src="../assets/img/me.jpg"
            :class="[
              'h-[568px] w-full rounded-xl object-cover transition-all duration-300',
              { 'brightness-50': isHovered }
            ]"
            alt="Profile image"
          />
          <div
            v-if="isHovered"
            class="absolute inset-0 flex items-center justify-center p-6 text-white"
          >
            <p class="text-sm leading-relaxed">
              Hallo! Ich bin <strong>Reza Jaber</strong>, ein
              <strong>22-jähriger Softwareentwickler</strong> aus der Weltstadt
              <strong>Hamburg, Deutschland</strong>. Meine Leidenschaft liegt in der
              <strong>Webentwicklung</strong>, in der ich meine Fähigkeiten seit
              <strong>zwei Jahren</strong> verfeinere. Wenn ich nicht gerade für meinen Hauptjob
              Code schreibe, findest du mich bei spannenden <strong>Nebenprojekten</strong>. Ich
              liebe <strong>Herausforderungen</strong> und es begeistert mich,
              <strong>Ideen in Produkte</strong> umzusetzen. Es geht nicht nur darum, Code zu
              schreiben; es geht darum, Visionen zum Leben zu erwecken! Außerhalb der Codingwelt bin
              ich ein großer Fan von <strong>Musik</strong> und <strong>Sport</strong>. Kürzlich
              habe ich mit dem Reisen angefangen! Mein nächstes großes Abenteuer? Ich reise in den
              kommenden Monaten nach <strong>Spanien und Japan</strong>. Ich kann es kaum erwarten,
              Vielleicht starte ich hier sogar einen kleinen Blog!
            </p>
          </div>
          <div class="absolute -bottom-3 flex w-full justify-center">
            <Badge>Über mich</Badge>
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
