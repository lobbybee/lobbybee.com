<template>
  <div>
    <!-- Header Section -->
    <section class="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div class="container-max text-center">
        <h1 class="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
          Hospitality shouldn't be hard.
          <br><span class="text-honey">LobbyBee</span> makes it <span class="text-whatsapp">human</span>.
        </h1>
        <p class="text-xl text-gray-600 max-w-4xl mx-auto mb-12">
          Transform your hotel operations with our comprehensive WhatsApp-native CRM platform designed specifically for the hospitality industry.
        </p>
      </div>
    </section>

    <!-- Product Features -->
    <section class="section-padding bg-white">
      <div class="container-max">
        <div class="space-y-20">
            <!-- Guest Check-In -->
                <div class="bg-gray-50 rounded-3xl p-8 lg:p-12">
                  <div class="text-center mb-12">
                    <div class="flex items-center justify-center mb-6 flex-wrap flex-col md:flex-row">
                      <BellIcon class="w-10 h-10 mr-4 text-blue-600" />
                      <h2 class="text-3xl font-bold text-gray-900">Seamless Guest Check-In</h2>
                    </div>
                    <p class="text-lg text-gray-600 max-w-3xl mx-auto">
                      Transform the traditional check-in process into a modern, efficient experience that guests love.
                    </p>
                  </div>

                  <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div class="text-center">
                      <div class="bg-white rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center text-2xl shadow-lg">
                        <QrCodeIcon class="w-8 h-8 text-gray-700" />
                      </div>
                      <h3 class="font-semibold mb-2">1. QR Scan</h3>
                      <p class="text-gray-600 text-sm">Guest scans QR code and instantly connects via WhatsApp</p>
                    </div>
                    <div class="text-center">
                      <div class="bg-white rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center text-2xl shadow-lg">
                        <DocumentIcon class="w-8 h-8 text-gray-700" />
                      </div>
                      <h3 class="font-semibold mb-2">2. ID Upload</h3>
                      <p class="text-gray-600 text-sm">Simple photo upload of identification document</p>
                    </div>
                    <div class="text-center">
                      <div class="bg-white rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center text-2xl shadow-lg">
                        <HomeIcon class="w-8 h-8 text-gray-700" />
                      </div>
                      <h3 class="font-semibold mb-2">3. Welcome Message</h3>
                      <p class="text-gray-600 text-sm">Room assigned via dashboard, welcome message + WhatsApp menu sent</p>
                    </div>
                  </div>
                </div>
          <!-- WhatsApp-Native CRM -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div class="flex items-center mb-6">
                <ChatBubbleLeftRightIcon class="w-10 h-10 mr-4 text-whatsapp" />
                <h2 class="text-3xl font-bold text-gray-900">WhatsApp-Native CRM</h2>
              </div>
              <p class="text-lg text-gray-600 mb-6">
                No apps. No downloads. Guests connect instantly via QR scan + WhatsApp. Your guests already know how to use it, making adoption seamless and natural.
              </p>
              <ul class="space-y-3">
                <li class="flex items-center">
                  <span class="text-whatsapp mr-3">✓</span>
                  <span>Instant QR code connection</span>
                </li>
                <li class="flex items-center">
                  <span class="text-whatsapp mr-3">✓</span>
                  <span>No app downloads required</span>
                </li>
                <li class="flex items-center">
                  <span class="text-whatsapp mr-3">✓</span>
                  <span>Familiar WhatsApp interface</span>
                </li>
              </ul>
            </div>
            <div class="card">
              <div class="bg-whatsapp-light p-8 rounded-lg text-center">
                <DevicePhoneMobileIcon class="w-16 h-16 mx-auto mb-4 text-whatsapp" />
                <div class="bg-white rounded-lg p-4 shadow-inner">
                  <p class="text-sm text-gray-600 mb-2">Scan QR → Connect instantly</p>
                  <div class="bg-whatsapp text-white rounded-lg p-3">
                    <p class="text-sm">Welcome to Hotel Paradise! 🏨</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Multilingual Support -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div class="order-2 lg:order-1 card">
              <div class="bg-honey-light p-8 rounded-lg">
                <GlobeAltIcon class="w-12 h-12 mx-auto mb-4 text-honey-dark" />
                <div class="space-y-3">
                  <div class="bg-white rounded-lg p-3 shadow">
                    <p class="text-sm"><span class="mr-2">🇺🇸</span>Welcome to our hotel!</p>
                  </div>
                  <div class="bg-white rounded-lg p-3 shadow">
                    <p class="text-sm"><span class="mr-2">🇪🇸</span>¡Bienvenido a nuestro hotel!</p>
                  </div>
                  <div class="bg-white rounded-lg p-3 shadow">
                    <p class="text-sm"><span class="mr-2">🇫🇷</span>Bienvenue dans notre hôtel!</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="order-1 lg:order-2">
              <div class="flex items-center mb-6">
                <LanguageIcon class="w-10 h-10 mr-4 text-blue-600" />
                <h2 class="text-3xl font-bold text-gray-900">Multilingual Guest Support</h2>
              </div>
              <p class="text-lg text-gray-600 mb-6">
                Serve guests in their language. Flows support major scripts and editable messages, ensuring every guest feels welcomed and understood.
              </p>
              <ul class="space-y-3">
                <li class="flex items-center">
                  <span class="text-whatsapp mr-3">✓</span>
                  <span>Major language support</span>
                </li>
                <li class="flex items-center">
                  <span class="text-whatsapp mr-3">✓</span>
                  <span>Customizable messages</span>
                </li>
                <li class="flex items-center">
                  <span class="text-whatsapp mr-3">✓</span>
                  <span>Cultural context awareness</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- Department Routing -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div class="flex items-center mb-6">
                <BuildingOffice2Icon class="w-10 h-10 mr-4 text-gray-700" />
                <h2 class="text-3xl font-bold text-gray-900">Smart Department Routing</h2>
              </div>
              <p class="text-lg text-gray-600 mb-6">
                Reception, Housekeeping, Room Service, Café, Management — each gets its own WhatsApp line with intelligent routing based on guest needs.
              </p>
              <div class="grid grid-cols-2 gap-4">
                <div class="text-center p-4 bg-gray-50 rounded-lg">
                  <BellIcon class="w-8 h-8 mx-auto mb-2 text-gray-600" />
                  <p class="text-sm font-medium">Reception</p>
                </div>
                <div class="text-center p-4 bg-gray-50 rounded-lg">
                  <SparklesIcon class="w-8 h-8 mx-auto mb-2 text-gray-600" />
                  <p class="text-sm font-medium">Housekeeping</p>
                </div>
                <div class="text-center p-4 bg-gray-50 rounded-lg">
                  <CakeIcon class="w-8 h-8 mx-auto mb-2 text-gray-600" />
                  <p class="text-sm font-medium">Room Service</p>
                </div>
                <div class="text-center p-4 bg-gray-50 rounded-lg">
                  ☕
                  <p class="text-sm font-medium">Café</p>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="bg-gradient-to-br from-whatsapp-light to-honey-light p-8 rounded-lg">
                <div class="text-center mb-6">
                  <ArrowPathIcon class="w-12 h-12 mx-auto mb-2 text-gray-700" />
                  <p class="font-semibold">Intelligent Routing</p>
                </div>
                <div class="space-y-3">
                  <div class="bg-white rounded-lg p-3 shadow text-sm">
                    "Room service please" → 🍽️ Kitchen
                  </div>
                  <div class="bg-white rounded-lg p-3 shadow text-sm">
                    "Extra towels" → 🧹 Housekeeping
                  </div>
                  <div class="bg-white rounded-lg p-3 shadow text-sm">
                    "Check-out" → 🛎️ Reception
                  </div>
                </div>
              </div>
            </div>
          </div>



          <!-- Automation Toolkit -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div class="order-2 lg:order-1">
              <div class="grid grid-cols-2 gap-4">
                <div class="card text-center">
                  <CalendarDaysIcon class="w-8 h-8 mx-auto mb-3 text-blue-600" />
                  <h4 class="font-semibold mb-2">Daily Menus</h4>
                  <p class="text-sm text-gray-600">With images</p>
                </div>
                <div class="card text-center">
                  <MapPinIcon class="w-8 h-8 mx-auto mb-3 text-red-600" />
                  <h4 class="font-semibold mb-2">Local Experiences</h4>
                  <p class="text-sm text-gray-600">Via geotag</p>
                </div>
                <div class="card text-center">
                  <BellAlertIcon class="w-8 h-8 mx-auto mb-3 text-orange-600" />
                  <h4 class="font-semibold mb-2">Checkout Reminders</h4>
                  <p class="text-sm text-gray-600">Automated</p>
                </div>
                <div class="card text-center">
                  <ChatBubbleOvalLeftEllipsisIcon class="w-8 h-8 mx-auto mb-3 text-purple-600" />
                  <h4 class="font-semibold mb-2">Feedback Prompts</h4>
                  <p class="text-sm text-gray-600">Pre-departure</p>
                </div>
              </div>
            </div>
            <div class="order-1 lg:order-2">
              <div class="flex items-center mb-6">
                <BoltIcon class="w-10 h-10 mr-4 text-yellow-500" />
                <h2 class="text-3xl font-bold text-gray-900">Automation Toolkit</h2>
              </div>
              <p class="text-lg text-gray-600 mb-6">
                Reduce manual work with smart automation that enhances guest experience while saving your staff time for what matters most.
              </p>
              <ul class="space-y-3">
                <li class="flex items-center">
                  <span class="text-whatsapp mr-3">✓</span>
                  <span>Automated daily menu sharing with rich images</span>
                </li>
                <li class="flex items-center">
                  <span class="text-whatsapp mr-3">✓</span>
                  <span>Location-based local experience recommendations</span>
                </li>
                <li class="flex items-center">
                  <span class="text-whatsapp mr-3">✓</span>
                  <span>Smart checkout reminders and feedback collection</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- Guest Understanding Dashboard -->
          <div class="bg-gradient-to-br from-honey-light via-white to-whatsapp-light rounded-3xl p-8 lg:p-12">
            <div class="text-center mb-12">
              <div class="flex items-center justify-center mb-6">
                <StarIcon class="w-10 h-10 mr-4 text-yellow-500" />
                <h2 class="text-3xl font-bold text-gray-900">Guest Understanding Dashboard</h2>
              </div>
              <p class="text-lg text-gray-600 max-w-3xl mx-auto">
                Comprehensive guest insights that help your team deliver personalized experiences while maintaining complete privacy.
              </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div class="bg-white rounded-xl p-6 shadow-lg">
                <ChartBarIcon class="w-10 h-10 mx-auto mb-4 text-blue-600" />
                <h3 class="font-semibold mb-3 text-center">Guest History</h3>
                <ul class="text-sm text-gray-600 space-y-2">
                  <li>• Past stays and duration</li>
                  <li>• Room type preferences</li>
                  <li>• Service usage patterns</li>
                  <li>• Special requests history</li>
                </ul>
              </div>

              <div class="bg-white rounded-xl p-6 shadow-lg">
                <PencilSquareIcon class="w-10 h-10 mx-auto mb-4 text-green-600" />
                <h3 class="font-semibold mb-3 text-center">Staff Notes</h3>
                <ul class="text-sm text-gray-600 space-y-2">
                  <li>• Internal ratings and feedback</li>
                  <li>• Service preferences</li>
                  <li>• Special requirements</li>
                  <li>• Communication style notes</li>
                </ul>
              </div>

              <div class="bg-white rounded-xl p-6 shadow-lg">
                <LockClosedIcon class="w-10 h-10 mx-auto mb-4 text-red-600" />
                <h3 class="font-semibold mb-3 text-center">Privacy First</h3>
                <ul class="text-sm text-gray-600 space-y-2">
                  <li>• Data used only for hotel experience</li>
                  <li>• Never shared with third parties</li>
                  <li>• Secure, encrypted storage</li>
                  <li>• Guest control over data</li>
                </ul>
              </div>
            </div>

            <div class="bg-white rounded-xl p-6 text-center">
              <p class="text-gray-600">
                <strong>Privacy Promise:</strong> All guest data is used exclusively to improve your hotel experience and is never shared externally.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section-padding bg-gradient-to-r from-whatsapp to-whatsapp-dark text-white">
      <div class="container-max text-center">
        <h2 class="text-4xl lg:text-5xl font-bold mb-6">
          Ready to transform your hotel operations?
        </h2>
        <p class="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
          Join forward-thinking hotels that have revolutionized their guest experience with LobbyBee's comprehensive WhatsApp-native platform.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <button class="bg-white text-whatsapp hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-200 transform hover:scale-105">
            Try Free QR Demo
          </button>
          <button class="border-2 border-white text-white hover:bg-white hover:text-whatsapp font-semibold py-4 px-8 rounded-lg transition-all duration-200">
            See Live Guest Flow
          </button>
          <button class="bg-honey text-gray-900 hover:bg-honey-dark font-semibold py-4 px-8 rounded-lg transition-all duration-200 transform hover:scale-105">
            Customize Your Setup
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import {
  ChatBubbleLeftRightIcon,
  DevicePhoneMobileIcon,
  GlobeAltIcon,
  LanguageIcon,
  BuildingOffice2Icon,
  BellIcon,
  SparklesIcon,
  CakeIcon,
  ArrowPathIcon,
  QrCodeIcon,
  DocumentIcon,
  HomeIcon,
  BoltIcon,
  CalendarDaysIcon,
  MapPinIcon,
  BellAlertIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  StarIcon,
  ChartBarIcon,
  PencilSquareIcon,
  LockClosedIcon
} from '@heroicons/vue/24/outline'

useHead({
  title: 'Product - LobbyBee WhatsApp CRM Platform | Hotel Management Features',
  meta: [
    { name: 'description', content: 'Discover LobbyBee\'s comprehensive WhatsApp-native CRM features: multilingual support, department routing, guest check-in, automation toolkit, and privacy-first guest insights.' }
  ]
})
</script>
