
import React, { useEffect } from 'react';

const TermsOfService: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#FDFBF7] min-h-screen pt-40 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        <span className="text-[#A05035] font-bold tracking-[0.5em] text-[10px] uppercase block mb-6">Agreement</span>
        <h1 className="text-5xl md:text-7xl font-serif text-[#3E2723] mb-12">Terms of Service</h1>
        
        <div className="prose prose-stone max-w-none text-[#3E2723] space-y-8 font-light text-lg md:text-xl leading-relaxed">
          <p>Last Updated: January 2026</p>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-serif text-[#A05035] mt-10">1. Acceptance of Terms</h2>
            <p>By accessing or using the Aumkaar website and our services, you agree to be bound by these Terms of Service. If you do not agree to all of these terms, do not use our website or services.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-serif text-[#A05035] mt-10">2. Description of Services</h2>
            <p>Aumkaar provides wellness services including but not limited to Sound Healing, Sound Baths, Mind Management coaching, and Tai Chi meditation. These services are intended for relaxation and personal growth and are not a substitute for professional medical advice, diagnosis, or treatment.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-serif text-[#A05035] mt-10">3. Booking & Cancellations</h2>
            <p>All bookings are subject to availability. We require at least 24 hours' notice for cancellations or rescheduling. Cancellations made with less than 24 hours' notice may be subject to a cancellation fee or forfeiture of the session fee.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-serif text-[#A05035] mt-10">4. Health & Safety Disclaimer</h2>
            <p>Sound healing and vibrational therapy involve frequencies that can affect the body. Participants must inform the practitioner of any medical conditions, including pregnancy, pacemakers, or epilepsy, prior to the session. You agree that you are participating in these services at your own risk.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-serif text-[#A05035] mt-10">5. Intellectual Property</h2>
            <p>The content on this website, including text, logos, images, and audio, is the property of Aumkaar and is protected by intellectual property laws. You may not use, reproduce, or distribute any content without our express written permission.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-serif text-[#A05035] mt-10">6. Limitation of Liability</h2>
            <p>Aumkaar and its practitioners shall not be liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use our services or website.</p>
          </section>

          <section className="space-y-4 border-t border-[#A05035]/10 pt-10 mt-20">
            <h2 className="text-2xl md:text-3xl font-serif text-[#A05035]">Contact Information</h2>
            <p>For any questions regarding these Terms, please contact us at hello@aumkaar.com.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
