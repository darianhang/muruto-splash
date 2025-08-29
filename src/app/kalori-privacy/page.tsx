import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Privacy Policy - Kalori App",
  description: "Privacy policy for the Kalori mobile application - how we collect, use, and protect your data",
};

export default function KaloriPrivacyPolicy() {
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

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white rounded-xl shadow-sm p-8 md:p-12">
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

            <section className="bg-blue-50 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Contact Us
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions about this Privacy Policy or how we handle your information, please contact us:
              </p>
              <div className="space-y-2 text-gray-700">
                <p><strong>Email:</strong> privacy@kaloriapp.com</p>
                <p><strong>Support:</strong> support@kaloriapp.com</p>
                <p><strong>Address:</strong> Toronto, Ontario, Canada</p>
                <p><strong>Response Time:</strong> We typically respond within 48 hours</p>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}