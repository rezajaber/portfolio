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
  Projector
} from 'lucide-vue-next'

import Button from '@/components/ui/button/Button.vue'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
</script>

<template>
  <div class="grid gap-4">
    <!-- MAIN PAGE -->
    <div class="flex w-full justify-between">
      <div class="hidden text-white lg:block">
        <p class="text-xl">Reza Jaber</p>
        <p class="text-xs">Frontend-Developer based in Hamburg, Germany</p>
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
        <!-- WHAT I DO-->
        <div class="flex w-full flex-col gap-3 sm:flex-row lg:h-40">
          <Card
            v-motion
            :initial="{ opacity: 0, y: 100 }"
            :enter="{ opacity: 1, y: 0, transition: { duration: 700, delay: 400 } }"
            class="glassy flex flex-col justify-end gap-2.5"
          >
            <CardHeader>
              <MonitorSmartphone class="stroke-gold h-5 w-5" />
              <CardTitle class="text-gold">Web & Mobile App</CardTitle>
            </CardHeader>
            <CardDescription class="text-xs">
              Transforming ideas into exceptional web and mobile app experiences.
            </CardDescription>
          </Card>

          <Card
            v-motion
            :initial="{ opacity: 0, y: 100 }"
            :enter="{ opacity: 1, y: 0, transition: { duration: 700, delay: 200 } }"
            class="glassy flex flex-col justify-end gap-2.5"
          >
            <CardHeader>
              <Brush class="stroke-purple h-5 w-5" />
              <CardTitle class="text-purple">Design & Creative</CardTitle>
            </CardHeader>
            <CardDescription class="text-xs">
              Crafting visually stunning design that connects deeply with your audience.
            </CardDescription>
          </Card>

          <Card
            v-motion
            :initial="{ opacity: 0, y: 100 }"
            :enter="{ opacity: 1, y: 0, transition: { duration: 700, delay: 300 } }"
            class="glassy flex flex-col justify-end gap-2.5"
          >
            <CardHeader>
              <Code class="stroke-turquoise h-5 w-5" />
              <CardTitle class="text-turquoise">Development</CardTitle>
            </CardHeader>
            <CardDescription class="text-xs">
              Crafting visually stunning design that connects deeply with your audience.
            </CardDescription>
          </Card>
        </div>

        <div class="flex flex-col gap-3 sm:flex-row lg:h-56">
          <Card
            v-motion
            :initial="{ opacity: 0, y: 100 }"
            :enter="{ opacity: 1, y: 0, transition: { duration: 700, delay: 400 } }"
            class="glassy flex flex-col justify-end gap-2.5 sm:w-3/4"
          >
            <CardHeader>
              <Projector class="stroke-turquoise h-5 w-5" />
              <CardTitle class="text-turquoise">Projects</CardTitle>
            </CardHeader>
            <CardDescription class="w-72 text-xs">
              Crafting visually stunning design that connects deeply with your audience.
            </CardDescription>
          </Card>

          <Card
            v-motion
            :initial="{ opacity: 0, y: 100 }"
            :enter="{ opacity: 1, y: 0, transition: { duration: 700, delay: 600 } }"
            class="glassy flex flex-col justify-end gap-2.5 sm:w-1/4"
          >
            <CardHeader>
              <Layers3 class="stroke-turquoise h-5 w-5" />
              <CardTitle class="text-turquoise">Tech Stack</CardTitle>
            </CardHeader>
            <CardDescription class="text-xs">
              Crafting visually stunning design that connects deeply with your audience.
            </CardDescription>
          </Card>
        </div>

        <div class="flex flex-col gap-3 sm:flex-row lg:h-40">
          <Card
            v-motion
            :initial="{ opacity: 0, y: 100 }"
            :enter="{ opacity: 1, y: 0, transition: { duration: 700, delay: 250 } }"
            class="glassy flex flex-col justify-end gap-2.5 sm:w-1/4"
          >
            <CardHeader>
              <ScrollText class="stroke-gold h-5 w-5" />
              <CardTitle class="text-gold">CV</CardTitle>
            </CardHeader>
            <CardDescription class="text-xs">
              Bringing your vison to life with the latest technology and design trends.
            </CardDescription>
          </Card>

          <Card
            v-motion
            :initial="{ opacity: 0, y: 100 }"
            :enter="{ opacity: 1, y: 0, transition: { duration: 700, delay: 500 } }"
            class="glassy sm:3/4 flex flex-col justify-end gap-2.5"
          >
            <CardHeader>
              <Mails class="stroke-purple h-5 w-5" />
              <CardTitle class="text-purple">Contact</CardTitle>
            </CardHeader>
            <CardDescription class="w-72 text-xs">
              Bringing your vison to life with the latest technology and design trends.
            </CardDescription>
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
            class="glassy flex flex-col gap-2.5 sm:h-80 sm:w-1/2"
          >
            <CardHeader>
              <Mails class="stroke-purple h-5 w-5" />
              <CardTitle class="text-purple">About me</CardTitle>
            </CardHeader>
            <CardDescription class="w-72 text-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga deleniti vel sint
              dolores quos accusamus, sed harum reprehenderit. Iure aspernatur molestias, et
              voluptas unde vel nulla suscipit eos at adipisci? Lorem ipsum dolor sit amet
            </CardDescription>
          </Card>
        </div>
      </div>

      <div class="hidden w-2/5 gap-3 lg:grid">
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
}
</style>
