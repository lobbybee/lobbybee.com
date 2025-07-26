<template>
  <header class="bg-white shadow-lg sticky top-0 z-50">
    <nav class="container-max section-padding py-4">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center space-x-2 group">
          <div class="text-3xl animate-bounce-gentle">
            <img src="https://i.postimg.cc/bvkcHckG/logoNew.png" alt="LobbyBee Logo" class="w-16"/>
            
          </div>
          <span class="text-2xl font-bold text-gray-900 group-hover:text-whatsapp transition-colors">
            LobbyBee
          </span>
        </NuxtLink>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <NuxtLink
            v-for="item in navigation"
            :key="item.name"
            :to="item.href"
            class="text-gray-700 hover:text-whatsapp font-medium transition-colors duration-200"
            active-class="text-whatsapp"
          >
            {{ item.name }}
          </NuxtLink>
          <button class="btn-primary">
            Try Demo
          </button>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden">
          <button
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="text-gray-700 hover:text-whatsapp transition-colors"
          >
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Navigation -->
      <div v-show="mobileMenuOpen" class="md:hidden mt-4 pb-4 border-t border-gray-200">
        <div class="flex flex-col space-y-4 pt-4">
          <NuxtLink
            v-for="item in navigation"
            :key="item.name"
            :to="item.href"
            class="text-gray-700 hover:text-whatsapp font-medium transition-colors duration-200"
            active-class="text-whatsapp"
            @click="mobileMenuOpen = false"
          >
            {{ item.name }}
          </NuxtLink>
          <button class="btn-primary mt-4">
            Try Demo
          </button>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const mobileMenuOpen = ref(false)

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Product', href: '/product' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
  { name: 'Privacy', href: '/privacy' },
  { name: 'Terms', href: '/terms' }
]
</script>