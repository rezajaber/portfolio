<script setup lang="ts">
import {
  Linkedin,
  Github,
  Mail,
  ChevronDownIcon,
  CircleIcon,
  PlusIcon,
  StarIcon
} from 'lucide-vue-next'

import Button from '@/components/ui/button/Button.vue'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
</script>

<template>
  <div class="mx-auto w-[1080px]">
    <!-- MAIN PAGE -->

    <div class="grid gap-2.5">
      <Card class="border-none">
        <CardHeader>
          <CardTitle>
            <div class="flex items-center justify-between">
              <div class="text-white">
                <p class="text-2xl font-semibold">Reza Jaber</p>
                <p class="text-xs">Frontend-Developer based in Hamburg, Germany</p>
              </div>

              <div class="flex gap-2">
                <Button variant="link">English</Button>
                <Button
                  variant="outline"
                  class="rounded-full border-white bg-transparent text-white"
                  >Contact</Button
                >
                <Button
                  variant="outline"
                  class="rounded-full border-white bg-transparent text-white"
                  ><Linkedin class="h-4 w-4"
                /></Button>
                <Button
                  variant="outline"
                  class="rounded-full border-white bg-transparent text-white"
                  ><Github class="h-4 w-4"
                /></Button>
                <Button
                  variant="outline"
                  class="rounded-full border-white bg-transparent text-white"
                  ><Mail class="h-4 w-4"
                /></Button>
              </div></div
          ></CardTitle>
        </CardHeader>
      </Card>

      <!-- WHAT I DO-->
      <div class="flex gap-2.5">
        <Card class="flex h-40 items-center justify-center border-none">
          <CardHeader>
            <CardTitle class="text-gold">Web & Mobile App</CardTitle>
          </CardHeader>
        </Card>

        <Card class="flex h-40 items-center justify-center border-none">
          <CardHeader class="flex items-center justify-center">
            <CardTitle class="text-purple">Design & Creative</CardTitle>
          </CardHeader>
        </Card>

        <Card class="flex h-40 items-center justify-center border-none">
          <CardHeader class="flex items-center justify-center">
            <CardTitle class="text-turquoise">Development</CardTitle>
          </CardHeader>
        </Card>
      </div>

      <div class="flex gap-2.5">
        <Card class="flex h-40 w-3/4 items-center justify-center">
          <CardHeader>
            <CardTitle class="text-white">Projects</CardTitle>
          </CardHeader>
        </Card>

        <Card class="flex h-40 w-1/4 items-center justify-center border-none">
          <CardHeader>
            <CardTitle class="text-gold">Tech Stack</CardTitle>
          </CardHeader>
        </Card>
      </div>

      <div class="flex gap-2.5">
        <Card class="flex h-40 w-1/4 items-center justify-center border-none">
          <CardHeader>
            <CardTitle class="text-turquoise">CV</CardTitle>
          </CardHeader>
        </Card>

        <Card class="flex h-40 w-3/4 items-center justify-center border-none">
          <CardHeader>
            <CardTitle class="text-purple">Contact</CardTitle>
          </CardHeader>
        </Card>
      </div>
    </div>
  </div>
</template>
