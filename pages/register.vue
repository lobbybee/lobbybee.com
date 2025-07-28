<template>
  <div class="bg-gradient-to-br from-honey-light via-white to-whatsapp-light min-h-screen flex items-center justify-center p-4">
    <div class="w-full max-w-lg">
      <div class="bg-white rounded-3xl shadow-2xl p-8 transition-all duration-500">
        <div class="flex justify-center mb-6">
          <img src="/mascot.png" alt="LobbyBee Mascot" class="w-24 h-24 transform hover:scale-110 transition-transform duration-300">
        </div>
        <div class="text-center mb-8">
          <h1 class="text-4xl font-bold text-gray-800">Welcome to LobbyBee!</h1>
          <p class="text-gray-600 mt-2">Let's get your hotel buzzing in just a few steps.</p>
        </div>

        <form @submit.prevent="register">
          <div class="relative mb-6">
            <label for="hotelName" class="block text-gray-700 text-sm font-semibold mb-2">Hotel Name</label>
            <input type="text" id="hotelName" v-model="hotelName" @focus="inputFocus = 'hotelName'" @blur="inputFocus = ''" class="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:outline-none focus:border-honey transition-colors duration-300" placeholder="e.g., The Grand Buzz Hotel" required>
            <span class="absolute top-10 right-4 text-xl transition-opacity duration-300" :class="{'opacity-0': inputFocus !== 'hotelName'}">🏨</span>
          </div>

          <div class="relative mb-6">
            <label for="email" class="block text-gray-700 text-sm font-semibold mb-2">Your Email</label>
            <input type="email" id="email" v-model="email" @focus="inputFocus = 'email'" @blur="inputFocus = ''" class="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:outline-none focus:border-honey transition-colors duration-300" placeholder="you@example.com" required>
            <span class="absolute top-10 right-4 text-xl transition-opacity duration-300" :class="{'opacity-0': inputFocus !== 'email'}">✉️</span>
          </div>

          <button type="submit" class="w-full bg-whatsapp hover:bg-whatsapp-dark text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-lg border-2 border-transparent flex items-center justify-center gap-2">
            <span>Register & Get Verification Code</span>
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
          </button>
        </form>
      </div>
      <p class="text-center text-gray-600 mt-6">Already have an account? <a href="/login" class="text-honey font-semibold hover:underline">Log in here</a>.</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const hotelName = ref('')
const email = ref('')
const inputFocus = ref('')
const router = useRouter()

const register = () => {
  // Store hotel name to personalize the next step
  localStorage.setItem('hotelName', hotelName.value)
  router.push('/verify')
}

useHead({
  title: 'Register Your Hotel | LobbyBee',
  meta: [
    { name: 'description', content: 'Join LobbyBee and start managing your hotel guest communications seamlessly via WhatsApp.' }
  ]
})
</script>
