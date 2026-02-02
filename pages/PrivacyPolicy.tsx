
import React, { useEffect } from 'react';

const PrivacyPolicy: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#FDFBF7] min-h-screen pt-40 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        <span className="text-[#A05035] font-bold tracking-[0.5em] text-[10px] uppercase block mb-6">Transparency</span>
        <h1 className="text-5xl md:text-7xl font-serif text-[#3E2723] mb-12 leading-tight">Privacy Policy</h1>
        
        <div className="prose prose-stone max-w-none text-[#3E2723] space-y-12 font-light text-lg md:text-xl leading-relaxed">
          <section className="space-y-6">
            <h2 className="text-2xl md:text-4xl font-serif text-[#A05035]">Introduction</h2>
            <p>At Aumkaar, your privacy, trust, and emotional safety are deeply important to us. This Privacy Policy explains how we collect, use, protect, and handle your personal information when you interact with our website, programs, sessions, and digital offerings related to sound healing, meditation, and mind management.</p>
            <p>By using our website or services, you agree to the terms outlined in this policy.</p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl md:text-4xl font-serif text-[#A05035]">1. Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <div className="space-y-6 pl-4 border-l border-[#A05035]/10">
              <div>
                <h3 className="text-xl font-serif font-bold text-[#3E2723] mb-2">a) Personal Information</h3>
                <p>When you voluntarily provide it, such as: Name, Email address, Phone number, City / Country, and any information shared through contact forms, session bookings, or registrations.</p>
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold text-[#3E2723] mb-2">b) Sensitive & Wellness-Related Information</h3>
                <p>During sessions or inquiries, you may share emotional or mental well-being concerns, stress-related challenges, or personal experiences relevant to meditation or healing.</p>
                <p className="mt-2 text-base italic opacity-80">⚠️ Such information is collected only with your consent and is treated with strict confidentiality.</p>
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold text-[#3E2723] mb-2">c) Technical Information</h3>
                <p>Automatically collected data such as: IP address, Browser type, Device information, Pages visited and time spent on the website. This helps us improve user experience and website performance.</p>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl md:text-4xl font-serif text-[#A05035]">2. How We Use Your Information</h2>
            <p>We use your information to:</p>
            <ul className="list-disc pl-8 space-y-3">
              <li>Schedule and conduct sound healing, meditation, and mind management sessions.</li>
              <li>Respond to inquiries and provide customer support.</li>
              <li>Send session updates, confirmations, and relevant communication.</li>
              <li>Share wellness content, program updates, or event information (only if you opt-in).</li>
              <li>Improve our services, programs, and website experience.</li>
              <li>Comply with legal and regulatory requirements.</li>
            </ul>
            <p className="font-medium text-[#A05035]">We do not sell, rent, or trade your personal information to third parties.</p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl md:text-4xl font-serif text-[#A05035]">3. Cookies & Tracking Technologies</h2>
            <p>Our website may use cookies and similar technologies to understand website usage patterns, improve navigation and performance, and enhance your browsing experience.</p>
            <p>You can choose to disable cookies through your browser settings.</p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl md:text-4xl font-serif text-[#A05035]">4. Data Protection & Security</h2>
            <p>We take reasonable and appropriate security measures to protect your data, including secure servers, encrypted communication, restricted access to personal information, and confidential handling of session-related data.</p>
            <p className="text-sm opacity-60">While we strive to protect your data, no online transmission can be guaranteed 100% secure.</p>
          </section>

          <section className="space-y-6 bg-[#F4EFE6]/50 p-8 md:p-12 border border-[#A05035]/5">
            <h2 className="text-2xl md:text-4xl font-serif text-[#A05035]">5. Confidentiality of Sessions</h2>
            <p>All sound healing, meditation, and mind management sessions conducted by Aumkaar are:</p>
            <ul className="list-disc pl-8 space-y-3">
              <li>Strictly confidential.</li>
              <li>Conducted in a safe, non-judgmental environment.</li>
              <li>Not recorded without explicit consent.</li>
            </ul>
            <p>Any personal sharing during sessions remains private unless disclosure is required by law.</p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl md:text-4xl font-serif text-[#A05035]">6. Third-Party Services</h2>
            <p>We may use trusted third-party tools for payment processing, email communication, and website analytics. These third parties are obligated to protect your data and use it only for the intended purpose.</p>
            <p>Aumkaar is not responsible for the privacy practices of external websites linked from our platform.</p>
          </section>

          <section className="space-y-6 border-l-4 border-[#A05035] pl-8 py-4 bg-[#A05035]/5">
            <h2 className="text-2xl md:text-4xl font-serif text-[#A05035]">7. Health & Medical Disclaimer</h2>
            <p>Aumkaar's services are not a substitute for medical, psychological, or psychiatric treatment. We do not diagnose, treat, or cure medical conditions.</p>
            <p className="font-medium">If you are experiencing severe mental or physical health issues, please consult a qualified healthcare professional.</p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl md:text-4xl font-serif text-[#A05035]">8. Your Rights</h2>
            <p>You have the right to access the personal data we hold about you, request correction or deletion of your data, and withdraw consent for communications at any time. To exercise these rights, contact us using the details below.</p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl md:text-4xl font-serif text-[#A05035]">9. Children's Privacy</h2>
            <p>Our services are not intended for individuals under the age of 18 without parental or guardian consent. We do not knowingly collect data from minors.</p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl md:text-4xl font-serif text-[#A05035]">10. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. The updated version will be posted on this page with a revised effective date.</p>
          </section>

          <section className="space-y-8 pt-12 border-t border-[#A05035]/10">
            <h2 className="text-2xl md:text-4xl font-serif text-[#A05035]">11. Contact Us</h2>
            <p>If you have any questions or concerns regarding this Privacy Policy or how your data is handled, please contact us:</p>
            <div className="space-y-2 text-[#3E2723] font-medium">
              <p className="text-2xl font-serif">Aumkaar</p>
              <p>📧 Email: info@aumkaar.in</p>
              <p>📍 Location: Hyderabad, India</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
