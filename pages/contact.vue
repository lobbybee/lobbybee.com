<template>
  <div>
    <!-- Header Section -->
    <section class="section-padding bg-gradient-to-br from-whatsapp-light via-white to-honey-light">
      <div class="container-max text-center">
        <h1 class="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
          Let's bring the <span class="text-whatsapp">buzz</span> 
          <br>to your hotel.
        </h1>
        <p class="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
          Ready to transform your guest experience? Get in touch with our team and discover how LobbyBee can revolutionize your hotel operations.
        </p>
        
        <!-- WhatsApp Demo Button -->
        <div class="mb-12">
          <a 
            href="https://wa.me/your-number" 
            target="_blank"
            class="inline-flex items-center bg-whatsapp hover:bg-whatsapp-dark text-white font-semibold py-4 px-8 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl text-lg"
          >
            <svg class="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.085"/>
            </svg>
            Start Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>

    <!-- Contact Form and Info -->
    <section class="section-padding bg-white">
      <div class="container-max">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <!-- Contact Form -->
          <div>
            <h2 class="text-3xl font-bold text-gray-900 mb-8">Send us a message</h2>
            <form @submit.prevent="submitForm" class="space-y-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label for="hotelName" class="block text-sm font-medium text-gray-700 mb-2">
                    Hotel Name *
                  </label>
                  <input
                    type="text"
                    id="hotelName"
                    v-model="form.hotelName"
                    required
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-whatsapp focus:border-whatsapp transition-colors"
                    placeholder="Your hotel name"
                  >
                </div>
                
                <div>
                  <label for="location" class="block text-sm font-medium text-gray-700  mb-2">
                    City & Country *
                  </label>
                  <input
                    type="text"
                    id="location"
                    v-model="form.location"
                    required
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-whatsapp focus:border-whatsapp transition-colors"
                    placeholder="e.g., Mumbai, India"
                  >
                </div>
              </div>

              <div>
                <label for="role" class="block text-sm font-medium text-gray-700 mb-2">
                  Your Role *
                </label>
                <select
                  id="role"
                  v-model="form.role"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-whatsapp focus:border-whatsapp transition-colors"
                >
                  <option value="">Select your role</option>
                  <option value="owner">Owner</option>
                  <option value="manager">Manager</option>
                  <option value="staff">Staff</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  v-model="form.email"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-whatsapp focus:border-whatsapp transition-colors"
                  placeholder="your@email.com"
                >
              </div>

              <div>
                <label for="message" class="block text-sm font-medium text-gray-700 mb-2">
                  Message or Request *
                </label>
                <textarea
                  id="message"
                  v-model="form.message"
                  required
                  rows="5"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-whatsapp focus:border-whatsapp transition-colors resize-vertical"
                  placeholder="Tell us about your hotel and how we can help..."
                ></textarea>
              </div>

              <button
                type="submit"
                :disabled="isSubmitting"
                class="w-full btn-primary text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span v-if="!isSubmitting">Send Message</span>
                <span v-else class="flex items-center justify-center">
                  <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </span>
              </button>
            </form>

            <!-- Success Message -->
            <div v-if="showSuccess" class="mt-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
              <div class="flex items-center">
                <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                Message sent successfully! We'll get back to you soon.
              </div>
            </div>
          </div>

          <!-- Contact Information -->
          <div>
            <h2 class="text-3xl font-bold text-gray-900 mb-8">Get in touch</h2>
            
            <!-- Direct Email -->
            <div class="card mb-8">
              <div class="flex items-center space-x-4">
                <div class="bg-whatsapp-light rounded-full p-4">
                  <EnvelopeIcon class="w-6 h-6 text-whatsapp" />
                </div>
                <div>
                  <h3 class="text-lg font-semibold mb-1">Direct Email</h3>
                  <a href="mailto:hello@lobbybee.com" class="text-whatsapp hover:text-whatsapp-dark font-medium">
                    📬 hello@lobbybee.com
                  </a>
                </div>
              </div>
            </div>

            <!-- Response Time -->
            <div class="card mb-8">
              <div class="flex items-center space-x-4">
                <div class="bg-honey-light rounded-full p-4">
                  <ClockIcon class="w-6 h-6 text-honey-dark" />
                </div>
                <div>
                  <h3 class="text-lg font-semibold mb-1">Response Time</h3>
                  <p class="text-gray-600">We typically respond within 24 hours</p>
                </div>
              </div>
            </div>

            <!-- Demo Available -->
            <div class="card mb-8">
              <div class="flex items-center space-x-4">
                <div class="bg-green-100 rounded-full p-4">
                  <VideoCameraIcon class="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 class="text-lg font-semibold mb-1">Live Demo Available</h3>
                  <p class="text-gray-600">See LobbyBee in action with a personalized demo</p>
                </div>
              </div>
            </div>

            <!-- What to Expect -->
            <div class="bg-gray-50 rounded-xl p-6">
              <h3 class="text-lg font-semibold mb-4 text-gray-900">What to expect after contacting us:</h3>
              <ul class="space-y-3">
                <li class="flex items-start">
                  <span class="text-whatsapp mr-3 mt-1">✓</span>
                  <span class="text-gray-600">Personalized consultation about your hotel's needs</span>
                </li>
                <li class="flex items-start">
                  <span class="text-whatsapp mr-3 mt-1">✓</span>
                  <span class="text-gray-600">Custom demo tailored to your property type</span>
                </li>
                <li class="flex items-start">
                  <span class="text-whatsapp mr-3 mt-1">✓</span>
                  <span class="text-gray-600">Implementation timeline and pricing discussion</span>
                </li>
                <li class="flex items-start">
                  <span class="text-whatsapp mr-3 mt-1">✓</span>
                  <span class="text-gray-600">Ongoing support and training information</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="section-padding bg-gray-50">
      <div class="container-max">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Quick answers to common questions about LobbyBee implementation and features.
          </p>
        </div>

        <div class="max-w-4xl mx-auto space-y-4">
          <div
            v-for="(faq, index) in faqs"
            :key="index"
            class="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <button
              @click="toggleFaq(index)"
              class="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              <span class="font-semibold text-gray-900">{{ faq.question }}</span>
              <ChevronDownIcon
                :class="{ 'transform rotate-180': openFaq === index }"
                class="w-5 h-5 text-gray-500 transition-transform"
              />
            </button>
            <div
              v-show="openFaq === index"
              class="px-6 pb-4 text-gray-600"
            >
              {{ faq.answer }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer Links -->
    <section class="section-padding bg-white">
      <div class="container-max text-center">
        <h3 class="text-2xl font-bold text-gray-900 mb-6">Additional Resources</h3>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink to="/privacy" class="btn-outline">
            Privacy Policy
          </NuxtLink>
          <NuxtLink to="/terms" class="btn-outline">
            Terms & Conditions
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { 
  EnvelopeIcon,
  ClockIcon,
  VideoCameraIcon,
  ChevronDownIcon
} from '@heroicons/vue/24/outline'

useHead({
  title: 'Contact Us - LobbyBee | Get Started with WhatsApp Hotel CRM',
  meta: [
    { name: 'description', content: 'Contact LobbyBee to transform your hotel\'s guest experience. Get a personalized demo, consultation, and implementation plan for our WhatsApp-native CRM.' }
  ]
})

const form = ref({
  hotelName: '',
  location: '',
  role: '',
  email: '',
  message: ''
})

const isSubmitting = ref(false)
const showSuccess = ref(false)
const openFaq = ref(null)

const faqs = [
  {
    question: "How long does it take to set up LobbyBee?",
    answer: "Most hotels are up and running in under 5 minutes. Our team provides full setup support and staff training to ensure smooth implementation."
  },
  {
    question: "Do guests need to download an app?",
    answer: "No! That's the beauty of LobbyBee. Guests simply scan a QR code and interact through WhatsApp, which they already have installed."
  },
  {
    question: "What languages are supported?",
    answer: "LobbyBee supports major languages and scripts, with customizable messages for each language to match your brand voice."
  },
  {
    question: "Is guest data secure?",
    answer: "Absolutely. We use end-to-end encryption, secure storage, and never share guest data between hotels or with third parties."
  },
  {
    question: "Can LobbyBee integrate with existing hotel systems?",
    answer: "Yes, LobbyBee is designed to work alongside your existing PMS and other hotel management systems through our flexible API."
  }
]

const submitForm = async () => {
  isSubmitting.value = true
  
  // Simulate form submission
  await new Promise(resolve => setTimeout(resolve, 2000))
  
  // Reset form and show success
  form.value = {
    hotelName: '',
    location: '',
    role: '',
    email: '',
    message: ''
  }
  
  isSubmitting.value = false
  showSuccess.value = true
  
  // Hide success message after 5 seconds
  setTimeout(() => {
    showSuccess.value = false
  }, 5000)
}

const toggleFaq = (index) => {
  openFaq.value = openFaq.value === index ? null : index
}
</script>