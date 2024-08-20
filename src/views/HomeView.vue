<script setup lang="ts">
import {
  Linkedin,
  Github,
  Mails,
  MonitorSmartphone,
  Code,
  Brush,
  ScrollText,
  Layers3,
  Projector
} from 'lucide-vue-next'

import Button from '@/components/ui/button/Button.vue'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
</script>

<template>
  <div class="grid gap-4">
    <!-- MAIN PAGE -->
    <div class="flex items-center justify-between">
      <div class="text-white">
        <p class="text-2xl">Reza Jaber</p>
        <p class="text-xs">Frontend-Developer based in Hamburg, Germany</p>
      </div>

      <div class="flex gap-2.5">
        <Button variant="link">English</Button>
        <Button variant="outline" class="rounded-full border-white bg-transparent text-white"
          >Contact</Button
        >
        <Button variant="outline" class="rounded-full border-white bg-transparent text-white"
          ><Linkedin class="h-4 w-4"
        /></Button>
        <Button variant="outline" class="rounded-full border-white bg-transparent text-white"
          ><Github class="h-4 w-4"
        /></Button>
        <Button variant="outline" class="rounded-full border-white bg-transparent text-white"
          ><Mail class="h-4 w-4"
        /></Button>
      </div>
    </div>

    <div class="flex gap-4">
      <div class="flex flex-col gap-3">
        <!-- WHAT I DO-->
        <div class="flex h-40 gap-3">
          <Card class="glassy flex flex-col justify-end gap-2.5">
            <CardHeader class="">
              <MonitorSmartphone class="stroke-gold h-5 w-5" />
              <CardTitle class="text-gold">Web & Mobile App</CardTitle>
            </CardHeader>
            <CardDescription class="text-xs">
              Transforming ideas into exceptional web and mobile app experiences.
            </CardDescription>
          </Card>

          <Card class="glassy flex flex-col justify-end gap-2.5">
            <CardHeader>
              <Brush class="stroke-purple h-5 w-5" />
              <CardTitle class="text-purple">Design & Creative</CardTitle>
            </CardHeader>
            <CardDescription class="text-xs">
              Crafting visually stunning design that connects deeply with your audience.
            </CardDescription>
          </Card>

          <Card class="glassy flex flex-col justify-end gap-2.5">
            <CardHeader>
              <Code class="stroke-turquoise h-5 w-5" />
              <CardTitle class="text-turquoise">Development</CardTitle>
            </CardHeader>
            <CardDescription class="text-xs">
              Crafting visually stunning design that connects deeply with your audience.
            </CardDescription>
          </Card>
        </div>

        <div class="flex h-56 gap-3">
          <Card class="glassy flex w-3/4 flex-col justify-end gap-2.5">
            <CardHeader>
              <Projector class="stroke-turquoise h-5 w-5" />
              <CardTitle class="text-turquoise">Projects</CardTitle>
            </CardHeader>
            <CardDescription class="w-72 text-xs">
              Crafting visually stunning design that connects deeply with your audience.
            </CardDescription>
          </Card>

          <Card class="glassy flex w-1/4 flex-col justify-end gap-2.5">
            <CardHeader>
              <Layers3 class="stroke-turquoise h-5 w-5" />
              <CardTitle class="text-turquoise">Tech Stack</CardTitle>
            </CardHeader>
            <CardDescription class="text-xs">
              Crafting visually stunning design that connects deeply with your audience.
            </CardDescription>
          </Card>
        </div>

        <div class="flex h-40 gap-3">
          <Card class="glassy flex w-1/4 flex-col justify-end gap-2.5">
            <CardHeader class="">
              <ScrollText class="stroke-gold h-5 w-5" />
              <CardTitle class="text-gold">CV</CardTitle>
            </CardHeader>
            <CardDescription class="text-xs">
              Bringing your vison to life with the latest technology and design trends.
            </CardDescription>
          </Card>

          <Card class="glassy flex w-3/4 flex-col justify-end gap-2.5">
            <CardHeader class="">
              <Mail class="stroke-purple h-5 w-5" />
              <CardTitle class="text-purple">Contact</CardTitle>
            </CardHeader>
            <CardDescription class="w-72 text-xs">
              Bringing your vison to life with the latest technology and design trends.
            </CardDescription>
          </Card>
        </div>
      </div>

      <div class="w-2/5">
        <img
          src="../assets/img/test.jpg"
          class="h-full w-full rounded-xl object-cover"
          alt="Profile image"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.glassy {
  /* From https://css.glass */
  /* From https://css.glass */
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(12.4px);
  -webkit-backdrop-filter: blur(12.4px);
  border: 1px solid rgba(255, 255, 255, 0.23);
}
</style>
