import React, { useState, useEffect } from 'react';
import { X, Gift, CheckCircle2, Loader2 } from 'lucide-react';
import { submitForm } from '../services/submissionService';
import { LOGOS } from '../assets/logos';
import { dataService } from '../services/dataService';

const LeadCapturePopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });

  useEffect(() => {
    const hasSeenPopup = localStorage.getItem('aumkaar_lead_captured');
    if (hasSeenPopup) return;

    // Show popup after 9 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 9000);

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

  const downloadLink = dataService.getFreebieLink();

  return (
    <div className={`fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 transition-all duration-500 ${isClosing ? 'opacity-0' : 'opacity-100'}`}>
      <div className="absolute inset-0 bg-[#3E2723]/70 backdrop-blur-sm" onClick={handleClose}></div>
      
      <div className={`relative w-full max-w-4xl max-h-[calc(100vh-2rem)] bg-[#FDFBF7] shadow-[0_30px_100px_rgba(0,0,0,0.5)] overflow-y-auto rounded-xl transform transition-all duration-500 ${isClosing ? 'scale-95 translate-y-10' : 'scale-100 translate-y-0'}`}>
        <button 
          onClick={handleClose} 
          className="absolute top-4 right-4 md:top-6 md:right-6 text-[#3E2723]/40 hover:text-[#A05035] transition-colors z-20 p-2"
          aria-label="Close"
        >
          <X size={24} />
        </button>

        <div className="flex flex-col md:flex-row">
          {/* Left Panel with Background Image */}
          <div 
            className="md:w-[45%] py-10 px-8 md:p-12 flex flex-col justify-center items-center text-center text-[#FDFBF7] relative overflow-hidden shrink-0"
            style={{ 
              backgroundImage: `url('https://i.ibb.co/35N2n6cp/20260112-1750-Image-Generation-remix-01kes2ckpcezg91xgs6v01k7ak.png')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            {/* Dark Overlay for contrast */}
            <div className="absolute inset-0 bg-[#A05035]/45 mix-blend-multiply pointer-events-none"></div>
            
            <div className="relative z-10 space-y-6 md:space-y-10">
              <img src={LOGOS.ON_DARK} alt="Aumkaar" className="h-10 md:h-16 w-auto object-contain mx-auto" />
              
              <div className="w-12 h-12 md:w-14 md:h-14 bg-[#FDFBF7]/20 rounded-full flex items-center justify-center mx-auto shadow-lg backdrop-blur-sm border border-white/10">
                 <Gift size={24} className="text-[#FDFBF7]" />
              </div>
              
              <div className="space-y-3 md:space-y-6">
                <h3 className="text-2xl md:text-4xl font-serif leading-tight">A Gift for Your Soul</h3>
                <p className="text-[9px] md:text-[11px] font-bold tracking-[0.3em] uppercase opacity-90 leading-relaxed max-w-[200px] mx-auto">
                  Unlock a 15-minute Premium Sound Journey
                </p>
              </div>
            </div>
          </div>

          {/* Right Panel Form */}
          <div className="md:w-[55%] p-8 md:p-16 flex flex-col justify-center">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="mb-6 md:mb-8">
                  <h4 className="text-2xl md:text-4xl font-serif text-[#3E2723] mb-3 md:mb-4">Free Sound Healing</h4>
                  <p className="text-sm md:text-base text-[#3E2723]/60 font-light leading-relaxed">
                    Enter your details to receive our exclusive "Morning Resonance" audio file.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <input 
                    required 
                    disabled={isSubmitting} 
                    type="text" 
                    placeholder="Your Name" 
                    className="w-full bg-[#F4EFE6]/40 border-b border-[#A05035]/20 p-3 md:p-4 text-sm focus:outline-none focus:border-[#A05035] transition-all disabled:opacity-50 text-[#3E2723] placeholder-[#3E2723]/40" 
                    value={formData.name} 
                    onChange={(e) => setFormData({...formData, name: e.target.value})} 
                  />
                  <input 
                    required 
                    disabled={isSubmitting} 
                    type="email" 
                    placeholder="Email Address" 
                    className="w-full bg-[#F4EFE6]/40 border-b border-[#A05035]/20 p-3 md:p-4 text-sm focus:outline-none focus:border-[#A05035] transition-all disabled:opacity-50 text-[#3E2723] placeholder-[#3E2723]/40" 
                    value={formData.email} 
                    onChange={(e) => setFormData({...formData, email: e.target.value})} 
                  />
                  <input 
                    required 
                    disabled={isSubmitting} 
                    type="tel" 
                    placeholder="Phone Number" 
                    className="w-full bg-[#F4EFE6]/40 border-b border-[#A05035]/20 p-3 md:p-4 text-sm focus:outline-none focus:border-[#A05035] transition-all disabled:opacity-50 text-[#3E2723] placeholder-[#3E2723]/40" 
                    value={formData.phone} 
                    onChange={(e) => setFormData({...formData, phone: e.target.value})} 
                  />
                </div>
                
                <button 
                  type="submit" 
                  disabled={isSubmitting} 
                  className="w-full py-4 md:py-5 bg-[#A05035] text-white text-[10px] md:text-[11px] font-bold tracking-[0.4em] uppercase hover:bg-[#3E2723] transition-all shadow-xl mt-4 flex items-center justify-center gap-3 disabled:bg-[#A05035]/70 active:scale-[0.98] btn-texture"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="animate-spin" size={16} />
                      SENDING...
                    </>
                  ) : 'CLAIM MY GIFT'}
                </button>
              </form>
            ) : (
              <div className="text-center py-6 md:py-10 animate-fade-in space-y-6 md:space-y-8">
                <CheckCircle2 size={48} className="text-[#A05035] mx-auto" />
                <div className="space-y-4">
                  <h4 className="text-2xl md:text-3xl font-serif text-[#3E2723]">Your Healing is Ready</h4>
                  <p className="text-sm text-[#3E2723]/60 font-light">The resonance of peace awaits. Access your 15-minute journey below.</p>
                </div>
                <a 
                  href={downloadLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-3 px-10 py-4 md:px-12 md:py-5 bg-[#3E2723] text-white text-[10px] md:text-[11px] font-bold tracking-[0.4em] uppercase hover:bg-[#A05035] transition-all shadow-2xl"
                >
                  DOWNLOAD NOW
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadCapturePopup;