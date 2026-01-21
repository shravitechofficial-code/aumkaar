
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { TESTIMONIALS } from '../constants';
import { ArrowRight, Star, Youtube, Instagram, Loader2, ChevronLeft, ChevronRight, Gift, CheckCircle2, Waves, Activity, Zap, Play } from 'lucide-react';
import { dataService } from '../services/dataService';
import { submitForm } from '../services/submissionService';

const Home: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [activeScrollIndex, setActiveScrollIndex] = useState(0);
  const [activeYoutubeIndex, setActiveYoutubeIndex] = useState(0);
  const [activeReelIndex, setActiveReelIndex] = useState(0);
  const [activeTestimonialIndex, setActiveTestimonialIndex] = useState(0);
  const [activeVideoTestimonialIndex, setActiveVideoTestimonialIndex] = useState(0);
  
  const [isSubmittingFreebie, setIsSubmittingFreebie] = useState(false);
  const [freebieSuccess, setFreebieSuccess] = useState(false);
  const [freebieData, setFreebieData] = useState({ name: '', email: '', phone: '' });

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const youtubeContainerRef = useRef<HTMLDivElement>(null);
  const reelsContainerRef = useRef<HTMLDivElement>(null);
  const testimonialsContainerRef = useRef<HTMLDivElement>(null);
  const videoTestimonialsContainerRef = useRef<HTMLDivElement>(null);

  const youtubeVideos = dataService.getYoutubeLinks();
  const instagramReels = dataService.getReels();
  const videoTestimonials = dataService.getVideoTestimonials();
  const services = dataService.getServices();
  const blogs = dataService.getBlogs();
  const downloadLink = dataService.getFreebieLink();

  // The specific background video ID requested
  const HERO_VIDEO_ID = '8EO899rusyo';

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTracking = (ref: React.RefObject<HTMLDivElement | null>, setter: (index: number) => void, itemCount: number) => {
    if (!ref.current) return;
    const container = ref.current;
    const scrollPosition = container.scrollLeft;
    const itemWidth = container.scrollWidth / itemCount;
    const newIndex = Math.round(scrollPosition / itemWidth);
    setter(newIndex);
  };

  const scrollToItem = (ref: React.RefObject<HTMLDivElement | null>, index: number, itemCount: number) => {
    if (!ref.current) return;
    const container = ref.current;
    const scrollAmount = (container.scrollWidth / itemCount) * index;
    container.scrollTo({ left: scrollAmount, behavior: 'smooth' });
  };

  const handleArrowClick = (ref: React.RefObject<HTMLDivElement | null>, direction: 'left' | 'right', activeIndex: number, setter: (idx: number) => void, itemCount: number) => {
    const nextIndex = direction === 'left' 
      ? Math.max(0, activeIndex - 1) 
      : Math.min(itemCount - 1, activeIndex + 1);
    scrollToItem(ref, nextIndex, itemCount);
  };

  const handleFreebieSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmittingFreebie(true);
    const success = await submitForm({
      timestamp: new Date().toISOString(),
      formType: 'Lead Magnet',
      name: freebieData.name,
      email: freebieData.email,
      phone: freebieData.phone,
      service: 'Morning Resonance Audio Gift',
      message: 'Source: Homepage Section (Above Footer)',
      pageUrl: window.location.href
    });
    if (success) {
      setFreebieSuccess(true);
      localStorage.setItem('aumkaar_lead_captured', 'true');
    } else {
      alert('Problem sending request. Please try again.');
    }
    setIsSubmittingFreebie(false);
  };

  // Filter for 1:1 Healing services (Tibetan, Chakra, Couples)
  const healingServices = services.filter(s => 
    ['tibetan-sound-spa', 'chakra-sound-balancing', 'couples-sound-therapy'].includes(s.id)
  );

  // Filter for Group sessions (Exclude the 1:1 specific services)
  const groupSessions = services.filter(s => 
    !['tibetan-sound-spa', 'chakra-sound-balancing', 'couples-sound-therapy'].includes(s.id)
  );

  const getYoutubeId = (url: string) => {
    if (!url) return '';
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : url;
  };

  const getInstagramId = (url: string) => {
    if (!url) return '';
    const match = url.match(/(?:reel|reels|p)\/([a-zA-Z0-9_-]+)/);
    return match ? match[1] : url;
  };

  const contentWrapper = "max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 xl:px-24";

  return (
    <div className="w-full bg-[#FDFBF7]">
      {/* Rebuilt Hero Section - Fixed Video Visibility */}
      <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-black">
        {/* Background Video Layer */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 w-full h-full scale-110">
            <iframe
              className="absolute top-1/2 left-1/2 w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh] -translate-x-1/2 -translate-y-1/2"
              src={`https://www.youtube.com/embed/${HERO_VIDEO_ID}?autoplay=1&mute=1&loop=1&playlist=${HERO_VIDEO_ID}&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&disablekb=1&enablejsapi=1`}
              title="Aumkaar Hero Background"
              frameBorder="0"
              allow="autoplay; encrypted-media"
            ></iframe>
          </div>
        </div>
        
        {/* Reduced Transparency and added backdrop blur for text legibility */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[3px] z-10"></div>
        
        {/* Gradient for text legibility at the bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20 z-10"></div>

        <div className="max-w-[1440px] mx-auto px-6 sm:px-12 md:px-20 xl:px-24 w-full relative z-20 py-32 text-center">
          <div className="max-w-5xl mx-auto">
            <span className="text-[#FDFBF7]/90 font-bold tracking-[0.5em] text-[10px] sm:text-xs uppercase block mb-8 drop-shadow-xl animate-fade-up">
              welcome to Aumkaar
            </span>
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[88px] font-serif font-medium tracking-normal text-[#FDFBF7] leading-[1.15] md:leading-[1.1] mb-12 drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
              <span className="block animate-fade-up animation-delay-200">One stop solution to</span>
              <span className="font-serif-italic italic text-[#FDFBF7] block mt-6 md:mt-8 opacity-100 drop-shadow-[0_0_20px_rgba(255,255,255,0.4)] animate-fade-up animation-delay-400">
                Stress, Sleep disorder and Anxiety
              </span>
            </h1>
            <p className="text-[#FDFBF7] text-xl md:text-2xl lg:text-3xl xl:text-[40px] font-semibold leading-relaxed max-w-4xl mx-auto mb-16 drop-shadow-lg italic animate-fade-up animation-delay-600">
              Where sound becomes medicine and silence becomes home.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 lg:gap-10 justify-center items-center animate-fade-up animation-delay-800">
              <Link to="/contact" className="w-full sm:w-auto px-12 md:px-16 py-6 text-[#FDFBF7] font-bold tracking-[0.5em] text-[11px] hover:text-white transition-all duration-500 shadow-2xl uppercase btn-texture text-center">
                JOIN SESSIONS
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How Sound Healing Helps - Scientific Narrative Section */}
      <section className="py-24 md:py-32 lg:py-48 bg-[#FDFBF7] relative overflow-hidden">
        <div className={contentWrapper}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-start mb-32">
            <div className="space-y-10">
              <div className="space-y-4">
                <span className="text-[#A05035] font-bold tracking-[0.5em] text-xs uppercase block">The Science of Vibration</span>
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif text-[#3E2723] leading-tight">How Sound Healing <br/><span className="font-serif-italic text-[#A05035]">Helps</span></h2>
              </div>
              <div className="space-y-8 text-[#3E2723] text-lg md:text-xl lg:text-2xl font-normal leading-relaxed">
                <p>
                  At the microscopic level, everything in the universe is vibration, including the human body. Every organ, bone and cell has its own natural frequency. When stress, poor sleep, emotional tension or lifestyle imbalance disrupt these frequencies, the body falls out of harmony.
                </p>
                <p className="border-l-2 border-[#A05035]/20 pl-8 py-2 font-medium">
                  Because the body is made of 70% water, and water conducts sound four times faster than air, vibrations from singing bowls travel easily through tissues, muscles and fluids, creating a soothing internal massage without physical touch. 
                </p>
                <p>
                  These vibrations help release tension, slow the mind, and guide the body back toward balance.
                </p>
              </div>
            </div>
            
            <div className="relative pt-12">
              <div className="aspect-[4/5] bg-[#F4EFE6] rounded-sm flex items-center justify-center p-12 relative overflow-hidden group shadow-2xl border border-[#A05035]/10">
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]"></div>
                <div className="relative z-10 text-center space-y-10">
                   <div className="w-20 h-20 mx-auto bg-[#FDFBF7] rounded-full flex items-center justify-center shadow-inner">
                      <Waves size={32} className="text-[#A05035]" />
                   </div>
                   <p className="font-serif-italic text-2xl md:text-3xl lg:text-4xl text-[#3E2723] italic leading-relaxed px-4 font-semibold">
                     "Sound healing is not magic, it is physics, biology and neuroscience coming together."
                   </p>
                   <div className="flex justify-center gap-4">
                      {[...Array(3)].map((_, i) => (
                        <div key={i} className="w-2 h-2 rounded-full bg-[#A05035]/30"></div>
                      ))}
                   </div>
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border border-[#A05035]/10 rounded-full animate-[ping_3s_infinite] opacity-20"></div>
              </div>
            </div>
          </div>

          <div className="space-y-20">
            <div className="text-center max-w-3xl mx-auto space-y-6">
              <h3 className="text-2xl md:text-4xl font-serif text-[#3E2723] font-bold">Three primary mechanisms explain its impact:</h3>
              <div className="w-24 h-px bg-[#A05035] mx-auto opacity-40"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
              {/* Resonance Mechanism */}
              <div className="group text-center space-y-8 p-8 transition-all hover:bg-white hover:shadow-xl rounded-2xl border border-transparent hover:border-[#A05035]/5">
                <div className="w-24 h-24 bg-[#F4EFE6] rounded-2xl flex items-center justify-center mx-auto text-[#A05035] shadow-sm transition-transform duration-700 group-hover:rotate-12 group-hover:scale-110">
                  <Waves size={40} strokeWidth={1.5} />
                </div>
                <div className="space-y-4">
                  <h4 className="text-2xl lg:text-3xl font-serif text-[#3E2723] font-bold">Resonance</h4>
                  <p className="text-[#3E2723] opacity-90 font-normal leading-relaxed text-lg">
                    Just like one guitar string can cause another to vibrate, sound encourages the body to match a calmer, healthier rhythm.
                  </p>
                </div>
              </div>

              {/* Entrainment Mechanism */}
              <div className="group text-center space-y-8 p-8 transition-all hover:bg-white hover:shadow-xl rounded-2xl border border-transparent hover:border-[#A05035]/5">
                <div className="w-24 h-24 bg-[#F4EFE6] rounded-2xl flex items-center justify-center mx-auto text-[#A05035] shadow-sm transition-transform duration-700 group-hover:-rotate-12 group-hover:scale-110">
                  <Activity size={40} strokeWidth={1.5} />
                </div>
                <div className="space-y-4">
                  <h4 className="text-2xl lg:text-3xl font-serif text-[#3E2723] font-bold">Entrainment</h4>
                  <p className="text-[#3E2723] opacity-90 font-normal leading-relaxed text-lg">
                    Sound softly leads the nervous system into parasympathetic “rest-and-repair” mode.
                  </p>
                </div>
              </div>

              {/* Cymatics Mechanism */}
              <div className="group text-center space-y-8 p-8 transition-all hover:bg-white hover:shadow-xl rounded-2xl border border-transparent hover:border-[#A05035]/5">
                <div className="w-24 h-24 bg-[#F4EFE6] rounded-2xl flex items-center justify-center mx-auto text-[#A05035] shadow-sm transition-transform duration-700 group-hover:rotate-12 group-hover:scale-110">
                  <Zap size={40} strokeWidth={1.5} />
                </div>
                <div className="space-y-4">
                  <h4 className="text-2xl lg:text-3xl font-serif text-[#3E2723] font-bold">Cymatics</h4>
                  <p className="text-[#3E2723] opacity-90 font-normal leading-relaxed text-lg">
                    Cymatics shows that sound can organise matter into patterns, helping us understand how vibration influences the body at a cellular level.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 1:1 Healing Highlights */}
      <section className="py-24 md:py-32 lg:py-40 bg-[#F4EFE6]">
        <div className={contentWrapper}>
          <div className="text-center mb-16 md:mb-24">
            <span className="text-[#A05035] font-bold tracking-[0.5em] text-xs uppercase block mb-6">Bespoke Experiences</span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif text-[#3E2723] mb-8 leading-tight">The Art of <span className="font-serif-italic font-bold">Individualized</span> Resonance</h2>
            <p className="text-[#3E2723] opacity-100 text-lg md:text-xl font-bold max-w-2xl mx-auto leading-relaxed border-t border-[#A05035]/10 pt-8">
              Personalized 1:1 Healing journeys designed for deep nervous-system reset, emotional clarity, and spiritual alignment.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
            {healingServices.map((service) => (
              <div key={service.id} className="group bg-[#FDFBF7] p-5 shadow-2xl border border-[#A05035]/20 transition-all hover:-translate-y-3 duration-500 relative flex flex-col">
                <div className="absolute top-8 left-8 z-10 bg-[#A05035] text-[#FDFBF7] text-[10px] font-bold tracking-[0.3em] px-4 py-2 shadow-xl uppercase">
                  Personal 1:1
                </div>
                <Link to={`/service/${service.id}`} className="block overflow-hidden aspect-[4/5] mb-8 relative shrink-0">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-[#3E2723]/10"></div>
                </Link>
                <div className="px-4 pb-8 text-center flex flex-col flex-grow">
                  <span className="text-[#A05035] font-bold tracking-[0.3em] text-[10px] uppercase block mb-4">
                    {service.category}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-serif text-[#3E2723] mb-5 md:mb-6 group-hover:text-[#A05035] transition-colors leading-tight">
                    {service.title.split(' : ')[0]}
                  </h3>
                  <p className="text-[#3E2723] opacity-100 font-bold leading-relaxed mb-10 line-clamp-2">
                    {service.shortDescription}
                  </p>
                  
                  <div className="mt-auto flex flex-col items-center gap-6">
                    <Link to={`/service/${service.id}`} className="inline-flex items-center gap-2 text-[#A05035] font-bold tracking-[0.4em] text-[10px] uppercase border-b-2 border-[#A05035] pb-1">
                      VIEW SESSION <ArrowRight size={14} />
                    </Link>
                    
                    <Link to="/contact" className="w-full py-4 text-[#FDFBF7] font-bold tracking-[0.3em] text-[10px] uppercase shadow-lg btn-texture transition-transform active:scale-95 text-center">
                      BOOK 1:1 SESSION NOW
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offerings Slider - Filtered for Group Sessions */}
      <section className="py-24 md:py-32 bg-[#FDFBF7] overflow-hidden">
        <div className={contentWrapper}>
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 gap-10">
            <div className="w-full text-center md:text-left">
              <span className="text-[#A05035] font-bold tracking-[0.4em] text-xs uppercase block mb-6">Explore the Naad</span>
              <h2 className="text-4xl md:text-6xl font-serif font-medium text-[#3E2723]">Curated Offerings</h2>
            </div>
            <div className="w-full flex justify-center md:justify-end">
              <Link to="/services" className="px-10 py-5 border border-[#3E2723] text-[#3E2723] text-[11px] font-bold tracking-[0.4em] hover:bg-[#3E2723] hover:text-[#FDFBF7] transition-all duration-300 text-center">
                BROWSE ALL SESSIONS
              </Link>
            </div>
          </div>
        </div>
        
        <div className={`relative group/slider-container ${contentWrapper}`}>
          <button 
            onClick={() => handleArrowClick(scrollContainerRef, 'left', activeScrollIndex, setActiveScrollIndex, groupSessions.length)}
            className={`absolute left-0 md:left-4 top-[40%] -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-[#FDFBF7]/80 backdrop-blur-sm border border-[#3E2723]/10 flex items-center justify-center text-[#3E2723] shadow-lg opacity-0 group-hover/slider-container:opacity-100 transition-all hover:bg-[#3E2723] hover:text-[#FDFBF7] ${activeScrollIndex === 0 ? 'invisible' : ''}`}
            aria-label="Previous Offering"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={() => handleArrowClick(scrollContainerRef, 'right', activeScrollIndex, setActiveScrollIndex, groupSessions.length)}
            className={`absolute right-0 md:right-4 top-[40%] -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-[#FDFBF7]/80 backdrop-blur-sm border border-[#3E2723]/10 flex items-center justify-center text-[#3E2723] shadow-lg opacity-0 group-hover/slider-container:opacity-100 transition-all hover:bg-[#3E2723] hover:text-[#FDFBF7] ${activeScrollIndex === groupSessions.length - 1 ? 'invisible' : ''}`}
            aria-label="Next Offering"
          >
            <ChevronRight size={24} />
          </button>

          <div 
            ref={scrollContainerRef}
            onScroll={() => handleScrollTracking(scrollContainerRef, setActiveScrollIndex, groupSessions.length)}
            className="flex overflow-x-auto gap-8 md:gap-12 pb-16 snap-x snap-mandatory no-scrollbar scroll-smooth"
          >
            {groupSessions.map((service) => (
              <div key={service.id} className="snap-start shrink-0 w-[80vw] sm:w-[50vw] md:w-[40vw] lg:w-[30vw] max-w-[450px]">
                <div className="group/card flex flex-col h-full">
                  <Link to={`/service/${service.id}`} className="block flex-grow">
                    <div className="relative aspect-[3/4] overflow-hidden mb-10 bg-[#F4EFE6] shadow-xl border border-[#A05035]/10 transition-transform duration-700 group-hover/card:-translate-y-4">
                       <img 
                         src={service.image} 
                         alt={service.title} 
                         className="w-full h-full object-cover"
                       />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-serif text-[#3E2723] mb-5 font-bold group-hover/card:text-[#A05035] transition-colors leading-tight">{service.title}</h3>
                    <p className="text-[#3E2723] font-bold leading-relaxed line-clamp-2 mb-8">{service.shortDescription}</p>
                  </Link>
                  <Link 
                    to="/contact" 
                    state={{ service: service.title }}
                    className="block w-full text-center py-5 text-[#FDFBF7] font-bold tracking-[0.3em] text-[11px] uppercase shadow-lg btn-texture transition-all active:scale-95"
                  >
                    ENQUIRE NOW
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center items-center gap-3 mt-4">
            {groupSessions.map((_, idx) => (
              <button
                key={idx}
                onClick={() => scrollToItem(scrollContainerRef, idx, groupSessions.length)}
                className={`transition-all duration-500 rounded-full ${activeScrollIndex === idx ? 'w-10 h-1.5 bg-[#A05035]' : 'w-2 h-2 bg-[#3E2723]/20 hover:bg-[#3E2723]/40'}`}
                aria-label={`Go to offering ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 md:py-32 lg:py-40 bg-[#F4EFE6]">
        <div className={`${contentWrapper} text-center mb-16 md:mb-24`}>
           <span className="text-[#A05035] font-bold tracking-[0.5em] text-xs uppercase block mb-8">Echoes of Balance</span>
           <h2 className="text-3xl md:text-6xl font-serif font-medium text-[#3E2723] leading-tight">The Resonance Experience</h2>
        </div>
        
        <div className={`relative group/testimonials-container ${contentWrapper}`}>
          <button 
            onClick={() => handleArrowClick(testimonialsContainerRef, 'left', activeTestimonialIndex, setActiveTestimonialIndex, TESTIMONIALS.length)}
            className={`absolute left-0 md:left-4 top-[50%] -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-[#FDFBF7]/80 backdrop-blur-sm border border-[#3E2723]/10 flex items-center justify-center text-[#3E2723] shadow-lg opacity-0 group-hover/testimonials-container:opacity-100 transition-all hover:bg-[#3E2723] hover:text-[#FDFBF7] ${activeTestimonialIndex === 0 ? 'invisible' : ''}`}
            aria-label="Previous Testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={() => handleArrowClick(testimonialsContainerRef, 'right', activeTestimonialIndex, setActiveTestimonialIndex, TESTIMONIALS.length)}
            className={`absolute right-0 md:right-4 top-[50%] -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-[#FDFBF7]/80 backdrop-blur-sm border border-[#3E2723]/10 flex items-center justify-center text-[#3E2723] shadow-lg opacity-0 group-hover/testimonials-container:opacity-100 transition-all hover:bg-[#3E2723] hover:text-[#FDFBF7] ${activeTestimonialIndex === TESTIMONIALS.length - 1 ? 'invisible' : ''}`}
            aria-label="Next Testimonial"
          >
            <ChevronRight size={24} />
          </button>

          <div 
            ref={testimonialsContainerRef}
            onScroll={() => handleScrollTracking(testimonialsContainerRef, setActiveTestimonialIndex, TESTIMONIALS.length)}
            className="flex overflow-x-auto gap-8 md:gap-12 pb-16 snap-x snap-mandatory no-scrollbar scroll-smooth"
          >
            {TESTIMONIALS.map((t) => (
              <div 
                key={t.id} 
                className="snap-start flex-shrink-0 w-[85vw] sm:w-[55vw] md:w-[50vw] lg:w-[40vw] xl:w-[35vw] flex flex-col bg-[#FDFBF7] p-10 md:p-14 shadow-2xl border border-[#A05035]/10 rounded-sm"
              >
                <div className="flex text-[#A05035] mb-8">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" className="mr-1.5" />)}
                </div>
                <p className="text-[#3E2723] font-serif-italic mb-12 leading-relaxed text-lg md:text-xl lg:text-2xl opacity-100 flex-grow font-medium">
                  "{t.text}"
                </p>
                <div className="pt-8 border-t border-[#A05035]/20">
                  <h4 className="font-bold text-[#A05035] text-sm md:text-base uppercase tracking-[0.2em]">{t.name}</h4>
                  <span className="text-[10px] md:text-xs text-[#3E2723] opacity-80 uppercase tracking-widest mt-2 block">
                    {t.location}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center items-center gap-3 mt-4">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => scrollToItem(testimonialsContainerRef, idx, TESTIMONIALS.length)}
                className={`transition-all duration-500 rounded-full ${activeTestimonialIndex === idx ? 'w-10 h-1.5 bg-[#A05035]' : 'w-2 h-2 bg-[#3E2723]/20 hover:bg-[#3E2723]/40'}`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials Section */}
      <section className="py-24 md:py-32 lg:py-40 bg-[#FDFBF7] overflow-hidden">
        <div className={`${contentWrapper} text-center mb-16 md:mb-24`}>
           <span className="text-[#A05035] font-bold tracking-[0.5em] text-xs uppercase block mb-8">Voices of Healing</span>
           <h2 className="text-3xl md:text-6xl font-serif font-medium text-[#3E2723] leading-tight">Personal Journeys in Sound</h2>
        </div>
        
        <div className={`relative group/video-testimonials-container ${contentWrapper}`}>
          <button 
            onClick={() => handleArrowClick(videoTestimonialsContainerRef, 'left', activeVideoTestimonialIndex, setActiveVideoTestimonialIndex, videoTestimonials.length)}
            className={`absolute left-0 md:left-4 top-[40%] -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-[#FDFBF7]/80 backdrop-blur-sm border border-[#3E2723]/10 flex items-center justify-center text-[#3E2723] shadow-lg opacity-0 group-hover/video-testimonials-container:opacity-100 transition-all hover:bg-[#3E2723] hover:text-[#FDFBF7] ${activeVideoTestimonialIndex === 0 ? 'invisible' : ''}`}
            aria-label="Previous Video Testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={() => handleArrowClick(videoTestimonialsContainerRef, 'right', activeVideoTestimonialIndex, setActiveVideoTestimonialIndex, videoTestimonials.length)}
            className={`absolute right-0 md:right-4 top-[40%] -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-[#FDFBF7]/80 backdrop-blur-sm border border-[#3E2723]/10 flex items-center justify-center text-[#3E2723] shadow-lg opacity-0 group-hover/video-testimonials-container:opacity-100 transition-all hover:bg-[#3E2723] hover:text-[#FDFBF7] ${activeVideoTestimonialIndex === videoTestimonials.length - 1 ? 'invisible' : ''}`}
            aria-label="Next Video Testimonial"
          >
            <ChevronRight size={24} />
          </button>

          <div 
            ref={videoTestimonialsContainerRef}
            onScroll={() => handleScrollTracking(videoTestimonialsContainerRef, setActiveVideoTestimonialIndex, videoTestimonials.length)}
            className="flex overflow-x-auto gap-8 md:gap-12 pb-16 snap-x snap-mandatory no-scrollbar scroll-smooth"
          >
            {videoTestimonials.map((video: any, idx: number) => {
              const videoId = getYoutubeId(video.url);
              return (
                <div key={idx} className="snap-start shrink-0 w-[85vw] sm:w-[60vw] md:w-[45vw] lg:w-[35vw] max-w-[500px]">
                  <div className="flex flex-col h-full bg-white border border-[#A05035]/10 overflow-hidden shadow-2xl transition-all duration-700 hover:shadow-3xl">
                    <div className="relative aspect-video overflow-hidden bg-black">
                      <iframe 
                        className="absolute inset-0 w-full h-full" 
                        src={`https://www.youtube.com/embed/${videoId}?modestbranding=1&rel=0&showinfo=0`} 
                        title={video.title || "Testimonial Video"} 
                        frameBorder="0" 
                        allowFullScreen
                      ></iframe>
                    </div>
                    <div className="p-8 text-center bg-[#F4EFE6]/30">
                       <h3 className="text-xl md:text-2xl font-serif text-[#3E2723] font-medium leading-tight">
                         {video.title || "Sacred Journey"}
                       </h3>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex justify-center items-center gap-3 mt-4">
            {videoTestimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => scrollToItem(videoTestimonialsContainerRef, idx, videoTestimonials.length)}
                className={`transition-all duration-500 rounded-full ${activeVideoTestimonialIndex === idx ? 'w-10 h-1.5 bg-[#A05035]' : 'w-2 h-2 bg-[#3E2723]/20 hover:bg-[#3E2723]/40'}`}
                aria-label={`Go to video testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* YouTube Slider Section with cinematic video library feel */}
      <section className="py-24 md:py-32 lg:py-44 bg-texture overflow-hidden text-[#FDFBF7]">
        <div className={`${contentWrapper} mb-16 md:mb-24`}>
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-10">
            <div className="max-w-2xl text-center md:text-left">
              <span className="text-[#A05035] font-bold tracking-[0.5em] text-xs uppercase block mb-6">Digital Sanctuary</span>
              <h2 className="text-4xl md:text-6xl font-serif font-medium leading-tight">Watch, Listen & <span className="font-serif-italic opacity-80">Sync</span></h2>
              <p className="mt-8 text-lg md:text-xl font-light opacity-90 leading-relaxed">
                Explore our curated library of sacred vibrations and mindfulness sessions.
              </p>
            </div>
            <a 
              href="https://www.youtube.com/@thatmeditationcouple" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-full sm:w-auto flex items-center justify-center gap-4 bg-[#A05035] text-white px-10 py-5 text-[10px] font-bold tracking-[0.4em] uppercase transition-all hover:bg-white hover:text-[#A05035] shadow-2xl mx-auto md:mx-0"
            >
              <Youtube size={18} />
              <span>VISIT CHANNEL</span>
            </a>
          </div>
        </div>

        <div className={`relative group/youtube-container ${contentWrapper}`}>
          <button 
            onClick={() => handleArrowClick(youtubeContainerRef, 'left', activeYoutubeIndex, setActiveYoutubeIndex, youtubeVideos.length)}
            className={`absolute left-0 md:left-4 top-[40%] -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-[#FDFBF7]/80 backdrop-blur-sm border border-[#3E2723]/10 flex items-center justify-center text-[#3E2723] shadow-lg opacity-0 group-hover/youtube-container:opacity-100 transition-all hover:bg-[#3E2723] hover:text-[#FDFBF7] ${activeYoutubeIndex === 0 ? 'invisible' : ''}`}
            aria-label="Previous Video"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={() => handleArrowClick(youtubeContainerRef, 'right', activeYoutubeIndex, setActiveYoutubeIndex, youtubeVideos.length)}
            className={`absolute right-0 md:right-4 top-[40%] -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-[#FDFBF7]/80 backdrop-blur-sm border border-[#3E2723]/10 flex items-center justify-center text-[#3E2723] shadow-lg opacity-0 group-hover/youtube-container:opacity-100 transition-all hover:bg-[#3E2723] hover:text-[#FDFBF7] ${activeYoutubeIndex === youtubeVideos.length - 1 ? 'invisible' : ''}`}
            aria-label="Next Video"
          >
            <ChevronRight size={24} />
          </button>

          <div 
            ref={youtubeContainerRef}
            onScroll={() => handleScrollTracking(youtubeContainerRef, setActiveYoutubeIndex, youtubeVideos.length)}
            className="flex overflow-x-auto gap-8 md:gap-12 lg:gap-16 pb-16 snap-x snap-mandatory no-scrollbar scroll-smooth"
          >
            {youtubeVideos.map((video: any, idx: number) => {
              const videoId = getYoutubeId(video.url);
              return (
                <div key={idx} className="snap-start shrink-0 w-[85vw] sm:w-[60vw] md:w-[50vw] lg:w-[45vw] max-w-[650px]">
                  <div className="flex flex-col h-full bg-[#FDFBF7]/5 backdrop-blur-sm border border-[#FDFBF7]/10 overflow-hidden shadow-2xl transition-all duration-700 hover:bg-[#FDFBF7]/10">
                    <div className="relative aspect-video overflow-hidden">
                      <iframe 
                        className="absolute inset-0 w-full h-full opacity-95 group-hover:opacity-100 transition-opacity" 
                        src={`https://www.youtube.com/embed/${videoId}?modestbranding=1&rel=0&showinfo=0&enablejsapi=1&playsinline=1`} 
                        title={video.title} 
                        frameBorder="0" 
                        allowFullScreen
                      ></iframe>
                    </div>
                    <div className="p-8 md:p-10 space-y-4">
                       <h3 className="text-2xl md:text-3xl font-serif text-[#FDFBF7] font-medium leading-tight">
                         {video.title || "Sacred Resonance"}
                       </h3>
                       {video.desc && (
                         <p className="text-sm md:text-base font-light text-[#FDFBF7]/70 leading-relaxed line-clamp-2">
                           {video.desc}
                         </p>
                       )}
                       <div className="pt-4 flex items-center gap-3 text-[#A05035] font-bold tracking-[0.3em] text-[10px] uppercase">
                         <Play size={14} fill="currentColor" />
                         <span>Play Session</span>
                       </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex justify-center items-center gap-3 mt-8">
            {youtubeVideos.map((_: any, idx: number) => (
              <button
                key={idx}
                onClick={() => scrollToItem(youtubeContainerRef, idx, youtubeVideos.length)}
                className={`transition-all duration-500 rounded-full ${activeYoutubeIndex === idx ? 'w-10 h-1.5 bg-[#A05035]' : 'w-2 h-2 bg-white/20 hover:bg-white/40'}`}
                aria-label={`Go to video ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Real Instagram Reels Section - Enhanced with better placeholders */}
      <section className="py-24 md:py-32 lg:py-44 bg-[#FDFBF7] overflow-hidden">
        <div className={`${contentWrapper} mb-16 md:mb-24`}>
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-10">
            <div className="max-w-2xl text-center md:text-left">
              <span className="text-[#A05035] font-bold tracking-[0.5em] text-[10px] uppercase block mb-6">Moments of Stillness</span>
              <h2 className="text-4xl md:text-6xl font-serif font-medium text-[#3E2723] leading-tight">The Social <span className="font-serif-italic">Sanctuary</span></h2>
              <p className="mt-8 text-lg md:text-xl font-normal text-[#3E2723] opacity-90 leading-relaxed">
                Experience brief rituals and grounding frequencies. Follow our live resonance on Instagram.
              </p>
            </div>
            <a 
              href="https://www.instagram.com/thatmeditationcouple/reels/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-full sm:w-auto flex items-center justify-center gap-4 border border-[#3E2723] text-[#3E2723] px-10 py-5 text-[10px] font-bold tracking-[0.4em] uppercase transition-all hover:bg-[#3E2723] hover:text-[#FDFBF7] shadow-lg group mx-auto md:mx-0"
            >
              <Instagram size={18} className="group-hover:scale-110 transition-transform" />
              <span>FOLLOW OUR REELS</span>
            </a>
          </div>
        </div>

        <div className={`relative group/reels-container ${contentWrapper}`}>
          <button 
            onClick={() => handleArrowClick(reelsContainerRef, 'left', activeReelIndex, setActiveReelIndex, instagramReels.length)}
            className={`absolute left-0 md:left-4 top-[50%] -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-[#FDFBF7]/80 backdrop-blur-sm border border-[#3E2723]/10 flex items-center justify-center text-[#3E2723] shadow-lg opacity-0 group-hover/reels-container:opacity-100 transition-all hover:bg-[#3E2723] hover:text-[#FDFBF7] ${activeReelIndex === 0 ? 'invisible' : ''}`}
            aria-label="Previous Reel"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={() => handleArrowClick(reelsContainerRef, 'right', activeReelIndex, setActiveReelIndex, instagramReels.length)}
            className={`absolute right-0 md:right-4 top-[50%] -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-[#FDFBF7]/80 backdrop-blur-sm border border-[#3E2723]/10 flex items-center justify-center text-[#3E2723] shadow-lg opacity-0 group-hover/reels-container:opacity-100 transition-all hover:bg-[#3E2723] hover:text-[#FDFBF7] ${activeReelIndex === instagramReels.length - 1 ? 'invisible' : ''}`}
            aria-label="Next Reel"
          >
            <ChevronRight size={24} />
          </button>

          <div 
            ref={reelsContainerRef}
            onScroll={() => handleScrollTracking(reelsContainerRef, setActiveReelIndex, instagramReels.length)}
            className="flex overflow-x-auto gap-6 md:gap-8 lg:gap-10 pb-16 snap-x snap-mandatory no-scrollbar scroll-smooth"
          >
            {instagramReels.map((reel: any, idx: number) => {
              const reelId = getInstagramId(reel.url);
              return (
                <div key={idx} className="snap-start shrink-0 w-[80vw] sm:w-[55vw] md:w-[45vw] lg:w-[32vw] xl:w-[25vw] max-w-[400px]">
                  <div className="relative aspect-[9/16] bg-[#3E2723] shadow-2xl group overflow-hidden border border-[#A05035]/5">
                    <iframe
                      src={`https://www.instagram.com/reel/${reelId}/embed/`}
                      className="w-full h-full border-0 relative z-10"
                      scrolling="no"
                      allowTransparency={true}
                      frameBorder="0"
                      title={reel.title || "Sacred Reel"}
                    ></iframe>
                    <div className="absolute inset-0 z-0 bg-[#3E2723] flex flex-col items-center justify-center text-[#FDFBF7]/30 gap-4">
                      <Loader2 size={32} className="animate-spin text-[#A05035]" />
                      <span className="text-[10px] tracking-[0.3em] font-bold uppercase text-center px-6">Connecting to Sanctuary...</span>
                    </div>
                  </div>
                  {reel.title && (
                    <div className="mt-6 text-center">
                       <h4 className="font-serif text-xl text-[#3E2723] font-medium">{reel.title}</h4>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="flex justify-center items-center gap-3 mt-8">
            {instagramReels.map((_: any, idx: number) => (
              <button
                key={idx}
                onClick={() => scrollToItem(reelsContainerRef, idx, instagramReels.length)}
                className={`transition-all duration-500 rounded-full ${activeReelIndex === idx ? 'w-10 h-1.5 bg-[#A05035]' : 'w-2 h-2 bg-[#3E2723]/20 hover:bg-[#3E2723]/40'}`}
                aria-label={`Go to reel ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Journal / Blogs Section */}
      <section className="py-24 md:py-32 lg:py-40 bg-[#F4EFE6]">
        <div className={contentWrapper}>
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 gap-10">
            <div className="text-center md:text-left">
              <span className="text-[#A05035] font-bold tracking-[0.5em] text-xs uppercase block mb-6">Our Journal</span>
              <h2 className="text-4xl md:text-6xl font-serif font-medium text-[#3E2723]">Wisdom & Stillness</h2>
            </div>
            <Link to="/blog" className="px-10 py-5 border border-[#3E2723] text-[#3E2723] text-[11px] font-bold tracking-[0.4em] hover:bg-[#3E2723] hover:text-[#FDFBF7] transition-all duration-300">
              VIEW ALL ARTICLES
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {blogs.slice(0, 2).map((post) => (
              <Link key={post.id} to={`/blog/${post.id}`} className="group block">
                <div className="relative aspect-[16/9] overflow-hidden mb-8 shadow-xl border border-[#A05035]/10">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="bg-[#A05035] text-white px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest shadow-lg">
                      {post.category}
                    </span>
                  </div>
                </div>
                <h3 className="text-2xl md:text-3xl font-serif text-[#3E2723] mb-4 group-hover:text-[#A05035] transition-colors leading-tight">
                  {post.title}
                </h3>
                <p className="text-[#3E2723] opacity-70 text-lg font-light leading-relaxed line-clamp-2 mb-6">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-2 text-[#A05035] font-bold text-[10px] uppercase tracking-[0.3em]">
                  Read Article <ArrowRight size={14} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* High-Impact Freebie CTA Section */}
      <section className="py-24 md:py-32 bg-[#FDFBF7] border-t border-[#A05035]/5">
        <div className={contentWrapper}>
          <div className="flex flex-col lg:flex-row shadow-[0_50px_100px_-20px_rgba(62,39,35,0.15)] rounded-3xl overflow-hidden bg-white border border-[#A05035]/10">
            <div className="lg:w-[45%] bg-texture p-12 md:p-16 lg:p-20 flex flex-col justify-center items-center text-center relative overflow-hidden">
               <div className="absolute inset-0 bg-[#3E2723]/15 pointer-events-none"></div>
               <div className="relative z-10 space-y-10">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-[#FDFBF7]/10 backdrop-blur-md rounded-full flex items-center justify-center mx-auto border border-white/20 shadow-2xl">
                    <Gift size={32} className="text-[#FDFBF7]" />
                  </div>
                  <div className="space-y-6">
                    <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#FDFBF7] leading-tight">A Gift for <br/><span className="font-serif-italic">Your Journey</span></h3>
                    <p className="text-[#FDFBF7] opacity-80 text-lg font-light max-w-xs mx-auto leading-relaxed">
                      Experience the frequency of peace with our exclusive 15-minute Premium Sound Journey.
                    </p>
                  </div>
               </div>
            </div>

            <div className="lg:w-[55%] p-10 md:p-16 lg:p-24 flex flex-col justify-center bg-white">
              {freebieSuccess ? (
                <div className="text-center animate-fade-in space-y-10 py-10">
                  <div className="w-20 h-20 bg-[#A05035]/10 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 size={40} className="text-[#A05035]" />
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-3xl md:text-4xl font-serif text-[#3E2723]">Your Healing is Ready</h4>
                    <p className="text-[#3E2723] opacity-60 text-lg font-light leading-relaxed">
                      The resonance of peace awaits. Access your premium audio journey below and begin your shift.
                    </p>
                  </div>
                  <a 
                    href={downloadLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-4 px-12 py-6 bg-[#3E2723] text-white text-[11px] font-bold tracking-[0.5em] uppercase hover:bg-[#A05035] transition-all shadow-2xl rounded-full"
                  >
                    DOWNLOAD JOURNEY
                  </a>
                </div>
              ) : (
                <form onSubmit={handleFreebieSubmit} className="space-y-8">
                  <div className="space-y-4 text-center lg:text-left">
                    <span className="text-[#A05035] font-bold tracking-[0.4em] text-[10px] uppercase block">Resonance Access</span>
                    <h4 className="text-3xl md:text-4xl font-serif text-[#3E2723]">Unlock Free Sound Healing</h4>
                    <p className="text-[#3E2723] opacity-50 font-light text-base leading-relaxed">
                      Enter your details to receive our "Morning Resonance" audio file directly to your device.
                    </p>
                  </div>
                  <div className="space-y-5">
                    <input 
                      required 
                      disabled={isSubmittingFreebie} 
                      type="text" 
                      placeholder="Full Name" 
                      className="w-full bg-[#F4EFE6]/30 border-b border-[#A05035]/20 p-5 text-sm focus:outline-none focus:border-[#A05035] transition-all text-[#3E2723] placeholder-[#3E2723]/30" 
                      value={freebieData.name} 
                      onChange={(e) => setFreebieData({...freebieData, name: e.target.value})} 
                    />
                    <input 
                      required 
                      disabled={isSubmittingFreebie} 
                      type="email" 
                      placeholder="Email Address" 
                      className="w-full bg-[#F4EFE6]/30 border-b border-[#A05035]/20 p-5 text-sm focus:outline-none focus:border-[#A05035] transition-all text-[#3E2723] placeholder-[#3E2723]/30" 
                      value={freebieData.email} 
                      onChange={(e) => setFreebieData({...freebieData, email: e.target.value})} 
                    />
                    <input 
                      required 
                      disabled={isSubmittingFreebie} 
                      type="tel" 
                      placeholder="Phone Number" 
                      className="w-full bg-[#F4EFE6]/30 border-b border-[#A05035]/20 p-5 text-sm focus:outline-none focus:border-[#A05035] transition-all text-[#3E2723] placeholder-[#3E2723]/30" 
                      value={freebieData.phone} 
                      onChange={(e) => setFreebieData({...freebieData, phone: e.target.value})} 
                    />
                  </div>
                  <button 
                    type="submit" 
                    disabled={isSubmittingFreebie} 
                    className="w-full py-6 bg-[#A05035] text-white text-[11px] font-bold tracking-[0.5em] uppercase hover:bg-[#3E2723] transition-all shadow-2xl flex items-center justify-center gap-4 disabled:bg-[#A05035]/70 active:scale-[0.98] btn-texture rounded-full"
                  >
                    {isSubmittingFreebie ? (
                      <><Loader2 className="animate-spin" size={18} /> CLAIMING...</>
                    ) : 'CLAIM MY GIFT NOW'}
                  </button>
                  <p className="text-[10px] text-[#3E2723]/40 text-center uppercase tracking-widest font-medium">
                    Privacy is sacred. We never share your details.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Home;
