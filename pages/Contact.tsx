
import React, { useEffect, useState } from 'react';
import { CheckCircle2, Loader2 } from 'lucide-react';
import { submitForm } from '../services/submissionService';

const Contact: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'General Inquiry',
    message: ''
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const success = await submitForm({
      timestamp: new Date().toISOString(),
      formType: 'General Contact',
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      service: formData.service,
      message: formData.message,
      pageUrl: window.location.href
    });

    if (success) {
      setIsSubmitted(true);
    } else {
      alert('There was an issue sending your request. Please try again or email us directly.');
    }
    setIsSubmitting(false);
  };

  return (
    <div className="bg-[#FDFBF7] min-h-screen pt-24 md:pt-32 pb-12 md:pb-20">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20 xl:px-24">
        
        <div className="text-center mb-10 md:mb-16">
          <span className="text-[#A05035] font-bold tracking-[0.4em] text-[10px] uppercase block mb-3 md:mb-4">Get in Touch</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#3E2723] mb-4 md:mb-6">Begin Your Journey</h1>
          <p className="text-[#3E2723] font-light max-w-2xl mx-auto text-lg md:text-xl opacity-75 px-2 leading-relaxed">
            Whether you have a question about our sessions or are ready to book a private healing, we are here to listen and guide you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-12 items-stretch shadow-2xl rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-[#A05035]/10">
          
          <div className="bg-[#A05035] text-[#FDFBF7] p-8 md:p-16 flex flex-col justify-center">
            <h3 className="text-3xl md:text-4xl font-serif mb-8 md:mb-12 text-[#F4EFE6]">Visit Our Sanctuary</h3>
            <div className="space-y-8 md:space-y-12 font-light">
              <div>
                <span className="block text-[10px] font-bold uppercase tracking-[0.4em] text-[#FDFBF7]/60 mb-3 md:mb-4">Location</span>
                <p className="text-xl md:text-2xl leading-relaxed opacity-95 font-serif">123 Serenity Lane<br/>Wellness District, CA 90210</p>
              </div>
              <div>
                <span className="block text-[10px] font-bold uppercase tracking-[0.4em] text-[#FDFBF7]/60 mb-3 md:mb-4">Direct Contact</span>
                <p className="text-xl md:text-2xl opacity-95 font-serif">hello@aumkaar.com</p>
                <p className="text-xl md:text-2xl opacity-95 font-serif">+1 (555) 123-4567</p>
              </div>
              <div>
                <span className="block text-[10px] font-bold uppercase tracking-[0.4em] text-[#FDFBF7]/60 mb-3 md:mb-4">Sacred Hours</span>
                <div className="space-y-1">
                  <p className="text-lg md:text-xl opacity-95">Mon - Fri: 9am - 7pm</p>
                  <p className="text-lg md:text-xl opacity-95">Sat: 10am - 4pm</p>
                  <p className="text-lg md:text-xl opacity-50 italic">Sun: Resting in Silence</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 md:p-16">
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12 animate-fade-in">
                <CheckCircle2 size={64} className="text-[#A05035] mb-6" />
                <h2 className="text-3xl font-serif text-[#3E2723] mb-4">Message Received</h2>
                <p className="text-[#3E2723]/60 font-light max-w-xs mx-auto">
                  Thank you for reaching out. We will connect with your soul's inquiry within 24 hours.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="mt-10 text-[#A05035] font-bold tracking-widest text-[10px] uppercase border-b border-[#A05035]/20 pb-1"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                  <div className="group">
                    <label className="block text-[10px] font-bold text-[#A05035] uppercase tracking-[0.3em] mb-3">Your Name</label>
                    <input 
                      disabled={isSubmitting}
                      required
                      type="text" 
                      className="w-full bg-[#FDFBF7] border-b border-[#A05035]/20 p-4 text-[#3E2723] focus:border-[#A05035] focus:outline-none placeholder-[#3E2723]/30 transition-all text-sm font-medium disabled:opacity-50" 
                      placeholder="First & Last Name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="group">
                    <label className="block text-[10px] font-bold text-[#A05035] uppercase tracking-[0.3em] mb-3">Phone Number</label>
                    <input 
                      disabled={isSubmitting}
                      required
                      type="tel" 
                      className="w-full bg-[#FDFBF7] border-b border-[#A05035]/20 p-4 text-[#3E2723] focus:border-[#A05035] focus:outline-none placeholder-[#3E2723]/30 transition-all text-sm font-medium disabled:opacity-50" 
                      placeholder="+1 (000) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                </div>
                
                <div className="group">
                  <label className="block text-[10px] font-bold text-[#A05035] uppercase tracking-[0.3em] mb-3">Email Address</label>
                  <input 
                    disabled={isSubmitting}
                    required
                    type="email" 
                    className="w-full bg-[#FDFBF7] border-b border-[#A05035]/20 p-4 text-[#3E2723] focus:border-[#A05035] focus:outline-none placeholder-[#3E2723]/30 transition-all text-sm font-medium disabled:opacity-50" 
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>

                <div className="group">
                  <label className="block text-[10px] font-bold text-[#A05035] uppercase tracking-[0.3em] mb-3">Service Interest</label>
                  <div className="relative">
                    <select 
                      disabled={isSubmitting}
                      className="w-full bg-[#FDFBF7] border-b border-[#A05035]/20 p-4 text-[#3E2723] focus:border-[#A05035] focus:outline-none appearance-none cursor-pointer text-sm font-medium disabled:opacity-50"
                      value={formData.service}
                      onChange={(e) => setFormData({...formData, service: e.target.value})}
                    >
                      <option>General Inquiry</option>
                      <option>Sound Healing : Naad</option>
                      <option>Sound Bath : Anhad</option>
                      <option>Tibetan Sound Spa : Tarang</option>
                      <option>Chakra Balancing : Chakra</option>
                      <option>Couple Sound Therapy : Dhwani</option>
                      <option>Mind Management : Manas</option>
                      <option>Tai Chi Meditation</option>
                      <option>Corporate Reset</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-[#A05035]">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                  </div>
                </div>

                <div className="group">
                  <label className="block text-[10px] font-bold text-[#A05035] uppercase tracking-[0.3em] mb-3">Your Message</label>
                  <textarea 
                    disabled={isSubmitting}
                    required
                    rows={4} 
                    className="w-full bg-[#FDFBF7] border-b border-[#A05035]/20 p-4 text-[#3E2723] focus:border-[#A05035] focus:outline-none placeholder-[#3E2723]/30 transition-all text-sm font-medium resize-none disabled:opacity-50" 
                    placeholder="Tell us about your intentions for this journey..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>

                <button 
                  disabled={isSubmitting}
                  type="submit" 
                  className="w-full bg-[#A05035] text-[#FDFBF7] font-bold tracking-[0.5em] uppercase py-5 rounded-full hover:bg-[#3E2723] transition-all shadow-xl mt-4 active:scale-95 text-[11px] flex items-center justify-center gap-3 disabled:bg-[#3E2723]/70"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="animate-spin" size={16} />
                      SENDING...
                    </>
                  ) : 'Send Request'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
