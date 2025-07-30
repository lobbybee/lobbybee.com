<template>
  <div>
    <!-- Header Section -->
    <section class="section-padding bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div class="container-max text-center">
        <h1 class="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
          <span class="text-whatsapp">Terms</span> & <span class="text-honey">Conditions</span>
        </h1>
        <p class="text-xl text-gray-600 max-w-4xl mx-auto">
          Clear, fair terms that govern the use of LobbyBee's WhatsApp-native CRM platform and services.
        </p>
      </div>
    </section>

    <!-- Key Points -->
    <section class="section-padding bg-white">
      <div class="container-max">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">Key Terms at a Glance</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            The essential points you need to know about using LobbyBee services.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div class="card text-center group hover:bg-whatsapp-light transition-colors duration-300">
            🤝
            <h3 class="text-lg font-semibold mb-3">Fair Use</h3>
            <p class="text-gray-600 text-sm">Use our platform responsibly and in accordance with applicable laws</p>
          </div>

          <div class="card text-center group hover:bg-honey-light transition-colors duration-300">
            <ShieldCheckIcon class="w-12 h-12 mx-auto mb-4 text-honey-dark group-hover:animate-bounce-gentle" />
            <h3 class="text-lg font-semibold mb-3">Data Protection</h3>
            <p class="text-gray-600 text-sm">We protect your data; you protect your guests' privacy rights</p>
          </div>

          <div class="card text-center group hover:bg-blue-100 transition-colors duration-300">
            <PhoneIcon class="w-12 h-12 mx-auto mb-4 text-blue-600 group-hover:animate-bounce-gentle" />
            <h3 class="text-lg font-semibold mb-3">Support</h3>
            <p class="text-gray-600 text-sm">24/7 technical support and comprehensive onboarding assistance</p>
          </div>

          <div class="card text-center group hover:bg-green-100 transition-colors duration-300">
            <ArrowPathIcon class="w-12 h-12 mx-auto mb-4 text-green-600 group-hover:animate-bounce-gentle" />
            <h3 class="text-lg font-semibold mb-3">Updates</h3>
            <p class="text-gray-600 text-sm">Regular platform improvements and feature updates at no extra cost</p>
          </div>
        </div>
      </div>
    </section>


    <!-- Full Terms Document -->
    <section class="section-padding bg-gray-50">
      <div class="container-max">
          <Disclosure>
               <DisclosureButton class="text-gray-900 font-bold text-xl  rounded-lg bg-orange-100 px-4 py-2 w-full flex justify-between items-center">
                 <span>Full Terms Document</span>  <ChevronDownIcon class="w-5 h-5 ml-2" />
               </DisclosureButton>
               <DisclosurePanel class="text-gray-500 mt-5">
                   <div class="max-w-4xl mx-auto bg-white rounded-3xl p-8 lg:p-12 shadow-lg">
                            <div class="text-center mb-12">
                              <h2 class="text-4xl font-bold text-gray-900 mb-4">📋 LobbyBee Terms & Conditions</h2>
                              <p class="text-gray-600">
                                <strong>Effective Date:</strong> 1 August 2025<br>
                                <strong>Last Updated:</strong> 1 August 2025
                              </p>
                            </div>

                            <div class="prose prose-lg max-w-none text-gray-700 space-y-8">
                              <div>
                                <h3 class="text-2xl font-bold text-gray-900 mb-4">1. Service Scope</h3>
                                <p>LobbyBee.com provides CRM tools for hospitality businesses via Social Media messenger platforms. Hotels are responsible for lawful usage, guest consent, and compliance with platform and local regulations. Guest onboarding may include Social Media messenger numbers and other information required. All guest interactions are facilitated through LB Codes (LobbyBee Machine Readable Codes) or equivalent identifiers.</p>
                              </div>
                              <div>
                                <h3 class="text-2xl font-bold text-gray-900 mb-4">2. Subscription & Billing</h3>
                                <p>LobbyBee operates on monthly billing cycles with no lock-in contracts. Invoices are issued digitally, and payment is due within 7 days. Late payments may result in temporary suspension. LobbyBee is not liable for the accuracy of data collected from guests. Hotels must confirm and authenticate incoming data.</p>
                              </div>
                              <div>
                                <h3 class="text-2xl font-bold text-gray-900 mb-4">3. Cancellation & Refunds</h3>
                                <p>Hotels may cancel their subscription at any time with 7 days’ notice via the admin console. Guest flows and data access are disabled after the legal retention period ends. Refunds are issued only under the following conditions:</p>
                                <ul class="list-disc pl-6 space-y-2 mb-4">
                                  <li>Cancellation occurs within 7 days of onboarding.</li>
                                  <li>Verified technical failure prevents service usage.</li>
                                </ul>
                                <p>Refunds are not provided for partial usage or mid-cycle cancellations. Refunds are processed within 14 working days.</p>
                              </div>
                              <div>
                                <h3 class="text-2xl font-bold text-gray-900 mb-4">4. Service Uptime & Support</h3>
                                <p>Service uptime is dependent on third-party APIs (e.g., Social Media messenger platforms) and excludes scheduled maintenance. Support is available via Social Media messenger and email during business hours. Feature updates and bug fixes are rolled out periodically without prior notice.</p>
                              </div>
                              <div>
                                <h3 class="text-2xl font-bold text-gray-900 mb-4">5. Messaging & Marketing</h3>
                                <p>Hotels may send promotional messages only via LobbyBee.com’s platform. Opt-in flows and unsubscribe options are provided. Misuse, including spam, harassment, or unauthorized automation, may result in account suspension. Messaging must comply with platform norms and guest consent protocols.</p>
                              </div>
                              <div>
                                <h3 class="text-2xl font-bold text-gray-900 mb-4">6. Data Ethics & Privacy</h3>
                                <p>Guest data is collected only during active stays and used strictly for service delivery. LobbyBee does not engage in resale, cross-hotel access, or external tracking. Hotels retain full control over guest profiles, preferences, and internal notes. Guests must request data access, correction, or deletion directly via LobbyBee.com. LobbyBee monitors system health and may intervene in case of abuse or technical failure. LobbyBee HQ accesses data solely for system integrity or support purposes and never for marketing or analytics.</p>
                              </div>
                              <div>
                                <h3 class="text-2xl font-bold text-gray-900 mb-4">7. Legal Boundaries & Liability</h3>
                                <p>Hotels are required to comply with local hospitality laws, including ID verification and data retention. LobbyBee is not liable for operational errors, staff miscommunication, or guest disputes. Jurisdiction for legal matters is the Courts of Kozhikode, Kerala. LobbyBee is not liable for the accuracy of guest data; hotels must verify and authenticate incoming data.</p>
                              </div>
                              <div>
                                <h3 class="text-2xl font-bold text-gray-900 mb-4">8. License Grant & Usage Restrictions</h3>
                                <p>LobbyBee grants subscribing hotels a limited, non-exclusive, non-transferable license to access and use its CRM platform solely for lawful hospitality operations. This license does not permit resale, sublicensing, or unauthorized automation.</p>
                              </div>
                              <div>
                                <h3 class="text-2xl font-bold text-gray-900 mb-4">9. Termination & Suspension</h3>
                                <p>LobbyBee reserves the right to suspend or terminate access to its services in case of misuse, breach of platform norms, or failure to comply with applicable laws or payment obligations.</p>
                              </div>
                              <div>
                                <h3 class="text-2xl font-bold text-gray-900 mb-4">10. Jurisdiction & Governing Law</h3>
                                <p>This Agreement shall be governed by the laws of India. Any disputes shall fall under the exclusive jurisdiction of the Courts of Kozhikode, Kerala.</p>
                              </div>
                              <div>
                                <h3 class="text-2xl font-bold text-gray-900 mb-4">11. Data Handling & Privacy</h3>
                                <p>Hotels acknowledge that LobbyBee may process guest data solely for service delivery and system integrity. No data shall be sold, shared across properties, or used for marketing unless explicitly authorized.</p>
                              </div>
                              <div>
                                <h3 class="text-2xl font-bold text-gray-900 mb-4">12. Subscription & Auto-Renewal</h3>
                                <p>LobbyBee subscriptions renew automatically unless cancelled via the admin console with 7 days’ notice prior to the renewal date.</p>
                              </div>
                            </div>

                            <div class="bg-whatsapp-light rounded-xl p-6 mt-12 text-center">
                              <p class="text-gray-700 mb-4">
                                <strong>Last Updated:</strong> 1 August 2025
                              </p>
                              <p class="text-sm text-gray-600">
                                By using LobbyBee services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
                              </p>
                            </div>
                          </div>
               </DisclosurePanel>
             </Disclosure>

      </div>
    </section>

    <!-- Support Section -->
    <section class="section-padding bg-white">
      <div class="container-max">
        <div class="text-center">
          <h2 class="text-3xl font-bold text-gray-900 mb-6">Need Clarification?</h2>
          <p class="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Our team is here to help you understand how these terms apply to your specific situation.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <NuxtLink to="/contact" class="btn-primary">
              Contact Legal Team
            </NuxtLink>
            <NuxtLink to="/privacy" class="btn-outline">
              View Privacy Policy
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import {
  ShieldCheckIcon,
  PhoneIcon,
  ArrowPathIcon,
  ChevronDownIcon
} from '@heroicons/vue/24/outline'
import {
   Disclosure,
   DisclosureButton,
   DisclosurePanel,
 } from '@headlessui/vue'
useHead({
  title: 'Terms & Conditions - LobbyBee | Service Agreement and Legal Terms',
  meta: [
    { name: 'description', content: 'LobbyBee Terms & Conditions governing the use of our WhatsApp-native CRM platform. Clear, fair terms for hotels and hospitality businesses.' }
  ]
})
</script>
