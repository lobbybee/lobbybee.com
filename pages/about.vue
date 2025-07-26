<template>
  <div>
    <!-- Header Section -->
    <section class="section-padding bg-gradient-to-br from-honey-light via-white to-whatsapp-light">
      <div class="container-max text-center">
        <h1 class="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
          Built by <span class="text-whatsapp">hoteliers</span>.
          <br>Buzzing for the <span class="text-honey">world</span>.
        </h1>
        <p class="text-xl text-gray-600 max-w-4xl mx-auto">
          Our story begins in busy hotel lobbies, where we witnessed the daily challenges of managing guest experiences and decided to build something better.
        </p>
      </div>
    </section>

    <!-- Story Section -->
    <section class="section-padding bg-white">
      <div class="container-max">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 class="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p class="text-lg text-gray-600 mb-6 leading-relaxed">
              LobbyBee was born inside busy hotel lobbies — to solve messy workflows with respectful tech. We watched front desk staff juggle multiple systems, guests frustrated with complex processes, and management struggling to maintain service quality across departments.
            </p>
            <p class="text-lg text-gray-600 mb-6 leading-relaxed">
              The solution was right in front of us: WhatsApp. Everyone already knew how to use it. Everyone already had it installed. Why force guests and staff to learn yet another app when we could work within the ecosystem they already loved?
            </p>
            <p class="text-lg text-gray-600 leading-relaxed">
              <strong>No app traps, no data games. Just one QR and warmth.</strong>
            </p>
          </div>
          <div class="relative">
            <div class="bg-gradient-to-br from-whatsapp-light to-honey-light rounded-3xl p-8 shadow-2xl">
              <div class="text-center">
                <BuildingOffice2Icon class="w-16 h-16 mx-auto mb-4 text-gray-700 animate-bounce-gentle" />
                <p class="text-gray-700 font-medium mb-4">From hotel lobbies to global solution</p>
                <div class="bg-white rounded-lg p-4 shadow-inner">
                  <div class="flex items-center justify-center space-x-2 mb-3">
                    <QrCodeIcon class="w-6 h-6 text-gray-600" />
                    <span class="text-sm text-gray-600">One QR scan</span>
                  </div>
                  <div class="flex items-center justify-center space-x-2">
                    <HeartIcon class="w-6 h-6 text-green-500" />
                    <span class="text-sm text-gray-600">Instant warmth</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="absolute -bottom-4 -right-4 bg-honey rounded-full p-6 shadow-lg animate-bounce-gentle">
              <span class="text-3xl">🐝</span>
            </div>
          </div>
        </div>

        <!-- Why We Exist -->
        <div class="bg-gray-50 rounded-3xl p-8 lg:p-12 mb-20">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-4">Why We Exist</h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe hospitality should feel human. So we created a CRM that speaks your guest's language — and your brand's values.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="text-center">
              <div class="bg-whatsapp-light rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <HeartIcon class="w-10 h-10 text-whatsapp" />
              </div>
              <h3 class="text-xl font-semibold mb-4">Human-First Technology</h3>
              <p class="text-gray-600">
                Technology should enhance human connection, not replace it. Every feature we build prioritizes warmth and personal touch.
              </p>
            </div>

            <div class="text-center">
              <div class="bg-honey-light rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <GlobeAltIcon class="w-10 h-10 text-honey-dark" />
              </div>
              <h3 class="text-xl font-semibold mb-4">Universal Accessibility</h3>
              <p class="text-gray-600">
                No downloads, no training, no barriers. Using tools your guests already know and love, available in their language.
              </p>
            </div>

            <div class="text-center">
              <div class="bg-green-100 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <ShieldCheckIcon class="w-10 h-10 text-green-600" />
              </div>
              <h3 class="text-xl font-semibold mb-4">Privacy & Respect</h3>
              <p class="text-gray-600">
                Your data belongs to you. We build trust through transparency, security, and ethical data practices.
              </p>
            </div>
          </div>
        </div>

        <!-- What We Offer -->
        <div class="mb-20">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-4">What We Offer</h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions designed to transform every aspect of your hotel's guest experience and operational efficiency.
            </p>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div class="card group hover:bg-whatsapp-light transition-colors duration-300">
              <div class="flex items-start space-x-4">
                <ChatBubbleLeftRightIcon class="w-8 h-8 text-whatsapp group-hover:animate-bounce-gentle" />
                <div>
                  <h3 class="text-xl font-semibold mb-3">WhatsApp-Native Guest CRM</h3>
                  <p class="text-gray-600">
                    Complete guest communication platform built natively for WhatsApp, eliminating the need for additional apps or complex integrations.
                  </p>
                </div>
              </div>
            </div>

            <div class="card group hover:bg-honey-light transition-colors duration-300">
              <div class="flex items-start space-x-4">
                <ChartBarIcon class="w-8 h-8 text-honey-dark group-hover:animate-bounce-gentle" />
                <div>
                  <h3 class="text-xl font-semibold mb-3">Hotel Dashboard</h3>
                  <p class="text-gray-600">
                    Comprehensive management interface for tracking guest interactions, managing departments, and analyzing service patterns.
                  </p>
                </div>
              </div>
            </div>

            <div class="card group hover:bg-blue-100 transition-colors duration-300">
              <div class="flex items-start space-x-4">
                <UserIcon class="w-8 h-8 text-blue-600 group-hover:animate-bounce-gentle" />
                <div>
                  <h3 class="text-xl font-semibold mb-3">Internal Guest Profiles</h3>
                  <p class="text-gray-600">
                    Detailed guest history and preferences system that helps staff deliver personalized experiences while maintaining privacy.
                  </p>
                </div>
              </div>
            </div>

            <div class="card group hover:bg-purple-100 transition-colors duration-300">
              <div class="flex items-start space-x-4">
                <LightBulbIcon class="w-8 h-8 text-purple-600 group-hover:animate-bounce-gentle" />
                <div>
                  <h3 class="text-xl font-semibold mb-3">Management Consultancy</h3>
                  <p class="text-gray-600">
                    Expert guidance for SOPs, branding, seasonal flows, and hospitality best practices tailored to your unique property.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Mascot Highlight -->
        <div class="bg-gradient-to-br from-honey-light via-whatsapp-light to-white rounded-3xl p-8 lg:p-12 text-center">
          <div class="max-w-3xl mx-auto">
            <div class="text-8xl mb-6 animate-bounce-gentle">
                <img src="/mascot.png" alt="LobbyBee Mascot" class="w-56 h-56 mx-auto">
            </div>
            <h2 class="text-3xl font-bold text-gray-900 mb-6">Meet Our Mascot</h2>
            <p class="text-xl text-gray-600 mb-6 leading-relaxed">
              <strong>One wing each side. Folded hands in the middle.</strong>
              <br>The bee that makes hospitality buzz.
            </p>
            <p class="text-lg text-gray-600 leading-relaxed">
              Our bee represents the perfect balance of efficiency and warmth. Just like real bees work together to create something sweet, LobbyBee helps your hotel team collaborate seamlessly to create memorable guest experiences. The folded hands symbolize respect, service, and the human touch that makes hospitality special.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Values -->
    <section class="section-padding bg-gray-50">
      <div class="container-max">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            The principles that guide everything we build and every relationship we nurture.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="text-center">
            <div class="bg-whatsapp text-white rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center text-2xl">
           🤝
            </div>
            <h3 class="text-lg font-semibold mb-3">Respect</h3>
            <p class="text-gray-600 text-sm">
              Every guest, every staff member, every interaction deserves dignity and consideration.
            </p>
          </div>

          <div class="text-center">
            <div class="bg-honey text-gray-900 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center text-2xl">
              <BoltIcon class="w-8 h-8" />
            </div>
            <h3 class="text-lg font-semibold mb-3">Simplicity</h3>
            <p class="text-gray-600 text-sm">
              Complex problems need simple solutions. We eliminate friction, not add it.
            </p>
          </div>

          <div class="text-center">
            <div class="bg-blue-500 text-white rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center text-2xl">
              <LockClosedIcon class="w-8 h-8" />
            </div>
            <h3 class="text-lg font-semibold mb-3">Privacy</h3>
            <p class="text-gray-600 text-sm">
              Your data is yours. We're stewards, not owners of your information.
            </p>
          </div>

          <div class="text-center">
            <div class="bg-purple-500 text-white rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center text-2xl">
                🎯
            </div>
            <h3 class="text-lg font-semibold mb-3">Purpose</h3>
            <p class="text-gray-600 text-sm">
              Every feature serves a real need. We build solutions, not features.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section-padding bg-gradient-to-r from-whatsapp to-whatsapp-dark text-white">
      <div class="container-max text-center">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-4xl lg:text-5xl font-bold mb-6">
            Ready to join the buzz? 🐝
          </h2>
          <p class="text-xl mb-8 opacity-90">
            Let's work together to make your hotel's hospitality more human, more efficient, and more memorable.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <button class="bg-white text-whatsapp hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-200 transform hover:scale-105">
              Schedule a Consultation
            </button>
            <button class="border-2 border-white text-white hover:bg-white hover:text-whatsapp font-semibold py-4 px-8 rounded-lg transition-all duration-200">
              See Our Story in Action
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import {
  BuildingOffice2Icon,
  QrCodeIcon,
  HeartIcon,
  GlobeAltIcon,
  ShieldCheckIcon,
  ChatBubbleLeftRightIcon,
  ChartBarIcon,
  UserIcon,
  LightBulbIcon,
  BoltIcon,
  LockClosedIcon,

} from '@heroicons/vue/24/outline'

useHead({
  title: 'About Us - LobbyBee | Built by Hoteliers for the World',
  meta: [
    { name: 'description', content: 'Learn about LobbyBee\'s mission to make hospitality human through WhatsApp-native technology. Built by hoteliers who understand the real challenges of guest service.' }
  ]
})
</script>
