<template>
  <div>
    <!-- Header Section -->
    <section class="section-padding bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div class="container-max text-center">
        <h1 class="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
          Your data is <span class="text-whatsapp">yours</span>.
          <br><span class="text-blue-600">Always</span>.
        </h1>
        <p class="text-xl text-gray-600 max-w-4xl mx-auto">
          We believe in complete transparency about how we collect, use, and protect your information. Your privacy isn't just a policy—it's our promise.
        </p>
      </div>
    </section>

    <!-- Key Principles -->
    <section class="section-padding bg-white">
      <div class="container-max">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">Our Privacy Principles</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Simple, clear commitments that guide every decision we make about your data.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div class="card text-center group hover:bg-red-50 transition-colors duration-300">
            <XMarkIcon class="w-12 h-12 mx-auto mb-4 text-red-600 group-hover:animate-bounce-gentle" />
            <h3 class="text-xl font-semibold mb-3 text-red-600">No Data Resale</h3>
            <p class="text-gray-600">We never sell, rent, or monetize your guest data. Your information is not our product.</p>
          </div>

          <div class="card text-center group hover:bg-blue-50 transition-colors duration-300">
            <LockClosedIcon class="w-12 h-12 mx-auto mb-4 text-blue-600 group-hover:animate-bounce-gentle" />
            <h3 class="text-xl font-semibold mb-3 text-blue-600">Isolated Access</h3>
            <p class="text-gray-600">No access between hotels. Each property operates in its own secure, private environment.</p>
          </div>

          <div class="card text-center group hover:bg-green-50 transition-colors duration-300">
            <ShieldCheckIcon class="w-12 h-12 mx-auto mb-4 text-green-600 group-hover:animate-bounce-gentle" />
            <h3 class="text-xl font-semibold mb-3 text-green-600">Complete Transparency</h3>
            <p class="text-gray-600">Full visibility into what we collect, why we collect it, and how we use it.</p>
          </div>
        </div>

        <!-- What We Collect -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 class="text-2xl font-bold text-gray-900 mb-6">What We Collect</h3>
            <div class="space-y-4">
              <div class="flex items-start space-x-3">
                <div class="bg-whatsapp-light rounded-full p-2 mt-1">
                  <EyeIcon class="w-4 h-4 text-whatsapp" />
                </div>
                <div>
                  <p class="font-medium text-gray-900">Guest Contact Information</p>
                  <p class="text-gray-600 text-sm">ID, phone number, and basic check-in details</p>
                </div>
              </div>

              <div class="flex items-start space-x-3">
                <div class="bg-honey-light rounded-full p-2 mt-1">
                  <BuildingOffice2Icon class="w-4 h-4 text-honey-dark" />
                </div>
                <div>
                  <p class="font-medium text-gray-900">Hotel Information</p>
                  <p class="text-gray-600 text-sm">Staff contact details and hotel registration data</p>
                </div>
              </div>

              <div class="flex items-start space-x-3">
                <div class="bg-blue-100 rounded-full p-2 mt-1">
                  <ListBulletIcon class="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <p class="font-medium text-gray-900">Service History</p>
                  <p class="text-gray-600 text-sm">Internal ratings, preferences, and staff notes for better service</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 class="text-2xl font-bold text-gray-900 mb-6">How We Use It</h3>
            <div class="space-y-4">
              <div class="bg-whatsapp-light rounded-lg p-4">
                <h4 class="font-semibold text-gray-900 mb-2">Message Routing</h4>
                <p class="text-gray-600 text-sm">Direct guest requests to the right department instantly</p>
              </div>

              <div class="bg-honey-light rounded-lg p-4">
                <h4 class="font-semibold text-gray-900 mb-2">Personalized Service</h4>
                <p class="text-gray-600 text-sm">Remember preferences to enhance future stays</p>
              </div>

              <div class="bg-blue-100 rounded-lg p-4">
                <h4 class="font-semibold text-gray-900 mb-2">Staff Understanding</h4>
                <p class="text-gray-600 text-sm">Help staff provide consistent, quality service to returning guests</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Dashboard Integrity -->
        <div class="bg-gray-50 rounded-3xl p-8 lg:p-12">
          <div class="text-center mb-8">
            <h3 class="text-3xl font-bold text-gray-900 mb-4">Dashboard Integrity</h3>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              Your hotel's data lives in its own secure environment, completely isolated from other properties.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="text-center">
              <div class="bg-whatsapp text-white rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center text-2xl">
                <BuildingOffice2Icon class="w-8 h-8" />
              </div>
              <h4 class="font-semibold mb-2">Private Dashboard</h4>
              <p class="text-gray-600 text-sm">Each hotel has its own isolated dashboard environment</p>
            </div>

            <div class="text-center">
              <div class="bg-blue-500 text-white rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center text-2xl">
                <WrenchScrewdriverIcon class="w-8 h-8" />
              </div>
              <h4 class="font-semibold mb-2">Backend Only</h4>
              <p class="text-gray-600 text-sm">LobbyBee HQ uses backend for infrastructure maintenance only</p>
            </div>

            <div class="text-center">
              <div class="bg-green-500 text-white rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center text-2xl">
                <LockClosedIcon class="w-8 h-8" />
              </div>
              <h4 class="font-semibold mb-2">Encrypted & Isolated</h4>
              <p class="text-gray-600 text-sm">All data encrypted in transit and at rest, completely isolated</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Formal Privacy Policy -->
    <section class="section-padding bg-white">
      <div class="container-max">
          <Disclosure>
                      <DisclosureButton class="text-gray-900 font-bold text-xl  rounded-lg bg-orange-100 px-4 py-2 w-full flex justify-between items-center">
                        <span>Full Terms Document</span>  <ChevronDownIcon class="w-5 h-5 ml-2" />
                      </DisclosureButton>
                      <DisclosurePanel class="text-gray-500 mt-5">
        <div class="max-w-4xl mx-auto prose prose-lg">
          <div class="text-center mb-12">
            <h2 class="text-4xl font-bold text-gray-900 mb-4">🔐 LobbyBee Privacy Policy</h2>
            <p class="text-gray-600">
              <strong>Effective Date:</strong> January 1, 2024<br>
              <strong>Last Updated:</strong> January 1, 2024
            </p>
          </div>

          <div class="space-y-8 text-gray-700">
            <div>
              <p class="mb-4">
                LobbyBee Technologies Pvt Ltd ("LobbyBee", "we", "us", or "our") is committed to protecting the privacy of hotel partners, guests, and users of our services. This Privacy Policy outlines how we collect, use, store, and protect personal information in connection with our WhatsApp-native CRM platform and associated consultancy services.
              </p>
            </div>

            <div>
              <h3 class="text-2xl font-bold text-gray-900 mb-4">1. Scope of Policy</h3>
              <p>
                This Privacy Policy applies to all data collected through LobbyBee's platform, including guest interactions via WhatsApp, hotel dashboard usage, and internal service flows. It does not apply to third-party booking platforms or external services not operated by LobbyBee.
              </p>
            </div>

            <div>
              <h3 class="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h3>
              <p class="mb-4">We may collect the following categories of personal data:</p>
              <ul class="list-disc pl-6 space-y-2">
                <li>Guest name, address, mobile number, and government-issued ID (during check-in)</li>
                <li>Hotel staff contact details for departmental routing</li>
                <li>Internal guest ratings, preferences, and service history</li>
                <li>Hotel registration details, including license and location</li>
                <li>Usage metadata (e.g., QR scans, message timestamps)</li>
              </ul>
            </div>

            <div>
              <h3 class="text-2xl font-bold text-gray-900 mb-4">3. Purpose of Collection</h3>
              <p class="mb-4">We collect and process personal data solely for the following purposes:</p>
              <ul class="list-disc pl-6 space-y-2">
                <li>To facilitate guest check-in, service requests, and feedback via WhatsApp</li>
                <li>To route messages to appropriate hotel departments</li>
                <li>To enable hotels to personalize guest experiences and manage rebookings</li>
                <li>To maintain system integrity and improve platform performance</li>
                <li>To comply with applicable legal and regulatory obligations</li>
                <li>To identify and provide better service in present and future visits</li>
              </ul>
            </div>

            <div>
              <h3 class="text-2xl font-bold text-gray-900 mb-4">4. Data Sharing and Disclosure</h3>
              <p class="mb-4">
                LobbyBee does not sell, rent, or share personal data with third parties. We do not allow access between hotels; each hotel operates within a fully isolated dashboard environment. Data may be disclosed only:
              </p>
              <ul class="list-disc pl-6 space-y-2">
                <li>To the hotel where the guest is staying</li>
                <li>To authorized LobbyBee personnel for system maintenance</li>
                <li>If required by law, regulation, or legal process</li>
              </ul>
            </div>

            <div>
              <h3 class="text-2xl font-bold text-gray-900 mb-4">5. Data Security</h3>
              <p class="mb-4">We implement reasonable technical and organizational safeguards to protect personal data, including:</p>
              <ul class="list-disc pl-6 space-y-2">
                <li>End-to-end encryption of WhatsApp messages</li>
                <li>Secure dashboard access with role-based permissions</li>
                <li>Regular audits and system monitoring</li>
                <li>Data minimization and retention protocols</li>
              </ul>
            </div>

            <div>
              <h3 class="text-2xl font-bold text-gray-900 mb-4">6. Guest Rights</h3>
              <p class="mb-4">Guests may request:</p>
              <ul class="list-disc pl-6 space-y-2">
                <li>Access to their personal data</li>
                <li>Correction of inaccurate information</li>
                <li>Deletion of data after checkout (subject to legal retention requirements)</li>
                <li>Clarification on how their data is used</li>
              </ul>
              <p>Requests can be submitted directly to LobbyBee at hello@lobbybee.com.</p>
            </div>

            <div>
              <h3 class="text-2xl font-bold text-gray-900 mb-4">7. Changes to This Policy</h3>
              <p>
                We may update this Privacy Policy from time to time. Any changes will be posted on our website with the updated effective date. Continued use of our services after such changes constitutes acceptance of the revised policy.
              </p>
            </div>

            <div>
              <h3 class="text-2xl font-bold text-gray-900 mb-4">8. Contact Us</h3>
              <p>
                For questions, concerns, or data-related requests, please contact:<br>
                📧 <a href="mailto:hello@lobbybee.com" class="text-whatsapp hover:underline">hello@lobbybee.com</a>
              </p>
            </div>
          </div>

          <div class="bg-whatsapp-light rounded-xl p-6 mt-12 text-center">
            <p class="text-gray-700 mb-4">
              <strong>Privacy Commitment PDF</strong> (coming soon)
            </p>
            <button class="btn-primary" disabled>
              Download Privacy Commitment
            </button>
          </div>
        </div>
                      </DisclosurePanel>
          </Disclosure>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section-padding bg-gradient-to-r from-blue-600 to-green-600 text-white">
      <div class="container-max text-center">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-4xl lg:text-5xl font-bold mb-6">
            Questions about our privacy practices?
          </h2>
          <p class="text-xl mb-8 opacity-90">
            We're committed to transparency. Reach out anytime for clarification about how we protect your data.
          </p>
          <NuxtLink to="/contact" class="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-200 transform hover:scale-105">
            Contact Our Privacy Team
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import {
  XMarkIcon,
  LockClosedIcon,
  ShieldCheckIcon,
  EyeIcon,
  BuildingOffice2Icon,
  ListBulletIcon,
  WrenchScrewdriverIcon,
  ChevronDownIcon
} from '@heroicons/vue/24/outline'
import {
   Disclosure,
   DisclosureButton,
   DisclosurePanel,
 } from '@headlessui/vue'
useHead({
  title: 'Privacy Policy - LobbyBee | Your Data is Yours, Always',
  meta: [
    { name: 'description', content: 'LobbyBee\'s comprehensive privacy policy. Learn how we collect, use, and protect your hotel and guest data with complete transparency and security.' }
  ]
})
</script>
