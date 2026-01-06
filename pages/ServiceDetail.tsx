
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { SERVICES, FALLBACK_IMAGE } from '../constants';
import { Check, Clock, DollarSign, Star, ChevronDown, Heart, HelpCircle, Loader2 } from 'lucide-react';
import { submitForm } from '../services/submissionService';

const ServiceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  
  // Form State
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const service = SERVICES.find(s => s.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.currentTarget;
    if (target.src !== FALLBACK_IMAGE) {
      target.src = FALLBACK_IMAGE;
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const success = await submitForm({
      timestamp: new Date().toISOString(),
      formType: 'Service Inquiry',
      name: formData.name,
      email: formData.email,
      phone: 'N/A',
      service: service?.title || 'Unknown Service',
      message: formData.message,
      pageUrl: window.location.href
    });

    if (success) {
      setFormSubmitted(true);
    } else {
      alert('Problem sending request. Please try again.');
    }
    setIsSubmitting(false);
  };

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FDFBF7]">
        <div className="text-center px-10">
          <h2 className="text-3xl font-serif text-[#A05035]">Service not found</h2>
          <button onClick={() => navigate('/')} className="mt-8 text-[#3E2723] underline font-bold tracking-widest uppercase text-xs">Back Home</button>
        </div>
      </div>
    );
  }

  const { details } = service;
  const hasProgramSeparator = service.title.includes(' : ');
  const titleParts = service.title.split(' : ');
  const bigHeading = hasProgramSeparator ? titleParts[1] : service.title;
  const subHeading = hasProgramSeparator ? titleParts[0] : null;

  return (
    <div className="bg-[#FDFBF7] min-h-screen">
      <div className="relative w-full min-h-[70vh] md:min-h-[85vh] flex items-center justify-center bg-[#3E2723] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-[10000ms] scale-110 animate-slow-zoom"
          style={{ backgroundImage: `url('${service.image}')` }}
        ></div>
        
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#3E2723] via-transparent to-black/30"></div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center py-24 mt-20">
           <div className="mb-10 md:mb-14">
              <h1 className="text-5xl sm:text-7xl md:text-9xl lg:text-[140px] xl:text-[165px] font-serif text-[#FDFBF7] leading-none mb-6 drop-shadow-[0_10px_40px_rgba(0,0,0,0.6)] tracking-tight">
                {bigHeading}
              </h1>
              {subHeading && (
                <h2 className="text-2xl md:text-4xl lg:text-5xl font-serif-italic text-[#FDFBF7] mb-12 drop-shadow-lg italic">
                  {subHeading}
                </h2>
              )}
           </div>

           <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-normal text-[#FDFBF7] max-w-3xl mx-auto leading-relaxed drop-shadow-lg px-4 md:px-0 opacity-100">
             {service.shortDescription}
           </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-24">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            
            <div className="lg:w-2/3 space-y-16 md:space-y-20">
              <div className="space-y-14">
                <div className="border-b border-[#A05035]/15 pb-12">
                  <span className="text-[#A05035] font-bold tracking-[0.5em] text-[10px] uppercase block mb-6">Introduction</span>
                  <h2 className="text-3xl md:text-5xl font-serif text-[#3E2723] mb-8">The Essence of {bigHeading}</h2>
                  <div className="space-y-6">
                    <p className="text-[#3E2723] leading-relaxed font-normal text-xl md:text-2xl">
                      {details?.whatItIs?.description || service.fullDescription}
                    </p>
                  </div>
                </div>

                {details?.whatYouExperience && (
                  <div className="bg-[#F4EFE6]/40 p-8 md:p-14 border border-[#A05035]/5">
                    <h3 className="text-2xl md:text-4xl font-serif text-[#3E2723] mb-10 flex items-center gap-5">
                      <Star className="text-[#A05035]" size={28} /> What You Experience
                    </h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {details.whatYouExperience.map((item, i) => (
                        <li key={i} className="flex items-start text-[#3E2723] font-normal text-lg md:text-xl">
                          <div className="w-2 h-2 bg-[#A05035] mt-3 mr-5 shrink-0 rounded-full"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="bg-[#F4EFE6] p-10 md:p-14 border border-[#A05035]/10 shadow-sm">
                  <h3 className="text-2xl font-serif text-[#A05035] mb-10 flex items-center gap-4">
                    <Heart size={26} /> Benefits
                  </h3>
                  <ul className="space-y-6">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start text-[#3E2723] font-normal text-lg leading-relaxed">
                        <Check size={20} className="text-[#A05035] mr-4 mt-1.5 shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {details?.faqs && (
                <div className="pt-16">
                  <h3 className="text-3xl md:text-5xl font-serif text-[#3E2723] mb-12 flex items-center gap-5">
                    <HelpCircle className="text-[#A05035]" size={36} /> Common Questions
                  </h3>
                  <div className="space-y-5">
                    {details.faqs.map((faq, idx) => (
                      <div key={idx} className="border border-[#F4EFE6] bg-white transition-all hover:shadow-md">
                        <button 
                          onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                          className="w-full flex items-center justify-between p-8 text-left"
                        >
                          <span className="font-serif text-xl md:text-2xl text-[#3E2723]">{faq.question}</span>
                          <ChevronDown className={`text-[#A05035] transition-transform duration-500 ${activeFaq === idx ? 'rotate-180' : ''}`} />
                        </button>
                        <div className={`overflow-hidden transition-all duration-500 ${activeFaq === idx ? 'max-h-[1000px]' : 'max-h-0'}`}>
                          <div className="p-8 pt-0 text-[#3E2723] font-normal leading-relaxed border-t border-[#F4EFE6]/50 text-lg">
                            <p className="pt-4">{Array.isArray(faq.answer) ? faq.answer[0] : faq.answer}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="lg:w-1/3">
              <div className="sticky top-32 space-y-10">
                <div className="bg-white p-10 shadow-2xl border border-[#F4EFE6]">
                  <h3 className="text-xs font-bold text-[#A05035] mb-10 uppercase tracking-[0.4em]">Session Details</h3>
                  <div className="space-y-10">
                    <div className="flex items-center">
                      <div className="w-14 h-14 bg-[#F4EFE6] flex items-center justify-center mr-6 shrink-0 rounded-full">
                        <Clock className="text-[#A05035]" size={28} />
                      </div>
                      <div>
                        <span className="block text-[9px] uppercase tracking-[0.3em] text-[#3E2723]/60 mb-1">Duration</span>
                        <span className="text-[#3E2723] text-xl font-bold">{service.duration}</span>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-14 h-14 bg-[#F4EFE6] flex items-center justify-center mr-6 shrink-0 rounded-full">
                        <DollarSign className="text-[#A05035]" size={28} />
                      </div>
                      <div>
                        <span className="block text-[9px] uppercase tracking-[0.3em] text-[#3E2723]/60 mb-1">Investment</span>
                        <span className="text-[#3E2723] text-xl font-bold">{service.price}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-[#3E2723] p-10 shadow-2xl relative overflow-hidden">
                  <div className="relative z-10">
                    <h3 className="text-xs font-bold text-[#FDFBF7] mb-8 uppercase tracking-[0.4em]">Enquire Now</h3>
                    {formSubmitted ? (
                      <div className="py-12 text-center animate-pulse">
                        <Check className="text-[#A05035] mx-auto mb-6" size={48} />
                        <h4 className="text-[#FDFBF7] font-serif text-2xl mb-2">Request Sent</h4>
                        <p className="text-[#FDFBF7]/60 text-sm">We will connect with you shortly.</p>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-5">
                        <input required disabled={isSubmitting} type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Full Name" className="w-full bg-white/10 border border-white/5 px-6 py-5 text-[#FDFBF7] text-sm focus:outline-none focus:border-[#A05035] transition-all disabled:opacity-50" />
                        <input required disabled={isSubmitting} type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Email" className="w-full bg-white/10 border border-white/5 px-6 py-5 text-[#FDFBF7] text-sm focus:outline-none focus:border-[#A05035] transition-all disabled:opacity-50" />
                        <textarea required disabled={isSubmitting} name="message" value={formData.message} onChange={handleInputChange} rows={4} placeholder="Your Message" className="w-full bg-white/10 border border-white/5 px-6 py-5 text-[#FDFBF7] text-sm focus:outline-none focus:border-[#A05035] transition-all resize-none disabled:opacity-50"></textarea>
                        <button type="submit" disabled={isSubmitting} className="w-full py-6 bg-[#A05035] text-[#FDFBF7] font-bold tracking-[0.5em] text-[11px] hover:bg-white hover:text-[#A05035] transition-all uppercase shadow-lg active:scale-95 flex items-center justify-center gap-3 disabled:bg-[#A05035]/70">
                          {isSubmitting ? (
                            <>
                              <Loader2 className="animate-spin" size={16} />
                              SENDING...
                            </>
                          ) : 'SUBMIT REQUEST'}
                        </button>
                      </form>
                    )}
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
