'use client';

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function KaloriLegal() {
  const [activeTab, setActiveTab] = useState<'privacy' | 'terms'>('privacy');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Image
              src="/kalori-logo.png"
              width={80}
              height={80}
              alt="Kalori Logo"
              className="rounded-lg"
            />
          </div>
          <Link 
            href="/" 
            className="text-blue-500 hover:text-blue-700 font-medium transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </nav>

      {/* Tab Navigation */}
      <div className="max-w-4xl mx-auto px-6 pt-8">
        <div className="bg-white rounded-t-xl shadow-sm">
          <div className="border-b border-gray-200">
            <nav className="flex">
              <button
                onClick={() => setActiveTab('privacy')}
                className={`px-8 py-4 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === 'privacy'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Privacy Policy
              </button>
              <button
                onClick={() => setActiveTab('terms')}
                className={`px-8 py-4 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === 'terms'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Terms of Service
              </button>
            </nav>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 pb-12">
        <div className="bg-white rounded-b-xl shadow-sm p-8 md:p-12">
          {activeTab === 'privacy' ? (
            <div>
              <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                  Privacy Policy
                </h1>
                <p className="text-gray-600">
                  How Kalori collects, uses, and protects your information
                </p>
                <p className="text-sm text-gray-500 mt-4">
                  Last updated: {new Date().toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </p>
              </div>

              <div className="prose prose-gray max-w-none space-y-8">
                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    Introduction
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    At Kalori, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application and related services.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    1. Information We Collect
                  </h2>
                  
                  <h3 className="text-lg font-medium text-gray-800 mb-3">Personal Information</h3>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                    <li>Name, email address, and profile information</li>
                    <li>Age, gender, height, weight, and fitness goals</li>
                    <li>Dietary preferences and restrictions</li>
                    <li>Account credentials and authentication data</li>
                  </ul>

                  <h3 className="text-lg font-medium text-gray-800 mb-3">Health & Nutrition Data</h3>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                    <li>Food intake logs and calorie tracking</li>
                    <li>Exercise activities and fitness data</li>
                    <li>Food photos (if you choose to upload them)</li>
                    <li>Weight and measurement tracking</li>
                  </ul>

                  <h3 className="text-lg font-medium text-gray-800 mb-3">Technical Information</h3>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>Device information and unique identifiers</li>
                    <li>App usage statistics and analytics</li>
                    <li>Location data (only when permission is granted)</li>
                    <li>Camera access (for food scanning and photo uploads)</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    2. How We Use Your Information
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We use your information to provide and improve our services:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li><strong>Personalized Experience:</strong> Create customized meal plans and calorie recommendations</li>
                    <li><strong>Progress Tracking:</strong> Help you monitor your health and fitness journey</li>
                    <li><strong>Food Database:</strong> Improve our nutrition database and barcode scanning accuracy</li>
                    <li><strong>Customer Support:</strong> Respond to your questions and provide assistance</li>
                    <li><strong>App Improvements:</strong> Analyze usage patterns to enhance functionality</li>
                    <li><strong>Communications:</strong> Send important updates about the app (you can opt-out)</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    3. Information Sharing and Disclosure
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We <strong>do not sell</strong> your personal information. We may share your information only in these limited circumstances:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li><strong>Service Providers:</strong> Trusted third-party services that help us operate the app (cloud storage, analytics)</li>
                    <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and users' safety</li>
                    <li><strong>Business Transfer:</strong> In the event of a merger or acquisition (with notice to users)</li>
                    <li><strong>With Your Consent:</strong> Any other sharing will require your explicit permission</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    4. Data Security
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We implement industry-standard security measures to protect your information:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>End-to-end encryption for sensitive data transmission</li>
                    <li>Secure cloud storage with regular backups</li>
                    <li>Multi-factor authentication options</li>
                    <li>Regular security audits and updates</li>
                    <li>Limited employee access to personal data</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    5. Your Rights and Choices
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    You have control over your information:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li><strong>Access:</strong> View and download your personal data</li>
                    <li><strong>Update:</strong> Modify your profile and preferences anytime</li>
                    <li><strong>Delete:</strong> Request deletion of your account and data</li>
                    <li><strong>Opt-out:</strong> Unsubscribe from promotional communications</li>
                    <li><strong>Data Portability:</strong> Export your data in a common format</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    6. Data Retention
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    We retain your information for as long as your account is active or as needed to provide services. If you delete your account, we will remove your personal information within 30 days, except for data we're required to keep for legal or safety reasons.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    7. Children's Privacy
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    Kalori is not intended for children under 13. We do not knowingly collect personal information from children under 13. If we become aware that we have collected such information, we will promptly delete it.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    8. Changes to This Policy
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    We may update this Privacy Policy periodically. We will notify you of any material changes through the app or by email. Your continued use of Kalori after changes are posted constitutes acceptance of the updated policy.
                  </p>
                </section>
              </div>
            </div>
          ) : (
            <div>
              <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                  Terms of Service
                </h1>
                <p className="text-gray-600">
                  Terms and conditions for using the Kalori app
                </p>
                <p className="text-sm text-gray-500 mt-4">
                  Last updated: {new Date().toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </p>
              </div>

              <div className="prose prose-gray max-w-none space-y-8">
                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    Agreement to Terms
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    By downloading, installing, or using the Kalori mobile application ("App"), you agree to be bound by these Terms of Service ("Terms"). These Terms constitute a legally binding agreement between you and Muroto ("we," "us," or "our"). If you do not agree to these Terms, please do not use the App.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    Eligibility and Age Requirements
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    You must be at least 13 years old to use Kalori. By using the App, you represent and warrant that you meet this age requirement and have the legal capacity to enter into these Terms. If you are under 18, you confirm that you have obtained parental or guardian consent to use the App.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    Description of Service
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Kalori is a calorie tracking application that allows you to:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-1">
                    <li>Log and track your food intake and calories</li>
                    <li>Monitor macronutrients (carbohydrates, proteins, fats)</li>
                    <li>Use AI-powered food recognition through photos and text input</li>
                    <li>View your eating patterns and progress analytics</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    User Responsibilities and Acceptable Use
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    When using Kalori, you agree to:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                    <li>Provide accurate and truthful information when creating your account</li>
                    <li>Keep your account credentials secure and confidential</li>
                    <li>Use the App only for personal, non-commercial purposes</li>
                    <li>Respect our intellectual property and not copy, modify, or distribute the App</li>
                    <li>Not attempt to reverse engineer, hack, or compromise the App's security</li>
                    <li>Not create multiple accounts or use automated tools to access the App</li>
                    <li>Not use the App for any illegal or unauthorized purposes</li>
                    <li>Communicate respectfully when contacting our support team</li>
                  </ul>

                  <p className="text-gray-700 leading-relaxed">
                    You are solely responsible for all content you submit to the App, including food logs, photos, and any other information.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    Health and Medical Disclaimers
                  </h2>
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                    <p className="text-gray-700 font-medium">
                      <strong>Important Health Notice:</strong>
                    </p>
                  </div>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li><strong>Not Medical Advice:</strong> Kalori is a tracking tool, not a medical device or health advisor. The App does not provide medical advice, diagnosis, or treatment recommendations.</li>
                    <li><strong>AI Accuracy:</strong> Our AI food recognition technology is still developing and may not always be accurate. Always verify food information before logging entries.</li>
                    <li><strong>Calorie Data:</strong> Nutritional information provided by the App is for informational purposes only and may contain inaccuracies.</li>
                    <li><strong>Consult Healthcare Providers:</strong> Before making significant dietary changes or if you have health conditions, consult with qualified healthcare professionals.</li>
                    <li><strong>Not for Eating Disorders:</strong> If you have a history of eating disorders, please consult a healthcare provider before using calorie tracking applications.</li>
                    <li><strong>Emergency Situations:</strong> Do not rely on the App for emergency health situations. Seek immediate medical attention when needed.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    Intellectual Property Rights
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    <strong>Our Property:</strong> The Kalori app, including its design, features, logo, and underlying technology, is owned by Muroto and protected by intellectual property laws.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    <strong>Your Data:</strong> You retain ownership of your personal data, food logs, and information you input into the App, subject to our Privacy Policy.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Feedback:</strong> If you provide feedback, suggestions, or ideas about the App, we may use them freely to improve Kalori without compensation to you.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    Account Termination
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    <strong>Your Right to Terminate:</strong> You may stop using the App at any time and request account deletion by contacting us.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    <strong>Our Right to Terminate:</strong> We reserve the right to suspend or terminate your account immediately if you:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-4">
                    <li>Violate these Terms of Service</li>
                    <li>Provide false or misleading information</li>
                    <li>Engage in prohibited or illegal activities</li>
                    <li>Attempt to compromise the App's security or functionality</li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed">
                    Upon termination, your data will be handled according to our Privacy Policy, typically deleted within 30 days.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    App Availability and Changes
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    <strong>Service Availability:</strong> We strive to keep Kalori available, but cannot guarantee uninterrupted service. The App may be temporarily unavailable due to maintenance, updates, or technical issues.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    <strong>App Updates:</strong> We may modify, update, or discontinue features of the App at any time to improve functionality or address technical issues.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Future Features:</strong> We may introduce paid subscription features in the future. Any such features will be governed by updated terms.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    Disclaimers and Limitation of Liability
                  </h2>
                  <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-4">
                    <p className="text-gray-700 font-medium">
                      <strong>Important Legal Notice:</strong>
                    </p>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed mb-4">
                    <strong>App Provided "As-Is":</strong> Kalori is provided on an "as-is" and "as-available" basis. We make no warranties about the App's accuracy, reliability, or fitness for any particular purpose.
                  </p>
                  
                  <p className="text-gray-700 leading-relaxed mb-4">
                    <strong>Limitation of Liability:</strong> To the fullest extent permitted by law, Muroto shall not be liable for any:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-4">
                    <li>Inaccurate calorie or nutritional information</li>
                    <li>AI recognition errors or incorrect food identification</li>
                    <li>Health consequences from using the App</li>
                    <li>Data loss, app downtime, or technical malfunctions</li>
                    <li>Indirect, incidental, or consequential damages</li>
                    <li>Damages exceeding the amount you paid for the App (currently free)</li>
                  </ul>
                  
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Your Use at Own Risk:</strong> You use Kalori at your own risk and are responsible for any decisions made based on information from the App.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    Governing Law and Dispute Resolution
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    These Terms are governed by the laws of Ontario, Canada, without regard to conflict of law principles.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Any disputes arising from these Terms or your use of Kalori shall be resolved in the courts of Ontario, Canada. You agree to submit to the jurisdiction of these courts.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Before pursuing legal action, we encourage you to contact us to resolve any issues informally.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    Changes to These Terms
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    We may update these Terms periodically to reflect changes in our services or legal requirements. We will notify you of material changes through the App or by email. Your continued use of Kalori after changes are posted constitutes acceptance of the updated Terms.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    Severability
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    If any provision of these Terms is found to be unenforceable, the remaining provisions will continue in full force and effect.
                  </p>
                </section>
              </div>
            </div>
          )}

          {/* Contact Section - Always visible */}
          <section className="bg-blue-50 p-6 rounded-lg mt-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Contact Information
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Questions about our {activeTab === 'privacy' ? 'Privacy Policy' : 'Terms of Service'}? Contact us:
            </p>
            <div className="space-y-2 text-gray-700">
              <p><strong>Business:</strong> Muroto</p>
              <p><strong>Email:</strong> {activeTab === 'privacy' ? 'privacy@kaloriapp.com' : 'info@muroto.dev'}</p>
              {activeTab === 'privacy' && <p><strong>Support:</strong> support@kaloriapp.com</p>}
              <p><strong>Location:</strong> Toronto, Ontario, Canada</p>
              <p><strong>Response Time:</strong> We typically respond within 48 hours</p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}