<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-whatsapp-light via-white to-honey-light section-padding">
      <div class="container-max">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div class="animate-slide-up">
            <h1 class="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Stay <span class="text-whatsapp">Buzz</span>.
              <br>Your guests. Your staff.
              <br><span class="text-honey">Connected</span> — instantly.
            </h1>
            <p class="text-xl text-gray-600 mb-8 leading-relaxed">
              LobbyBee simplifies guest check-in, service requests, and internal routing — all through one familiar tool: <strong>WhatsApp</strong>.
            </p>
            <div class="flex flex-col sm:flex-row gap-4">
              <a href="https://wa.me/919400408414?text=%2Fdemo" target="_blank" class="bg-whatsapp hover:bg-whatsapp-dark text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-base border-2 border-transparent hover:border-whatsapp-light flex items-center justify-center gap-2 w-full sm:w-auto">
                <PlayIcon class="w-5 h-5" />
                Try a Demo
              </a>
              <NuxtLink to="/register" class="bg-white border-2 border-honey text-honey hover:bg-honey hover:text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-base flex items-center justify-center gap-2 w-full sm:w-auto">
                <BuildingOfficeIcon class="w-5 h-5" />
                Onboard Your Hotel
              </NuxtLink>
              <NuxtLink to="/contact" class="bg-white border-2 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-base backdrop-blur-sm flex items-center justify-center gap-2 w-full sm:w-auto">
                <span class="text-xl">🐝</span>
                Meet the Bee
              </NuxtLink>
            </div>
          </div>
          <div class="animate-fade-in">
            <div class="relative">
              <div class="bg-white rounded-3xl shadow-2xl p-8 transform rotate-2">
                <div class="text-6xl mb-4 flex justify-center items-center text-center animate-bounce-gentle">
                  <img src="https://i.postimg.cc/SsSTXwrb/whatsapp.png" alt="Whatsapp 3D" class="w-64"/>
                </div>
                <div class="text-center">
                  <div class="bg-whatsapp text-white rounded-full px-6 py-3 inline-block mb-4">
                    WhatsApp Business
                  </div>
                  <p class="text-gray-600">Guest services made simple</p>
                </div>
              </div>
              <div class="absolute -top-4 -right-4 bg-honey rounded-full p-4 shadow-lg">
                <span class="text-2xl">🐝</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Feature Highlights -->
    <section class="section-padding bg-white">
      <div class="container-max">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">Why Hotels Choose LobbyBee</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted by hotels across borders for seamless guest experiences
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="card text-center group hover:bg-whatsapp-light transition-colors duration-300">
            <ChatBubbleLeftRightIcon class="w-12 h-12 mx-auto mb-4 text-whatsapp group-hover:animate-bounce-gentle" />
            <h3 class="text-xl font-semibold mb-3 text-gray-900">WhatsApp-Native</h3>
            <p class="text-gray-600">No apps to download. Guests connect instantly via familiar WhatsApp interface.</p>
          </div>

          <div class="card text-center group hover:bg-honey-light transition-colors duration-300">
            <BuildingOffice2Icon class="w-12 h-12 mx-auto mb-4 text-honey-dark group-hover:animate-bounce-gentle" />
            <h3 class="text-xl font-semibold mb-3 text-gray-900">All Departments</h3>
            <p class="text-gray-600">Works seamlessly across reception, housekeeping, room service, and management.</p>
          </div>

          <div class="card text-center group hover:bg-green-100 transition-colors duration-300">
            <BoltIcon class="w-12 h-12 mx-auto mb-4 text-green-600 group-hover:animate-bounce-gentle" />
            <h3 class="text-xl font-semibold mb-3 text-gray-900">Quick Setup</h3>
            <p class="text-gray-600">Get your hotel buzzing in under 5 minutes with our simple setup process.</p>
          </div>

          <div class="card text-center group hover:bg-blue-100 transition-colors duration-300">
            <GlobeAltIcon class="w-12 h-12 mx-auto mb-4 text-blue-600 group-hover:animate-bounce-gentle" />
            <h3 class="text-xl font-semibold mb-3 text-gray-900">Global Trust</h3>
            <p class="text-gray-600">Trusted by hotels across borders for reliable guest communication.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section-padding bg-gradient-to-r from-whatsapp to-whatsapp-dark text-white">
      <div class="container-max text-center">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-4xl lg:text-5xl font-bold mb-6">
            Ready to make hospitality buzz? 🐝
          </h2>
          <p class="text-xl mb-8 opacity-90">
            Join hotels worldwide who've simplified their guest experience through WhatsApp.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/919400408414?text=%2Fdemo" target="_blank" class="bg-white text-whatsapp hover:bg-gray-50 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-base border-2 border-transparent hover:border-white/20 flex items-center justify-center gap-2 w-full sm:w-auto">
              <PlayIcon class="w-5 h-5" />
              Start Free Demo
            </a>
            <button class="border-2 border-white text-white hover:bg-white hover:text-whatsapp font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-base backdrop-blur-sm flex items-center justify-center gap-2 w-full sm:w-auto">
              <CalendarDaysIcon class="w-5 h-5" />
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import {
  PlayIcon,
  BuildingOfficeIcon,
  ChatBubbleLeftRightIcon,
  BuildingOffice2Icon,
  BoltIcon,
  GlobeAltIcon,
  CalendarDaysIcon
} from '@heroicons/vue/24/outline'

useHead({
  title: 'LobbyBee - WhatsApp Hotel Management System | Guest Communication Platform',
  meta: [
    { name: 'description', content: 'LobbyBee is a WhatsApp-native hotel management system that streamlines guest check-in, service requests, and staff communication. Trusted by hotels worldwide for seamless guest experiences and improved operational efficiency.' },
    { name: 'keywords', content: 'WhatsApp hotel management, hotel guest communication, WhatsApp business hotel, hotel check-in system, guest service platform, hotel staff communication, hospitality technology, hotel automation, guest experience software' },
    { name: 'robots', content: 'index, follow' },
    { name: 'author', content: 'LobbyBee' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },

    // Open Graph tags
    { property: 'og:title', content: 'LobbyBee - WhatsApp Hotel Management System | Guest Communication Platform' },
    { property: 'og:description', content: 'LobbyBee is a WhatsApp-native hotel management system that streamlines guest check-in, service requests, and staff communication. Trusted by hotels worldwide.' },
    { property: 'og:image', content: 'https://lobbybee.com/og.jpeg' },
    { property: 'og:url', content: 'https://lobbybee.com' },
    { property: 'og:type', content: 'website' },
    { property: 'og:site_name', content: 'LobbyBee' },

    // Twitter Card tags
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'LobbyBee - WhatsApp Hotel Management System' },
    { name: 'twitter:description', content: 'Streamline hotel operations with WhatsApp-native guest communication and staff coordination.' },
    { name: 'twitter:image', content: 'https://lobbybee.com/og.jpeg' },

    // Additional SEO tags
    { name: 'theme-color', content: '#25D366' },
    { name: 'application-name', content: 'LobbyBee' },
    { name: 'msapplication-TileColor', content: '#25D366' }
  ],
  link: [
    { rel: 'canonical', href: 'https://lobbybee.com' }
  ]
})
</script>
