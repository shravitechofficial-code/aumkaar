
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FALLBACK_IMAGE } from '../constants';
import { Check, Clock, DollarSign, Star, ChevronDown, Heart, HelpCircle, Loader2, Users, Calendar, Info, AlertTriangle, Sparkles } from 'lucide-react';
import { submitForm } from '../services/submissionService';
import { dataService } from '../services/dataService';

const ServiceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [showAllFaqs, setShowAllFaqs] = useState(false);
  
  // Form State
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    preferredDate: '',
    preferredTime: ''
  });

  const services = dataService.getServices();
  const service = services.find(s => s.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
    setShowAllFaqs(false);
    setActiveFaq(null);
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
      pageUrl: window.location.href,
      preferredDate: formData.preferredDate,
      preferredTime: formData.preferredTime
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

  const isLongHeading = bigHeading.length > 15;

  return (
    <div className="bg-[#FDFBF7] min-h-screen">
      {/* Hero Header */}
      <div className="relative w-full min-h-[70vh] md:min-h-[85vh] flex items-center justify-center bg-[#3E2723] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-[10000ms] scale-110 animate-[slow-zoom_20s_infinite_alternate]"
          style={{ backgroundImage: `url('${service.image}')` }}
        ></div>
        
        <div className="absolute inset-0 bg-black/15 backdrop-blur-[0.5px]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#3E2723]/60 via-transparent to-black/5"></div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center py-24 mt-20">
           <div className="mb-10 md:mb-14">
              <h1 className={`font-serif text-[#FDFBF7] leading-[1.1] mb-6 drop-shadow-[0_10px_60px_rgba(0,0,0,0.8)] tracking-tight ${
                isLongHeading 
                ? 'text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl' 
                : 'text-5xl sm:text-7xl md:text-9xl lg:text-[140px] xl:text-[165px]'
              }`}>
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
            
            {/* Main Content Column */}
            <div className="lg:w-2/3 space-y-20 md:space-y-28">
              
              {/* 1. What It Is Section */}
              <div className="space-y-12">
                <div className="border-b border-[#A05035]/15 pb-12">
                  <span className="text-[#A05035] font-bold tracking-[0.5em] text-[10px] uppercase block mb-6">Introduction</span>
                  <h2 className="text-3xl md:text-5xl font-serif text-[#3E2723] mb-8">What It Is</h2>
                  <div className="space-y-8">
                    <p className="text-[#3E2723] leading-relaxed font-normal text-xl md:text-2xl">
                      {details?.whatItIs?.description || service.fullDescription}
                    </p>
                    {details?.whatItIs?.points && (
                      <ul className="space-y-6">
                        {details.whatItIs.points.map((point, i) => (
                          <li key={i} className="flex items-start text-lg md:text-xl text-[#3E2723] font-medium">
                            <Check size={20} className="text-[#A05035] mr-5 mt-1.5 shrink-0" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    )}
                    {details?.whatItIs?.closing && (
                      <p className="text-[#3E2723] leading-relaxed font-normal text-lg md:text-xl italic opacity-80 pt-4">
                        {details.whatItIs.closing}
                      </p>
                    )}
                  </div>
                </div>

                {/* 2. What You Experience Section */}
                {details?.whatYouExperience && (
                  <div className="bg-[#F4EFE6]/40 p-8 md:p-14 border border-[#A05035]/5 shadow-sm">
                    <h3 className="text-2xl md:text-4xl font-serif text-[#3E2723] mb-10 flex items-center gap-5">
                      <Star className="text-[#A05035]" size={28} /> What You Experience
                    </h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                      {details.whatYouExperience.map((item, i) => (
                        <li key={i} className="flex items-start text-[#3E2723] font-normal text-lg md:text-xl leading-snug">
                          <div className="w-2 h-2 bg-[#A05035] mt-3 mr-5 shrink-0 rounded-full"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                    <p className="mt-12 text-[#3E2723] opacity-60 italic text-base border-t border-[#A05035]/10 pt-8">
                      Each session is unique because your inner landscape changes every time.
                    </p>
                  </div>
                )}
              </div>

              {/* 3. Benefits Section */}
              <div className="space-y-12">
                <h3 className="text-3xl md:text-5xl font-serif text-[#3E2723] flex items-center gap-5">
                  <Sparkles className="text-[#A05035]" size={36} /> Benefits You May Notice
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {service.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-start bg-white p-6 shadow-sm border border-[#F4EFE6]">
                      <Heart size={20} className="text-[#A05035] mr-4 mt-1.5 shrink-0" />
                      <span className="text-[#3E2723] font-normal text-lg leading-relaxed">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 4. Who It Is For Section */}
              {details?.whoItIsFor && (
                <div className="space-y-12 bg-texture text-[#FDFBF7] p-10 md:p-20 shadow-2xl relative overflow-hidden rounded-sm">
                  <div className="absolute top-0 right-0 p-10 opacity-10">
                    <Users size={180} strokeWidth={1} />
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-4xl md:text-6xl font-serif mb-10">Who It Is For</h3>
                    <p className="text-xl md:text-2xl font-serif-italic opacity-90 mb-12 italic border-b border-[#FDFBF7]/10 pb-10">
                      Ideal for individuals navigating:
                    </p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                      {details.whoItIsFor.map((item, i) => (
                        <li key={i} className="flex items-start text-lg md:text-xl font-light">
                          <div className="w-2 h-2 bg-[#A05035] mt-3 mr-5 shrink-0 rounded-full shadow-[0_0_10px_rgba(160,80,53,0.3)]"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* 5. Format & Recommended Frequency */}
              {(details?.format || details?.frequency) && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
                  {details?.format && (
                    <div className="space-y-8">
                      <h3 className="text-2xl md:text-3xl font-serif text-[#3E2723]">Format</h3>
                      <ul className="space-y-4">
                        {details.format.map((item, i) => (
                          <li key={i} className="flex items-center text-lg text-[#3E2723] font-medium">
                            <div className="w-2 h-2 bg-[#A05035] mr-4 rounded-full"></div>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {details?.frequency && (
                    <div className="space-y-8">
                      <h3 className="text-2xl md:text-3xl font-serif text-[#3E2723]">Recommended Frequency</h3>
                      <p className="text-lg md:text-xl text-[#3E2723] font-light leading-relaxed">
                        {details.frequency}
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* 6. Session Guidelines Section */}
              {(details?.preSession || details?.postSession) && (
                <div className="space-y-16 border-t border-[#A05035]/10 pt-20">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    {details?.preSession && (
                      <div className="space-y-10">
                        <h3 className="text-2xl md:text-3xl font-serif text-[#3E2723] flex items-center gap-4">
                          <Info className="text-[#A05035]" size={24} /> Pre-Session Guidelines
                        </h3>
                        <ul className="space-y-6">
                          {details.preSession.map((item, i) => (
                            <li key={i} className="flex items-start text-lg text-[#3E2723] font-light">
                              <div className="w-1.5 h-1.5 bg-[#A05035] mt-3 mr-4 shrink-0 rounded-full"></div>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {details?.postSession && (
                      <div className="space-y-10">
                        <h3 className="text-2xl md:text-3xl font-serif text-[#3E2723] flex items-center gap-4">
                          <Info className="text-[#A05035]" size={24} /> Post-Session Care
                        </h3>
                        <ul className="space-y-6">
                          {details.postSession.map((item, i) => (
                            <li key={i} className="flex items-start text-lg text-[#3E2723] font-light">
                              <div className="w-1.5 h-1.5 bg-[#A05035] mt-3 mr-4 shrink-0 rounded-full"></div>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* 7. Safety Note Section */}
              {details?.safety && (
                <div className="bg-[#A05035]/5 p-8 md:p-14 border-l-4 border-[#A05035] space-y-8">
                  <h3 className="text-2xl md:text-3xl font-serif text-[#3E2723] flex items-center gap-4">
                    <AlertTriangle className="text-[#A05035]" size={28} /> Safety Note
                  </h3>
                  <div className="space-y-6">
                    <p className="text-lg md:text-xl text-[#3E2723] font-normal leading-relaxed">
                      {details.safety.note}
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {details.safety.conditions.map((item, i) => (
                        <li key={i} className="flex items-start text-lg text-[#3E2723] font-medium">
                          <div className="w-2 h-2 bg-[#A05035] mt-3 mr-4 shrink-0 rounded-full"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* 8. FAQ Section */}
              {details?.faqs && (
                <div className="pt-16 border-t border-[#A05035]/10">
                  <h3 className="text-3xl md:text-5xl font-serif text-[#3E2723] mb-12 flex items-center gap-5">
                    <HelpCircle className="text-[#A05035]" size={36} /> FAQ
                  </h3>
                  <div className="space-y-5">
                    {details.faqs.slice(0, showAllFaqs ? details.faqs.length : 3).map((faq, idx) => (
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
                            {Array.isArray(faq.answer) ? (
                              <ul className="space-y-4 pt-6">
                                {faq.answer.map((ans, i) => (
                                  <li key={i} className="flex items-start font-light">
                                    <div className="w-1.5 h-1.5 bg-[#A05035] mt-3 mr-4 shrink-0 rounded-full"></div>
                                    {ans}
                                  </li>
                                ))}
                              </ul>
                            ) : (
                              <p className="pt-6 font-light">{faq.answer}</p>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  {!showAllFaqs && details.faqs.length > 3 && (
                    <button onClick={() => setShowAllFaqs(true)} className="mt-12 px-10 py-4 border border-[#A05035]/30 text-[#A05035] text-[11px] font-bold tracking-[0.4em] uppercase hover:bg-[#A05035] hover:text-white transition-all mx-auto block">Read More FAQs</button>
                  )}
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3">
              <div className="sticky top-32 space-y-10">
                <div className="bg-white p-10 shadow-2xl border border-[#F4EFE6]">
                  <h3 className="text-xs font-bold text-[#A05035] mb-10 uppercase tracking-[0.4em]">Session Details</h3>
                  <div className="space-y-10">
                    <div className="flex items-center">
                      <div className="w-14 h-14 bg-[#F4EFE6] flex items-center justify-center mr-6 shrink-0 rounded-full"><Clock className="text-[#A05035]" size={28} /></div>
                      <div>
                        <span className="block text-[9px] uppercase tracking-[0.3em] text-[#3E2723]/60 mb-1">Duration</span>
                        <span className="text-[#3E2723] text-xl font-bold">{service.duration}</span>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-14 h-14 bg-[#F4EFE6] flex items-center justify-center mr-6 shrink-0 rounded-full"><DollarSign className="text-[#A05035]" size={28} /></div>
                      <div>
                        <span className="block text-[9px] uppercase tracking-[0.3em] text-[#3E2723]/60 mb-1">Energy Exchange</span>
                        <span className="text-[#3E2723] text-xl font-bold">{service.price}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Lightened Enquire Now Section */}
                <div className="bg-white p-10 md:p-12 shadow-2xl relative overflow-hidden rounded-sm border border-[#A05035]/10">
                  <div className="relative z-10">
                    <h3 className="text-xs font-bold text-[#A05035] mb-10 uppercase tracking-[0.5em] text-center border-b border-[#A05035]/10 pb-6">Enquire Now</h3>
                    {formSubmitted ? (
                      <div className="py-12 text-center animate-fade-in">
                        <Check className="text-[#A05035] mx-auto mb-6" size={48} />
                        <h4 className="text-[#3E2723] font-serif text-2xl mb-2">Request Sent</h4>
                        <p className="text-[#3E2723]/60 text-sm">We will connect with you shortly.</p>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-4">
                          <div className="group">
                            <label className="block text-[9px] font-bold text-[#A05035] uppercase tracking-widest mb-2 opacity-60">Full Name</label>
                            <input required disabled={isSubmitting} type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="E.g. John Doe" className="w-full bg-[#FDFBF7] border border-[#A05035]/10 px-6 py-4 text-[#3E2723] text-sm focus:outline-none focus:border-[#A05035] transition-all disabled:opacity-50 placeholder-[#3E2723]/30" />
                          </div>
                          
                          <div className="group">
                            <label className="block text-[9px] font-bold text-[#A05035] uppercase tracking-widest mb-2 opacity-60">Email Address</label>
                            <input required disabled={isSubmitting} type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="you@example.com" className="w-full bg-[#FDFBF7] border border-[#A05035]/10 px-6 py-4 text-[#3E2723] text-sm focus:outline-none focus:border-[#A05035] transition-all disabled:opacity-50 placeholder-[#3E2723]/30" />
                          </div>

                          <div className="grid grid-cols-2 gap-4">
                            <div className="group">
                              <label className="block text-[9px] font-bold text-[#A05035] uppercase tracking-widest mb-2 opacity-60">Date</label>
                              <input disabled={isSubmitting} type="date" name="preferredDate" value={formData.preferredDate} onChange={handleInputChange} className="w-full bg-[#FDFBF7] border border-[#A05035]/10 px-4 py-4 text-[#3E2723] text-xs focus:outline-none focus:border-[#A05035] transition-all disabled:opacity-50" />
                            </div>
                            <div className="group">
                              <label className="block text-[9px] font-bold text-[#A05035] uppercase tracking-widest mb-2 opacity-60">Time</label>
                              <input disabled={isSubmitting} type="time" step="900" name="preferredTime" value={formData.preferredTime} onChange={handleInputChange} className="w-full bg-[#FDFBF7] border border-[#A05035]/10 px-4 py-4 text-[#3E2723] text-xs focus:outline-none focus:border-[#A05035] transition-all disabled:opacity-50" />
                            </div>
                          </div>

                          <div className="group">
                            <label className="block text-[9px] font-bold text-[#A05035] uppercase tracking-widest mb-2 opacity-60">Message</label>
                            <textarea required disabled={isSubmitting} name="message" value={formData.message} onChange={handleInputChange} rows={4} placeholder="Your intentions for this journey..." className="w-full bg-[#FDFBF7] border border-[#A05035]/10 px-6 py-4 text-[#3E2723] text-sm focus:outline-none focus:border-[#A05035] transition-all resize-none disabled:opacity-50 placeholder-[#3E2723]/30"></textarea>
                          </div>
                        </div>
                        <button type="submit" disabled={isSubmitting} className="w-full py-5 bg-[#A05035] text-white font-bold tracking-[0.5em] text-[11px] transition-all uppercase shadow-lg active:scale-95 flex items-center justify-center gap-3 disabled:bg-[#A05035]/70 btn-texture">
                          {isSubmitting ? <><Loader2 className="animate-spin" size={16} /> SENDING...</> : 'SUBMIT REQUEST'}
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
