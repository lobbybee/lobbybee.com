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
                              <h2 class="text-4xl font-bold text-gray-900 mb-4">📋 Terms & Conditions</h2>
                              <p class="text-gray-600">
                                <strong>Effective Date:</strong> January 1, 2024<br>
                                <strong>Last Updated:</strong> January 1, 2024
                              </p>
                            </div>

                            <div class="prose prose-lg max-w-none text-gray-700 space-y-8">
                              <div>
                                <p class="text-lg mb-6">
                                  Welcome to LobbyBee! These Terms and Conditions ("Terms") govern your use of the LobbyBee WhatsApp-native CRM platform and related services provided by LobbyBee Technologies Pvt Ltd ("LobbyBee", "we", "us", or "our").
                                </p>
                                <p class="mb-4">
                                  By accessing or using our services, you agree to be bound by these Terms. If you disagree with any part of these terms, please do not use our services.
                                </p>
                              </div>

                              <div>
                                <h3 class="text-2xl font-bold text-gray-900 mb-4">1. Service Description</h3>
                                <p class="mb-4">
                                  LobbyBee provides a WhatsApp-native customer relationship management (CRM) platform specifically designed for hotels and hospitality businesses. Our services include:
                                </p>
                                <ul class="list-disc pl-6 space-y-2 mb-4">
                                  <li>WhatsApp-based guest communication and check-in processes</li>
                                  <li>Department routing and internal messaging systems</li>
                                  <li>Guest profile management and service history tracking</li>
                                  <li>Automated messaging and workflow tools</li>
                                  <li>Management dashboard and analytics</li>
                                  <li>Implementation consulting and ongoing support</li>
                                </ul>
                              </div>

                              <div>
                                <h3 class="text-2xl font-bold text-gray-900 mb-4">2. Acceptable Use</h3>
                                <p class="mb-4">You agree to use LobbyBee services only for lawful purposes and in accordance with these Terms. You must not:</p>
                                <ul class="list-disc pl-6 space-y-2 mb-4">
                                  <li>Use the platform to send spam, unsolicited messages, or promotional content to non-guests</li>
                                  <li>Attempt to gain unauthorized access to other hotels' data or systems</li>
                                  <li>Interfere with or disrupt the integrity or performance of our services</li>
                                  <li>Use our services in violation of applicable laws or regulations</li>
                                  <li>Share login credentials or allow unauthorized access to your account</li>
                                  <li>Reverse engineer, modify, or create derivative works of our platform</li>
                                </ul>
                              </div>

                              <div>
                                <h3 class="text-2xl font-bold text-gray-900 mb-4">3. Data Responsibilities</h3>
                                <div class="bg-blue-50 rounded-lg p-6 mb-4">
                                  <h4 class="font-semibold text-gray-900 mb-3">Your Responsibilities:</h4>
                                  <ul class="list-disc pl-6 space-y-2">
                                    <li>Obtain proper consent from guests for data collection and processing</li>
                                    <li>Comply with applicable data protection laws (GDPR, local privacy regulations)</li>
                                    <li>Ensure accurate and up-to-date information in guest profiles</li>
                                    <li>Maintain the confidentiality of guest information</li>
                                  </ul>
                                </div>
                                <div class="bg-whatsapp-light rounded-lg p-6 mb-4">
                                  <h4 class="font-semibold text-gray-900 mb-3">Our Responsibilities:</h4>
                                  <ul class="list-disc pl-6 space-y-2">
                                    <li>Secure data storage and transmission</li>
                                    <li>Platform availability and performance</li>
                                    <li>Regular security updates and monitoring</li>
                                    <li>Compliance with our Privacy Policy commitments</li>
                                  </ul>
                                </div>
                              </div>

                              <div>
                                <h3 class="text-2xl font-bold text-gray-900 mb-4">4. Service Availability</h3>
                                <p class="mb-4">
                                  We strive to maintain 99.9% uptime for our services. However, we do not guarantee uninterrupted service and may experience downtime for:
                                </p>
                                <ul class="list-disc pl-6 space-y-2 mb-4">
                                  <li>Scheduled maintenance (with advance notice)</li>
                                  <li>Emergency security updates</li>
                                  <li>Third-party service disruptions (including WhatsApp Business API)</li>
                                  <li>Force majeure events beyond our reasonable control</li>
                                </ul>
                              </div>

                              <div>
                                <h3 class="text-2xl font-bold text-gray-900 mb-4">5. Billing and Payment</h3>
                                <p class="mb-4">
                                  Subscription fees are billed according to your chosen plan. Payment terms include:
                                </p>
                                <ul class="list-disc pl-6 space-y-2 mb-4">
                                  <li>Monthly or annual billing cycles as selected</li>
                                  <li>Automatic renewal unless cancelled with 30 days notice</li>
                                  <li>Pro-rated charges for mid-cycle upgrades</li>
                                  <li>No refunds for partial months, except where legally required</li>
                                  <li>Late payment fees may apply after 15 days past due</li>
                                </ul>
                              </div>

                              <div>
                                <h3 class="text-2xl font-bold text-gray-900 mb-4">6. Intellectual Property</h3>
                                <p class="mb-4">
                                  LobbyBee retains all rights to our platform, software, documentation, and related intellectual property. You retain ownership of your hotel and guest data. By using our services, you grant us a limited license to process your data solely for providing our services.
                                </p>
                              </div>

                              <div>
                                <h3 class="text-2xl font-bold text-gray-900 mb-4">7. Limitation of Liability</h3>
                                <p class="mb-4">
                                  To the maximum extent permitted by law, LobbyBee's liability is limited to the amount you paid for our services in the 12 months preceding the claim. We are not liable for:
                                </p>
                                <ul class="list-disc pl-6 space-y-2 mb-4">
                                  <li>Indirect, incidental, or consequential damages</li>
                                  <li>Loss of revenue, profits, or business opportunities</li>
                                  <li>Data loss due to your failure to maintain backups</li>
                                  <li>Third-party integrations or services beyond our control</li>
                                </ul>
                              </div>

                              <div>
                                <h3 class="text-2xl font-bold text-gray-900 mb-4">8. Account Termination</h3>
                                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                                  <div class="bg-gray-50 rounded-lg p-4">
                                    <h4 class="font-semibold text-gray-900 mb-2">You may terminate:</h4>
                                    <ul class="text-sm space-y-1">
                                      <li>• At any time with 30 days notice</li>
                                      <li>• Via dashboard or email request</li>
                                      <li>• Data export available for 90 days</li>
                                    </ul>
                                  </div>
                                  <div class="bg-gray-50 rounded-lg p-4">
                                    <h4 class="font-semibold text-gray-900 mb-2">We may terminate for:</h4>
                                    <ul class="text-sm space-y-1">
                                      <li>• Violation of these Terms</li>
                                      <li>• Non-payment after 30 days</li>
                                      <li>• Illegal or harmful activities</li>
                                    </ul>
                                  </div>
                                </div>
                              </div>

                              <div>
                                <h3 class="text-2xl font-bold text-gray-900 mb-4">9. Updates to Terms</h3>
                                <p class="mb-4">
                                  We may update these Terms periodically. Changes will be communicated via:
                                </p>
                                <ul class="list-disc pl-6 space-y-2 mb-4">
                                  <li>Email notification to account administrators</li>
                                  <li>In-dashboard announcements</li>
                                  <li>Updated version posted on our website</li>
                                </ul>
                                <p class="mb-4">
                                  Continued use of our services after changes constitutes acceptance of updated Terms.
                                </p>
                              </div>

                              <div>
                                <h3 class="text-2xl font-bold text-gray-900 mb-4">10. Dispute Resolution</h3>
                                <p class="mb-4">
                                  Any disputes arising from these Terms will be resolved through:
                                </p>
                                <ol class="list-decimal pl-6 space-y-2 mb-4">
                                  <li>Good faith negotiation between parties</li>
                                  <li>Mediation if direct negotiation fails</li>
                                  <li>Binding arbitration under Indian Arbitration Act, 2015</li>
                                  <li>Courts of Mumbai, India for enforcement</li>
                                </ol>
                              </div>

                              <div>
                                <h3 class="text-2xl font-bold text-gray-900 mb-4">11. Governing Law</h3>
                                <p class="mb-4">
                                  These Terms are governed by the laws of India. Any legal proceedings will be conducted in English and subject to the jurisdiction of Mumbai courts.
                                </p>
                              </div>

                              <div>
                                <h3 class="text-2xl font-bold text-gray-900 mb-4">12. Contact Information</h3>
                                <p>
                                  For questions about these Terms, please contact us at:<br>
                                  📧 <a href="mailto:hello@lobbybee.com" class="text-whatsapp hover:underline">hello@lobbybee.com</a><br>
                                  🏢 LobbyBee Technologies Pvt Ltd<br>
                                  📍 Mumbai, India
                                </p>
                              </div>
                            </div>

                            <div class="bg-whatsapp-light rounded-xl p-6 mt-12 text-center">
                              <p class="text-gray-700 mb-4">
                                <strong>Last Updated:</strong> January 1, 2024
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
