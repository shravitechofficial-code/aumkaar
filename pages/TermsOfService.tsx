
import React, { useEffect } from 'react';

const TermsOfService: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#FDFBF7] min-h-screen pt-40 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        <span className="text-[#A05035] font-bold tracking-[0.5em] text-[10px] uppercase block mb-6">Legal Framework</span>
        <h1 className="text-5xl md:text-7xl font-serif text-[#3E2723] mb-4">Terms of Service</h1>
        <p className="text-2xl font-serif italic text-[#A05035] mb-12">Aumkaar</p>
        
        <div className="prose prose-stone max-w-none text-[#3E2723] space-y-12 font-light text-lg md:text-xl leading-relaxed">
          <p>
            Welcome to Aumkaar. These Terms of Service (“Terms”) govern your access to and use of the Aumkaar website, services, programs, sessions, workshops, and digital offerings related to sound healing, meditation, and mind management.
          </p>
          <p className="font-medium">
            By accessing or using our website or services, you agree to be bound by these Terms. If you do not agree, please do not use our services.
          </p>

          <section className="space-y-6">
            <h2 className="text-2xl md:text-4xl font-serif text-[#A05035]">1. Nature of Services</h2>
            <p>Aumkaar provides:</p>
            <ul className="list-disc pl-8 space-y-2">
              <li>Sound healing sessions</li>
              <li>Meditation and mindfulness practices</li>
              <li>Mind management and stress-relief programs</li>
              <li>Group sessions, corporate programs, retreats, workshops, and digital content</li>
            </ul>
            <p className="italic">All services are offered for well-being, self-awareness, and personal growth purposes only.</p>
          </section>

          <section className="space-y-6 border-l-4 border-[#A05035] pl-8 py-2 bg-[#A05035]/5">
            <h2 className="text-2xl md:text-4xl font-serif text-[#A05035]">2. No Medical or Therapeutic Advice</h2>
            <p>Aumkaar’s offerings:</p>
            <ul className="list-disc pl-8 space-y-2">
              <li>Are not medical, psychological, psychiatric, or therapeutic treatments</li>
              <li>Do not diagnose, treat, cure, or prevent any disease or medical condition</li>
            </ul>
            <p>Participation is voluntary and at your own discretion. If you have a medical condition, mental health concern, or are under treatment, you are advised to consult a qualified healthcare professional before participating.</p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl md:text-4xl font-serif text-[#A05035]">3. Eligibility</h2>
            <p>By using our services, you confirm that:</p>
            <ul className="list-disc pl-8 space-y-2">
              <li>You are at least 18 years of age, or have parental/guardian consent</li>
              <li>You are mentally and physically fit to participate in wellness sessions</li>
              <li>You understand and accept the nature of meditation and sound healing practices</li>
            </ul>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl md:text-4xl font-serif text-[#A05035]">4. User Responsibilities</h2>
            <p>You agree to:</p>
            <ul className="list-disc pl-8 space-y-2">
              <li>Provide accurate and complete information during registration or booking</li>
              <li>Participate respectfully in group sessions</li>
              <li>Follow session guidelines and instructions provided by facilitators</li>
              <li>Take full responsibility for your physical, emotional, and mental well-being</li>
            </ul>
            <p className="font-medium">Aumkaar reserves the right to refuse service to anyone engaging in disruptive, unsafe, or inappropriate behavior.</p>
          </section>

          <section className="space-y-6 bg-[#F4EFE6]/50 p-8 md:p-12 border border-[#A05035]/5">
            <h2 className="text-2xl md:text-4xl font-serif text-[#A05035]">5. Bookings, Payments & Refunds</h2>
            <ul className="list-disc pl-8 space-y-3">
              <li>All session fees must be paid in advance unless stated otherwise</li>
              <li>Payments once made are non-refundable, except in cases explicitly mentioned</li>
              <li>Rescheduling may be allowed with prior notice, subject to availability</li>
              <li>Aumkaar reserves the right to cancel or reschedule sessions due to unforeseen circumstances</li>
              <li>In case of cancellation by Aumkaar, an alternative session or refund may be offered at our discretion</li>
            </ul>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl md:text-4xl font-serif text-[#A05035]">6. Confidentiality</h2>
            <ul className="list-disc pl-8 space-y-2">
              <li>All personal information and session-related sharing are treated as confidential</li>
              <li>Sessions are not recorded without prior consent</li>
              <li>Participants are expected to respect the privacy of other participants</li>
            </ul>
            <p className="text-sm font-medium text-[#A05035]">Breach of confidentiality may result in removal from sessions without refund.</p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl md:text-4xl font-serif text-[#A05035]">7. Intellectual Property</h2>
            <p>All content on the Aumkaar website and sessions, including but not limited to: Text, audio, videos, meditations, sound recordings, logos, branding, session frameworks, and materials are the intellectual property of Aumkaar and may not be copied, reproduced, distributed, or used for commercial purposes without written permission.</p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl md:text-4xl font-serif text-[#A05035]">8. Online & Digital Content</h2>
            <ul className="list-disc pl-8 space-y-2">
              <li>Stable internet access is the participant’s responsibility</li>
              <li>Aumkaar is not responsible for technical disruptions beyond its control</li>
              <li>Access to digital content is for personal use only</li>
              <li>Sharing login credentials or distributing content is strictly prohibited</li>
            </ul>
          </section>

          <section className="space-y-6 bg-[#3E2723] text-[#FDFBF7] p-8 md:p-12">
            <h2 className="text-2xl md:text-4xl font-serif text-[#A05035]">9. Limitation of Liability</h2>
            <p>To the maximum extent permitted by law:</p>
            <ul className="list-disc pl-8 space-y-2 opacity-90">
              <li>Aumkaar shall not be liable for any direct, indirect, incidental, or consequential damages</li>
              <li>Participants accept full responsibility for their participation and outcomes</li>
              <li>Results may vary from person to person</li>
              <li>Participation is at your own risk</li>
            </ul>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl md:text-4xl font-serif text-[#A05035]">10. Third-Party Links & Services</h2>
            <p>Our website may contain links to third-party websites or services. Aumkaar is not responsible for their content, policies, or practices.</p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl md:text-4xl font-serif text-[#A05035]">11. Termination of Access</h2>
            <p>Aumkaar reserves the right to suspend or terminate access to services and cancel participation without refund in case of violation of these Terms.</p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl md:text-4xl font-serif text-[#A05035]">12. Changes to Terms</h2>
            <p>We may update these Terms from time to time. Continued use of the website or services constitutes acceptance of the updated Terms.</p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl md:text-4xl font-serif text-[#A05035]">13. Governing Law & Jurisdiction</h2>
            <p>These Terms shall be governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts of India.</p>
          </section>

          <section className="space-y-8 pt-12 border-t border-[#A05035]/10">
            <h2 className="text-2xl md:text-4xl font-serif text-[#A05035]">14. Contact Information</h2>
            <p>For questions regarding these Terms, please contact:</p>
            <div className="space-y-2 text-[#3E2723] font-medium">
              <p className="text-2xl font-serif">Aumkaar</p>
              <p>📧 Email: info@aumkaar.in</p>
              <p>📍 Location: India</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
