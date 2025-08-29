import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Terms of Service - Kalori App",
  description: "Terms of Service for the Kalori calorie tracking mobile application by Muroto",
};

export default function KaloriTermsOfService() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Image
              src="/kalori-logo.png"
              width={40}
              height={40}
              alt="Kalori Logo"
              className="rounded-lg"
            />
            <span className="text-xl font-bold text-gray-900">Kalori</span>
          </div>
          <div className="flex items-center gap-4">
            <Link 
              href="/kalori" 
              className="text-gray-600 hover:text-gray-800 text-sm transition-colors"
            >
              Privacy Policy
            </Link>
            <Link 
              href="/" 
              className="text-blue-500 hover:text-blue-700 font-medium transition-colors"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white rounded-xl shadow-sm p-8 md:p-12">
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

            <section className="bg-blue-50 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Contact Information
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Questions about these Terms of Service? Contact us:
              </p>
              <div className="space-y-2 text-gray-700">
                <p><strong>Business:</strong> Muroto</p>
                <p><strong>Email:</strong> info@muroto.dev</p>
                <p><strong>Location:</strong> Toronto, Ontario, Canada</p>
                <p><strong>Privacy Policy:</strong> <Link href="/kalori" className="text-blue-500 hover:underline">Available here</Link></p>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}