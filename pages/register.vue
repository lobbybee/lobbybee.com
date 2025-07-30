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
              <input type="text" id="hotelName" v-model="formData.hotel_name" @focus="inputFocus = 'hotelName'" @blur="suggestUsernames" class="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:outline-none focus:border-honey transition-colors duration-300" placeholder="e.g., The Grand Buzz Hotel">
              <span class="absolute top-10 right-4 text-xl transition-opacity duration-300" :class="{'opacity-0': inputFocus !== 'hotelName'}">🏨</span>
              <p v-if="errors.hotel_name" class="text-red-500 text-xs mt-1">{{ errors.hotel_name }}</p>
            </div>
          <div class="grid md:grid-cols-2 md:gap-6">
            <div class="relative mb-6">
              <label for="username" class="block text-gray-700 text-sm font-semibold mb-2">Username</label>
              <input type="text" id="username" v-model="formData.username" @focus="inputFocus = 'username'" @blur="inputFocus = ''" class="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:outline-none focus:border-honey transition-colors duration-300" placeholder="e.g., grandbuzz">
              <span class="absolute top-10 right-4 text-xl transition-opacity duration-300" :class="{'opacity-0': inputFocus !== 'username'}">👤</span>
              <p v-if="errors.username" class="text-red-500 text-xs mt-1">{{ errors.username }}</p>
                <ul v-if="usernameSuggestions.length" class="mt-2">
                  <li v-for="suggestion in usernameSuggestions.slice(1)" :key="suggestion" @click="selectSuggestion(suggestion)" class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 cursor-pointer hover:bg-gray-300">{{ suggestion }}</li>
                </ul>
            </div>
            <div class="relative mb-6">
              <label for="phone" class="block text-gray-700 text-sm font-semibold mb-2">Phone Number</label>
              <input type="tel" id="phone" v-model="formData.phone" @focus="inputFocus = 'phone'" @blur="inputFocus = ''" class="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:outline-none focus:border-honey transition-colors duration-300" placeholder="+1 234 567 890">
              <span class="absolute top-10 right-4 text-xl transition-opacity duration-300" :class="{'opacity-0': inputFocus !== 'phone'}">📞</span>
              <p v-if="errors.phone" class="text-red-500 text-xs mt-1">{{ errors.phone }}</p>
            </div>
          </div>

          <div class="relative mb-6">
            <label for="email" class="block text-gray-700 text-sm font-semibold mb-2">Hotel Email</label>
            <input type="email" id="email" v-model="formData.email" @focus="inputFocus = 'email'" @blur="inputFocus = ''" class="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:outline-none focus:border-honey transition-colors duration-300" placeholder="contact@grandbuzz.com">
            <span class="absolute top-10 right-4 text-xl transition-opacity duration-300" :class="{'opacity-0': inputFocus !== 'email'}">✉️</span>
            <p v-if="errors.email" class="text-red-500 text-xs mt-1">{{ errors.email }}</p>
          </div>

          <div class="grid md:grid-cols-2 md:gap-6">
            <div class="relative mb-6">
              <label for="password" class="block text-gray-700 text-sm font-semibold mb-2">Password</label>
              <input type="password" id="password" v-model="formData.password" @focus="inputFocus = 'password'" @blur="inputFocus = ''" class="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:outline-none focus:border-honey transition-colors duration-300" placeholder="••••••••">
              <span class="absolute top-10 right-4 text-xl transition-opacity duration-300" :class="{'opacity-0': inputFocus !== 'password'}">🔑</span>
              <p v-if="errors.password" class="text-red-500 text-xs mt-1">{{ errors.password }}</p>
            </div>

            <div class="relative mb-6">
              <label for="confirmPassword" class="block text-gray-700 text-sm font-semibold mb-2">Confirm Password</label>
              <input type="password" id="confirmPassword" v-model="formData.confirmPassword" @focus="inputFocus = 'confirmPassword'" @blur="inputFocus = ''" class="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:outline-none focus:border-honey transition-colors duration-300" placeholder="••••••••">
              <span class="absolute top-10 right-4 text-xl transition-opacity duration-300" :class="{'opacity-0': inputFocus !== 'confirmPassword'}">🔑</span>
              <p v-if="errors.confirmPassword" class="text-red-500 text-xs mt-1">{{ errors.confirmPassword }}</p>
            </div>
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
import { z } from 'zod'
import { useRouter } from 'vue-router'
import { useRuntimeConfig } from '#app'

const formData = ref({
  hotel_name: '',
  username: '',
  email: '',
  phone: '',
  password: '',
  confirmPassword: ''
})

const errors = ref({})
const inputFocus = ref('')
const usernameSuggestions = ref([])
const router = useRouter()
const config = useRuntimeConfig()
const apiUrl = config.public.apiUrl

const schema = z.object({
  hotel_name: z.string().min(3, 'Hotel name must be at least 3 characters'),
  username: z.string().min(3, 'Username must be at least 3 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  confirmPassword: z.string(),
}).refine(data => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

const suggestUsernames = async () => {
  if (!formData.value.hotel_name) {
    return;
  }
  const response = await useFetch(`${apiUrl}/user/username-suggestions/?hotel_name=${formData.value.hotel_name}`)
  if (response.data.value && response.data.value.suggestions.length > 0) {
    usernameSuggestions.value = response.data.value.suggestions
    formData.value.username = usernameSuggestions.value[0]
  }
}

const selectSuggestion = (suggestion) => {
  formData.value.username = suggestion
  usernameSuggestions.value = []
}

const register = async () => {
  errors.value = {}
  const result = schema.safeParse(formData.value)

  if (!result.success) {
    result.error.issues.forEach(issue => {
      errors.value[issue.path[0]] = issue.message
    })
    return
  }

  // Store hotel name to personalize the next step
  localStorage.setItem('hotelName', formData.value.hotel_name)
  const response = await useFetch(`${apiUrl}/user/hotel/register/`, {
    method: 'POST',
    body: result.data
  })

  // Assuming the API returns a success status and maybe a token or user data
  if (response.data.value) {
    router.push(`/verify?email=${result.data.email}`)
  } else {
    // Handle registration errors from the API
    // For example, if the API returns a message for an existing user
    if (response.error.value) {
      // You might want to set a general error message
      // or specific field errors based on the API response
      errors.value.api = response.error.value.data.message || 'An unknown error occurred.'
    }
  }
}

useHead({
  title: 'Register Your Hotel | LobbyBee',
  meta: [
    { name: 'description', content: 'Join LobbyBee and start managing your hotel guest communications seamlessly via WhatsApp.' }
  ]
})
</script>
