
import React, { useEffect } from 'react';

const PrivacyPolicy: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#FDFBF7] min-h-screen pt-40 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        <span className="text-[#A05035] font-bold tracking-[0.5em] text-[10px] uppercase block mb-6">Transparency</span>
        <h1 className="text-5xl md:text-7xl font-serif text-[#3E2723] mb-12">Privacy Policy</h1>
        
        <div className="prose prose-stone max-w-none text-[#3E2723] space-y-8 font-light text-lg md:text-xl leading-relaxed">
          <p>Last Updated: January 2026</p>
          
          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-serif text-[#A05035] mt-10">1. Introduction</h2>
            <p>Welcome to Aumkaar. We are committed to protecting your personal information and your right to privacy. This Privacy Policy describes how we collect, use, and share your personal information when you visit our website or book a session with us.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-serif text-[#A05035] mt-10">2. Information We Collect</h2>
            <p>We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our services, when you participate in activities on the website, or otherwise when you contact us.</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Name and contact data (Email address, phone number).</li>
              <li>Booking details and health-related preferences for session safety.</li>
              <li>Newsletter subscription preferences.</li>
              <li>Website usage data via cookies.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-serif text-[#A05035] mt-10">3. How We Use Your Information</h2>
            <p>We use personal information collected via our website for a variety of business purposes described below:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>To facilitate account creation and logon process.</li>
              <li>To send administrative information to you (Booking confirmations).</li>
              <li>To fulfill and manage your bookings.</li>
              <li>To send you marketing and promotional communications (if opted in).</li>
              <li>To protect our services and ensure safety.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-serif text-[#A05035] mt-10">4. Sharing Your Information</h2>
            <p>We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations. We do not sell your personal data to third parties.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-serif text-[#A05035] mt-10">5. Data Security</h2>
            <p>We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, please also remember that we cannot guarantee that the internet itself is 100% secure.</p>
          </section>

          <section className="space-y-4 border-t border-[#A05035]/10 pt-10 mt-20">
            <h2 className="text-2xl md:text-3xl font-serif text-[#A05035]">Contact Us</h2>
            <p>If you have questions or comments about this policy, you may email us at hello@aumkaar.com.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
