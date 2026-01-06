
import React, { useState, useEffect } from 'react';
import { X, Gift, Download, CheckCircle2, Loader2 } from 'lucide-react';
import { submitForm } from '../services/submissionService';

const LeadCapturePopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });

  useEffect(() => {
    const hasSeenPopup = localStorage.getItem('aumkaar_lead_captured');
    if (hasSeenPopup) return;

    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 7000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsVisible(false);
      localStorage.setItem('aumkaar_lead_captured', 'true');
    }, 300);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const success = await submitForm({
      timestamp: new Date().toISOString(),
      formType: 'Lead Magnet',
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      service: 'Morning Resonance Audio Gift',
      message: 'Source: Homepage Popup Overlay',
      pageUrl: window.location.href
    });

    if (success) {
      setIsSubmitted(true);
      localStorage.setItem('aumkaar_lead_captured', 'true');
    } else {
      alert('Problem sending request. Please try again.');
    }
    setIsSubmitting(false);
  };

  if (!isVisible) return null;

  return (
    <div className={`fixed inset-0 z-[100] flex items-center justify-center p-6 transition-all duration-500 ${isClosing ? 'opacity-0' : 'opacity-100'}`}>
      <div className="absolute inset-0 bg-[#3E2723]/60 backdrop-blur-sm" onClick={handleClose}></div>
      <div className={`relative w-full max-w-xl bg-[#FDFBF7] shadow-[0_30px_100px_rgba(0,0,0,0.4)] border border-[#A05035]/10 overflow-hidden transform transition-all duration-500 ${isClosing ? 'scale-95 translate-y-10' : 'scale-100 translate-y-0'}`}>
        <button onClick={handleClose} className="absolute top-4 right-4 text-[#3E2723]/40 hover:text-[#A05035] transition-colors z-20">
          <X size={24} />
        </button>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-2/5 bg-[#A05035] p-8 flex flex-col justify-center items-center text-center text-[#FDFBF7]">
            <Gift size={32} className="mb-6" />
            <h3 className="text-xl font-serif italic mb-4">A Gift for Your Soul</h3>
            <p className="text-[10px] font-bold tracking-[0.2em] uppercase opacity-80 leading-relaxed">Unlock a 15-minute Premium Sound Journey</p>
          </div>
          <div className="md:w-3/5 p-8 md:p-10">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h4 className="text-2xl font-serif text-[#3E2723] mb-2">Free Sound Healing</h4>
                <p className="text-sm text-[#3E2723]/60 font-light mb-8">Enter your details to receive our exclusive "Morning Resonance" audio file.</p>
                <input required disabled={isSubmitting} type="text" placeholder="Your Name" className="w-full bg-[#F4EFE6]/50 border-b border-[#A05035]/20 p-3 text-sm focus:outline-none focus:border-[#A05035] disabled:opacity-50" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
                <input required disabled={isSubmitting} type="email" placeholder="Email Address" className="w-full bg-[#F4EFE6]/50 border-b border-[#A05035]/20 p-3 text-sm focus:outline-none focus:border-[#A05035] disabled:opacity-50" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
                <input required disabled={isSubmitting} type="tel" placeholder="Phone Number" className="w-full bg-[#F4EFE6]/50 border-b border-[#A05035]/20 p-3 text-sm focus:outline-none focus:border-[#A05035] disabled:opacity-50" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} />
                <button type="submit" disabled={isSubmitting} className="w-full py-4 bg-[#A05035] text-white text-[10px] font-bold tracking-[0.3em] uppercase hover:bg-[#3E2723] transition-all shadow-lg mt-4 flex items-center justify-center gap-2 disabled:bg-[#A05035]/70">
                  {isSubmitting ? (
                    <>
                      <Loader2 className="animate-spin" size={14} />
                      SENDING...
                    </>
                  ) : 'CLAIM MY GIFT'}
                </button>
              </form>
            ) : (
              <div className="text-center py-6 animate-fade-in">
                <CheckCircle2 size={32} className="text-green-600 mx-auto mb-6" />
                <h4 className="text-2xl font-serif text-[#3E2723] mb-4">Your Healing is Ready</h4>
                <a href="https://drive.google.com/file/d/1EnCTs5Ixe1j1U9m9j98x8pULIL_1cGqP/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-10 py-4 bg-[#3E2723] text-white text-[10px] font-bold tracking-[0.3em] uppercase hover:bg-[#A05035] transition-all shadow-xl">DOWNLOAD NOW</a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadCapturePopup;
