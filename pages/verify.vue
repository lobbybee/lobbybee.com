<template>
  <div class="bg-gradient-to-br from-honey-light via-white to-whatsapp-light min-h-screen flex items-center justify-center p-4">
    <div class="w-full max-w-lg text-center">
      <div class="bg-white rounded-3xl shadow-2xl p-8 transition-all duration-500">
        <div class="flex justify-center mb-6">
          <img src="/mascot.png" alt="LobbyBee Mascot" class="w-24 h-24 transform group-hover:scale-110 transition-transform duration-300">
        </div>

        <div v-if="!verified">
          <h1 class="text-4xl font-bold text-gray-800 mb-2">Almost there!</h1>
          <p class="text-gray-600 mb-8" v-if="hotelName">Just one more step to get <span class="font-semibold text-honey">{{ hotelName }}</span> buzzing.</p>
          <p class="text-gray-600 mb-8" v-else>Just one more step to get your hotel buzzing.</p>
          
          <form @submit.prevent="verify">
            <div class="mb-6">
              <label for="verificationCode" class="block text-gray-700 text-sm font-semibold mb-3">Enter 6-Digit Verification Code</label>
              <input 
                type="text" 
                id="verificationCode" 
                v-model="verificationCode" 
                class="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:outline-none focus:border-honey transition-colors duration-300 text-center tracking-[1em] text-2xl font-bold bg-gray-50" 
                placeholder="______"
                maxlength="6"
              >
            </div>
            <button type="submit" class="w-full bg-whatsapp hover:bg-whatsapp-dark text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-lg border-2 border-transparent flex items-center justify-center gap-2">
              <span>Verify & Proceed</span>
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
            </button>
          </form>
          <p class="text-center text-gray-500 mt-6 text-sm">
            Didn't receive a code? <button @click="resendCode" class="text-honey font-semibold hover:underline focus:outline-none">Resend Code</button>
          </p>
        </div>

        <div v-else class="animate-fade-in">
          <div class="text-6xl mb-4 flex justify-center items-center text-center text-green-500">
            <svg class="w-24 h-24 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          </div>
          <h1 class="text-4xl font-bold text-gray-800 mb-4">Verification Complete!</h1>
          <p class="text-gray-600 mb-8">Welcome aboard, <span class="font-semibold text-honey">{{ hotelName }}</span>! You're all set to connect with your guests.</p>
          <a href="/dashboard" class="bg-honey hover:bg-honey-dark text-white font-bold py-3 px-10 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-lg inline-block">
            Complete Your Profile
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const verificationCode = ref('')
const verified = ref(false)
const hotelName = ref('')

onMounted(() => {
  hotelName.value = localStorage.getItem('hotelName') || 'your hotel'
})

const verify = () => {
  // Mock verification logic
  if (verificationCode.value.length === 6) {
    verified.value = true
  }
}

const resendCode = () => {
  // Mock resend logic
  alert('A new verification code has been sent to your email.')
}

useHead({
  title: 'Verify Your Account | LobbyBee',
  meta: [
    { name: 'description', content: 'Verify your email to complete your LobbyBee hotel registration and start buzzing.' }
  ]
})
</script>

<style scoped>
@keyframes fade-in {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fade-in {
  animation: fade-in 0.5s ease-out forwards;
}
input[placeholder="______"] {
  letter-spacing: 0.5em;
  text-align: center;
}
</style>
